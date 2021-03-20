import React from "react";
import { useCustomState } from "../../../state/state";
import styles from "./ParallaxHeader.module.scss";
import { Layout } from "../../layouts";
import { InputDiscount } from "../../ui";
import { Button } from "../../elements";

export default () => {
  const [state, actions] = useCustomState();

  return (
    <div
      className={styles.parallax}
      style={{
        backgroundImage: "url(" + state.data.header_bgs.about + ")",
      }}
    >
      <Layout col="1">
        <div className={styles.intro}>
          <p>
            We construct <b>more then 1000</b> living quarters
          </p>
          <h1>
            Build{" "}
            <b>
              whatever
              <br /> you need
            </b>{" "}
            with us
          </h1>
          <Button
            click={() => actions.toogleModal()}
            hoverType="solid-white-tb"
          >
            Make an order
          </Button>
        </div>
      </Layout>
      <div className={styles.form}>
        <Layout col="1" padding style={{ background: "rgb(240,240,240)" }}>
          <InputDiscount />
        </Layout>
      </div>
    </div>
  );
};
