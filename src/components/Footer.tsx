import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Youtube, Phone, Mail, Globe } from 'lucide-react';
import logo from '../../Logo.png';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#081728] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(31,164,232,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(103,199,244,0.09),transparent_30%)]" />
      <div className="relative max-w-7xl mx-auto px-4 py-14 md:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="inline-flex items-center rounded-2xl bg-white px-4 py-3 shadow-lg shadow-black/20">
              <img src={logo} alt="Rygen Dynamics" className="h-10 w-auto object-contain" />
            </div>
            <h3 className="mt-5 text-2xl font-bold tracking-tight">Rygen Dynamics</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
              Future-ready learning solutions for schools, built to feel practical, polished, and easy to adopt.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-full bg-stem-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-stem-light-blue">
                Book a Call
              </Link>
              <a href="mailto:rygendynamics@gmail.com" className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/85 transition-colors hover:border-white/30 hover:bg-white/5">
                Email Us
              </a>
            </div>
            <div className="mt-6 flex gap-3">
              <a aria-label="Facebook" href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-stem-blue hover:text-white">
                <Facebook size={16} />
              </a>
              <a aria-label="LinkedIn" href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-stem-blue hover:text-white">
                <Linkedin size={16} />
              </a>
              <a aria-label="Instagram" href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-stem-blue hover:text-white">
                <Instagram size={16} />
              </a>
              <a aria-label="YouTube" href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-stem-blue hover:text-white">
                <Youtube size={16} />
              </a>
            </div>
          </motion.div>

          {[
            {
              title: 'Explore',
              links: [
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Labs & Programs', path: '/labs' },
                { label: 'Projects', path: '/projects' },
              ],
            },
            {
              title: 'Company',
              links: [
                { label: 'Gallery', path: '/gallery' },
                { label: 'Blog', path: '/blog' },
                { label: 'Careers', path: '/careers' },
                { label: 'Contact', path: '/contact' },
              ],
            },
            {
              title: 'Programs',
              links: [
                { label: 'Robotics', path: '/labs' },
                { label: 'AI & ML', path: '/labs' },
                { label: 'AR & VR', path: '/labs' },
                { label: 'Lab Setup', path: '/labs' },
              ],
            },
          ].map((column, i) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 1) * 0.1 }}
              className="lg:col-span-2"
            >
              <h4 className="text-base font-bold tracking-wide text-white">{column.title}</h4>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="text-sm text-white/68 transition-colors hover:text-stem-light-blue">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <a href="tel:+918980005452" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition-colors hover:border-white/20 hover:bg-white/10">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stem-blue/20 text-stem-light-blue">
                <Phone size={16} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">Phone</p>
                <p className="font-semibold">+91 8980005452</p>
              </div>
            </a>
            <a href="mailto:rygendynamics@gmail.com" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition-colors hover:border-white/20 hover:bg-white/10">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stem-blue/20 text-stem-light-blue">
                <Mail size={16} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">Email</p>
                <p className="font-semibold">rygendynamics@gmail.com</p>
              </div>
            </a>
            <a href="https://rygendynamics.in" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition-colors hover:border-white/20 hover:bg-white/10">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stem-blue/20 text-stem-light-blue">
                <Globe size={16} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">Website</p>
                <p className="font-semibold">rygendynamics.in</p>
              </div>
            </a>
          </div>
        </motion.div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Rygen Dynamics. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/contact" className="transition-colors hover:text-stem-light-blue">
              Privacy Policy
            </Link>
            <span className="hidden text-white/25 md:inline">|</span>
            <Link to="/contact" className="transition-colors hover:text-stem-light-blue">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
