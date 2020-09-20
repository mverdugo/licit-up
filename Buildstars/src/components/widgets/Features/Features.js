import React from "react";
import styles from "./Features.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { CardButton } from "../../ui";
import THEME from "../../../state/theme";

export default ({ data = [] }) => {
  const featuresList = data
    .map((item, index) => (
      <article key={index}>
        <CardButton
          to={"/blog/" + item.id}
          btn_after="&#xf105;"
          btn_text="Read more"
          btn_round
          animation="slide-right"
          padding
        >
          <div className={styles.features}>
            <img src={item.icon} alt="features_icon" />
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        </CardButton>
      </article>
    ))
    .slice(0, 3);
  return (
    <Layout
      style={{
        background: "rgb(240,240,240)",
      }}
      col="3"
      padding
    >
      <div className="layout-header">
        <span className="subtitle" style={{ color: THEME.color }}>
          Key features
        </span>
        <h2>Check our strong sides and see how we work.</h2>
        <p>
          Energistically predominate high-payoff alignments whereas maintainable
          materials timely deliverables. Synergistically leverage other's
          holistic mindshare via high-payoff expertise.
        </p>
      </div>
      {featuresList}
      <div className={["layout-footer", styles.footer].join(" ")}>
        <span>
          <b style={{ color: THEME.color }}>Let's start do business.</b>
        </span>
        <span>Make arrangement and get discount.</span>
      </div>
    </Layout>
  );
};
