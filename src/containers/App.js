import "../sass/styles.scss";
import React from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";

const App = () => (
  <div className="app-wrapper">
    <ProductsContainer />
    <CartContainer />
  </div>
);

export default App;
