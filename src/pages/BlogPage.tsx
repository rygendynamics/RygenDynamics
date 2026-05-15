import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/sections/CTA';
import heroImage from '../assets/bcd2f326-709e-485d-8eb4-05d544cca7fb.png';

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
      className="rounded-3xl border border-stem-light-gray bg-white p-6 shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
    >
      <div className="relative h-44 overflow-hidden rounded-2xl mb-4">
        <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono px-2 py-1 rounded-full border" style={{ color: post.color, background: `${post.color}10`, borderColor: `${post.color}20` }}>
          {post.category}
        </span>
        <div className="flex items-center gap-3 text-stem-gray text-xs">
          <Clock size={11} />
          <span>{post.readTime}</span>
          <span>·</span>
          <span>{post.date}</span>
        </div>
      </div>
      <h3 className="font-semibold text-stem-navy text-lg leading-snug mb-2 group-hover:text-stem-blue transition-colors">{post.title}</h3>
      <p className="text-stem-gray text-sm leading-relaxed mb-4">{post.excerpt}</p>
      <div className="flex items-center justify-between">
        <span className="text-stem-gray text-xs">By {post.author}</span>
        <ArrowRight size={14} className="text-stem-blue opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
      </div>
    </motion.article>
  );
}

export default function BlogPage() {
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
            <span className="inline-flex rounded-full border border-stem-blue bg-stem-yellow px-4 py-2 text-xs uppercase tracking-[0.35em] text-stem-navy">Insights & Stories</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-semibold text-4xl md:text-5xl xl:text-6xl text-white mb-6">
            The <span className="text-stem-blue">Rygen Blog</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-white/75 text-xl max-w-xl mx-auto">
            Insights on AI education, robotics, edtech trends, and stories from schools and educators.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-stem-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-stem-blue/20 transition hover:bg-stem-teal">
              Contact Us
            </Link>
            <Link to="/about" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white hover:text-white">
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="pb-32 max-w-7xl mx-auto px-6">
        {/* Featured */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-stem-light-gray bg-white p-8 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative h-72 lg:h-auto overflow-hidden rounded-2xl">
              <img src={featured.img} alt={featured.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Tag size={12} className="text-stem-blue" />
                <span className="text-xs font-mono text-stem-blue">{featured.category}</span>
                <span className="text-stem-light-gray">·</span>
                <span className="text-stem-gray text-xs font-mono">Featured</span>
              </div>
              <h2 className="font-semibold text-2xl md:text-3xl text-stem-navy mb-4 leading-tight group-hover:text-stem-blue transition-colors">
                {featured.title}
              </h2>
              <p className="text-stem-gray leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-stem-navy text-sm font-medium">{featured.author}</div>
                  <div className="text-stem-gray text-xs">{featured.date} · {featured.readTime}</div>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-stem-navy px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-stem-navy/10 transition hover:bg-stem-teal">
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
