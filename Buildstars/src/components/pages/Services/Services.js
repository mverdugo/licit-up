import React, { Fragment } from "react";
import { Header, ListBlock, Services2, Pricing } from "../../widgets";
import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
      <Header img={state.data.header_bgs.services}>Our services</Header>
      <ListBlock data={state.data.choose} />
      <Services2 data={state.data.services} />
      <Pricing data={state.data.pricing} />
    </Fragment>
  );
};
