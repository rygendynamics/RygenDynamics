import { motion } from 'framer-motion';
import { ArrowRight, Bot, Building2, CheckCircle2, ChevronRight, GraduationCap, Lightbulb, Rocket, School2, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const labCards = [
  {
    title: 'AI Lab',
    badge: 'Get Set Ready for AI',
    description: 'Hands-on AI and coding kits that help students learn by building practical real-world projects.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-amber-100 to-orange-50',
    button: 'Learn More',
  },
  {
    title: 'Robotics Lab',
    badge: 'Put your thoughts into Action',
    description: 'Robotics programs that combine coding, engineering, and creative problem solving in one workspace.',
    image: 'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-pink-100 to-rose-50',
    button: 'Explore Lab',
  },
  {
    title: 'STEM Lab',
    badge: 'Bring STEM to Life',
    description: 'Interactive STEM spaces for science, technology, engineering, and mathematics learning.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-sky-100 to-cyan-50',
    button: 'View Programs',
  },
];

const trustCards = [
  {
    title: 'Long-Term Commitment',
    description: 'End-to-end lab setup, consistent support, and a roadmap that grows with the institution.',
    Icon: ShieldCheck,
  },
  {
    title: 'Teacher Upskilling',
    description: 'Practical training, lesson plans, and structured support so teachers can deliver confidently.',
    Icon: Users,
  },
  {
    title: 'Learning in the Next Generation',
    description: 'Modern tools and future-facing programs designed for real classroom delivery.',
    Icon: Lightbulb,
  },
  {
    title: 'Labs for Innovation',
    description: 'A strong innovation culture with projects, workshops, and continuous improvement.',
    Icon: Rocket,
  },
];

const impactCards = [
  {
    title: 'Quality Education',
    description: 'Experiential STEM learning built around practical application and future-ready skills.',
    Icon: GraduationCap,
  },
  {
    title: 'Industry, Innovation and Infrastructure',
    description: 'Modern lab environments that support technical growth and innovation-driven learning.',
    Icon: Building2,
  },
  {
    title: 'Gender Equality',
    description: 'Inclusive classroom experiences that encourage equal participation and confidence.',
    Icon: Users,
  },
];

export default function Home() {
  return (
    <div className="bg-[#fbfcfe] text-slate-800">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8f4eb_0%,#fffefb_48%,#eef6ff_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(31,164,232,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(240,162,56,0.12),transparent_28%)]" />
        <div className="relative max-w-7xl mx-auto px-4 pt-8 pb-16 md:pb-24">
          <div className="grid items-center gap-14 lg:grid-cols-2 min-h-[calc(100vh-120px)]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="section-label mb-5">Future-ready school labs</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.03] tracking-tight text-slate-900">
                Empower Future-Ready Schools with{' '}
                <span className="text-stem-blue">AI, Robotics</span>
                {' '}& <span className="text-stem-blue">STEM Labs</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg md:text-xl leading-relaxed text-slate-700">
                From lab setup to curriculum and student outcomes, we take care of everything so schools can focus on teaching modern skills.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#f0a238] px-8 py-4 text-lg font-semibold text-slate-900 shadow-[0_16px_30px_rgba(240,162,56,0.28)] transition-transform hover:-translate-y-0.5"
                >
                  Book a Free Demo <ArrowRight size={18} />
                </Link>
                <Link
                  to="/labs"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-700 transition-colors hover:border-stem-blue hover:text-stem-blue"
                >
                  Explore Labs <ChevronRight size={18} />
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  'Lab Setup',
                  'Curriculum Support',
                  'Teacher Training',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm">
                    <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-stem-blue/10 text-stem-blue">
                      <CheckCircle2 size={12} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -left-4 top-10 hidden h-24 w-24 rounded-full border border-slate-300/70 bg-white/70 shadow-lg lg:block" />
              <div className="absolute right-0 top-8 hidden h-16 w-16 rounded-full bg-stem-blue/15 blur-2xl lg:block" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_28px_90px_rgba(15,23,42,0.12)]">
                <img
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="AI and robotics lab"
                  className="h-[420px] w-full object-cover md:h-[540px]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Featured Lab</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">AI, Robotics & STEM Integration</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="section-title max-w-4xl mx-auto">End-to-End Lab Solutions for Future-Ready Education</h2>
            <p className="section-subtitle max-w-4xl mx-auto">
              We help schools implement AI labs, robotics labs, STEM labs, and digital learning spaces with support from setup through curriculum and training.
            </p>
            <p className="text-2xl text-slate-900">
              We bring <span className="font-semibold italic text-[#f0a238]">Innovation</span> into every classroom.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {labCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br ${card.accent} shadow-[0_20px_60px_rgba(15,23,42,0.08)]`}
              >
                <div className="p-6">
                  <div className="mb-5 inline-flex rounded-2xl bg-white/75 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                    {card.badge}
                  </div>
                  <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-lg">
                    <img src={card.image} alt={card.title} className="h-64 w-full object-cover" />
                  </div>
                </div>
                <div className="px-7 pb-8">
                  <h3 className="text-2xl font-bold text-slate-900">{card.title}</h3>
                  <p className="mt-4 text-slate-700 leading-relaxed">{card.description}</p>
                  <div className="mt-6">
                    <Link to="/labs" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition-transform hover:-translate-y-0.5">
                      {card.button} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf4ff] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="section-title max-w-4xl mx-auto">
              A Trusted Partner for <span className="text-stem-blue">Future-Ready Schools</span>
            </h2>
            <p className="section-subtitle max-w-5xl mx-auto">
              Trusted by schools for lab setup, curriculum support, teacher training, student projects, and long-term implementation support.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {trustCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[2rem] bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
              >
                <div className="inline-flex rounded-2xl bg-amber-50 p-4 text-[#f0a238]">
                  <card.Icon size={30} />
                </div>
                <h3 className="mt-7 text-2xl font-bold text-slate-900">{card.title}</h3>
                <p className="mt-4 text-slate-700 leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-2xl bg-[#f0a238] px-8 py-4 text-lg font-semibold text-slate-900 shadow-[0_16px_30px_rgba(240,162,56,0.28)] transition-transform hover:-translate-y-0.5"
            >
              Book a Free Demo <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbef] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="section-title max-w-4xl mx-auto">
              Future-Ready Education to <span className="text-stem-blue">Make a Difference</span>
            </h2>
            <p className="section-subtitle max-w-5xl mx-auto">
              Our solutions empower institutions while contributing to long-term educational goals through practical, scalable, and inclusive programs.
            </p>
          </motion.div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-5">
              {impactCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex gap-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
                >
                  <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-[#f0a238]">
                    <card.Icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{card.title}</h3>
                    <p className="mt-3 text-slate-700 leading-relaxed">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-x-10 top-8 h-72 rounded-full bg-stem-blue/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.25rem] border border-white bg-white shadow-[0_28px_90px_rgba(15,23,42,0.12)]">
                <img
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Future-ready education showcase"
                  className="h-[520px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/15 via-transparent to-transparent" />
                <div className="absolute left-6 top-6 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Impact</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">Innovation with purpose</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-stem-navy py-16 md:py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label mx-auto mb-5 w-fit border-white/15 bg-white/10 text-white/80">Ready to build your next lab?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Let’s create a more professional learning experience.</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/75">
              Get a clean plan for your school, from lab setup to launch support, with a team that stays involved after delivery.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#f0a238] px-8 py-4 text-lg font-semibold text-slate-900 shadow-[0_16px_30px_rgba(240,162,56,0.24)] transition-transform hover:-translate-y-0.5"
              >
                Book a Free Demo <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/8"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
