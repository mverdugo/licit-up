import React from "react";
import styles from "./Subscribe.module.scss";
import { Layout } from "../../layouts";
import { Subscribe } from "../../elements";
import THEME from "../../../state/theme";
import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];
  return (
    <Layout
      col="1"
      mode="dark"
      padding
      blur
      style={{
        background: "url(" + state.data.header_bgs.subscribe + ") center/cover",
      }}
    >
      <div className={styles.subscribe}>
        <span className="subtitle" style={{ color: THEME.color }}>
          Newsletter
        </span>
        <h2>Subscribe and stay updated for company news.</h2>
        <Subscribe />
      </div>
    </Layout>
  );
};
