import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import ContactPage from './pages/ContactPage'
import CareersPage from './pages/CareersPage'
import VRARSolutions from './pages/VRARSolutions'
import AIMLSolutions from './pages/AIMLSolutions'
import RoboticsSolutions from './pages/RoboticsSolutions'
import BDDSEquipment from './pages/BDDSEquipment'
import './App.css'

// HomePage component - Hero, Capabilities, Footer
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Capabilities />
      <Footer />
    </>
  )
}

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
      <ScrollToTop />
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/vr-ar" element={<VRARSolutions />} />
        <Route path="/products/ai-ml" element={<AIMLSolutions />} />
        <Route path="/products/robotics" element={<RoboticsSolutions />} />
        <Route path="/products/bdds" element={<BDDSEquipment />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
    </div>
  )
}

export default App
