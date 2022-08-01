import React from "react";
import {Routes, Route} from 'react-router-dom'

import Banner from "./components/Banner";
import Home from "./components/Home";
import Container from "./components/Container";
import About from "./components/About"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Banner />
      <Home />
      <Container />
      <About />
      <Footer />
      </div>
  );
}

export default App;
