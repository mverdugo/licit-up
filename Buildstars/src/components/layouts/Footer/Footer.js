import React from "react";
import styles from "./Footer.module.scss";
import Layout from "../Layout/Layout";
import { Logo, Link, Subscribe } from "../../elements";
import THEME from "../../../state/theme";
import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  const servicesList = state.data.services
    .map((item, index) => (
      <Link
        key={index}
        url={"/services/" + item.id}
        hoverStyle={{ color: THEME.color }}
      >
        <i className="las la-angle-right" />
        {item.title}
      </Link>
    ))
    .slice(0, 5);

  const linkList = state.data.fast_links.map((item, index) => (
    <Link key={index} url={item.url} hoverStyle={{ color: THEME.color }}>
      <i className="las la-angle-right" />
      {item.title}
    </Link>
  ));
  return (
    <Layout col="1" padding style={{ background: "rgb(40,40,50" }}>
      <div className={styles.footer}>
        <div className={styles.logo_area}>
          <Logo dark />
          <p>
            Efficiently productivate adaptive testing after strategic
            experiences dramatically through client-centric potentialities.
          </p>
          <div className={styles.social}>
            <i className="lab la-facebook-f" />
            <i className="lab la-twitter" />
            <i className="lab la-linkedin-in" />
          </div>
        </div>

        <div className={styles.link_area}>
          <div className={styles.links}>
            <h4>Services</h4>
            {servicesList}
          </div>
          <div className={styles.links}>
            <h4>Fast Links</h4>
            {linkList}
          </div>
        </div>

        <div className={styles.subscribe}>
          <h4>Newsletter</h4>
          <Subscribe />
          <p>
            Productivate adaptive testing after strategic experiences
            dramatically through.
          </p>
        </div>
      </div>
    </Layout>
  );
};
