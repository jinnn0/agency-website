import React from "react";
import { ReactComponent as CaseNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasePrev } from "../assets/arrow-left.svg";

const cases = [
  {
    id: 1,
    subtitle: "Curology",
    title: "A custom formula for your skin's unique needs",
    img: "curology"
  },
  {
    id: 2,
    subtitle: "Yourspace",
    title: "Open space floor plans for your next venture",
    img: "yourspace"
  },
  {
    id: 3,
    subtitle: "Airpod",
    title: "Wireless. Efforless. Magical",
    img: "airpod"
  }
];

function Cases() {
  return (
    <section className="cases">
      <ul className="case-items">
        {cases.map((caseItem) => (
          <div className="case-item" key={caseItem.id}>
            <div className="case-img">
              <img
                src={require(`../assets/${caseItem.img}.png`)}
                alt={caseItem.title}
              />
            </div>

            <div className="case-details">
              <p>{caseItem.subtitle}</p>
              <h2>{caseItem.title}</h2>
            </div>
          </div>
        ))}
      </ul>

      <div className="case-nav">
        <div className="case-arrow prev disabled">
          <CasePrev />
        </div>
        <div className="case-arrow next">
          <CaseNext />
        </div>
      </div>
    </section>
  );
}

export default Cases;
