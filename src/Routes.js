import React from "react";

import { Switch, Route } from "react-router-dom";

import Landing from "./Components/Landing/Landing";
import Beach from "./Components/Beaches/Beaches";
import Moderns from "./Components/Moderns/Moderns";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/beach" component={Beach} />
      <Route exact path="/modern" component={Moderns} />
    </Switch>
  );
};

export default Routes;
