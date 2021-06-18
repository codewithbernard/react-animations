import React from "react";
import { Switch, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import List from "./components/List";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/sidebar" component={Sidebar} />
        <Route exact path="/list" component={List} />
      </Switch>
    </div>
  );
};

export default App;
