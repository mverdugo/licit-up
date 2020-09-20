import React, { useEffect, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import {
  Home,
  HomeParalax,
  HomeVideo,
  About,
  Services,
  Portfolio,
  Contacts,
  Blog,
  PostSingle,
  ServiceSingle,
  MemberCard,
  PortfolioSingle
} from "./components/pages";
import { Header, Sidebar, Footer } from "./components/layouts";
import { ModalForm, ModalVideo, RequestForm } from "./components/ui";
import { Spinner } from "./components/elements";
import { useCustomState } from "./state/state";

export default () => {
  const [state, actions] = useCustomState();

  useEffect(() => {
    actions.fetch();
  }, [actions]);

  let app = state.error ? <p>Can't load page</p> : <Spinner fluid />;

  if (state.data) {
    app = (
        <Fragment>
          <Sidebar data={state.data.menu} />
          <ModalForm />
          <ModalVideo />
          <RequestForm />
          <Header data={state.data.menu} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home-paralax" exact component={HomeParalax} />
            <Route path="/home-video" exact component={HomeVideo} />
            <Route path="/about-us" exact component={About} />
            <Route path="/services" exact component={Services} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/contacts" exact component={Contacts} />
            <Route path="/blog/:post_id" exact component={PostSingle} />
            <Route
              path="/services/:service_id"
              exact
              component={ServiceSingle}
            />
            <Route path="/team/:member_id" exact component={MemberCard} />
            <Route
              path="/portfolio/:project_id"
              exact
              component={PortfolioSingle}
            />

            <Route path="/blog/cats/:category" exact>
              <Blog sidebar="left" layout="grid" />
            </Route>

            <Route path="/blog/user/:author" exact>
              <Blog sidebar="left" layout="grid" />
            </Route>

            <Route path="/blog/date/:posting_date" exact>
              <Blog sidebar="left" layout="grid" />
            </Route>

            <Route path="/blog/search/:query" exact>
              <Blog sidebar="left" layout="grid" />
            </Route>

            <Route path="/blog-grid-left-sidebar" exact>
              <Blog
                sidebar="left"
                layout="grid"
                title="Blog grid left sidebar"
              />
            </Route>

            <Route path="/blog-grid-right-sidebar" exact>
              <Blog
                sidebar="right"
                layout="grid"
                title="Blog grid right sidebar"
              />
            </Route>

            <Route path="/blog-grid-without-sidebar" exact>
              <Blog sidebar="none" layout="grid" title="Blog grid no sidebar" />
            </Route>

            <Route path="/blog-list-left-sidebar" exact>
              <Blog
                sidebar="left"
                layout="list"
                title="Blog list left sidebar"
              />
            </Route>

            <Route path="/blog-list-right-sidebar" exact>
              <Blog
                sidebar="right"
                layout="list"
                title="Blog list right sidebar"
              />
            </Route>
          </Switch>
          <Footer />
        </Fragment>
    );
  }

  return <Fragment>{app}</Fragment>;
};
