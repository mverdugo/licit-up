import React from "react";
import styles from "./Pricing.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { CardButton } from "../../ui";
import THEME from "../../../state/theme";
import { useCustomState } from "../../../state/state";

export default ({ data = [] }) => {
  const actions = useCustomState()[1];

  const pricingList = data.map((item, index) => (
    <article key={index}>
      <CardButton
        btn_text={index === 0 ? "Get free" : "Order"}
        animation="slide-bottom"
        background={index === 2 ? THEME.color : "rgb(240,240,240)"}
        btn_align="center"
        btn_type={index === 2 ? "solid-white-tb" : "solid-color-tb"}
        btn_hoverType={index === 2 ? "outline-color-tb" : "solid-white-tb"}
        click={() =>
          actions.toogleRequest(
            "Order " + item.title + " plan for " + item.price + " per month"
          )
        }
      >
        <div className={styles.pricing} style={{ borderColor: THEME.color }}>
          <div className={styles.price}>
            <h4>{item.title}</h4>
            <span>{item.price}</span>
            <p>per month</p>
          </div>
          <div className={styles.info}>i</div>
          <ul>
            {item.services.list.map((listItem, listIndex) => {
              if (item.services.avaliable > listIndex) {
                return (
                  <li key={listIndex}>
                    <i className="las la-check" />
                    <b>{listItem}</b>
                  </li>
                );
              } else {
                return (
                  <li key={listIndex}>
                    <i className="las la-times" />
                    {listItem}
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </CardButton>
    </article>
  ));
  return (
    <Layout col="4" padding>
      <div className="layout-header">
        <span className="subtitle" style={{ color: THEME.color }}>
          Pricing plans
        </span>
        <h2>We provide personal approach to each of our client.</h2>
      </div>
      {pricingList}
      <div className={["layout-footer", styles.footer].join(" ")}>
        <p>
          Energistically predominate high-payoff alignments whereas maintainable
          materials timely deliverables. Synergistically leverage other's
          holistic mindshare via high-payoff expertise.
        </p>
      </div>
    </Layout>
  );
};
