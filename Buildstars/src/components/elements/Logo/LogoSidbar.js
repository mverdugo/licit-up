import React from "react";
import styles from "./Logo.module.scss";
import THEME from "../../../state/theme";
import logo from "../../../image/licitupfondoblanco.png";

export default ({ dark }) => (
  <figure
    className={[styles.logo, dark ? styles.dark : styles.light].join(" ")}
    style={{ borderColor: THEME.color }}
  >
      <img src={logo} alt={"Licit - Up"} style={{width:128,  height:54}}></img>

  </figure>
);
