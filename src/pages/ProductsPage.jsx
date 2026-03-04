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
      icon: '🥽',
      title: 'Virtual & Augmented Reality Simulations',
      description: 'VR & AR based simulations for Nuclear, Oil & Gas, Disaster Management & Defense Industries.',
      link: '/products/vr-ar',
      gradient: 'linear-gradient(135deg, #2EA3D6 0%, #1F8ACB 100%)'
    },
    {
      icon: '🧠',
      title: 'Artificial Intelligence and Machine Learning',
      description: 'AI & ML Based Solutions for Defense, Road safety & Preventive Maintenance.',
      link: '/products/ai-ml',
      gradient: 'linear-gradient(135deg, #2EA3D6 0%, #1F8ACB 100%)'
    },
    {
      icon: '🤖',
      title: 'Robotics',
      description: 'Diverse robotic portfolio catering to various applications such as CBRNE, NDT, Firefighting, Underwater ROV, VR Operated Robots.',
      link: '/products/robotics',
      gradient: 'linear-gradient(135deg, #2EA3D6 0%, #1F8ACB 100%)'
    },
    {
      icon: '💣',
      title: 'Bomb Detection & Disposal Equipment',
      description: 'Leading organization developing & delivering Bomb Detection & Disposal equipment to the Indian forces.',
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
                      <div className="product-icon">{product.icon}</div>
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
