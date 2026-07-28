import React, { useEffect, useState } from 'react';
import profileImg from './profile.jpg';

const ATS_RESUME_TEXT = `MUHAMMED ILYAS K S
Backend Developer & Technical Lead | 9+ Years Experience
Email: developer.muhammedilyas@gmail.com | Phone: +91 8089579575
LinkedIn: https://www.linkedin.com/in/muhammed-ilyas-519b45186/
GitHub: https://github.com/ilyasyuva20/portfolio
Location: Kerala, India | Availability: Immediate (0-Day Notice)

===================================================================
PROFESSIONAL SUMMARY
===================================================================
Results-driven Backend Developer and Technical Lead with 9+ years engineering high-performance PHP and Node.js microservices, AI chatbot architectures on AWS Bedrock, and secure payment integrations. Proven track record of improving API throughput by 30%, optimizing database performance across MongoDB and MySQL, and building automated AI workflows.

===================================================================
CORE COMPETENCIES & TECHNICAL SKILLS
===================================================================
• Programming Languages & Frameworks: PHP (CodeIgniter, Custom Frameworks), Node.js (NestJS, Express.js), JavaScript (ES6+), HTML5, CSS3, React.js
• AI & Machine Learning Tools: AWS Bedrock Agent Architectures, Claude, ChatGPT, Antigravity AI Agents
• Databases & Caching: MySQL, MongoDB, Redis
• Cloud & CMS / E-Commerce: AWS, Cloudflare, Vercel, Shopify Theme Development, WordPress (Elementor)
• Architecture & Tools: Microservices, RESTful APIs, JWT Authentication, Role-Based Access Control (RBAC), Git, Postman, Jira, Agile/Scrum

===================================================================
WORK EXPERIENCE
===================================================================
Freelance AI & Web Developer | Self-Employed
Feb 2026 – Present
• Spearheaded AI-driven development workflows using Claude, ChatGPT, and Antigravity AI agents for rapid software delivery and code optimization.
• Developed and launched 2 full e-commerce stores on Shopify with customized Liquid themes.
• Built 2 responsive business portals on WordPress utilizing Elementor and custom PHP snippets.

Technical Lead | Geesesquads Software Services Pvt Ltd (Kochi, India)
Nov 2025 – Feb 2026
• Architected modular AI chatbot application backend powered by AWS Bedrock Agents.
• Implemented vector knowledge-base models on AWS Bedrock for enterprise chat applications.

Backend Developer | ISPG Technologies Pvt Ltd (Kochi, India)
Mar 2019 – Oct 2025
• Designed microservices with Node.js and NestJS, enabling seamless third-party integrations.
• Integrated secure payment gateways including Razorpay, Stripe, and PayPal.
• Implemented JWT authentication & RBAC; optimized MongoDB aggregation queries, increasing API response speeds by 30%.

Senior Software Developer | Eden Innovative Infotech (Kochi, India)
Jan 2018 – Feb 2019
• Developed robust PHP CodeIgniter backend services and REST APIs for iOS and Android mobile apps.

Software Developer | The Experiience (Kochi, India)
Jan 2016 – Jan 2018
• Created full-stack PHP web applications and optimized relational database schemas in MySQL.

===================================================================
EDUCATION
===================================================================
• M.Sc. Applied Statistics with Computer Applications | Mahatma Gandhi University (2012 – 2014)
• B.Sc. Information Technology | Mahatma Gandhi University (2008 – 2011)
`;

