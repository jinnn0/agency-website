import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { openMenu, closeMenu } from "../animations/MenuAnimation";

function Header({ history, windowSize }) {
  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    // listen for page changes
    history.listen(() => {
      setMenuState(menuState === false);
    });
    if (menuState === true) {
      console.log("is it true", menuState);
      openMenu(windowSize.width);
    } else if (menuState === false) {
      console.log("is it false", !menuState);
      closeMenu();
    }
  }, [menuState]);

  return (
    <div className="header">
      <div className="container">
        <div className="header-container">
          <div className="logo">
            <Link to="/agency-website">Agency.</Link>
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
