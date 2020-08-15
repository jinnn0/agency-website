import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-container">
          <div className="nav-col menu">
            <h3 className="nav-label">Menu</h3>
            <ul className="nav-links">
              <li>
                <Link to="/agency-website/case-studies">Case Studies</Link>
              </li>
              <li>
                <Link to="/agency-website/approach">Approach</Link>
              </li>
              <li>
                <Link to="/agency-website/services">Services</Link>
              </li>
              <li>
                <Link to="/agency-website/about-us">About Us</Link>
              </li>
            </ul>
          </div>

          <div className="nav-col contact">
            <h3 className="nav-label">Contact</h3>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <Link to="/contact">Get in touch with us</Link>
                </li>
                <li>
                  <Link to="/audit">Get a free audit</Link>
                </li>
              </ul>

              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li> +41 (0) 79 510 28 70 </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Headquarter</li>
                <li>Route du Jura 49</li>
                <li>1700 Fribourg</li>
                <li>Switzerland</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li>Privacy</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
