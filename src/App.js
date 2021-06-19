import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Image from "./components/Image";
import PageTransition from "./components/PageTransition";
import Sidebar from "./components/Sidebar";
import List from "./components/List";
import DraggableList from "./components/DraggableList";

const App = () => {
  const location = useLocation();
  return (
    <div className="app">
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/sidebar" component={Sidebar} />
          <Route exact path="/list" component={List} />
          <Route exact path="/draggable-list" component={DraggableList} />
          <Route exact path="/image" component={Image} />
          <Route
            exact
            path="/page-transition/:pageNumber"
            component={PageTransition}
          />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
