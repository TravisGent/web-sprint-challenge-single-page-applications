import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

const Home = () => {
  return (
      <div>
        <nav className="navBar">
            <h1>Lambda Eats</h1>
            <button className="button">Home</button>
            <button className="button">Help</button>
        </nav>
        <div className="pizzaTime">
            <button className="pizzaButton">Get Pizza!</button>
        </div>
      </div>
  );
};
export default Home;
