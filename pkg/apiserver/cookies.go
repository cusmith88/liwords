package apiserver

import (
	"context"
	"errors"
	"net/http"
	"time"

	twirp "github.com/twitchtv/twirp"

	"github.com/domino14/liwords/pkg/entity"
	"github.com/domino14/liwords/pkg/sessions"
	"github.com/rs/zerolog"
)

// ExposeResponseWriterMiddleware configures an http.Handler (like any Twirp server)
// to place the responseWriter in its context. This should enable
// setting cookies with the setCookie function.
func ExposeResponseWriterMiddleware(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		ctx := r.Context()
		ctx = context.WithValue(ctx, rwkey, w)
		r = r.WithContext(ctx)
		h.ServeHTTP(w, r)
	})
}

// setCookie sets an http Cookie for a response being handled in the given
// context. It returns an error if and only if the context has not been
// configured through the ExposeResponseWriterMiddleware function.
func setCookie(ctx context.Context, cookie *http.Cookie) error {
	w, ok := ctx.Value(rwkey).(http.ResponseWriter)
	if !ok {
		return errors.New("unable to get ResponseWriter from context, middleware might not be set up correctly")
	}
	http.SetCookie(w, cookie)
	return nil
}

func SetDefaultCookie(ctx context.Context, sessID, rootDomain string) error {
	cookie := &http.Cookie{
		Name:  "session",
		Value: sessID,
		// Tell the browser the cookie expires after a year, but the actual
		// session ID in the database will expire sooner than that.
		// We will write middleware to extend the expiration length but maybe
		// it's ok to require the user to log in once a year.
		Expires:  time.Now().Add(365 * 24 * time.Hour),
		HttpOnly: true,
		Path:     "/",
		Domain:   "." + rootDomain,
	}

	return setCookie(ctx, cookie)
}

func ExpireCookie(ctx context.Context, sessID, rootDomain string) error {
	return setCookie(ctx, &http.Cookie{
		Name:     "session",
		Value:    sessID,
		MaxAge:   -1,
		HttpOnly: true,
		Path:     "/",
		Expires:  time.Now().Add(-100 * time.Hour),
		Domain:   "." + rootDomain,
	})
}

type ctxkey string

const rwkey ctxkey = "responsewriter"
const sesskey ctxkey = "session"

const RenewCookieTimer = time.Hour * 24 * 14

// AuthenticationMiddlewareGenerator generates auth middleware that looks up
// a session ID, and attaches a Session to the request context (at `sesskey`)
func AuthenticationMiddlewareGenerator(sessionStore sessions.SessionStore, domain string) (mw func(http.Handler) http.Handler) {
	mw = func(h http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			ctx := r.Context()
			log := zerolog.Ctx(ctx)
			var session *entity.Session
			var err error
			sessionCookie, err := r.Cookie("session")
			if err != nil {
				if err != http.ErrNoCookie {
					log.Err(err).Msg("error-getting-new-cookie")
				}
				// No problem, this user will not be authenticated.
				log.Debug().Msg("unauthenticated request")
				h.ServeHTTP(w, r)
				return
			}
			session, err = sessionStore.Get(ctx, sessionCookie.Value)
			if err != nil {
				log.Err(err).Msg("error-getting-session")
				// Just serve, unauthenticated.
				h.ServeHTTP(w, r)
				return
			}

			if time.Until(session.Expiry) < RenewCookieTimer {
				err := sessionStore.ExtendExpiry(ctx, session)
				log.Err(err).Msg("extending-session")
				// extend the cookie age as well.
				SetDefaultCookie(ctx, sessionCookie.Value, domain)
			}
			// For now, let's set the cookie again. This will make the
			// cookie inter-domain if it hasn't been made so already.
			// Do this for a few weeks until we have a nice number of
			// inter-domain cookies, before we force everyone onto the
			// naked domain.
			SetDefaultCookie(ctx, sessionCookie.Value, domain)
			ctx = PlaceInContext(ctx, session)
			r = r.WithContext(ctx)
			// printContextInternals(r.Context(), true)
			h.ServeHTTP(w, r)
		})
	}
	return
}

func PlaceInContext(ctx context.Context, session *entity.Session) context.Context {
	ctx = context.WithValue(ctx, sesskey, session)
	return ctx
}

func GetSession(ctx context.Context) (*entity.Session, error) {
	sessval := ctx.Value(sesskey)
	if sessval == nil {
		return nil, twirp.NewError(twirp.Unauthenticated, "authentication required")
	}
	sess, ok := sessval.(*entity.Session)
	if !ok {
		return nil, twirp.InternalErrorWith(errors.New("unexpected error with session type inference"))
	}
	return sess, nil
}
