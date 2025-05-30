import React from "react";
import './App.css'

import Header from "./components/Header";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {

  return (
    <>
      <header> <Header /> </header>

      <main>
        <section id="Home"><Home /></section>
        <section id="Service"><Service /></section>
        <section id="About"><About /></section>
        <section id="Contact"><Contact /></section>
      </main>

      <footer> <Footer /> </footer>
    </>
  );
}

export default App;