import React from "react";
import styles from "./Partners.module.scss";
import { Layout } from "../../layouts";

import Slick from "react-slick";

export default ({ data = [] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const partnersList = data.map((item, index) => (
    <div key={index} className={styles.client}>
      <img src={item} alt="logo" />
    </div>
  ));
  return (
    <Layout col="1">
      <div className={styles.section}>
        <Slick {...settings}>{partnersList}</Slick>
      </div>
    </Layout>
  );
};
