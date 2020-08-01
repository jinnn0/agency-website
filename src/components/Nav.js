import React from "react";

function Nav() {
  return (
    <nav className="nav">
      <div className="page-container">
        <div className="nav-container">
          <div className="nav-col menu">
            <h3 className="nav-label">Menu</h3>
            <ul className="nav-links">
              <li>
                <a href="">Case Studies</a>
              </li>
              <li>
                <a href="">Approach</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
            </ul>
          </div>

          <div className="nav-col contact">
            <h3 className="nav-label">Contact</h3>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <a href="">Get in touch with us</a>
                </li>
                <li>
                  <a href="Get a free audit"></a>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>
                  <a href="">+41 (0) 79 510 28 70</a>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Headquarter</li>
                <li>Route du Jura 49</li>
                <li>1700 Fribourg</li>
                <li>Switzerland</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li>
                  <a href="">Privacy</a>
                </li>
                <li>
                  <a href="">Cookies</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
