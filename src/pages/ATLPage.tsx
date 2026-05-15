import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Settings, Users, ArrowRight, ShieldCheck, Cpu, Globe } from 'lucide-react';
import CTA from '../components/sections/CTA';
import heroImage from '../assets/bcd2f326-709e-485d-8eb4-05d544cca7fb.png';
import imgAtlAbout from '../assets/atl_about.png';

export default function ATLPage() {
  const objectives = [
    {
      title: 'Curiosity & Creativity',
      desc: 'Fostering a mindset of curiosity and innovative thinking among young students.',
      icon: Lightbulb,
    },
    {
      title: 'Practical Skills',
      desc: 'Hands-on learning with DIY kits, 3D printers, and robotics equipment.',
      icon: Settings,
    },
    {
      title: 'Problem Solving',
      desc: 'Encouraging students to design solutions for community and global challenges.',
      icon: Globe,
    },
    {
      title: 'Future Ready',
      desc: 'Preparing the next generation for the 21st-century technological landscape.',
      icon: Rocket,
    },
  ];

  const features = [
    {
      title: 'Govt. Compliance',
      desc: 'Full compliance with Atal Innovation Mission (AIM) and NITI Aayog guidelines.',
    },
    {
      title: 'End-to-End Setup',
      desc: 'Complete lab planning, furniture, equipment, and technical installation.',
    },
    {
      title: 'Teacher Training',
      desc: 'Intensive training and ongoing support for teachers and lab in-charges.',
    },
    {
      title: 'Annual Maintenance',
      desc: 'Regular updates, equipment maintenance, and technical troubleshooting.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-28">
        <div className="absolute inset-0">
          <img src={heroImage} alt="ATL lab setup" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-stem-navy/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-bold tracking-widest uppercase mb-8 text-white"
          >
            Atal Innovation Mission
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          >
            ATL Tinkering <span className="text-stem-blue">Lab Setup</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Empowering schools to establish world-class innovation hubs under the Government of India's flagship initiative.
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-stem-navy mb-6">What is ATL?</h2>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                Atal Tinkering Lab (ATL) is an initiative by the Central Government of India to foster curiosity, creativity, and imagination in young minds; and inculcate skills such as design mindset, computational thinking, adaptive learning, physical computing etc.
              </p>
              <div className="bg-sky-50 p-8 rounded-3xl border border-sky-100">
                <h3 className="text-xl font-bold text-stem-navy mb-4">Why partner with Rygen Dynamics?</h3>
                <p className="text-slate-600 mb-6">
                  We provide a complete, hassle-free solution for schools to establish and run successful ATLs that inspire students to become future innovators.
                </p>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-stem-blue/10 flex items-center justify-center text-stem-blue shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <p className="text-sm font-semibold text-stem-navy">Approved vendor compliance & technical expertise.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={imgAtlAbout} 
                alt="Students tinkering" 
                className="rounded-4xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-24 bg-sky-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <p className="inline-block text-sm font-bold uppercase tracking-widest text-white bg-stem-navy px-5 py-2 rounded-full mb-6">Core Objectives</p>
          <h2 className="text-4xl md:text-5xl font-bold text-stem-navy">Fostering Innovation</h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((obj, i) => (
            <motion.div
              key={obj.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-6 h-14 w-14 rounded-2xl bg-sky-50 flex items-center justify-center text-stem-blue group-hover:scale-110 transition-transform">
                <obj.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-stem-navy mb-3">{obj.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{obj.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-stem-blue text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="inline-block text-sm font-bold uppercase tracking-widest text-white bg-stem-navy px-5 py-2 rounded-full mb-6">Our Solution</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-12">Comprehensive ATL Setup</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {features.map((feat) => (
                  <div key={feat.title} className="bg-white p-6 rounded-3xl shadow-sm">
                    <h3 className="text-lg font-bold mb-2 text-stem-navy">{feat.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-4xl p-8 md:p-12 shadow-2xl"
            >
              <Cpu size={48} className="text-stem-blue mb-6" />
              <h3 className="text-3xl font-bold mb-6 text-stem-navy">Ready to apply?</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Whether you are applying for the grant or have already received the mandate, we help you navigate the entire journey with technical precision.
              </p>
              <button className="w-full py-4 px-8 bg-stem-navy text-white rounded-2xl font-bold hover:bg-stem-blue transition-colors flex items-center justify-center gap-2 group">
                Download Proposal <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
