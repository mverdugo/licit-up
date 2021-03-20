import React, { Fragment } from "react";
import {
  Features,
  Services,
  Team,
  Services2,
  Contacts,
  Reviews,
  VideoHeader,
  Process,
} from "../../widgets";
import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];
  
  return (
    <Fragment>
          <VideoHeader />
          <Features data={state.data.features} />
          <Team data={state.data.team} />
          <Services2 data={state.data.services} />
          <Services data={state.data.services} />
          <Reviews data={state.data.reviews} />
          <Process data={state.data.process} />
          <Contacts />
    </Fragment>
  );
};
