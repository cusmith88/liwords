import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Modal, Divider } from 'antd';
import { Redirect } from 'react-router-dom';

import { TopBar } from '../topbar/topbar';
import {
  SeekRequest,
  GameRequest,
  MessageType,
  GameAcceptedEvent,
  GameRules,
  RatingMode,
  MatchRequest,
} from '../gen/api/proto/realtime/realtime_pb';
import { encodeToSocketFmt } from '../utils/protobuf';
import { SoughtGames } from './sought_games';
import { SoughtGame } from '../store/reducers/lobby_reducer';
import { useStoreContext } from '../store/store';
import {
  ChallengeRuleMap,
  ChallengeRule,
} from '../gen/macondo/api/proto/macondo/macondo_pb';
import { SeekForm, seekPropVals } from './seek_form';
import { ActiveGames } from './active_games';

const sendSeek = (
  game: SoughtGame,
  sendSocketMsg: (msg: Uint8Array) => void
) => {
  const sr = new SeekRequest();
  const mr = new MatchRequest();
  const gr = new GameRequest();
  const rules = new GameRules();
  rules.setBoardLayoutName('CrosswordGame');
  rules.setLetterDistributionName('english');

  gr.setChallengeRule(
    game.challengeRule as ChallengeRuleMap[keyof ChallengeRuleMap]
  );
  gr.setLexicon(game.lexicon);
  gr.setInitialTimeSeconds(game.initialTimeSecs);
  gr.setMaxOvertimeMinutes(game.maxOvertimeMinutes);
  gr.setIncrementSeconds(game.incrementSecs);
  gr.setRules(rules);
  gr.setRatingMode(game.rated ? RatingMode.RATED : RatingMode.CASUAL);
  if (game.receiver === '') {
    sr.setGameRequest(gr);
    sendSocketMsg(
      encodeToSocketFmt(MessageType.SEEK_REQUEST, sr.serializeBinary())
    );
  } else {
    mr.setGameRequest(gr);
    mr.setReceivingUser(game.receiver);
    sendSocketMsg(
      encodeToSocketFmt(MessageType.MATCH_REQUEST, mr.serializeBinary())
    );
  }
};

const sendAccept = (
  seekID: string,
  sendSocketMsg: (msg: Uint8Array) => void
) => {
  // Eventually use the ID.
  const sa = new GameAcceptedEvent();
  sa.setRequestId(seekID);
  sendSocketMsg(
    encodeToSocketFmt(MessageType.GAME_ACCEPTED_EVENT, sa.serializeBinary())
  );
};

type Props = {
  username: string;
  userID: string;
  loggedIn: boolean;
  sendSocketMsg: (msg: Uint8Array) => void;
};

export const Lobby = (props: Props) => {
  const { redirGame } = useStoreContext();
  const [seekModalVisible, setSeekModalVisible] = useState(false);
  const [matchModalVisible, setMatchModalVisible] = useState(false);
  const [seekSettings, setSeekSettings] = useState<seekPropVals>({
    lexicon: 'CSW19',
    challengerule: ChallengeRule.FIVE_POINT,
    initialtime: 8,
    rated: false,
    maxovertime: 1,
    friend: '',
    incrementsecs: 0,
  });

  useEffect(() => {
    setSeekSettings((s) => ({
      ...s,
      rated: props.loggedIn,
    }));
  }, [props.loggedIn]);

  const showSeekModal = () => {
    setSeekModalVisible(true);
  };

  const showMatchModal = () => {
    setMatchModalVisible(true);
  };

  const handleSeekModalOk = () => {
    setSeekModalVisible(false);
    sendSeek(
      {
        // These items are assigned by the server:
        seeker: '',
        userRating: '',
        seekID: '',

        lexicon: seekSettings.lexicon as string,
        challengeRule: seekSettings.challengerule as number,
        initialTimeSecs: Math.round((seekSettings.initialtime as number) * 60),
        incrementSecs: Math.round(seekSettings.incrementsecs as number),
        rated: seekSettings.rated as boolean,
        maxOvertimeMinutes: Math.round(seekSettings.maxovertime as number),
        receiver: '',
      },
      props.sendSocketMsg
    );
  };

  const handleSeekModalCancel = () => {
    setSeekModalVisible(false);
  };

  const handleMatchModalOk = () => {
    setMatchModalVisible(false);
    sendSeek(
      {
        // These items are assigned by the server:
        seeker: '',
        userRating: '',
        seekID: '',

        lexicon: seekSettings.lexicon as string,
        challengeRule: seekSettings.challengerule as number,
        initialTimeSecs: Math.round((seekSettings.initialtime as number) * 60),
        incrementSecs: Math.round(seekSettings.incrementsecs as number),
        rated: seekSettings.rated as boolean,
        maxOvertimeMinutes: Math.round(seekSettings.maxovertime as number),
        receiver: seekSettings.friend as string,
      },
      props.sendSocketMsg
    );
  };

  const handleMatchModalCancel = () => {
    setMatchModalVisible(false);
  };

  if (redirGame !== '') {
    return <Redirect push to={`/game/${redirGame}`} />;
  }

  return (
    <div className="lobby">
      <Row>
        <Col span={24}>
          <TopBar username={props.username} loggedIn={props.loggedIn} />
        </Col>
      </Row>
      <Row style={{ marginTop: 24 }}>
        <Col span={24}>
          <h3>Woogles is coming soon!</h3>
          <p>
            Please back our{' '}
            <a href="https://www.kickstarter.com/projects/woogles/woogles">
              {' '}
              Kickstarter.
            </a>{' '}
            We're a nonprofit and are counting on you.
          </p>
        </Col>
      </Row>
      <Row style={{ marginTop: 24 }}>
        <Col span={12} offset={6}>
          <SoughtGames
            userID={props.userID}
            username={props.username}
            newGame={(seekID: string) =>
              sendAccept(seekID, props.sendSocketMsg)
            }
          />
        </Col>
      </Row>

      <Row style={{ marginTop: 24 }}>
        <Col offset={8} span={4}>
          <Button type="primary" onClick={showSeekModal}>
            New Game
          </Button>
          <Modal
            title="Seek New Game"
            visible={seekModalVisible}
            onOk={handleSeekModalOk}
            onCancel={handleSeekModalCancel}
          >
            <SeekForm
              vals={seekSettings}
              onChange={setSeekSettings}
              loggedIn={props.loggedIn}
              showFriendInput={false}
            />
          </Modal>
        </Col>

        <Col span={4}>
          <Button type="primary" onClick={showMatchModal}>
            Match a Friend
          </Button>
          <Modal
            title="Match a Friend"
            visible={matchModalVisible}
            onOk={handleMatchModalOk}
            onCancel={handleMatchModalCancel}
          >
            <SeekForm
              vals={seekSettings}
              onChange={setSeekSettings}
              loggedIn={props.loggedIn}
              showFriendInput={true}
            />
          </Modal>
        </Col>
      </Row>

      <Divider />
      <Row style={{ marginTop: 10 }}>
        <Col span={12} offset={6}>
          <ActiveGames />
        </Col>
      </Row>
    </div>
  );
};
