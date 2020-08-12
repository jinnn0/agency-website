import React, { useState, useEffect } from "react";
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";
import gsap from "gsap";

let tl = gsap.timeline();

function Header({ windowSize }) {
  const [menuState, setMenuState] = useState({ menuOpend: false });

  useEffect(() => {
    if (menuState.menuOpend) {
      gsap.to("nav", { css: { display: "block" } });
      tl.to(".main", {
        duration: 1,
        y: windowSize.width <= 654 ? "70vh" : windowSize.height / 2,
        ease: "expo.inOut"
      });
    } else {
    }
  });

  return (
    <div className="header">
      <div className="container">
        <div className="header-container">
          <div className="logo">
            <a href="./">Agency.</a>
          </div>

          <div className="nav-toggle">
            <div
              onClick={() => {
                setMenuState({ menuOpend: true });
              }}
              className="hamburger-menu"
            >
              <span></span>
              <span></span>
            </div>

            <div
              onClick={() => {
                setMenuState({ menuOpend: false });
              }}
              className="hamburger-menu-close"
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