export default function App() {
  const [showHireModal, setShowHireModal] = useState(false);
  const [showAtsModal, setShowAtsModal] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(hover: none)').matches;

    // Interactive Particle Canvas Background
    const canvas = document.getElementById('bgCanvas');
    let animId;
    if (canvas && !reduceMotion) {
      const ctx = canvas.getContext('2d');
      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);
      const particles = [];
      const count = Math.min(Math.floor(width / 26), 40);

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
        });
      }

      const render = () => {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = 'rgba(232, 163, 61, 0.35)';
        ctx.strokeStyle = 'rgba(232, 163, 61, 0.07)';

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();

          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
        animId = requestAnimationFrame(render);
      };
      render();

      const handleResize = () => {
        if (!canvas) return;
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      };
      window.addEventListener('resize', handleResize);
    }

    // Scroll progress bar
    const progressBar = document.getElementById('progressBar');
    const updateProgress = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      if (progressBar) {
        progressBar.style.width = (scrolled || 0) + '%';
      }
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    // Typewriter effect
    const nameEl = document.getElementById('heroName');
    const fullName = "Muhammed Ilyas K S";
    const roleEl = document.getElementById('roleTyped');
    const roleText = "whoami --role";

    if (nameEl && roleEl) {
      if (reduceMotion) {
        nameEl.textContent = fullName;
        roleEl.textContent = roleText;
      } else {
        nameEl.innerHTML = '';
        fullName.split('').forEach((ch, i) => {
          const span = document.createElement('span');
          span.className = 'char';
          span.textContent = ch === ' ' ? '\u00A0' : ch;
          span.style.opacity = '0';
          span.style.transform = 'translateY(16px)';
          span.style.transition = 'opacity 420ms cubic-bezier(0.16,1,0.3,1), transform 420ms cubic-bezier(0.16,1,0.3,1)';
          span.style.transitionDelay = 550 + i * 28 + 'ms';
          nameEl.appendChild(span);
        });
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            nameEl.querySelectorAll('.char').forEach((span) => {
              span.style.opacity = '1';
              span.style.transform = 'none';
            });
          });
        });

        let i = 0;
        const typeChar = () => {
          if (i <= roleText.length) {
            roleEl.textContent = roleText.slice(0, i);
            i++;
            setTimeout(typeChar, 30);
          }
        };
        setTimeout(typeChar, 150);
      }
    }

    // Hero glow & 3D Tilt Card effect
    const heroGlow = document.getElementById('heroGlow');
    const heroSection = document.querySelector('.hero');
    const handleMouseMove = (e) => {
      if (!heroSection || !heroGlow) return;
      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left - 230;
      const y = e.clientY - rect.top - 230;
      heroGlow.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    };
    if (!reduceMotion && !isTouch && heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove);
    }

    // Magnetic buttons
    const magneticEls = document.querySelectorAll('.magnetic');
    const handleMagMove = (e) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
    };
    const handleMagLeave = (e) => {
      const el = e.currentTarget;
      el.style.transform = 'translate(0,0)';
    };

    if (!reduceMotion && !isTouch) {
      magneticEls.forEach((el) => {
        el.addEventListener('mousemove', handleMagMove);
        el.addEventListener('mouseleave', handleMagLeave);
      });
    }

    // Stat Counter animation
    const animateCount = (el) => {
      const target = parseFloat(el.getAttribute('data-count'));
      const suffix = el.getAttribute('data-suffix') || '';
      if (reduceMotion) {
        el.textContent = target + suffix;
        return;
      }
      const duration = 1200;
      let start = null;
      const step = (ts) => {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target + suffix;
      };
      requestAnimationFrame(step);
    };

    // Intersection Observers
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    let counted = false;

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );
      revealEls.forEach((el) => io.observe(el));

      document.querySelectorAll('.t-item').forEach((el, idx) => {
        el.style.setProperty('--d', idx * 110 + 'ms');
      });

      document.querySelectorAll('.skill-group').forEach((group) => {
        group.querySelectorAll('.pill').forEach((pill, idx) => {
          pill.style.setProperty('--pd', idx * 60 + 'ms');
        });
        const sio = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              sio.unobserve(entry.target);
            }
          });
        }, { threshold: 0.2 });
        sio.observe(group);
      });

      const statList = document.querySelector('.stat-list');
      if (statList) {
        const cio = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !counted) {
              counted = true;
              document.querySelectorAll('.stat .num').forEach(animateCount);
              cio.unobserve(statList);
            }
          });
        }, { threshold: 0.4 });
        cio.observe(statList);
      }

      // Active nav link highlight
      const sections = document.querySelectorAll('main section[id]');
      const navLinks = document.querySelectorAll('nav.links a');
      if (sections.length) {
        const navObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const id = entry.target.getAttribute('id');
              const link = document.querySelector(`nav.links a[href="#${id}"]`);
              if (!link) return;
              if (entry.isIntersecting) {
                navLinks.forEach((l) => l.classList.remove('active'));
                link.classList.add('active');
              }
            });
          },
          { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
        );
        sections.forEach((s) => navObserver.observe(s));
      }
    } else {
      revealEls.forEach((el) => el.classList.add('is-visible'));
      document.querySelectorAll('.skill-group').forEach((g) => g.classList.add('is-visible'));
      document.querySelectorAll('.stat .num').forEach(animateCount);
    }

    // Scroll to Top button listener
    const toTop = document.getElementById('toTop');
    const handleScrollToTopVisible = () => {
      if (toTop) {
        if (window.scrollY > 480) {
          toTop.classList.add('visible');
        } else {
          toTop.classList.remove('visible');
        }
      }
    };
    window.addEventListener('scroll', handleScrollToTopVisible, { passive: true });

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('scroll', handleScrollToTopVisible);
      if (heroSection) heroSection.removeEventListener('mousemove', handleMouseMove);
      magneticEls.forEach((el) => {
        el.removeEventListener('mousemove', handleMagMove);
        el.removeEventListener('mouseleave', handleMagLeave);
      });
    };
  }, []);

  const handleScrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  const handleCopyAtsText = () => {
    navigator.clipboard.writeText(ATS_RESUME_TEXT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <>
      <canvas id="bgCanvas" aria-hidden="true"></canvas>
      <div className="progress-bar" id="progressBar"></div>

      <div className="urgent-banner">
        <span className="pulse-dot"></span>
        <span>AVAILABLE IMMEDIATELY FOR FULL-TIME & FREELANCE ROLES (0-DAY NOTICE PERIOD)</span>
        <a onClick={() => setShowHireModal(true)}>⚡ Schedule Quick Appointment</a>
      </div>

      <header className="nav">
        <div className="nav-inner">
          <a href="#top" className="nav-mark" aria-label="Muhammed Ilyas K S, home">
            <span className="prompt">~/</span>ilyas
          </a>
          <nav className="links" aria-label="Primary">
            <a href="#about">about</a>
            <a href="#experience">experience</a>
            <a href="#skills">skills</a>
            <a href="#projects">projects</a>
            <a href="#education">education</a>
            <a href="#contact">contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* HERO SECTION */}
        <section className="hero">
          <div id="heroGlow" aria-hidden="true"></div>
          <div className="wrap">
            <div className="win hero-win reveal tilt-card">
              <div className="win-bar">
                <div className="dots"><span></span><span></span><span></span></div>
                <span className="filename">profile.json — zsh</span>
              </div>
              <div className="hero-body">
                <div>
                  <div className="badge-open">
                    <span className="dot" aria-hidden="true"></span>
                    open_to_work: true (Immediate Availability)
                  </div>
                  <p className="role-line">
                    <span className="prompt">ilyas@backend:~$</span>{' '}
                    <span id="roleTyped"></span>
                    <span className="cursor-blink">&nbsp;</span>
                  </p>
                  <h1 id="heroName" aria-label="Muhammed Ilyas K S"></h1>
                  <p className="value-prop">
                    9+ years engineering scalable PHP and Node.js systems — now building AI chatbot architectures on AWS Bedrock and shipping AI-accelerated automation for clients worldwide.
                  </p>
                  <div className="stack-pills" aria-label="Core stack">
                    <span className="pill">PHP · CodeIgniter</span>
                    <span className="pill">Node.js · NestJS</span>
                    <span className="pill">AWS Bedrock</span>
                    <span className="pill">Shopify</span>
                    <span className="pill">WordPress</span>
                  </div>
                  <div className="cta-row">
                    <button className="btn btn-hire magnetic" onClick={() => setShowHireModal(true)}>
                      ⚡ Fast-Track Hire
                    </button>
                    <button className="btn btn-ats magnetic" onClick={() => setShowAtsModal(true)}>
                      📄 ATS Resume View
                    </button>
                    <a
                      className="btn btn-secondary magnetic"
                      href="https://github.com/ilyasyuva20/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
                <div className="hero-photo">
                  <div className="frame">
                    <img src={profileImg} alt="Portrait of Muhammed Ilyas K S" />
                    <div className="ring" aria-hidden="true"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about">
          <div className="wrap about-grid">
            <div className="reveal-left about-text">
              <p className="eyebrow">about</p>
              <h2 className="section-title">Systems built to hold up under real traffic</h2>
              <div className="win tilt-card">
                <div className="win-bar">
                  <div className="dots"><span></span><span></span><span></span></div>
                  <span className="filename">README.md</span>
                </div>
                <div className="t-body">
                  <p>
                    Ilyas is a Backend Developer and Technical Lead with over 9 years delivering scalable web applications, cloud-based AI solutions, and secure automation systems. His core strength is PHP (CodeIgniter and custom frameworks) and Node.js (NestJS, Express.js), paired with hands-on experience building AI chatbot architectures on AWS Bedrock.
                  </p>
                  <p style={{ marginTop: '14px' }}>
                    He has integrated secure payment gateways, implemented JWT authentication and role-based access control, and optimized databases across MySQL, MongoDB, and Redis. Most recently, he's been applying AI coding agents — Claude, ChatGPT, and Antigravity — to accelerate freelance development across e-commerce and CMS platforms.
                  </p>
                </div>
              </div>
            </div>
            <div className="reveal-right stat-list">
              <div className="stat">
                <span className="num" data-count="9" data-suffix="+">0</span>
                <span className="label">years_of_experience</span>
              </div>
              <div className="stat">
                <span className="num" data-count="5" data-suffix="">0</span>
                <span className="label">roles_across_stack</span>
              </div>
              <div className="stat">
                <span className="num" data-count="30" data-suffix="%">0</span>
                <span className="label">api_perf_gain_ispg</span>
              </div>
              <div className="stat">
                <span className="num" data-count="4" data-suffix="">0</span>
                <span className="label">platforms_shipped</span>
              </div>
            </div>

            <div className="reveal executive-card tilt-card" style={{ gridColumn: '1 / -1', marginTop: '24px' }}>
              <h3>⚡ Why Hiring Managers &amp; Clients Choose Muhammed Ilyas K S</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px' }}>
                A proven Senior Lead engineered to integrate immediately into high-velocity tech teams with zero ramp-up delay:
              </p>
              <div className="guarantee-grid">
                <div className="guarantee-card">
                  <div className="icon">🚀</div>
                  <h4>0-Day Notice Period</h4>
                  <p>Immediate joining availability for full-time backend, lead, or contract engineering roles.</p>
                </div>
                <div className="guarantee-card">
                  <div className="icon">📈</div>
                  <h4>30% API Performance Boost</h4>
                  <p>Demonstrated history optimizing MongoDB query execution and microservices latency.</p>
                </div>
                <div className="guarantee-card">
                  <div className="icon">🤖</div>
                  <h4>AWS Bedrock AI Integration</h4>
                  <p>Hands-on enterprise AI agent development, vector knowledge-bases, and automated workflows.</p>
                </div>
                <div className="guarantee-card">
                  <div className="icon">🛡️</div>
                  <h4>Production-Grade Security</h4>
                  <p>Expert implementation of JWT, RBAC, and secure global payments (Stripe, Razorpay, PayPal).</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience">
          <div className="wrap">
            <p className="eyebrow reveal">experience</p>
            <h2 className="section-title reveal">Where the systems were built</h2>
            <div className="timeline">

              <div className="t-item current win reveal tilt-card">
                <div className="win-bar">
                  <div className="dots"><span></span><span></span><span></span></div>
                  <span className="filename">freelance.log <span className="status">RUNNING</span></span>
                </div>
                <div className="t-body">
                  <div className="role">Freelance AI &amp; Web Developer</div>
                  <div className="org">Independent</div>
                  <div className="dates">02/2026 — Present</div>
                  <ul>
                    <li>Delivered AI-driven development projects using Claude, ChatGPT, and Antigravity AI coding agents for rapid prototyping, coding automation, and workflow acceleration.</li>
                    <li>Built and launched 2 e-commerce websites on Shopify, including theme customization and store configuration.</li>
                    <li>Designed and developed 2 business websites on WordPress using the Elementor page builder, providing end-to-end freelance solutions spanning AI integration, automation, and full-stack development.</li>
                  </ul>
                </div>
              </div>

              <div className="t-item past win reveal tilt-card">
                <div className="win-bar">
                  <div className="dots"><span></span><span></span><span></span></div>
                  <span className="filename">geesesquads.log <span className="status">COMPLETE</span></span>
                </div>
                <div className="t-body">
                  <div className="role">Technical Lead</div>
                  <div className="org">Geesesquads Software Services Private Limited — Kochi, India</div>
                  <div className="dates">11/2025 — 02/2026</div>
                  <ul>
                    <li>Built an AI chatbot application architecture for modular applications.</li>
                    <li>Integrated an AWS Bedrock agent system into the chatbot platform.</li>
                    <li>Implemented a knowledge-based model using AWS Bedrock for chat applications.</li>
                  </ul>
                </div>
              </div>

              <div className="t-item past win reveal tilt-card">
                <div className="win-bar">
                  <div className="dots"><span></span><span></span><span></span></div>
                  <span className="filename">ispg.log <span className="status">COMPLETE</span></span>
                </div>
                <div className="t-body">
                  <div className="role">Backend Developer</div>
                  <div className="org">ISPG Technologies Pvt Ltd — Kochi, India</div>
                  <div className="dates">03/2019 — 10/2025</div>
                  <ul>
                    <li>Designed and developed backend systems with PHP, Node.js, and NestJS, building microservices architecture for modular applications.</li>
                    <li>Integrated secure payment gateways including Razorpay, Stripe, and PayPal.</li>
                    <li>Implemented JWT-based authentication and role-based access control, and optimized MongoDB queries — improving API performance by 30%.</li>
                  </ul>
                </div>
              </div>

              <div className="t-item compact win reveal tilt-card">
                <div className="t-body">
                  <span className="role">Senior Software Developer</span>
                  <span className="org">— Eden Innovative Infotech, Kochi, India</span>
                  <span className="dates">01/2018 — 02/2019</span>
                  <span className="compact-line">Developed PHP CodeIgniter backend features and WordPress CMS plugins; built reusable REST APIs consumed by iOS and Android apps.</span>
                </div>
              </div>

              <div className="t-item compact win reveal tilt-card">
                <div className="t-body">
                  <span className="role">Software Developer</span>
                  <span className="org">— The Experiience, Kochi, India</span>
                  <span className="dates">01/2016 — 01/2018</span>
                  <span className="compact-line">Built full-fledged PHP (CodeIgniter) backend solutions with optimized MySQL schemas and responsive client dashboards.</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills">
          <div className="wrap">
            <p className="eyebrow reveal">skills</p>
            <h2 className="section-title reveal">The stack, end to end</h2>
            <div className="skills-grid">
              <div className="skill-group reveal tilt-card">
                <h3>Programming &amp; Frameworks</h3>
                <div className="pills">
                  <span className="pill">PHP</span>
                  <span className="pill">CodeIgniter</span>
                  <span className="pill">Node.js</span>
                  <span className="pill">NestJS</span>
                  <span className="pill">Express.js</span>
                </div>
              </div>
              <div className="skill-group reveal tilt-card">
                <h3>AI Tools &amp; Platforms</h3>
                <div className="pills">
                  <span className="pill">AWS Bedrock</span>
                  <span className="pill">Claude</span>
                  <span className="pill">ChatGPT</span>
                  <span className="pill">Antigravity</span>
                </div>
              </div>
              <div className="skill-group reveal tilt-card">
                <h3>Databases</h3>
                <div className="pills">
                  <span className="pill">MySQL</span>
                  <span className="pill">MongoDB</span>
                  <span className="pill">Redis</span>
                </div>
              </div>
              <div className="skill-group reveal tilt-card">
                <h3>Frontend &amp; CMS / E-commerce</h3>
                <div className="pills">
                  <span className="pill">React.js</span>
                  <span className="pill">JavaScript</span>
                  <span className="pill">HTML5</span>
                  <span className="pill">CSS3</span>
                  <span className="pill">WordPress (Elementor)</span>
                  <span className="pill">Shopify</span>
                </div>
              </div>
              <div className="skill-group reveal tilt-card">
                <h3>Tools &amp; Version Control</h3>
                <div className="pills">
                  <span className="pill">Git</span>
                  <span className="pill">Bitbucket</span>
                  <span className="pill">Jira</span>
                  <span className="pill">Postman</span>
                </div>
              </div>
              <div className="skill-group reveal tilt-card">
                <h3>Practices</h3>
                <div className="pills">
                  <span className="pill">Microservices</span>
                  <span className="pill">REST APIs</span>
                  <span className="pill">JWT Auth</span>
                  <span className="pill">Agile</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects">
          <div className="wrap">
            <p className="eyebrow reveal">projects</p>
            <h2 className="section-title reveal">Selected builds</h2>
            <div className="projects-grid">
              <div className="project-card reveal tilt-card">
                <h3>Pedal — Global Driving School Platform</h3>
                <span className="stack">NestJS · Express.js · React · MongoDB</span>
                <ul>
                  <li>SaaS platform connecting students, instructors, and regulators for driving schools.</li>
                  <li>Implemented scheduling, payment gateways, and real-time progress tracking.</li>
                  <li>Delivered a production-ready system used by clients in the UAE and globally.</li>
                </ul>
              </div>
              <div className="project-card reveal tilt-card">
                <h3>City Info Services — Real Estate Platform</h3>
                <span className="stack">PHP · MySQL · ElasticSearch</span>
                <ul>
                  <li>End-to-end property management, tenancy tracking, and customer interaction modules.</li>
                  <li>Advanced search with ElasticSearch for high-performance filtering.</li>
                  <li>SEO-optimized platform, increasing organic visibility and traffic.</li>
                </ul>
              </div>
              <div className="project-card reveal tilt-card">
                <h3>Washing Control Application</h3>
                <span className="stack">PHP · React · MySQL</span>
                <ul>
                  <li>Vehicle wash management system with digital task assignments.</li>
                  <li>Workers upload images, supervisors approve, admins track performance.</li>
                  <li>Live status updates and analytics dashboards with role-based views.</li>
                </ul>
              </div>
              <div className="project-card reveal tilt-card">
                <h3>NetTrade — US Real Estate Marketplace</h3>
                <span className="stack">PHP · MySQL · ElasticSearch</span>
                <ul>
                  <li>Listing management for net lease commercial (STNL) properties.</li>
                  <li>Cap rate calculations, lease tracking, and property reports.</li>
                  <li>Integrated inventory maps and market trend analytics.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education">
          <div className="wrap">
            <p className="eyebrow reveal">education</p>
            <h2 className="section-title reveal">Foundations</h2>
            <div className="edu-list">
              <div className="edu-item reveal tilt-card">
                <div>
                  <div className="degree">M.Sc. Applied Statistics with Computer Applications</div>
                  <div className="school">Mahatma Gandhi University, Kerala</div>
                </div>
                <div className="years">2012 – 2014</div>
              </div>
              <div className="edu-item reveal tilt-card">
                <div>
                  <div className="degree">B.Sc. Information Technology</div>
                  <div className="school">Mahatma Gandhi University, Kerala</div>
                </div>
                <div className="years">2008 – 2011</div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="contact-section">
          <div className="wrap">
            <p className="eyebrow reveal" style={{ justifyContent: 'center' }}>contact</p>
            <h2 className="section-title reveal">Let's build something reliable</h2>
            <p className="lede reveal">Based in Kerala, India — open to backend, AI automation, and cloud infrastructure roles. Reach out directly.</p>
            <div className="contact-links reveal">
              <a className="contact-card magnetic" href="mailto:developer.muhammedilyas@gmail.com">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16v16H4z" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
                developer.muhammedilyas@gmail.com
              </a>
              <a className="contact-card magnetic" href="tel:+918089579575">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (+91) 8089579575
              </a>
              <a
                className="contact-card magnetic"
                href="https://www.linkedin.com/in/muhammed-ilyas-519b45186/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
                linkedin.com/in/muhammed-ilyas
              </a>
              <a
                className="contact-card magnetic"
                href="https://github.com/ilyasyuva20/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                github.com/ilyasyuva20
              </a>
              <a
                className="contact-card magnetic"
                href="https://vercel.com/ilyasyuva20s-projects"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 22.5D12 1.5 0 22.5h24z"/>
                </svg>
                vercel.com/ilyasyuva20s-projects
              </a>
              <a
                className="contact-card magnetic"
                href="https://dash.cloudflare.com/profile/settings"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                </svg>
                Cloudflare Settings
              </a>
              <a
                className="contact-card magnetic"
                href="https://us-east-1.console.aws.amazon.com/billing/home?region=us-east-1#/account"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.763 10.034c0 .265.04.475.12.63.08.155.205.285.375.39.17.105.375.18.615.225.24.045.51.068.81.068.39 0 .74-.045 1.05-.135.31-.09.585-.21.825-.36.24-.15.42-.33.54-.54.12-.21.18-.435.18-.675v-1.62h-1.32v1.17c0 .12-.015.225-.045.315a.434.434 0 0 1-.15.225c-.06.06-.15.105-.27.135a1.442 1.442 0 0 1-.42.045c-.15 0-.27-.015-.36-.045a.466.466 0 0 1-.225-.135.434.434 0 0 1-.105-.225 1.045 1.045 0 0 1-.03-.315V7.544h-1.32v2.49zm10.474-3.52c-.63 0-1.155.15-1.575.45-.42.3-.675.735-.765 1.305h1.32c.06-.285.18-.495.36-.63.18-.135.42-.202.72-.202.3 0 .54.067.72.202.18.135.27.315.27.54 0 .15-.045.285-.135.405-.09.12-.225.225-.405.315l-.81.405c-.48.24-.855.525-1.125.855-.27.33-.405.735-.405 1.215 0 .54.18.975.54 1.305.36.33.855.495 1.485.495.45 0 .855-.09 1.215-.27.36-.18.66-.435.9-.765v.9h1.32V9.674c0-.96-.285-1.68-.855-2.16-.57-.48-1.365-.72-2.385-.72zm.27 5.61c-.18.135-.405.202-.675.202-.24 0-.435-.06-.585-.18-.15-.12-.225-.285-.225-.495 0-.21.075-.39.225-.54.15-.15.39-.285.72-.405l.63-.315c.06.315.09.585.09.81 0 .39-.06.69-.18.923zM0 17.144c4.896 2.505 10.96 3.195 16.59 1.23 2.82-.99 5.43-2.61 7.41-4.71.375-.39.06-.885-.42-.66-3.21 1.545-6.84 2.385-10.47 2.385-4.485 0-8.91-1.29-12.705-3.69-.495-.315-.885.225-.405.615z"/>
                </svg>
                AWS Account Billing
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">© 2026 Muhammed Ilyas K S. Kerala, India.</div>
      </footer>

      {/* FAST-TRACK HIRE MODAL */}
      <div className={`modal-overlay ${showHireModal ? 'active' : ''}`}>
        <div className="modal-card">
          <div className="modal-header">
            <h3>⚡ Fast-Track Hiring &amp; Appointment</h3>
            <button className="modal-close" onClick={() => setShowHireModal(false)}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            <div className="hire-badge-header">
              <span className="dot"></span> Status: Immediate Joiner (0-Day Notice)
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', marginBottom: '16px' }}>
              Looking for a Senior Backend Lead with 9+ years experience in PHP, Node.js, and AWS Bedrock AI architectures? Select an option below to connect directly:
            </p>
            <div className="hire-grid">
              <a className="hire-option" href="mailto:developer.muhammedilyas@gmail.com?subject=Job%20Offer%20%2F%20Interview%20Request%20-%20Muhammed%20Ilyas">
                <div className="title">✉️ Direct Email Appointment</div>
                <div className="desc">Send job offer or scheduling details directly to developer.muhammedilyas@gmail.com</div>
              </a>
              <a className="hire-option" href="tel:+918089579575">
                <div className="title">📞 Immediate Phone Call</div>
                <div className="desc">Call (+91) 8089579575 to discuss technical roles or direct recruitment</div>
              </a>
              <a className="hire-option" href="https://www.linkedin.com/in/muhammed-ilyas-519b45186/" target="_blank" rel="noopener noreferrer">
                <div className="title">💼 LinkedIn InMail</div>
                <div className="desc">Connect on LinkedIn for official recruiter outreach and company appointments</div>
              </a>
              <button className="hire-option" style={{ textLeft: 'left', cursor: 'pointer' }} onClick={() => { setShowHireModal(false); setShowAtsModal(true); }}>
                <div className="title">📄 Download ATS CV</div>
                <div className="desc">View machine-readable resume for company ATS software & HR review</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ATS RESUME MODAL */}
      <div className={`modal-overlay ${showAtsModal ? 'active' : ''}`}>
        <div className="modal-card" style={{ maxWidth: '780px' }}>
          <div className="modal-header">
            <h3>📄 ATS-Friendly Resume Viewer</h3>
            <button className="modal-close" onClick={() => setShowAtsModal(false)}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            <div className="ats-resume-box">{ATS_RESUME_TEXT}</div>
            <div className="ats-action-bar">
              <button className="btn btn-primary magnetic" onClick={handleCopyAtsText}>
                {copied ? '✓ Copied to Clipboard!' : '📋 Copy Plaintext Resume'}
              </button>
              <button className="btn btn-secondary magnetic" onClick={() => window.print()}>
                🖨️ Print / Save PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      <button className="to-top" id="toTop" aria-label="Scroll to top" onClick={handleScrollToTop}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    </>
  );
}
