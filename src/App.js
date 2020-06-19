import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route, Link } from "react-router-dom";
import PizzaOrder from "./PizzaOrder";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navBar">
          <h1>Lambda Eats</h1>
          <Link to="/" className="button">Home</Link>
          <Link to="/PizzaOrder" className="button">Get Pizza!</Link>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/PizzaOrder" component={PizzaOrder} />
      </BrowserRouter>
    </div>
  );
};
export default App;
