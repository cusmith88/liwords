import React from 'react';
import './topbar.scss';
import { Link } from 'react-router-dom';

const LeftFrame = () => {
  return (
    <div className="top-header-left-frame">
      <Link to="/">
        <div className="top-header-site-icon">
          <div className="top-header-site-icon-rect">
            <div className="top-header-site-icon-m">M</div>
          </div>
          <Link to="/" className="site-link">
            <div className="top-header-left-frame-site-name">Macondo</div>
          </Link>
        </div>
      </Link>
      <div className="top-header-menu">
        <div className="top-header-left-frame-crossword-game">Crossword Game</div>
        <div className="top-header-left-frame-aerolith">Aerolith</div>
        <div className="top-header-left-frame-blog">Blog</div>
        <div className="top-header-left-frame-special-land">
          César's Special Land
        </div>
      </div>
    </div>
  );
};

type Props = {
  username: string;
};

export const TopBar = (props: Props) => {
  return (
    <nav className="top-header">
      <LeftFrame />
      <div className="user-info">
        {props.username}
      </div>
    </nav>
  );
};
