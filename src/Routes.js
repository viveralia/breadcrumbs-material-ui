import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import breadcrumbs from "./constants/breadcrumbs.json";
import Profile from "./pages/Profile";
import Edit from "./pages/Edit";

const Routes = () => {
  const { home, profile, edit } = breadcrumbs;

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Home breadcrumbs={home} />} />
        <Route
          exact
          path="/profile"
          render={() => <Profile breadcrumbs={profile} />}
        />
        <Route
          exact
          path="/profile/edit"
          render={() => <Edit breadcrumbs={edit} />}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
