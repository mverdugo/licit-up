import React, { Fragment } from "react";
import {
  Header,
  TextBlock,
  Process,
  Facts2,
  Portfolio,
  Partners,
} from "../../widgets";
import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
      <Header img={state.data.header_bgs.about}>About company</Header>
      <TextBlock />
      <Process data={state.data.process} />
      <Facts2 data={state.data.facts2} />
      <Portfolio data={state.data.portfolio} />
      <Partners data={state.data.partners} />
    </Fragment>
  );
};
