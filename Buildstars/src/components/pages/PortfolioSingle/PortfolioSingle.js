import React, { Fragment } from "react";
import { Header, Project, Numbers } from "../../widgets";
import { useParams } from "react-router-dom";
import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];
  const { project_id } = useParams();

  const project = state.data.portfolio.filter(
    (item) => item.id.toString() === project_id
  )[0];

  return (
    <Fragment>
      <Header img={state.data.header_bgs.portfolio}>Project description</Header>
      <Project
        data={state.data.portfolio}
        clients={state.data.reviews}
        initial={project.id}
      />
      <Numbers stats={project.stats} />
    </Fragment>
  );
};
