import React, { useState } from "react";
import styles from "./Services2.module.scss";
import useHover from "../../../utilities/useHover";
import Layout from "../../layouts/Layout/Layout";
import { Link } from "../../elements";
import THEME from "../../../state/theme";

export default ({ data = [], items = "3" }) => {
  const [amount, setAmount] = useState(items);

  const servicesList = data
    .map((item, index) => (
      <article key={index}>
        <div className={styles.card}>
          <figure>
            <img src={item.icon} alt="icon" />
            <span style={{ background: THEME.color }} />
          </figure>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <Link
            style={{ color: THEME.color }}
            hoverStyle={{ color: "#000" }}
            url={"/services/" + item.id}
          >
            Learn more
          </Link>
        </div>
      </article>
    ))
    .slice(0, amount);

  const moreButton =
    amount < data.length ? (
      <div className={["layout-footer", styles.footer].join(" ")}>
        <Button click={() => setAmount(data.length)}>View all services</Button>
      </div>
    ) : null;

  return (
    <Layout
      col="3"
      padding
      style={{
        background: "rgb(240,240,240)",
      }}
    >
      <div className="layout-header">
        <span className="subtitle" style={{ color: THEME.color }}>
          Our services
        </span>
        <h2>We offer you professional bunch of services.</h2>
        <p className="parargraph">
          Energistically predominate high-payoff alignments whereas maintainable
          materials timely deliverables. Synergistically leverage other's
          holistic mindshare via high-payoff expertise.
        </p>
      </div>
      {servicesList}
      {moreButton}
    </Layout>
  );
};

const Button = ({ click, children }) => {
  const [hoverRef, isHovered] = useHover();

  return (
    <button
      ref={hoverRef}
      onClick={click}
      style={{ color: isHovered ? THEME.color : "#000" }}
    >
      {children}
      <i className="las la-long-arrow-alt-right" />
    </button>
  );
};
