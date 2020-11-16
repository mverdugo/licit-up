import React, { Fragment } from "react";
import { Header, Contacts2 } from "../../widgets";
import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
      <Header img={state.data.header_bgs.contacts}>Our contacts</Header>
      <Contacts2 />
    </Fragment>
  );
};
