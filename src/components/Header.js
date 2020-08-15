import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import gsap from "gsap";

let tl = gsap.timeline();

function Header({ history, windowSize }) {
  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    history.listen(() => {
      setMenuState(!menuState);
    });
    if (menuState) {
      gsap.to("nav", { display: "block" });
      gsap.to("body", { overflow: "hidden" });
      tl.to(".main", {
        duration: 1,
        y: windowSize.width <= 654 ? "70vh" : windowSize.height / 2,
        ease: "expo.inOut"
      })
        .to(".hamburger-menu span", {
          duration: "0.6",
          delay: -1,
          scaleX: 0,
          transformOrigin: "50% 0%",
          ease: "expo.inOut"
        })
        .to(".bar-one", 0.3, {
          delay: -0.6,
          y: windowSize.width <= 768 ? 3 : 4.5,
          rotate: "45degree",
          ease: "expo.inOut"
        })
        .to(".bar-two", 0.3, {
          delay: -0.6,
          y: windowSize.width <= 768 ? -2 : -4.5,
          x: windowSize.width <= 768 ? -1 : 0,
          rotate: "-45degree",
          ease: "expo.inOut"
        })
        .to(".bar-one", 0.4, {
          scaleX: 1
        })
        .to(".bar-two", 0.4, {
          delay: -0.4,
          scaleX: 1
        });
    } else {
      tl.to(".main", {
        duration: 1,
        y: 0,
        ease: "expo.inOut"
      })
        .to(".hamburger-menu span", {
          duration: "0.6",
          scaleX: 0,
          ease: "expo.inOut",
          delay: -1
        })
        .to(".bar-one", 0.3, {
          delay: -0.6,
          y: 0,
          rotate: 0,
          ease: "expo.inOut"
        })
        .to(".bar-two", 0.3, {
          delay: -0.6,
          y: 0,
          rotate: 0,
          ease: "expo.inOut"
        })
        .to(".bar-one", 0.4, {
          scaleX: 1
        })
        .to(".bar-two", 0.4, {
          delay: -0.4,
          scaleX: 1
        })
        .to("nav", 0, { display: "none" });
      gsap.to("body", { overflow: "visible" });
    }
  });

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
