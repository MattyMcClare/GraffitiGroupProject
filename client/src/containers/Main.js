import React, { Component } from "react";
import AllArtView from "../components/AllArtView";
import ErrorPage from "../components/ErrorPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={AllArtView} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    );
  }
}

export default Main;
