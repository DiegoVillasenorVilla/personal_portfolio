import React from 'react';
import { Header } from './components/header/Header';
import { HardSkills } from './components/hard skills/HardSkills';
import { Body } from './components/body/Body';
import './App.css';



function App() {
  return (
    <div className="App">
      <Header/>
      <HardSkills/>
      <Body/>
    </div>
  )
}

export default App
