import React from "react";
import Layout from "../../layouts/Layout/Layout";
import styles from "./Numbers.module.scss";
import THEME from "../../../state/theme";

export default ({ stats }) => {
  const statList = stats
    .map((item, index) => (
      <div key={index}>
        <i className={item.icon} />
        <h1 style={{ color: THEME.color }}>{item.title}</h1>
        <span>{item.text}</span>
      </div>
    ))
    .slice(0, 4);

  return (
    <Layout col="1">
      <div className={styles.stats}>{statList}</div>
    </Layout>
  );
};
