import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="page-container">
        <div className="header-container">
          <div className="logo">
            <a href="./">Agency.</a>
          </div>

          <div className="hamburger">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
