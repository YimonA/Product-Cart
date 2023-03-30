import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import Addtocart from "./components/Addtocart";
import Detail from "./components/Detail";
import Nav from "./components/Nav";
import Products from "./components/Products";


const App = () => {

  return (
    <div className=" container mx-auto">
      <Nav/>
      <Routes>
        <Route path="/" element={<Products/>}></Route>
        <Route path="/addtocart" element={<Addtocart/>}></Route>
        <Route path="/detail" element={<Detail/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
