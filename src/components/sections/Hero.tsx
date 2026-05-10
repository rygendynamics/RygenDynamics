import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Plane } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-stem-light-blue to-stem-blue text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering Young Minds.{' '}
              <span className="text-stem-yellow">Building Tomorrow.</span>
            </h1>
            <p className="text-lg mb-8 text-white/90 leading-relaxed">
              Future-ready learning solutions in{' '}
              <span className="font-bold">Robotics, AI & ML, AR & VR</span> and Lab
              Setup for Schools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="btn-primary text-stem-navy flex items-center justify-center gap-2"
              >
                <BookOpen size={16} /> What's Covered
              </Link>
              <Link
                to="/contact"
                className="btn-secondary flex items-center justify-center gap-2"
              >
                Book Demo
              </Link>
            </div>

            <p className="mt-8 text-white/80 flex items-center gap-2">
              <Plane size={16} /> <span className="font-semibold">Program Delivery Support</span>
            </p>
          </motion.div>

          {/* Right - Isometric Lab Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-96 md:h-full flex items-center justify-center"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="AI Lab"
                className="rounded-3xl shadow-2xl object-cover w-full h-full"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-stem-blue/20 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-3 mt-12 justify-center md:justify-start"
        >
          {['Coding', 'Artificial Intelligence', 'Data Science', 'Robotics', '3D and AR-VR', 'Machine Learning'].map(
            (tag) => (
              <span
                key={tag}
                className="px-5 py-2 bg-white text-stem-blue font-semibold rounded-full text-sm shadow-md hover:shadow-lg transition-shadow"
              >
                {tag}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
