import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Clock, ChevronDown, ChevronUp, ArrowRight, Target, Globe, BookOpen, Zap, Heart, Award } from 'lucide-react';
import CTA from '../components/sections/CTA';
import heroImage from '../assets/bcd2f326-709e-485d-8eb4-05d544cca7fb.png';

const perks = [
  { title: 'Mission-Driven Work', desc: 'You\'re not building software for software\'s sake. Every feature you ship shapes future learners\' experiences.', Icon: Target },
  { title: 'Global Team', desc: 'Work with passionate people across regions and timezones.', Icon: Globe },
  { title: 'Learning First', desc: 'Annual learning budget, conference tickets, and a culture that prizes curiosity above all.', Icon: BookOpen },
  { title: 'Flexible Work', desc: 'Hybrid and remote-friendly roles with flexible hours.', Icon: Zap },
  { title: 'Health & Wellness', desc: 'Wellness benefits and support to keep you healthy.', Icon: Heart },
  { title: 'Equity Package', desc: 'Meaningful equity so everyone shares in the success we build together.', Icon: Award },
];

const jobs = [
  { title: 'Hardware Engineer', department: 'Engineering', location: 'Office / Hybrid', type: 'Full-time', desc: 'Develop and test high-quality hardware components for our robotics kits and lab equipment.', requirements: ['Degree in Electrical/Electronic Engineering', 'Experience in PCB design and prototyping', 'Knowledge of manufacturing processes', 'Hands-on experience with lab testing tools'] },
  { title: 'Software Engineer (Full-Stack)', department: 'Engineering', location: 'Remote / Flexible', type: 'Full-time', desc: 'Build and maintain the software platforms and educator tools that power Rygen\'s ecosystem.', requirements: ['3+ years with React, TypeScript, Node.js', 'Experience with cloud architecture and databases', 'Strong problem-solving skills', 'Passion for clean, maintainable code'] },
  { title: 'Embedded Firmware Engineer', department: 'Engineering', location: 'Remote / Hybrid', type: 'Full-time', desc: 'Write efficient, robust firmware for our robotics controllers and IoT devices.', requirements: ['Strong C/C++ programming skills', 'Experience with RTOS and bare-metal programming', 'Familiarity with I2C, SPI, UART protocols', 'Debugging and optimization skills'] },
  { title: 'STEM Tutor', department: 'Education', location: 'On-site / Hybrid', type: 'Full-time', desc: 'Deliver engaging STEM and robotics sessions to students and provide support to school educators.', requirements: ['Strong foundation in STEM concepts', 'Teaching or tutoring experience', 'Excellent communication skills', 'Ability to inspire young learners'] },
  { title: 'Marketing Lead', department: 'Marketing', location: 'Remote', type: 'Full-time', desc: 'Drive growth and brand awareness through strategic marketing campaigns across digital and traditional channels.', requirements: ['3+ years in marketing or brand management', 'Experience with SEO/SEM and social media', 'Creative thinking and data-driven approach', 'Excellent storytelling and content skills'] },
  { title: 'Mechanical Engineer (CAD Design)', department: 'Engineering', location: 'Office / Hybrid', type: 'Full-time', desc: 'Design and prototype 3D models for robotics components and educational kits using advanced CAD software.', requirements: ['Degree in Mechanical Engineering or related field', 'Proficiency in SolidWorks, Fusion 360, or similar', 'Experience with 3D printing and rapid prototyping', 'Strong understanding of mechanical systems and materials'] },
];

