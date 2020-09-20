import React, { Fragment } from "react";
import {
  Features,
  Features2,
  Subscribe,
  Services,
  Team,
  Services3,
  Contacts,
  Slider,
  Reviews,
  Facts,
} from "../../widgets";

import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
          <Slider data={state.data.posts} />
          <Services3 data={state.data.services} />
          <Features2 data={state.data.features2} />
          <Team data={state.data.team} />
          <Facts data={state.data.facts} />
          <Services data={state.data.services} />
          <Features data={state.data.features} />
          <Subscribe />
          <Reviews data={state.data.reviews} />
          <Contacts />
    </Fragment>
  );
};
