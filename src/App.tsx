import React from "react";
import { Header } from "./components/header/Header";
import { HardSkills } from "./components/hard skills/HardSkills";
import { Body } from "./components/body/Body";
import { Contact } from "./components/contact/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HardSkills />
      <Body />
      <Contact />
    </div>
  );
}

export default App;
