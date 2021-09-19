import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Cart from "./screens/Cart";

export const cartContext = createContext();

function App() {
  const [allCartedProduct, setAllCartedProduct] = useState([]);

  const [CountCart, setCountCart] = useState(0);

  return (
    <cartContext.Provider
      value={[allCartedProduct, setAllCartedProduct, setCountCart]}
    >
      <Router>
        <Switch>
          <Route path="/home">
            <Home CountCart={CountCart} />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/yourcart">
            <Cart  CountCart={CountCart} />
          </Route>

          <Route path="/">
            <Home CountCart={CountCart} />
          </Route>
        </Switch>
      </Router>
    </cartContext.Provider>
  );
}

export default App;
