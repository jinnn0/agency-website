import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

function Banner() {

  return (
    <section className="main">
      <div className="page-container">
        <div className="main-container">
          <h2>
            <p className="line">
              <span>Creating unique brands is</span>
            </p>
            <p className="line">
              <span>what we do.</span>
            </p>
          </h2>

          <a href="./">
            More about us <RightArrow />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