function JobCard({ job }: { job: typeof jobs[0] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-stem-light-gray bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <button
        className="w-full text-left group"
        onClick={() => setOpen(!open)}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-white bg-stem-navy px-4 py-1.5 rounded-full">
                {job.department}
              </span>
              <span className="text-xs font-mono text-stem-gray">{job.type}</span>
            </div>
            <h3 className="font-semibold text-stem-navy text-lg group-hover:text-stem-blue transition-colors">{job.title}</h3>
            <div className="flex items-center gap-3 mt-1.5 text-stem-gray text-xs">
              <span className="flex items-center gap-1"><MapPin size={11} />{job.location}</span>
              <span className="flex items-center gap-1"><Clock size={11} />{job.type}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link 
              to={`/apply?role=${encodeURIComponent(job.title)}`}
              className="inline-flex items-center gap-2 rounded-full bg-stem-navy px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-stem-navy/10 transition hover:bg-stem-teal hidden sm:flex"
            >
              Apply Now
            </Link>
            {open ? <ChevronUp size={18} className="text-stem-gray" /> : <ChevronDown size={18} className="text-stem-gray" />}
          </div>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-slate-200 pt-5">
              <p className="text-slate-600 leading-relaxed mb-5">{job.desc}</p>
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">Requirements</h4>
              <ul className="space-y-2 mb-6">
                {job.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-sky-600 mt-1 shrink-0">→</span>
                    {r}
                  </li>
                ))}
              </ul>
              <Link 
                to={`/apply?role=${encodeURIComponent(job.title)}`}
                className="inline-flex items-center gap-2 rounded-full bg-stem-navy px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-stem-navy/10 transition hover:bg-stem-teal"
              >
                <span>Apply for this Role</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CareersPage() {
  return (
    <div className="bg-transparent text-stem-navy">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-28">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Robotics lab background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-stem-navy/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-5">
            <span className="inline-flex rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 text-sm font-bold tracking-wider text-white">
              We're Hiring
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-semibold text-4xl md:text-5xl xl:text-6xl text-white mb-6">
            Build the Future of <span className="text-stem-blue">Education</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-white/75 text-xl max-w-2xl mx-auto">
            We're looking for passionate builders, educators, and innovators to join our mission of transforming schools globally.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-stem-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-stem-blue/20 transition hover:bg-stem-teal">
              Contact Us
            </Link>
            <Link to="/about" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white hover:text-white">
              About Rygen
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="pt-24 pb-24 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <span className="inline-flex rounded-full bg-stem-navy/5 border border-stem-navy/10 px-5 py-2 text-sm font-bold tracking-wider text-stem-navy mb-5">Why Rygen</span>
          <h2 className="font-semibold text-3xl md:text-4xl text-slate-900">
            Work that <span className="text-sky-600">matters</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {perks.map((perk, i) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.06 * i }}
              className="rounded-3xl border border-stem-light-gray bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-stem-blue mb-4"><perk.Icon size={28} /></div>
              <h3 className="font-semibold text-stem-navy text-lg mb-2">{perk.title}</h3>
              <p className="text-stem-gray text-sm leading-relaxed">{perk.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Open roles */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-10">
            <span className="inline-flex rounded-full bg-stem-navy/5 border border-stem-navy/10 px-5 py-2 text-sm font-bold tracking-wider text-stem-navy mb-5">Open Positions</span>
            <h2 className="font-semibold text-3xl md:text-4xl text-stem-navy">
              {jobs.length} open <span className="text-stem-blue">roles</span>
            </h2>
          </motion.div>
          <div className="space-y-4">
            {jobs.map((job) => (
              <JobCard key={job.title} job={job} />
            ))}
          </div>
        </div>

        {/* Speculative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl bg-stem-blue p-10 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          </div>
          <h3 className="font-bold text-2xl mb-3 relative z-10">Don't see the right role?</h3>
          <p className="text-white/90 mb-8 max-w-md mx-auto text-sm leading-relaxed relative z-10">
            We're always looking for exceptional people. Send us your story and what you'd like to build at Rygen.
          </p>
          <Link 
            to="/apply?role=Speculative Application" 
            className="inline-flex items-center gap-2 rounded-full bg-white text-stem-blue px-8 py-3 text-sm font-bold shadow-lg transition hover:bg-sky-50 relative z-10"
          >
            Send Speculative Application
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>

      <CTA />
    </div>
  );
}
