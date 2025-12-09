import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Project from "./Project.jsx";
import Resume from "./Resume.jsx";

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
