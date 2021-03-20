import React from "react";
import { Link } from "react-router-dom";
import styles from "./BlogFeatured.module.scss";
import THEME from "../../../../../state/theme";

export default ({ data = [] }) => {
  const postList = data
    .filter((post) => post.featured)
    .map((item, index) => (
      <div key={index} className={styles.post}>
        <Link to={"/blog/" + item.id}>
          <figure
            className={styles.thumb}
            style={{ background: "url(" + item.image + ") center/cover" }}
          />
        </Link>

        <div className={styles.info}>
          <Link to={"/blog/" + item.id}>{item.title}</Link>
          <span className={styles.date}>{item.posting_date}</span>
        </div>
      </div>
    ));

  return (
    <div className={styles.featured}>
      <h3 style={{ background: THEME.color }}>Featured</h3>
      <div className={styles.wrapper}>{postList}</div>
    </div>
  );
};
