import React from "react";
import { Switch, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import List from "./components/List";
import DraggableList from "./components/DraggableList";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/sidebar" component={Sidebar} />
        <Route exact path="/list" component={List} />
        <Route exact path="/draggable-list" component={DraggableList} />
      </Switch>
    </div>
  );
};

export default App;
