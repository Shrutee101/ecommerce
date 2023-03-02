import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";


// import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Contactus } from "./components/Contactus";
import { Product } from "./components/Product";
import { Aboutus } from "./components/Aboutus";
import { Carousel } from "./components/Carousel";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Header Home="main"/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/product" element={<Product/>}/>
    </Routes>
    

 
    </>
  );
}
export default App;
