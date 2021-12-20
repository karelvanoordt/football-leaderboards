import React from "react";
import { Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Details from "./components/Details";

// Provider still left to install

function App() {
  return (
    
      <section>
        <Navbar />
        <Routes>
          <Route exact path="*" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </section>
   
  );
}

export default App;
