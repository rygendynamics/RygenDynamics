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
  { title: 'How IoT Labs Are Solving Real Community Problems', excerpt: 'Students at Rygen partner schools are building smart systems that address real local challenges — from water quality to traffic management.', author: 'Meera Iyer', date: 'Feb 28, 2025', readTime: '6 min read', category: 'IoT', img: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600', color: '#10b981' },
  { title: 'AR/VR in Education: Beyond the Hype', excerpt: 'A practical guide to what\'s actually working in augmented and virtual reality for learning, and what\'s still mostly marketing speak.', author: 'Rohit Sharma', date: 'Feb 20, 2025', readTime: '7 min read', category: 'AR/VR', img: 'https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=600', color: '#a855f7' },
  { title: '10 Student Projects That Left Us Speechless in 2024', excerpt: 'From autonomous drones to AI health monitors, the innovation coming out of Rygen labs continues to blow everyone away.', author: 'Dr. Kavya Reddy', date: 'Feb 10, 2025', readTime: '4 min read', category: 'Showcase', img: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600', color: '#0ea5e9' },
  { title: 'The Teacher\'s Guide to Running an AI Lab', excerpt: 'You don\'t need a CS degree to teach AI. Here\'s how educators with zero technical background are leading world-class AI programs.', author: 'Meera Iyer', date: 'Jan 30, 2025', readTime: '9 min read', category: 'Teacher Training', img: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600', color: '#f59e0b' },
  { title: 'Measuring ROI: How Schools Justify Innovation Lab Investment', excerpt: 'A data-driven look at how Rygen partner schools demonstrate the academic and financial returns on their technology lab investments.', author: 'Aryan Verma', date: 'Jan 20, 2025', readTime: '6 min read', category: 'For Principals', img: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600', color: '#ec4899' },
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
      className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
    >
      <div className="relative h-44 overflow-hidden">
        <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
        <span className="absolute top-3 left-3 text-[10px] font-mono px-2.5 py-1 rounded-full border" style={{ color: post.color, background: `${post.color}20`, borderColor: `${post.color}30` }}>
          {post.category}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3 text-white/30 text-xs">
          <Clock size={11} />
          <span>{post.readTime}</span>
          <span>·</span>
          <span>{post.date}</span>
        </div>
        <h3 className="font-display font-semibold text-white text-base leading-snug mb-2 group-hover:text-electric-blue transition-colors">{post.title}</h3>
        <p className="text-white/40 text-sm leading-relaxed mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-white/30 text-xs">By {post.author}</span>
          <ArrowRight size={14} className="text-electric-blue opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogPage() {
  return (
    <div className="bg-navy-950 pt-16">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-electric-blue/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-5">
            <span className="section-label">Insights & Stories</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
            The <span className="text-gradient">Rygen Blog</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-white/50 text-xl max-w-xl mx-auto">
            Insights on AI education, robotics, edtech trends, and stories from the schools we partner with.
          </motion.p>
        </div>
      </section>

      <section className="pb-32 max-w-7xl mx-auto px-6">
        {/* Featured */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl overflow-hidden group cursor-pointer mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-72 lg:h-auto overflow-hidden">
              <img src={featured.img} alt={featured.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-950/60 lg:bg-gradient-to-r" />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Tag size={12} className="text-electric-blue" />
                <span className="text-xs font-mono text-electric-blue">{featured.category}</span>
                <span className="text-white/20">·</span>
                <span className="text-white/40 text-xs font-mono">Featured</span>
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4 leading-tight group-hover:text-electric-blue transition-colors">
                {featured.title}
              </h2>
              <p className="text-white/50 leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white/60 text-sm font-medium">{featured.author}</div>
                  <div className="text-white/30 text-xs">{featured.date} · {featured.readTime}</div>
                </div>
                <span className="btn-outline text-sm flex items-center gap-2">
                  Read Article <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Posts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}
