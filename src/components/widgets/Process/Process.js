import React, { useState } from "react";
import styles from "./Process.module.scss";
import { Layout } from "../../layouts";
import { Button } from "../../elements";
import THEME from "../../../state/theme";

export default ({ data = [] }) => {
  const processList = data.map((item, index) => (
    <div key={index} className={styles.wrapper}>
      <Card data={item} index={index} />
    </div>
  ));
  return (
    <Layout col="3" padding mode="dark" style={{ background: "rgb(40,40,50)" }}>
      <div className={"layout-header"}>
        <span className="subtitle" style={{ color: THEME.color }}>
          Workflow
        </span>
        <h2 style={{ color: "#fff" }}>
          Smart, simple &amp; cost effective‎ working process.
        </h2>
      </div>

      {processList}

      <div className={["layout-footer", styles.footer].join(" ")}></div>
    </Layout>
  );
};

const Card = ({ data, index }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className={styles.step}>
      <span className={styles.number}>{index + 1 + "."}</span>
      <div
        className={styles.info}
        style={{
          opacity: hover ? "0" : "1",
          transitionDelay: hover ? ".1s" : ".6s",
        }}
      >
        <h4>{data.title}</h4>
        <p>{data.text}</p>
      </div>
      <ul
        style={{
          opacity: hover ? "1" : "0",
          transitionDelay: hover ? ".6s" : ".1s",
        }}
        className={styles.list}
      >
        <li>
          <i className="las la-check" style={{ color: THEME.color }} />
          Compellingly orchestrate distinctive collaboration and idea-sharing
          before.
        </li>
        <li>
          <i className="las la-check" style={{ color: THEME.color }} />
          Holisticly embrace ubiquitous e-business via real-time intellectual
          capital.
        </li>
        <li>
          <i className="las la-check" style={{ color: THEME.color }} />
          Enthusiastically exploit cooperative best practices via global
          methodologies.
        </li>
      </ul>
      <div
        onMouseEnter={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
        className={styles.btn}
      >
        <Button hoverType="solid-gray-tb" after="&#xf101;" />
      </div>
    </div>
  );
};
