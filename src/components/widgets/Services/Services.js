import React from "react";
import styles from "./Services.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { CardButton } from "../../ui";
import THEME from "../../../state/theme";

export default ({ data = [] }) => {
  const servicesList = data
    .map((item, index) => (
      <article key={index}>
        <CardButton
          to={"/services/" + item.id}
          animation={!item.featured && index !== 3 ? "slide-left" : null}
          btn_after="&#xf105;"
          btn_align="right"
          btn_type={item.featured ? "solid-white-tb" : "solid-color-tb"}
          btn_hoverType="solid-white-tb"
          padding
          background={
            index === 3
              ? "url(" + item.img + ") center/cover"
              : item.featured
              ? THEME.color
              : null
          }
          dark={index === 3 ? true : false}
        >
          <div
            className={styles.services}
            style={{ color: index === 3 ? "#fff" : "#000" }}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </CardButton>
      </article>
    ))
    .slice(0, 6);
  return (
    <Layout
      style={{
        background: "rgb(40,40,50)",
      }}
      col="3"
      padding
    >
      <div className="layout-header">
        <span className="subtitle" style={{ color: THEME.color }}>
          Our services
        </span>
        <h2 style={{ color: "#fff" }}>
          Check featured products for your benefits.
        </h2>
        <p style={{ color: "#fff" }}>
          Energistically predominate high-payoff alignments whereas maintainable
          materials timely deliverables. Synergistically leverage other's
          holistic mindshare via high-payoff expertise.
        </p>
      </div>
      {servicesList}
      <div className={["layout-footer", styles.footer].join(" ")}>
        <span>
          <b>Make it personal.</b>
        </span>
        <span>Call us and get a special conditions.</span>
      </div>
    </Layout>
  );
};
