import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Capabilities from './components/Capabilities'
import Innovation from './components/Innovation'
import Vision from './components/Vision'
import Roadmap from './components/Roadmap'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 800)
  }, [])

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <img src="/Rygen Dynamics.png" alt="Rygen Dynamics" className="loading-logo" />
          <div className="loading-spinner"></div>
          <p>Loading intelligent systems...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Capabilities />
      <Innovation />
      <Vision />
      <Roadmap />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
