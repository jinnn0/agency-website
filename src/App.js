import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import gsap from "gsap";
import "./styles/App.scss";

// componenets
import Header from "./components/Header";

// pages
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import Approach from "./pages/Approach";
import Services from "./pages/Services";
import About from "./pages/About";
import Nav from "./components/Nav";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about-us", name: "About Us", Component: About },
  { path: "/services", name: "Services", Component: Services },
  { path: "/approach", name: "Approach", Component: Approach },
  { path: "/case-studies", name: "Case Studies", Component: CaseStudies }
];

function App() {
  // to prevent html markup flashing before the full DOM load
  gsap.to("body", 0, { css: { visibility: "visible" } });

  let [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    let vh = windowSize.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <Router>
      <Header windowSize={windowSize} />
      <Nav />
      <div className="main">
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path} component={Component} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
