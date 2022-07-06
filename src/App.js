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
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/projects' element={<Container />} />
          <Route path='/about' element={<About />} />
        </Routes>
      <Footer />
      </div>
  );
}

export default App;
