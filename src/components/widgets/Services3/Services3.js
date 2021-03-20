import React, { useState, useEffect, useRef } from "react";
import styles from "./Services3.module.scss";
import Layout from "../../layouts/Layout/Layout";
import THEME from "../../../state/theme";

import { Button } from "../../elements";

export default ({ data = [] }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
    window.addEventListener("resize", resizeListener);
    return window.removeEventListener("resize", resizeListener);
  }, []);

  const resizeListener = () => {
    setHeight(ref.current.clientHeight);
  };

  let listStatistic = data
    .map((item, index) => (
      <div
        key={index}
        className={styles.wrapper}
        style={{
          borderColor: THEME.color,
        }}
      >
        <div className={styles.extra} style={{ background: THEME.color }}>
          <p>
            Progressively synthesize metrics and multimedia based action items.
            Globally benchmark process-centric experiences without technologies.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>
            <img src={item.icon} alt="card_icon" />
          </div>

          <h3
            style={{
              color: THEME.color,
            }}
          >
            {item.title}
          </h3>
          <p>{item.text.replace(/^(.{60}[^\s]*).*/, "$1")}</p>
          <div className={styles.button}>
            <Button
              to={"/services/" + item.id}
              type="solid-white-tb"
              hoverType="solid-white-tb"
              round
              small
              before="&#xf105;"
            />
          </div>
        </div>
      </div>
    ))
    .slice(0, 3);

  listStatistic.unshift(
    <div
      key={Math.random()}
      className={styles.list_header}
      style={{ background: THEME.color }}
    >
      <div className={styles.list_front}>
        <h3>
          Here is what you <b>should know</b>
        </h3>
        <i className="las la-long-arrow-alt-down" />
      </div>
      <div className={styles.list_back}>
        <p>
          Progressively synthesize metrics and multimedia based action items.
          Globally benchmark process-centric experiences without technologies.
        </p>
      </div>
    </div>
  );

  return (
    <div className={styles.stat_area}>
      <Layout
        style={{
          transform: "translateY(-50%)",
        }}
        col="1"
      >
        <div className={styles.statistic} ref={ref}>
          {listStatistic}
        </div>
      </Layout>
      <span
        className={styles.negative_space}
        style={{
          height: height / 2 + "px",
          marginTop: -height + "px",
        }}
      />
    </div>
  );
};
