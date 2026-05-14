import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, ChevronDown, ChevronUp, ArrowRight, Target, Globe, BookOpen, Zap, Heart, Award } from 'lucide-react';
import CTA from '../components/sections/CTA';

const perks = [
  { title: 'Mission-Driven Work', desc: 'You\'re not building software for software\'s sake. Every feature you ship shapes future learners\' experiences.', Icon: Target },
  { title: 'Global Team', desc: 'Work with passionate people across regions and timezones.', Icon: Globe },
  { title: 'Learning First', desc: 'Annual learning budget, conference tickets, and a culture that prizes curiosity above all.', Icon: BookOpen },
  { title: 'Flexible Work', desc: 'Hybrid and remote-friendly roles with flexible hours.', Icon: Zap },
  { title: 'Health & Wellness', desc: 'Wellness benefits and support to keep you healthy.', Icon: Heart },
  { title: 'Equity Package', desc: 'Meaningful equity so everyone shares in the success we build together.', Icon: Award },
];

const jobs = [
  { title: 'Senior AI Curriculum Designer', department: 'Education', location: 'Remote / Flexible', type: 'Full-time', desc: 'Design cutting-edge AI learning modules for K-12 students. You\'ll bridge the gap between industry-level AI concepts and accessible classroom experiences.', requirements: ['3+ years in curriculum design or instructional design', 'Strong understanding of ML/AI concepts', 'Experience with Python, TensorFlow or similar', 'Passion for education and student outcomes'] },
  { title: 'Robotics Engineer', department: 'Engineering', location: 'Flexible / Remote', type: 'Full-time', desc: 'Design and prototype robotics hardware and software for educational projects and references.', requirements: ['2+ years with Arduino, Raspberry Pi, ROS', 'Experience with servo systems, sensors, actuators', 'Strong Python or C++ skills', 'Ability to translate tech to non-technical educators'] },
  { title: 'School Partnership Manager', department: 'Partnerships', location: 'Various / Remote', type: 'Full-time', desc: 'Build and nurture relationships with school principals, administrators, and education stakeholders.', requirements: ['3+ years in B2B sales or school partnerships', 'Excellent communication and relationship skills', 'Track record of hitting growth targets', 'Bonus: experience in EdTech or education sector'] },
  { title: 'Full-Stack Developer', department: 'Product', location: 'Remote / Flexible', type: 'Full-time', desc: 'Build the software platform that supports our education tools and educator workflows.', requirements: ['3+ years with React, TypeScript, Node.js', 'Experience with Supabase or similar databases', 'Strong UX sensibility', 'Passion for clean, performant code'] },
  { title: 'IoT Systems Specialist', department: 'Engineering', location: 'Remote-friendly', type: 'Full-time', desc: 'Design connected systems and IoT reference designs for education use-cases. You\'ll spec hardware, write firmware, and create deployment guides.', requirements: ['2+ years in IoT or embedded systems', 'ESP32/ESP8266, MQTT experience', 'Familiarity with cloud IoT platforms (AWS, GCP)', 'Strong problem-solving under real-world constraints'] },
  { title: 'Content & Community Lead', department: 'Marketing', location: 'Remote', type: 'Full-time', desc: 'Own Rygen\'s content strategy — from blog and social to educator community forums. Help us become the voice of innovation education globally.', requirements: ['3+ years in content marketing or community building', 'Strong writing and editing skills', 'Interest in STEM and education', 'Experience growing online communities'] },
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
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <button
        className="w-full text-left group"
        onClick={() => setOpen(!open)}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono text-sky-600 bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-full">
                {job.department}
              </span>
              <span className="text-xs font-mono text-slate-500">{job.type}</span>
            </div>
            <h3 className="font-semibold text-slate-900 text-lg group-hover:text-sky-600 transition-colors">{job.title}</h3>
            <div className="flex items-center gap-3 mt-1.5 text-slate-500 text-xs">
              <span className="flex items-center gap-1"><MapPin size={11} />{job.location}</span>
              <span className="flex items-center gap-1"><Clock size={11} />{job.type}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800 hidden sm:flex">Apply Now</span>
            {open ? <ChevronUp size={18} className="text-slate-400" /> : <ChevronDown size={18} className="text-slate-400" />}
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
              <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800">
                <span>Apply for this Role</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CareersPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-slate-100" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-5">
            <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs uppercase tracking-[0.35em] text-sky-600">
              We're Hiring
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-semibold text-4xl md:text-5xl xl:text-6xl text-slate-900 mb-6">
            Help us build
            <br />
            <span className="text-sky-600">the future of education</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-slate-600 text-xl max-w-2xl mx-auto">
            We're looking for passionate builders, educators, and innovators to join our mission of transforming schools globally.
          </motion.p>
        </div>
      </section>

      {/* Perks */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs uppercase tracking-[0.35em] text-sky-600 mb-5">Why Rygen</span>
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
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-sky-600 mb-4"><perk.Icon size={28} /></div>
              <h3 className="font-semibold text-slate-900 text-lg mb-2">{perk.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{perk.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Open roles */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-10">
            <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs uppercase tracking-[0.35em] text-sky-600 mb-5">Open Positions</span>
            <h2 className="font-semibold text-3xl md:text-4xl text-slate-900">
              {jobs.length} open <span className="text-sky-600">roles</span>
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
          className="mt-10 rounded-3xl border border-sky-200 bg-sky-50 p-8 text-center"
        >
          <h3 className="font-semibold text-xl text-slate-900 mb-2">Don't see the right role?</h3>
          <p className="text-slate-600 mb-5 max-w-md mx-auto text-sm">
            We're always looking for exceptional people. Send us your story and what you'd like to build at Rygen.
          </p>
          <a href="mailto:careers@rygendynamics.com" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800">
            Send Speculative Application
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </section>

      <CTA />
    </div>
  );
}
