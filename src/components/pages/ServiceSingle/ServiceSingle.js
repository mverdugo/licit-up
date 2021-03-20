import React, { Fragment } from "react";
import styles from "./ServiceSingle.module.scss";
import { Header } from "../../widgets";
import { useParams } from "react-router-dom";
import { useCustomState } from "../../../state/state";
import Layout from "../../layouts/Layout/Layout";
import THEME from "../../../state/theme";

export default () => {
  const state = useCustomState()[0];
  const { service_id } = useParams();

  const service = state.data.services.filter(
    (service) => service.id.toString() === service_id
  )[0];

  const steps = service.steps.map((item, index) => (
    <div className={styles.wrapper} key={index}>
      <div className={styles.step}>
        <span style={{ background: THEME.color }}>
          {"Step 0" + (index + 1)}
        </span>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </div>
  ));

  return (
    <Fragment>
      <Header img={service.img}>{service.title}</Header>
      <Layout col="2" padding>
        <div>
          <figure
            className={styles.photo}
            style={{ background: "url(" + service.img + ") center/cover" }}
          />
        </div>
        <div className={styles.info}>
          <span style={{ color: THEME.color }}>Our service</span>
          <h1>{service.subtitle}</h1>
          <p>{service.full}</p>
        </div>
      </Layout>
      <Layout col="3" padding style={{ background: "rgb(245,245,245)" }}>
        {steps}
      </Layout>
    </Fragment>
  );
};
