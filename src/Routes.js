import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Collection from "./Containers/Collection/Collection";
import About from "./Containers/About/About";
import Contact from "./Containers/Contact/Contact";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/collection" component={Collection} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  );
};

export default Routes;
