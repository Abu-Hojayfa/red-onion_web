import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Cart from "./screens/Cart";
import FoodDetails from "./screens/FoodDetails";

export const cartContext = createContext();

function App() {
  const [allCartedProduct, setAllCartedProduct] = useState([]);
  const [CountCart, setCountCart] = useState(0);
  const [stateOfProduct, setStateOfProduct] = useState("lunch");
  const [foodData, setFoodData] = useState([]);
  const [firstFood, setFirstFood] = useState(foodData[0]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/${stateOfProduct}`)
      .then((res) => res.json())
      .then((data) => {
        setFoodData(data);
        setFirstFood(data[0]);
        setLoader(false);
      });
  }, [ stateOfProduct]);

  return (
    <cartContext.Provider
      value={[allCartedProduct, setAllCartedProduct, setCountCart]}
    >
      <Router>
        <Switch>
          <Route path="/home">
            <Home
              stateOfProduct={stateOfProduct}
              setStateOfProduct={setStateOfProduct}
              foodData={foodData}
              loader={loader}
              setLoader={setLoader}
              CountCart={CountCart}
            />
          </Route>

          <Route path="/login">
            <Login CountCart={CountCart} />
          </Route>

          <Route path="/yourcart">
            <Cart CountCart={CountCart} />
          </Route>

          <Route path="/detailspage">
            <FoodDetails
              stateOfProduct={stateOfProduct}
              setStateOfProduct={setStateOfProduct}
              foodData={foodData}
              loader={loader}
              setLoader={setLoader}
              CountCart={CountCart}
              firstFood={firstFood}
            />
          </Route>

          <Route path="/">
            <Home
              stateOfProduct={stateOfProduct}
              setStateOfProduct={setStateOfProduct}
              foodData={foodData}
              loader={loader}
              setLoader={setLoader}
              CountCart={CountCart}
            />
          </Route>
        </Switch>
      </Router>
    </cartContext.Provider>
  );
}

export default App;
