import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import CTA from '../components/sections/CTA';

const categories = ['All', 'AI Labs', 'Robotics', 'Events', 'Students', 'Facilities'];

const gallery = [
  { src: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200', thumb: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'AI Lab Session', category: 'AI Labs', span: 'col-span-2 row-span-2' },
  { src: 'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=1200', thumb: 'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Robotics Competition', category: 'Robotics', span: '' },
  { src: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1200', thumb: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Machine Learning Workshop', category: 'AI Labs', span: '' },
  { src: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200', thumb: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Coding Bootcamp', category: 'Students', span: '' },
  { src: 'https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=1200', thumb: 'https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'VR Experience Zone', category: 'Facilities', span: '' },
  { src: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1200', thumb: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Innovation Summit 2024', category: 'Events', span: 'col-span-2' },
  { src: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1200', thumb: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Student Showcase Day', category: 'Students', span: '' },
  { src: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1200', thumb: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Teacher Training Program', category: 'Events', span: '' },
  { src: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200', thumb: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Lab Setup & Inauguration', category: 'Facilities', span: '' },
];

export default function GalleryPage() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState<typeof gallery[0] | null>(null);

  const filtered = activeFilter === 'All' ? gallery : gallery.filter((g) => g.category === activeFilter);

  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-slate-100" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-5">
            <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs uppercase tracking-[0.35em] text-sky-600">Gallery</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-semibold text-4xl md:text-5xl xl:text-6xl text-slate-900 mb-6">
            Inside the <span className="text-sky-600">Innovation Campus</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-slate-600 text-xl max-w-2xl mx-auto">
            A glimpse into the classrooms, labs, and events that are shaping the future of education.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section ref={ref} className="pb-24 max-w-7xl mx-auto px-6">
        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveFilter(c)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === c
                  ? 'bg-sky-100 text-sky-700 border border-sky-200'
                  : 'text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={`${item.title}-${i}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.04 * i }}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer ${item.span}`}
                onClick={() => setLightbox(item)}
              >
                <img src={item.thumb} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 border border-slate-200 rounded-2xl group-hover:border-sky-300 transition-colors" />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center mb-2">
                    <ZoomIn size={18} className="text-slate-700" />
                  </div>
                  <span className="text-white text-xs font-medium px-3 py-1 rounded-full bg-slate-900/80">{item.title}</span>
                </div>

                {/* Category badge */}
                <span className="absolute top-3 left-3 text-[10px] font-mono text-sky-600 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.category}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-xl p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                onClick={() => setLightbox(null)}
              >
                <X size={18} />
              </button>
              <img src={lightbox.src} alt={lightbox.title} className="w-full rounded-2xl border border-white/10" />
              <div className="mt-4 text-center">
                <div className="text-white font-semibold">{lightbox.title}</div>
                <div className="text-white/60 text-sm">{lightbox.category}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTA />
    </div>
  );
}
