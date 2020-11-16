import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import useHover from "../../../utilities/useHover";
import styles from "./MemberCard.module.scss";
import { Header, Numbers } from "../../widgets";
import { useParams } from "react-router-dom";
import { useCustomState } from "../../../state/state";
import Layout from "../../layouts/Layout/Layout";
import THEME from "../../../state/theme";

export default () => {
  const state = useCustomState()[0];
  const { member_id } = useParams();

  const member = state.data.team.filter(
    (member) => member.id.toString() === member_id
  )[0];

  const skillList = member.skills.map((item, index) => (
    <Skill key={index} skill={item} />
  ));

  const projectList = state.data.portfolio
    .filter((item) => item.memberid === member.id)
    .map((item, index) => <Project key={index} project={item} />)
    .slice(0, 3);

  return (
    <Fragment>
      <Header img={state.data.header_bgs.team}>
        {member.name}
        <br />
        <b style={{ color: THEME.color }}>{member.job}</b>
      </Header>
      <Layout col="3" padding>
        <p className={styles.description}>{member.about}</p>
        <div className={styles.column}>
          <figure
            className={styles.user_photo}
            style={{ background: "url(" + member.img + ") center/cover" }}
          >
            <i style={{ background: THEME.color }} className="las la-plus" />
          </figure>
        </div>

        <div className={styles.column}>
          <h2 className={styles.heading} style={{ color: THEME.color }}>
            My Expertise
          </h2>
          {skillList}
        </div>

        <div className={styles.column}>
          <h2 className={styles.heading} style={{ color: THEME.color }}>
            My Projects
          </h2>
          {projectList}
        </div>
      </Layout>
      <Numbers stats={member.stats} />
    </Fragment>
  );
};

const Skill = ({ skill }) => (
  <div className={styles.skill}>
    <div style={{ width: skill.split(":")[1] + "%" }}>
      <span>{skill.split(":")[0]}</span>
      <span>{skill.split(":")[1] + "%"}</span>
      <figure style={{ background: THEME.color }} />
    </div>
  </div>
);

const Project = ({ project }) => {
  const [hoverRef, isHovered] = useHover();
  return (
    <div className={styles.project} style={{ borderColor: THEME.color }}>
      <figure
        style={{
          background: "url(" + project.img + ") center/cover",
        }}
      >
        <Link to={"/portfolio/" + project.id}>
          <i className="las la-link" />
        </Link>
      </figure>
      <Link to={"/portfolio/" + project.id}>
        <h5 ref={hoverRef} style={{ color: isHovered && THEME.color }}>
          {project.title}
        </h5>
      </Link>
      <Link to={"/portfolio/" + project.id}>
        <i style={{ background: THEME.color }} className="las la-plus" />
      </Link>
    </div>
  );
};
