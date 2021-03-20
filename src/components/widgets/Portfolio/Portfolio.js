import React from "react";
import { Link } from "react-router-dom";
import styles from "./Portfolio.module.scss";
import { Button } from "../../elements";
import { Layout } from "../../layouts";
import THEME from "../../../state/theme";

export default ({ data = [] }) => {
  const portfolioList = data
    .map((item, index) => (
      <div key={index} className={styles.wrapper}>
        <div
          className={styles.image}
          style={{
            background: "url(" + item.img + ") center/cover",
            borderColor: THEME.color,
          }}
        >
          <div className={styles.button}>
            <Button
              to={"/portfolio/" + item.id}
              round
              type="outline-white-tw"
              hoverType="solid-color-tb"
            >
              Read more
            </Button>
          </div>
        </div>
        <div className={styles.info}>
          <span style={{ color: THEME.color }}>{item.lead}</span>

          <h3>
            <Link to={"/portfolio/" + item.id}>{item.title}</Link>
          </h3>

          <p>{item.text}</p>
          <Link to={"/portfolio/" + item.id}>
            More Information
            <i style={{ background: THEME.color }} className="las la-plus"></i>
          </Link>
        </div>
      </div>
    ))
    .slice(0, 3);
  return (
    <Layout col="1" padding>
      <div className={["layout-header", styles.header].join(" ")}>
        <span className="subtitle" style={{ color: THEME.color }}>
          Featured works
        </span>
        <h2>See best works from our projects portfolio collection.</h2>
        <p>
          Energistically predominate high-payoff alignments whereas maintainable
          materials timely deliverables. Synergistically leverage other's
          holistic mindshare via high-payoff expertise.
        </p>
      </div>
      <div
        className={styles.portfolio}
        style={{
          borderColor: THEME.color,
        }}
      >
        {portfolioList}
      </div>
    </Layout>
  );
};
