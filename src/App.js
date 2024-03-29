import React from "react";
import { Switch, Route } from "react-router-dom";

import Show from "../src/Pages/Show";
import Home from "../src/Pages/Home";
import Starred from "../src/Pages/Starred";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/show/:id">
        <Show />
      </Route>

      <Route exact path="/starred">
        <Starred />
      </Route>

      <Route>
        <div>Not found</div>
      </Route>
    </Switch>
  );
}

export default App;
