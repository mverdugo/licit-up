import React, { useRef } from "react";
import Slider from "react-slick";
import styles from "./Slider.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { Button } from "../../elements";

export default ({ data = [] }) => {
  let sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slideList = data.map((item, index) => (
    <article key={index}>
      <Layout
        style={{
          background: "url(" + item.image + ") center/cover",
        }}
        col="1"
        mode="dark"
      >
        <div className={styles.slide}>
          <i
            className={"las la-long-arrow-alt-left"}
            onClick={() => sliderRef.slickPrev()}
          />

          <div className={styles.intro}>
            <h1>{item.title}</h1>
            <p>{item.short}</p>
            <Button to={"/blog/" + item.id} hoverType="solid-white-tb">
              Read more
            </Button>
          </div>
          <i
            className={"las la-long-arrow-alt-right"}
            onClick={() => sliderRef.slickNext()}
          />
        </div>
      </Layout>
    </article>
  ));

  return (
    <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
      {slideList}
    </Slider>
  );
};
