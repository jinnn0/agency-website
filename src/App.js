import React, { useEffect } from "react";
import gsap from "gsap";
import "./styles/App.scss";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Cases from "./components/Cases";
import IntroOverlay from "./components/IntroOverlay";
import Nav from "./components/Nav";

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // to prevent html markup flashing before the full DOM load
    // once all DOM elements have been loaded set body to visible
    gsap.to("body", 0, { css: { visibility: "visible" } });

    const tl = gsap.timeline();

    tl.from(".line span", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    })
      .to(".overlay-top", 1.6, {
        height: 0,
        ease: "expo.inOut",
        stagger: 0.4,
      })
      .to(".overlay-bottom", 1.6, {
        width: 0,
        ease: "expo.inOut",
        delay: -0.8,
        stagger: {
          amount: 0.4,
        },
      })
      // to compelety remove overlay
      .to(".intro-overlay", 0, { display: "none" })
      .from(".case-img img", 1.6, {
        scale: 1.3,
        ease: "expo.inOut",
        delay: -2,
        stagger: {
          amount: 0.4,
        },
      });
  });

  return (
    <div className="App">
      <IntroOverlay />
      <Nav />
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
