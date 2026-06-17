import './App.css'
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