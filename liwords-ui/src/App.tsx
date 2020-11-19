import React, { useCallback, useEffect, useRef } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useMountedState } from './utils/mounted';
import './App.scss';
import axios from 'axios';
import 'antd/dist/antd.css';

import { Table as GameTable } from './gameroom/table';
import TileImages from './gameroom/tile_images';
import { Lobby } from './lobby/lobby';
import {
  useExcludedPlayersStoreContext,
  useResetStoreContext,
} from './store/store';

import { LiwordsSocket } from './socket/socket';
import { About } from './about/about';
import { Register } from './lobby/register';
import { UserProfile } from './profile/profile';
import { PasswordChange } from './lobby/password_change';
import { PasswordReset } from './lobby/password_reset';
import { NewPassword } from './lobby/new_password';
import { toAPIUrl } from './api/api';

type Blocks = {
  user_ids: Array<string>;
};

const useDarkMode = localStorage?.getItem('darkMode') === 'true';

document?.body?.classList?.add(`mode--${useDarkMode ? 'dark' : 'default'}`);

const App = React.memo(() => {
  const { useState } = useMountedState();

  const { setExcludedPlayers } = useExcludedPlayersStoreContext();
  const { resetStore } = useResetStoreContext();
  const [shouldDisconnect, setShouldDisconnect] = useState(false);

  const [liwordsSocketValues, setLiwordsSocketValues] = useState({
    sendMessage: (msg: Uint8Array) => {},
    justDisconnected: false,
  });
  const { sendMessage } = liwordsSocketValues;

  const location = useLocation();
  const knownLocation = useRef(location.pathname); // Remember the location on first render.
  useEffect(() => {
    if (knownLocation.current !== location.pathname) {
      resetStore();
    }
  }, [location.pathname, resetStore]);

  const disconnectSocket = useCallback(() => {
    setShouldDisconnect(true);
    setTimeout(() => {
      // reconnect after 5 seconds.
      setShouldDisconnect(false);
    }, 5000);
  }, []);

  useEffect(() => {
    axios
      .post<Blocks>(
        toAPIUrl('user_service.SocializeService', 'GetFullBlocks'),
        {},
        { withCredentials: true }
      )
      .then((resp) => {
        setExcludedPlayers(new Set<string>(resp.data.user_ids));
      })
      .catch((e) => {
        console.log(e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <LiwordsSocket
        disconnect={shouldDisconnect}
        setValues={setLiwordsSocketValues}
      />
      <Switch>
        <Route path="/" exact>
          <Lobby sendSocketMsg={sendMessage} DISCONNECT={disconnectSocket} />
        </Route>
        <Route path="/tournament/:tournamentID">
          <Lobby sendSocketMsg={sendMessage} DISCONNECT={disconnectSocket} />
        </Route>
        <Route path="/game/:gameID">
          {/* Table meaning a game table */}
          <GameTable sendSocketMsg={sendMessage} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/password/change">
          <PasswordChange />
        </Route>
        <Route path="/password/reset">
          <PasswordReset />
        </Route>

        <Route path="/password/new">
          <NewPassword />
        </Route>

        <Route path="/profile/:username">
          <UserProfile />
        </Route>
        <Route path="/tile_images">
          <TileImages />
        </Route>
      </Switch>
    </div>
  );
});

export default App;
