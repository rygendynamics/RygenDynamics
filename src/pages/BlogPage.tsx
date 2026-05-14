import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, ArrowRight, Tag } from 'lucide-react';
import CTA from '../components/sections/CTA';

const featured = {
  title: 'The AI Revolution in K-12 Education: What Every School Needs to Know in 2025',
  excerpt: 'Artificial intelligence is no longer a future concept — it\'s already reshaping how students learn, how teachers teach, and how schools operate. Here\'s what forward-thinking schools are doing right now.',
  author: 'Dr. Kavya Reddy',
  date: 'March 15, 2025',
  readTime: '8 min read',
  category: 'AI Education',
  img: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

const posts = [
  { title: 'Why Robotics Should Be a Core Subject, Not an Extracurricular', excerpt: 'Schools treating robotics as a club activity are falling behind. Here\'s the case for making it part of every student\'s core curriculum.', author: 'Aryan Verma', date: 'March 8, 2025', readTime: '5 min read', category: 'Robotics', img: 'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=600', color: '#06b6d4' },
  { title: 'How IoT Labs Are Solving Real Community Problems', excerpt: 'Students and schools are building smart systems that address local challenges — from water quality to traffic management.', author: 'Meera Iyer', date: 'Feb 28, 2025', readTime: '6 min read', category: 'IoT', img: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600', color: '#10b981' },
  { title: 'AR/VR in Education: Beyond the Hype', excerpt: 'A practical guide to what\'s actually working in augmented and virtual reality for learning, and what\'s still mostly marketing speak.', author: 'Rohit Sharma', date: 'Feb 20, 2025', readTime: '7 min read', category: 'AR/VR', img: 'https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=600', color: '#a855f7' },
  { title: '10 Student Projects That Left Us Speechless in 2024', excerpt: 'From autonomous drones to AI health monitors, these student projects showcase the potential of hands-on STEM learning.', author: 'Dr. Kavya Reddy', date: 'Feb 10, 2025', readTime: '4 min read', category: 'Showcase', img: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600', color: '#0ea5e9' },
  { title: 'The Teacher\'s Guide to Running an AI Lab', excerpt: 'You don\'t need a CS degree to teach AI. Here\'s how educators with zero technical background are leading world-class AI programs.', author: 'Meera Iyer', date: 'Jan 30, 2025', readTime: '9 min read', category: 'Teacher Training', img: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600', color: '#f59e0b' },
  { title: 'Measuring ROI: How Schools Justify Innovation Lab Investment', excerpt: 'A data-driven look at how schools can demonstrate academic and financial returns on technology investments.', author: 'Aryan Verma', date: 'Jan 20, 2025', readTime: '6 min read', category: 'For Principals', img: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600', color: '#ec4899' },
];

function PostCard({ post }: { post: typeof posts[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
    >
      <div className="relative h-44 overflow-hidden rounded-2xl mb-4">
        <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono px-2 py-1 rounded-full border" style={{ color: post.color, background: `${post.color}10`, borderColor: `${post.color}20` }}>
          {post.category}
        </span>
        <div className="flex items-center gap-3 text-slate-500 text-xs">
          <Clock size={11} />
          <span>{post.readTime}</span>
          <span>·</span>
          <span>{post.date}</span>
        </div>
      </div>
      <h3 className="font-semibold text-slate-900 text-lg leading-snug mb-2 group-hover:text-sky-600 transition-colors">{post.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
      <div className="flex items-center justify-between">
        <span className="text-slate-500 text-xs">By {post.author}</span>
        <ArrowRight size={14} className="text-sky-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
      </div>
    </motion.article>
  );
}

export default function BlogPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-slate-100" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-5">
            <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs uppercase tracking-[0.35em] text-sky-600">Insights & Stories</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-semibold text-4xl md:text-5xl xl:text-6xl text-slate-900 mb-6">
            The <span className="text-sky-600">Rygen Blog</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-slate-600 text-xl max-w-xl mx-auto">
            Insights on AI education, robotics, edtech trends, and stories from schools and educators.
          </motion.p>
        </div>
      </section>

      <section className="pb-32 max-w-7xl mx-auto px-6">
        {/* Featured */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative h-72 lg:h-auto overflow-hidden rounded-2xl">
              <img src={featured.img} alt={featured.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Tag size={12} className="text-sky-600" />
                <span className="text-xs font-mono text-sky-600">{featured.category}</span>
                <span className="text-slate-300">·</span>
                <span className="text-slate-500 text-xs font-mono">Featured</span>
              </div>
              <h2 className="font-semibold text-2xl md:text-3xl text-slate-900 mb-4 leading-tight group-hover:text-sky-600 transition-colors">
                {featured.title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-slate-700 text-sm font-medium">{featured.author}</div>
                  <div className="text-slate-500 text-xs">{featured.date} · {featured.readTime}</div>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800">
                  Read Article <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}
