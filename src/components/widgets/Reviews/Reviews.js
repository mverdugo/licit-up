import React, { useState } from "react";
import styles from "./Reviews.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { Button } from "../../elements";
import THEME from "../../../state/theme";

export default ({ data = [] }) => {
  const [amount, setAmount] = useState(2);
  const reviewList = data
    .map((item, index) => (
      <div key={index}>
        <div className={styles.review}>
          <figure
            className={styles.photo}
            style={{ background: "url(" + item.img + ") center/cover" }}
          />
          <div className={styles.content}>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
            <span>
              <b style={{ color: THEME.color }}>{item.author},</b>
              {item.status}
            </span>
          </div>
        </div>
      </div>
    ))
    .slice(0, amount);

  const toogleAmount = () => {
    setAmount(amount === data.length ? 2 : data.length);
  };

  return (
    <Layout
      style={{
        background: "rgb(240,240,240)",
      }}
      col="2"
      padding
    >
      <div className={["layout-header", styles.header].join(" ")}>
        <span className="subtitle" style={{ color: THEME.color }}>
          Testimonials
        </span>
        <h2>Check reviews from our customers for great products.</h2>
      </div>

      {reviewList}

      <div className={["layout-footer", styles.footer].join(" ")}>
        <Button click={toogleAmount}>
          {amount === data.length ? "Less reviews" : "More reviews"}
        </Button>
      </div>
    </Layout>
  );
};
