import React, { useState } from "react";
import styles from "./ListBlock.module.scss";
import { Layout } from "../../layouts";
import THEME from "../../../state/theme";
import useCurrentWidth from "../../../utilities/useCurrentWidth";
import { useCustomState } from "../../../state/state";

export default ({ data = [] }) => {
  const state = useCustomState()[0];

  const list = data.list.map((item, index) => (
    <li key={index}>
      <div className={styles.icon}>
        <img src={item.icon} alt="icon" />
      </div>
      <p>{item.text}</p>
    </li>
  ));
  return (
    <Layout
      col="2"
      padding
      style={{
        background:
          useCurrentWidth() > 576 &&
          "url(" + state.data.header_bgs.list + ") top/cover",
      }}
    >
      <div className={styles.content}>
        <span className="subtitle" style={{ color: THEME.color }}>
          Why choose us
        </span>
        <h2>Because quality standarts is part of our work</h2>
        <ul className={styles.list}>{list}</ul>
        <ul className={styles.row}>
          <RowItem title="47+" text="per week" />
          <RowItem title="1.8k" text="feedback" />
          <RowItem title="14%" text="grows" />
        </ul>
      </div>
    </Layout>
  );
};

const RowItem = ({ title = "", text = "" }) => {
  const [hover, setHover] = useState(false);

  return (
    <li
      style={{ borderColor: THEME.color, background: hover && THEME.color }}
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
    >
      <span>{title}</span>
      <p>{text}</p>
    </li>
  );
};
