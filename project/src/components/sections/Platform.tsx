import { motion } from 'framer-motion';

export default function Platform() {
  const platforms = [
    {
      title: 'AI CONNECT',
      subtitle: "The world's first unified AI & ML coding platform",
      features: [
        'Easy & User Friendly',
        'Diverse Python Activities',
        'Block-Based Python',
        'Block to Text Conversion',
        'Textual to Block-Based',
        'AI & ML Based Activities',
      ],
      description: 'Intuitive interface for effortless learning with 200+ interactive AI & ML activities for real-world learning.',
      color: 'bg-stem-blue',
      icon: '🧠',
    },
    {
      title: 'STEM LEARN / LMS',
      subtitle: 'Smart Learning. Simplified.',
      features: [
        '24-7 Access (Web & Mobile)',
        'Live Sessions',
        'Interactive Videos & Documents',
        'Assignments & Quizzes',
        'Progress Reports',
        'Certification',
      ],
      description: 'A powerful Learning Management System built for STEM education with comprehensive tracking and engagement tools.',
      color: 'bg-stem-orange',
      icon: '📚',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-stem-light-gray">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-stem-navy mb-4">
            Smarter Learning.{' '}
            <span className="text-stem-blue">Stronger Futures.</span>
          </h2>
          <p className="text-stem-gray text-lg max-w-2xl mx-auto">
            Digital platforms and learning solutions that empower every student and educator.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="card-rounded overflow-hidden bg-white border-4 border-stem-light-blue hover:shadow-2xl transition-all duration-300"
            >
              {/* Header */}
              <div className={`${platform.color} text-white p-6 flex items-center justify-between`}>
                <div>
                  <h3 className="text-3xl font-bold">{platform.title}</h3>
                  <p className="text-white/90 font-semibold mt-1">{platform.subtitle}</p>
                </div>
                <div className="text-5xl">{platform.icon}</div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="text-stem-gray leading-relaxed mb-6">{platform.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {platform.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <span className="text-stem-yellow font-bold">✓</span>
                      <span className="text-sm text-stem-dark font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="btn-primary w-full text-stem-navy hover:scale-105 transition-transform">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-stem-blue to-stem-light-blue text-white rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            One Platform. Endless Possibilities.
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: '💬', title: 'ENGAGE', subtitle: 'Interactive learning that inspires curiosity.' },
              { icon: '📖', title: 'LEARN', subtitle: 'Build skills with structured and smart content.' },
              { icon: '💡', title: 'INNOVATE', subtitle: 'Encouraging creativity through real-world applications.' },
              { icon: '🏆', title: 'SUCCEED', subtitle: 'Empowering learners to achieve and excel.' },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl mb-2">{feature.icon}</div>
                <h4 className="font-bold mb-1">{feature.title}</h4>
                <p className="text-white/80 text-xs">{feature.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
