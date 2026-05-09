import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Principal',
    school: 'Delhi International School',
    quote: "Rygen Dynamics transformed our school into something we couldn't have imagined. Students who had never touched a circuit board are now building autonomous robots and winning national competitions. It's been absolutely transformational.",
    rating: 5,
    avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Rajesh Kumar',
    role: 'STEM Coordinator',
    school: 'Mumbai Tech Academy',
    quote: "The curriculum depth and teacher training support from Rygen Dynamics is unlike anything we've seen in the market. Within one semester, our students were building IoT systems and deploying machine learning models. Absolutely world-class.",
    rating: 5,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Ananya Singh',
    role: 'Student, Grade 11',
    school: 'Bangalore Innovation High',
    quote: "I built my first AI model in 8th grade at our Rygen lab. By Grade 11, I'm training neural networks and presenting at tech conferences. I have a college acceptance with an AI scholarship. None of this would have happened without Rygen.",
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Mrs. Kavitha Nair',
    role: 'School Administrator',
    school: 'Cochin Global Academy',
    quote: "Parents are amazed at what their children are building. Our enrollment increased 40% after launching the Rygen labs — parents want their kids to have access to this level of education. The ROI for our school has been exceptional.",
    rating: 5,
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Prof. Arun Mehta',
    role: 'Education Director',
    school: 'Chennai Smart School',
    quote: "The teacher training program alone is worth the entire investment. Our educators feel empowered and excited again. When teachers are energized, students thrive. Rygen understood this and delivered a holistic transformation.",
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <div key={i} className="w-3.5 h-3.5 text-yellow-400">★</div>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-navy-900">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon-purple/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-5"
          >
            <span className="section-label">Testimonials</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl text-white"
          >
            Trusted by{' '}
            <span className="text-gradient">educators worldwide</span>
          </motion.h2>
        </div>

        {/* Slider */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="glass-blue rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              {/* Quote icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote size={80} className="text-electric-blue" />
              </div>

              {/* Content */}
              <div className="relative">
                <StarRating count={t.rating} />

                <blockquote className="text-white/80 text-lg md:text-xl leading-relaxed mt-6 mb-8 font-light">
                  "{t.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-electric-blue/30"
                  />
                  <div>
                    <div className="font-display font-semibold text-white">{t.name}</div>
                    <div className="text-white/40 text-sm">{t.role}, {t.school}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-xl glass flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 h-2 bg-electric-blue'
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-xl glass flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Avatar strip */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 ${
                i === current ? 'scale-110 ring-2 ring-electric-blue ring-offset-2 ring-offset-navy-900' : 'opacity-40 hover:opacity-70'
              } rounded-full`}
            >
              <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
