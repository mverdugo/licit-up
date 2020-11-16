import React from "react";
import styles from "./Facts2.module.scss";
import { Layout } from "../../layouts";
import { Button } from "../../elements";
import useHover from "../../../utilities/useHover";
import THEME from "../../../state/theme";
import { useCustomState } from "../../../state/state";

export default ({ data = [] }) => {
  const actions = useCustomState()[1];

  const cardList = data.map((item, index) => (
    <Card
      key={index}
      icon={item.icon}
      title={item.title}
      lead={item.lead}
      text={item.text}
    />
  ));
  return (
    <Layout
      col="3"
      style={{ background: "rgb(245,245,245)", marginBottom: "7rem" }}
    >
      <div className={["layout-header", styles.header].join(" ")}>
        <span className="subtitle" style={{ color: THEME.color }}>
          Statistic
        </span>
        <h2>Our company results in numbers</h2>
        <p>
          Energistically predominate high-payoff alignments whereas maintainable
          materials timely deliverables. Synergistically leverage other's
          holistic mindshare via high-payoff expertise.
        </p>
      </div>
      {cardList}

      <div
        style={{ background: THEME.color }}
        className={["layout-footer", styles.footer].join(" ")}
      >
        <h2>
          Make arrangement today <b>and get discount 20%</b>
        </h2>
        <Button
          click={() => actions.toogleModal()}
          round
          after="&#xf105;"
          type="solid-white-tb"
          hoverType="outline-white-tw"
        >
          Get quote
        </Button>
      </div>
    </Layout>
  );
};

const Card = ({ icon, title, lead, text }) => {
  const [hoverRef, isHovered] = useHover();

  return (
    <article className={styles.wrapper}>
      <div ref={hoverRef} className={styles.card}>
        <figure>
          <img src={icon} alt="icon" />
        </figure>
        <h2 style={{ color: isHovered && THEME.color }}>{title}</h2>
        <span style={{ color: THEME.color }}>{lead}</span>
        <p>{text}</p>
      </div>
    </article>
  );
};
