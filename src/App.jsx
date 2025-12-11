import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Resume from "./Resume";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<Navbar/>}/>
          <Route index element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Project" element={<Project/>}/>
          <Route path="/Resume" element={<Resume/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
