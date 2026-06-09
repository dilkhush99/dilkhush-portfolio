import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/hero/Hero'
import About from './components/about/About'
import Journey from './components/journey/Journey'
import Skills from './components/skills/Skills'
import ContactFooter from './components/footer/ContactFooter'
import Hero from './components/hero/Hero'

function App() {
  return (
    <div className="portfolio-app">
      <Hero />          {/* Section 1: Home */}
      <About />         {/* Section 2: About Me (Sits right here!) */}
      <Journey />       {/* Section 3: Journey */}
      <Skills />        {/* Section 4: Skills & Projects */}
      <ContactFooter /> {/* Section 5: Contact & Footer */}
    </div>
  );
}

export default App;