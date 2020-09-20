import React, { Fragment } from "react";
import { Header, Project, Portfolio2, Subscribe2 } from "../../widgets";
import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
      <Header img={state.data.header_bgs.portfolio}>Our portfolio</Header>
      <Portfolio2 data={state.data.portfolio} />
      <Subscribe2 />
      <Project data={state.data.portfolio} clients={state.data.reviews} />
    </Fragment>
  );
};
