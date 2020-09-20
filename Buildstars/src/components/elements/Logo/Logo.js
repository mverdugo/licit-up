import React from "react";
import styles from "./Logo.module.scss";
import THEME from "../../../state/theme";

export default ({ dark }) => (
  <figure
    className={[styles.logo, dark ? styles.dark : styles.light].join(" ")}
    style={{ borderColor: THEME.color }}
  >
    <i className="las la-industry" />
    <span>
      Build<b>Stars.</b>
    </span>
  </figure>
);
