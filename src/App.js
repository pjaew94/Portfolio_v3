import React from 'react'

import './App.css'

import LandingPage from './landingPage/landingPage'
import Navi from './navi/navi'
import ProjectPage from './projectPage/projectPage'
import AboutPage from './aboutPage/aboutPage'
import TechPage from './techPage/techPage'
import ContactPage from './contacPage/contactPage'
import HamburgerLogo from './hamburger/hamburgerLogo/hamburgerLogo'
import HamburgerState from './hamburger/hamburgerState/hamburgerState'

function App() {
  return (
    <div className="App">
    <HamburgerState />
    <HamburgerLogo />
      <Navi />
      <LandingPage />
      <ProjectPage />
      <AboutPage />
      <TechPage />
      <ContactPage />
    </div>
  );
}

export default App;
