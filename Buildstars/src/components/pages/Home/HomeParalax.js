import React, { Fragment } from "react";
import {
  Features,
  Services,
  Team,
  Services2,
  Contacts,
  Reviews,
  ParallaxHeader,
  Process,
} from "../../widgets";
import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
          <ParallaxHeader />
          <Team data={state.data.team} />
          <Services2 data={state.data.services} />
          <Services data={state.data.services} />
          <Features data={state.data.features} />
          <Process data={state.data.process} />
          <Reviews data={state.data.reviews} />
          <Contacts />
    </Fragment>
  );
};
