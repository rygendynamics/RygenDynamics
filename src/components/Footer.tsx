import { motion } from 'framer-motion';
import logo from '../../Logo.png';

export default function Footer() {
  return (
    <footer className="bg-stem-navy text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-white/20">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src={logo} alt="Rygen Dynamics" className="h-12 w-auto object-contain mb-4" />
            <h3 className="font-bold text-lg mb-2">Rygen Dynamics</h3>
            <p className="text-white/70 text-sm mb-4">
              Future-ready learning solutions for schools
            </p>
            <div className="flex gap-3">
              {['f', 'in', 'ig', 'yt'].map((icon) => (
                <button
                  key={icon}
                  className="w-8 h-8 rounded-full bg-white/15 hover:bg-stem-blue transition-colors flex items-center justify-center"
                >
                  {icon === 'f' && '📘'}
                  {icon === 'in' && '🔗'}
                  {icon === 'ig' && '📷'}
                  {icon === 'yt' && '📺'}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          {[
            { title: 'Products', links: ['AI Lab', 'Robotics', 'Coding', 'IoT & VR'] },
            { title: 'Company', links: ['About Us', 'Blog', 'Careers', 'Contact'] },
            { title: 'Support', links: ['Documentation', 'FAQ', 'Resources', 'Contact Us'] },
          ].map((column, i) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 1) * 0.1 }}
            >
              <h4 className="font-bold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/70 hover:text-stem-yellow transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Rygen Dynamics. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/60 hover:text-stem-light-blue transition-colors text-sm">
              Privacy Policy
            </a>
            <span className="text-white/30">|</span>
            <a href="#" className="text-white/60 hover:text-stem-light-blue transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 pt-12 border-t border-white/20 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left"
        >
          <div>
            <p className="text-white/60 text-sm mb-1">Phone</p>
            <p className="font-bold">📞 +91 8980005452</p>
          </div>
          <div>
            <p className="text-white/60 text-sm mb-1">Email</p>
            <p className="font-bold">📧 rygendynamics@gmail.com</p>
          </div>
          <div>
            <p className="text-white/60 text-sm mb-1">Website</p>
            <p className="font-bold">🌐 www.rygendynamics.com</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
