import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { openMenu, closeMenu } from '../animations/MenuAnimation';

function Header({ history, windowSize }) {
  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    // listen for page changes
    history.listen(() => {
      setMenuState(menuState === false);
    });

    if (menuState === true) {
      openMenu(windowSize.width);
    } else if (menuState === false) {
      closeMenu();
    }
  }, [menuState]);

  return (
    <div className="header">
      <div className="container">
        <div className="header-container">
          <div className="logo">
            <a href="/agency-website/">Agency.</a>
          </div>

          <div
            onClick={() => {
              setMenuState(!menuState);
            }}
            className="hamburger-menu"
          >
            <span className="bar-one"></span>
            <span className="bar-two"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);
