import React from "react";
import styles from "./Subscribe2.module.scss";
import { Layout } from "../../layouts";
import { InputDiscount } from "../../ui";
import THEME from "../../../state/theme";

export default () => {
  return (
    <Layout col="1" padding style={{ background: "rgb(240,240,240)" }}>
      <div className={["layout-header", styles.header].join(" ")}>
        <span className="subtitle" style={{ color: THEME.color }}>
          Subscribe form
        </span>
        <h2>Subscribe and get discount</h2>
      </div>

      <InputDiscount />
    </Layout>
  );
};
