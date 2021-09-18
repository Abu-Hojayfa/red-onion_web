import React, { createContext, useState } from "react";
import Home from "./screens/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./screens/Login";

export const cartContext = createContext();

function App() {
  const [allCartedProduct, setAllCartedProduct] = useState([]);
  const [uniqCartedProduct, setUniqCartedProduct] = useState([]);

  const [CountCart, setCountCart] = useState(0);

  return (
    <cartContext.Provider
      value={[
        allCartedProduct,
        uniqCartedProduct,
        setAllCartedProduct,
        setUniqCartedProduct,
        setCountCart,
      ]}
    >
      <Router>
        <Switch>
          <Route path="/home">
            <Home CountCart={CountCart} />
          </Route>

          <Route path="/login">
            <Login />
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
