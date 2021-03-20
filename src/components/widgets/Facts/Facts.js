import React, { Fragment } from "react";
import styles from "./Facts.module.scss";
import Layout from "../../layouts/Layout/Layout";
import THEME from "../../../state/theme";
import useCurrentWidth from "../../../utilities/useCurrentWidth";
import { useCustomState } from "../../../state/state";

export default ({ data = [] }) => {
  const state = useCustomState()[0];

  const dummy = <div className={styles.dummy} />;

  const factsList = data.map((item, index) => (
    <Fragment key={index}>
      <div>
        <div className={styles.card}>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
          <i
            style={{ color: THEME.color }}
            className="las la-long-arrow-alt-right"
          />
        </div>
      </div>
      {index % 2 !== 0 ? dummy : null}
    </Fragment>
  ));

  return (
    <Layout
      style={{
        background:
          useCurrentWidth() > 768
            ? "url(" +
              state.data.header_bgs.facts +
              ") top/cover, rgb(240,240,240)"
            : "rgb(240,240,240)",
      }}
      padding
      col="3"
    >
      <div className={["layout-header", styles.header].join(" ")}>
        <span className="subtitle" style={{ color: THEME.color }}>
          Company facts
        </span>
        <h2>Building bright future for new generations.</h2>
      </div>
      {factsList}
    </Layout>
  );
};
