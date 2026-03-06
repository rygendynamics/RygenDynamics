import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import './ProductsPage.css'

const ProductsPage = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const products = [
    {
      icon: '/Photos/HomePage/VR.png',
      title: 'Virtual & Augmented Reality Simulations',
      description: 'Immersive VR/AR training and operational simulations for nuclear, defense, and industrial applications.',
      link: '/products/vr-ar',
      gradient: 'linear-gradient(135deg, #2EA3D6 0%, #1F8ACB 100%)'
    },
    {
      icon: '/Photos/HomePage/Artificial-Intelligence and Machine-Learning.png',
      title: 'Artificial Intelligence and Machine Learning',
      description: 'AI-powered solutions for predictive maintenance, road safety, and intelligent surveillance systems.',
      link: '/products/ai-ml',
      gradient: 'linear-gradient(135deg, #2EA3D6 0%, #1F8ACB 100%)'
    },
    {
      icon: '/Photos/HomePage/Robotics.jpeg',
      title: 'Robotics',
      description: 'Specialized robots for CBRNE detection, NDT inspection, firefighting, underwater operations, and hazardous environments.',
      link: '/products/robotics',
      gradient: 'linear-gradient(135deg, #2EA3D6 0%, #1F8ACB 100%)'
    },
    {
      icon: '/Photos/HomePage/Bomb Disposal.png',
      title: 'Bomb Detection & Disposal Equipment',
      description: 'Advanced EOD robotic systems and bomb disposal equipment engineered for Indian defense forces.',
      link: '/products/bdds',
      gradient: 'linear-gradient(135deg, #2EA3D6 0%, #1F8ACB 100%)'
    }
  ]

  return (
    <>
      <ScrollProgress />
      <Navbar />
      
      <div className="products-page">
        {/* Hero Section */}
        <section className="products-hero">
          {/* 3D element temporarily disabled for performance */}
          <div className="container">
            <motion.div
              className="products-hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="section-tag">Our Products</span>
                <h1 className="page-title">Advanced Technology Solutions</h1>
              </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="products-grid-section" ref={ref}>
          <div className="container">
            <div className="products-grid">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={product.link} className="product-card">
                    <div className="product-card-header" style={{ background: product.gradient }}>
                      <img src={product.icon} alt={product.title} className="product-icon-img" />
                    </div>
                    <div className="product-card-body">
                      <h3 className="product-title">{product.title}</h3>
                      <p className="product-description">{product.description}</p>
                      <div className="learn-more">
                        Learn More →
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="products-cta-section">
          <div className="container">
            <motion.div
              className="cta-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="cta-title">Need a Custom Solution?</h2>
              <p className="cta-description">
                Our team of experts can design and develop tailored solutions for your specific requirements.
              </p>
              <Link to="/contact">
                <button className="btn btn-primary btn-large">Contact Us</button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default ProductsPage
