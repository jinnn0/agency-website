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
  { path: "/agency-website/", name: "Home", Component: Home },
  { path: "/agency-website/about-us", name: "About Us", Component: About },
  { path: "/agency-website/services", name: "Services", Component: Services },
  { path: "/agency-website/approach", name: "Approach", Component: Approach },
  {
    path: "/agency-website/case-studies",
    name: "Case Studies",
    Component: CaseStudies
  }
];

function App() {
  let [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    // to prevent html markup flashing before the full DOM load
    gsap.to("body", 0, { visibility: "visible" });

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    let vh = windowSize.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <Router>
      <Header windowSize={windowSize} />
      <Nav />
      {/* <div className="main">
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path} component={Component} />
          ))}
        </Switch>
      </div> */}
    </Router>
  );
}

export default App;
