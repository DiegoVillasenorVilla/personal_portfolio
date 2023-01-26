import React from "react";
import { Head } from "./components/head/Head";
import { Header } from "./components/header/Header";
import { HardSkills } from "./components/hard skills/HardSkills";
import { Body } from "./components/body/Body";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Head/>
      <Header />
      <HardSkills />
      <Body />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
