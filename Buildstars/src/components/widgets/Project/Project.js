import React, { useState } from "react";
import styles from "./Project.module.scss";
import { Layout } from "../../layouts";
import { Button } from "../../elements";
import THEME from "../../../state/theme";

export default ({ data = [], clients = [], initial = 0 }) => {
  const [active, setActive] = useState(initial);
  const client = clients.filter(
    (client) => client.id.toString() === data[active].clientid
  )[0];

  const content = data[active].full
    .split("<br>")
    .map((item, index) => <p key={index}>{item}</p>);

  const nextProject = () => {
    setActive(data.length !== active + 1 ? active + 1 : 0);
  };

  return (
    <Layout col="2" padding>
      <figure>
        <div
          className={styles.image}
          style={{ background: "url(" + data[active].img + ") center/cover" }}
        />
        <div className={styles.card} style={{ background: THEME.color }}>
          <span className={styles.stars}>
            <i className="las la-star" />
            <i className="las la-star" />
            <i className="las la-star" />
            <i className="las la-star" />
            <i className="las la-star" />
          </span>

          <p>{data[active].feedback}</p>

          <div className={styles.client}>
            <img src={client.img} alt="project" />
            <div>
              <p className={styles.name}>{client.author}</p>
              <p className={styles.job}>{client.status}</p>
            </div>
          </div>
        </div>
      </figure>

      <article className={styles.article}>
        <div className={styles.wrapper}>
          <div className={styles.header} style={{ color: THEME.color }}>
            <h5 className="subtitle">{"0" + (active + 1)}</h5>
            <figure style={{ background: THEME.color }} />
            <h5 className="subtitle">{data[active].lead}</h5>
          </div>

          <h2>{data[active].title}</h2>

          {content}

          <div className={styles.footer} style={{ borderColor: THEME.color }}>
            <Button
              click={nextProject}
              hoverType="solid-gray-tb"
              round
              after="&#xf105;"
              to="#"
            />

            <div>
              <span style={{ color: THEME.color }}>Select next project</span>
              <h4>{data[data.length !== active + 1 ? active + 1 : 0].title}</h4>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};
