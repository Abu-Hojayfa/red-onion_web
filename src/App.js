import React from "react";
import Home from "./screens/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./screens/Login";

function App() {
  return (
    <Router>
      <Switch>
        
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
