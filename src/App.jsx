import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Code2,
  Database,
  Terminal,
  ChevronRight,
  User,
  Cpu,
  Layers,
  Send
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0 font-bold text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Muhammed Ilyas
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </nav>
);

const SectionHeading = ({ children, subtitle }) => (
  <div className="mb-12 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
  </div>
);

const App = () => {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen selection:bg-blue-500/30 bg-grain">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1
              }}
              className="mb-10 inline-block p-1.5 rounded-[2.5rem] bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-500 shadow-2xl shadow-blue-500/20"
            >
              <div className="bg-gray-950 rounded-[2.3rem] p-1">
                <div className="w-40 h-40 md:w-52 md:h-52 rounded-[2.2rem] overflow-hidden bg-gray-900 flex items-center justify-center border border-gray-800">
                  <img src="/profile.jpg" alt="Muhammed Ilyas" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100" />
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-black mb-6 tracking-tighter"
            >
              I'm <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent text-glow">Muhammed Ilyas</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-medium leading-relaxed"
            >
              Technical Lead & Backend Architect <br className="hidden md:block" />
              Crafting <span className="text-white border-b-2 border-blue-500/50">scalable systems</span> with Node.js & PHP
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a href="#contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25">
                Get In Touch
              </a>
              <a href="#projects" className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 rounded-full font-bold transition-all transform hover:scale-105">
                View Projects
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
              <ChevronDown className="text-gray-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="A glimpse into my professional journey">About Me</SectionHeading>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-blue-400">9+ Years of Engineering Excellence</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                I am a dedicated Backend Developer and Technical Lead with over 9 years of experience in delivering high-performance, scalable web applications. My expertise spans across modern frameworks like NestJS and CodeIgniter, with a strong focus on REST API design, microservices architecture, and database optimization.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Currently serving as a <span className="text-white font-semibold">Technical Lead at Geesesquads</span>, I lead cross-functional teams to build innovative solutions, including AI-driven chatbot architectures and modular system designs.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { label: 'Role', value: 'Technical Lead' },
                  { label: 'Location', value: 'Kochi, India' },
                  { label: 'Experience', value: '9+ Years' },
                  { label: 'Expertise', value: 'Backend / Architecture' }
                ].map((stat, i) => (
                  <div key={i} className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                    <div className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</div>
                    <div className="text-white font-bold">{stat.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
            >
              <div className="aspect-video bg-gray-800 flex items-center justify-center border border-gray-700 rounded-2xl">
                <Terminal size={80} className="text-blue-500/50 group-hover:text-blue-500 transition-colors duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Technologies I work with daily">Expertise</SectionHeading>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="text-blue-400" size={32} />,
                title: 'Backend Mastery',
                skills: ['Node.js (NestJS, Express)', 'PHP (CodeIgniter)', 'Microservices Architecture', 'RESTful APIs']
              },
              {
                icon: <Database className="text-cyan-400" size={32} />,
                title: 'Data & Performance',
                skills: ['MySQL & MongoDB', 'Redis Caching', 'ElasticSearch Integration', 'Database Optimization']
              },
              {
                icon: <Cpu className="text-purple-400" size={32} />,
                title: 'Architecture & DevOps',
                skills: ['AWS Bedrock (AI/LLM)', 'JWT & Role-based Auth', 'Git / GitHub / Bitbucket', 'Agile & Scrum']
              }
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="mb-6 p-4 bg-gray-900 rounded-xl w-fit group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold mb-6">{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.skills.map((skill, si) => (
                    <li key={si} className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors">
                      <ChevronRight size={16} className="text-blue-500 mr-2 group-hover:translate-x-1 transition-transform" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Selection of recent landmark work">Featured Projects</SectionHeading>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Pedal',
                desc: 'A Global Driving School SaaS platform connecting students, instructors, and regulators.',
                tech: ['NestJS', 'React', 'MongoDB', 'Payment Gateways'],
                details: 'Implemented scheduling, real-time tracking, and automated license verification.'
              },
              {
                title: 'City Info Services',
                desc: 'Real Estate Platform with advanced property and tenancy management.',
                tech: ['PHP', 'MySQL', 'ElasticSearch'],
                details: 'Developed dynamic dashboards with tenancy expiry alerts and lead generation workflows.'
              },
              {
                title: 'Washing Control',
                desc: 'Vehicle wash management system with digital task assignments and live analytics.',
                tech: ['PHP (CodeIgniter)', 'React', 'MySQL'],
                details: 'Streamlined workflow for supervisors and workers with role-based dashboards.'
              },
              {
                title: 'NetTrade',
                desc: 'US-based Real Estate Marketplace for net lease commercial properties.',
                tech: ['Node.js', 'ElasticSearch', 'React'],
                details: 'Implemented cap rate calculations, lease tracking, and market trend analytics.'
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative glass-card rounded-[2rem] overflow-hidden"
              >
                <div className="p-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors font-sans tracking-tight">{project.title}</h3>
                    <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-600/20 transition-colors">
                      <Layers size={20} className="text-gray-500 group-hover:text-blue-400" />
                    </div>
                  </div>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.desc}</p>
                  <p className="text-sm text-gray-500 mb-8 italic border-l-2 border-blue-500/30 pl-4">{project.details}</p>
                  <div className="flex flex-wrap gap-2.5">
                    {project.tech.map((t, ti) => (
                      <span key={ti} className="px-4 py-1.5 bg-gray-800/50 text-blue-300 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-gray-700/50 group-hover:border-blue-500/30 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Let's build something amazing together">Contact Me</SectionHeading>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold">Ready to Elevate Your Platform?</h3>
              <p className="text-gray-400 text-lg">
                I'm always open to discussing technical leadership opportunities, backend architecture assignments, or complex web projects.
              </p>

              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="p-3 bg-blue-600/10 rounded-lg group-hover:bg-blue-600 transition-colors duration-300 mr-4">
                    <Mail size={24} className="text-blue-500 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase">Email</div>
                    <div className="text-white font-medium">developer.muhammedilyas@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="p-3 bg-cyan-600/10 rounded-lg group-hover:bg-cyan-600 transition-colors duration-300 mr-4">
                    <Linkedin size={24} className="text-cyan-500 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase">LinkedIn</div>
                    <div className="text-white font-medium">Muhammed Ilyas K S</div>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="p-3 bg-purple-600/10 rounded-lg group-hover:bg-purple-600 transition-colors duration-300 mr-4">
                    <Github size={24} className="text-purple-500 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase">Github</div>
                    <div className="text-white font-medium">@ilyas-ks</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-[2rem] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full -mr-16 -mt-16" />
              <form className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input type="text" className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input type="email" className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                  <textarea rows="4" className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all resize-none" placeholder="Tell me about your project..."></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl font-bold transition-all flex items-center justify-center space-x-3 shadow-lg shadow-blue-500/20 group">
                  <span className="tracking-wide">Send Inquiry</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin /></a>
            <a href="mailto:developer.muhammedilyas@gmail.com" className="text-gray-400 hover:text-white transition-colors"><Mail /></a>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Muhammed Ilyas K S. Built with React & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
