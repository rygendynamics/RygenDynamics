import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'Careers', to: '/careers' },
  ]

  const productCategories = [
    { label: 'Virtual & Augmented Reality', to: '/products/vr-ar' },
    { label: 'Robotics', to: '/products/robotics' },
    { label: 'Artificial Intelligence And Machine Learning', to: '/products/ai-ml' },
    { label: 'Bomb Detection & Disposal Equipment', to: '/products/bdds' },
  ]

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src="/Rygen Dynamics.png" alt="Rygen Dynamics" className="logo-img" />
        </Link>
        
        <div className="make-in-india-badge">
          <img src="/Photos/HomePage/MakeInIndia-logo.avif" alt="Make in India" className="make-in-india-logo" />
        </div>
        
        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.to}
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          
          {/* Products Dropdown */}
          <motion.div
            className="nav-dropdown"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <span 
              className="nav-link dropdown-trigger"
              onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
            >
              Products
              <svg 
                className={`dropdown-arrow ${productsDropdownOpen ? 'open' : ''}`}
                width="12" 
                height="8" 
                viewBox="0 0 12 8" 
                fill="none"
              >
                <path 
                  d="M1 1L6 6L11 1" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className={`dropdown-menu ${productsDropdownOpen ? 'show' : ''}`}>
              {productCategories.map((product) => (
                <Link
                  key={product.label}
                  to={product.to}
                  className="dropdown-item"
                  onClick={() => {
                    setProductsDropdownOpen(false)
                    setMobileMenuOpen(false)
                  }}
                >
                  {product.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <div
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
