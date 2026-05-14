import heroImage from '../../assets/bcd2f326-709e-485d-8eb4-05d544cca7fb.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Robotics lab background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-sky-300/90">RYGEN Dynamics</p>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight text-white mb-6">
            Robotics Labs and AI Education for Schools.
          </h1>
          <p className="max-w-2xl mx-auto md:mx-0 text-base md:text-lg text-white/75 leading-relaxed mb-10">
            A simple, professional solution for robotics lab setup, AI curriculum support, and next-level STEM learning.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
            >
              <BookOpen size={16} /> Contact Us
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white hover:text-white"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
