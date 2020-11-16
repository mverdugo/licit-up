import React from "react";
import styles from "./Contacts.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { ContactForm } from "../../ui";
import { Button } from "../../elements";
import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  return (
    <Layout
      style={{
        background:
          "url(" + state.data.header_bgs.contacts_w + ") center/cover",
      }}
      mode="dark"
      col="2"
      padding
    >
      <ContactForm />
      <div className={styles.wrapper}>
        <div className={styles.contact_info}>
          <h2>Become a partner.</h2>
          <p>
            Holisticly empower excellent outside the box thinking with
            next-generation portals. Synergistically optimize cost effective
            leadership without distributed meta-services. Credibly myocardinate
            customized bandwidth via integrated models. Synergistically foster
            efficient e-commerce whereas empowered models.
          </p>
          <Button
            to="/blog/post_3"
            type="solid-color-tb"
            hoverType="solid-white-tb"
            after="&#xf105;"
          />
        </div>
      </div>
    </Layout>
  );
};
