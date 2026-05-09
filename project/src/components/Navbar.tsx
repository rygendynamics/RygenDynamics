import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Products', path: '#' },
  { label: 'School Programs', path: '/programs' },
  { label: 'Books', path: '#' },
  { label: 'Impact', path: '#' },
  { label: 'Education', path: '#' },
  { label: 'Projects', path: '/projects' },
  { label: 'Shop', path: '#' },
  { label: 'Blog', path: '/blog' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b-4 border-stem-light-blue sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-12 h-12 bg-gradient-to-br from-stem-blue to-stem-light-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
            RD
          </div>
          <span className="font-bold text-xl text-stem-navy hidden sm:block">RYGEN</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-stem-dark font-medium hover:text-stem-blue transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="text-stem-blue font-semibold flex items-center gap-1 hover:opacity-80">
            📞 Book a Demo
          </button>
          <Link to="#" className="text-stem-blue font-semibold flex items-center gap-1 hover:opacity-80">
            🛒 Shop
          </Link>
          <Link to="#" className="text-stem-blue font-semibold flex items-center gap-1 hover:opacity-80">
            👤 Account
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-stem-navy"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-stem-light-gray border-t-2 border-stem-light-blue"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-stem-dark font-medium hover:text-stem-blue transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
