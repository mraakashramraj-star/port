"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  type ElementType,
  type ReactNode,
  type HTMLAttributes,
  type ComponentPropsWithoutRef,
} from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  ExternalLink,
  ArrowUp,
  ArrowRight,
  Code2,
  Database,
  Globe,
  Wrench,
  Trophy,
  Award,
  BookOpen,
  Users,
  GraduationCap,
  Sparkles,
  Menu,
  X,
  Send,
} from "lucide-react";

const AVATAR_SRC = "/avatar.jpg";

/* ------------------------------------------------------------------ */
/* Data — sourced only from the resume                                 */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const ROLES = ["IT Undergraduate", "Software Developer", "ML Enthusiast", "Problem Solver"];

const STATS = [
  { label: "CGPA", value: 7.5, suffix: "", decimals: 1 },
  { label: "Projects Built", value: 2, suffix: "", decimals: 0 },
  { label: "Core Skills", value: 6, suffix: "+", decimals: 0 },
  { label: "Grad Year", value: 2027, suffix: "", decimals: 0 },
];

const SKILL_GROUPS = [
  {
    title: "Programming",
    icon: Code2,
    items: ["Java", "Python", "JavaScript"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["MySQL"],
  },
  {
    title: "Web Development",
    icon: Globe,
    items: ["HTML", "CSS"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    items: ["Git", "VS Code", "Jupyter Notebook"],
  },
];

const SOFT_SKILLS = ["Problem Solving", "Team Collaboration", "Time Management", "Adaptability", "Strong Work Ethic"];

const PROJECTS = [
  {
    title: "Hospital Outpatient Management System",
    description:
      "An automated web-based registration platform that simplifies hospital outpatient scheduling and data handling — built to cut down manual paperwork and speed up front-desk operations.",
    tech: ["HTML", "CSS", "MySQL"],
    highlight: "Structured interface that minimizes manual processes and improves operational efficiency.",
  },
  {
    title: "Comment Sentiment Classifier",
    description:
      "A Python-based sentiment detection model that analyzes user reviews and feedback to determine emotional tone, using machine learning and NLP techniques.",
    tech: ["Python", "Machine Learning", "NLP"],
    highlight: "Applied ML and NLP to turn raw feedback into a clearer read on user perception.",
  },
];

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: "Smart India Hackathon 2024",
    detail: "Participated with a team-based IT innovation project.",
  },
  {
    icon: Award,
    title: "Java Programming Certification",
    detail: "Completed certification course on Coursera.",
  },
  {
    icon: Sparkles,
    title: "PSNA CodeSprint 2024",
    detail: "Placed among the top performers in the college-wide coding sprint.",
  },
  {
    icon: BookOpen,
    title: "Expert Lecture Series",
    detail: "Attended sessions on Data Analytics and Cloud Computing.",
  },
];

/* ------------------------------------------------------------------ */
/* Hooks                                                               */
/* ------------------------------------------------------------------ */

function useReveal(): [
  React.RefObject<HTMLDivElement>,
  boolean
] {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, visible];
}

function useCountUp(target, active, decimals = 0, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    let raf;
    const step = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(target * eased);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return val.toFixed(decimals);
}

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */


type RevealProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  delay?: number;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

function Reveal<T extends ElementType = "div">({
  as,
  children,
  className = "",
  delay = 0,
  ...rest
}: RevealProps<T>) {
  const Tag = (as || "div") as ElementType;
  const [ref, visible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function Magnetic({ children, strength = 18, className = "", ...rest }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) / r.width;
    const y = (e.clientY - r.top - r.height / 2) / r.height;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0px, 0px)";
  };
  return (
    <span
      ref={ref}
      className={`magnetic ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...rest}
    >
      {children}
    </span>
  );
}

function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(700px) rotateX(${py * -6}deg) rotateY(${px * 8}deg) translateY(-4px)`;
    el.style.setProperty("--mx", `${(px + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(py + 0.5) * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };
  return (
    <div ref={ref} className={`tilt-card ${className}`} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Loader                                                               */
/* ------------------------------------------------------------------ */

function Loader({ done }) {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setPct((p) => {
        if (p >= 100) {
          clearInterval(id);
          return 100;
        }
        const next = p + Math.random() * 14;
        return next > 100 ? 100 : next;
      });
    }, 110);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`loader ${done ? "loader-hide" : ""}`}>
      <div className="loader-inner">
        <div className="loader-logo">MRA</div>
        <div className="loader-bar-track">
          <div className="loader-bar-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="loader-pct">{Math.floor(pct)}%</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Cursor glow + scroll progress                                       */
/* ------------------------------------------------------------------ */

function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    let raf;
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let cx = mx, cy = my;
    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", onMove);
    const tick = () => {
      cx += (mx - cx) * 0.12;
      cy += (my - cy) * 0.12;
      if (el) el.style.transform = `translate(${cx}px, ${cy}px)`;
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return <div ref={ref} className="cursor-glow" />;
}

function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      setW(scrolled * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="scroll-progress" style={{ width: `${w}%` }} />;
}

/* ------------------------------------------------------------------ */
/* Navbar                                                               */
/* ------------------------------------------------------------------ */

function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <button className="brand" onClick={() => go("home")}>M.R. Aakash</button>
        <nav className="nav-links">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              className={`nav-link ${active === l.id ? "nav-link-active" : ""}`}
              onClick={() => go(l.id)}
            >
              {l.label}
              <span className="nav-underline" />
            </button>
          ))}
        </nav>
        <Magnetic strength={10}>
          <button className="btn btn-ghost nav-cta" onClick={() => go("contact")}>Let's Talk</button>
        </Magnetic>
        <button className="nav-toggle" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div className={`nav-mobile ${open ? "nav-mobile-open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <button key={l.id} className="nav-mobile-link" onClick={() => go(l.id)}>{l.label}</button>
        ))}
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                 */
/* ------------------------------------------------------------------ */

function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    let timeout;
    if (!deleting && typed.length < current.length) {
      timeout = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 65);
    } else if (!deleting && typed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1400);
    } else if (deleting && typed.length > 0) {
      timeout = setTimeout(() => setTyped(current.slice(0, typed.length - 1)), 35);
    } else if (deleting && typed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [typed, deleting, roleIdx]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="grid-layer" />
        <div className="orb orb-purple" />
        <div className="orb orb-blue" />
        <div className="beam beam-1" />
        <div className="beam beam-2" />
        <div className="noise-layer" />
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <p className="eyebrow reveal reveal-visible">
            <span className="dot-live" /> Dindigul, Tamil Nadu
          </p>
          <h1 className="hero-title">
            <span className="hero-title-line">Hi, I'm</span>
            <span className="hero-title-name">M.R. Aakash</span>
          </h1>
          <div className="hero-role">
            <span className="hero-role-prefix">I build things as a</span>
            <span className="hero-role-typed">{typed}<span className="caret" /></span>
          </div>
          <p className="hero-desc">
            A dedicated and curious Information Technology undergraduate, passionate about
            building reliable, efficient, user-centered software — and always learning
            something new along the way.
          </p>
          <div className="hero-actions">
            <Magnetic>
              <button className="btn btn-primary" onClick={() => scrollTo("projects")}>
                View Projects <ArrowRight size={16} />
              </button>
            </Magnetic>
            <Magnetic>
              <button className="btn btn-outline" onClick={() => scrollTo("contact")}>
                Get In Touch
              </button>
            </Magnetic>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-glow" />
          <div className="hero-photo-card">
            <img src={AVATAR_SRC} alt="M.R. Aakash portrait" className="hero-photo" />
            <div className="hero-photo-border" />
          </div>
          <div className="floating-chip chip-1">B.Tech IT · 2027</div>
          <div className="floating-chip chip-2">CGPA 7.5</div>
        </div>
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <div className="scroll-cue-line" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* About                                                                */
/* ------------------------------------------------------------------ */

function StatCard({ stat, active }) {
  const val = useCountUp(stat.value, active, stat.decimals);
  return (
    <div className="stat-card">
      <div className="stat-value">{val}{stat.suffix}</div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

function About() {
  const [ref, visible] = useReveal();
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <Reveal className="section-eyebrow">About</Reveal>
        <Reveal as="h2" className="section-title" delay={60}>Grounded in curiosity, built for software</Reveal>

        <div className="about-grid">
          <Reveal className="glass-card about-card" delay={100}>
            <p>
              I'm an Information Technology undergraduate at PSNA College of Engineering and
              Technology, currently working toward my B.Tech (2023 – 2027). I care about
              writing software that's reliable and genuinely useful to the person on the other
              end of the screen.
            </p>
            <p>
              Outside of coursework, I like picking apart real problems — hospital scheduling,
              understanding how people actually feel in their feedback — and turning them into
              working applications. I'm most energized when a project forces me to learn
              something I didn't know yesterday.
            </p>
          </Reveal>

          <div ref={ref} className="stats-grid">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={150 + i * 80}>
                <StatCard stat={s} active={visible} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Education                                                            */
/* ------------------------------------------------------------------ */

function Education() {
  return (
    <section id="education" className="section">
      <div className="section-inner">
        <Reveal className="section-eyebrow">Education</Reveal>
        <Reveal as="h2" className="section-title" delay={60}>Where it's being built</Reveal>

        <div className="timeline">
          <div className="timeline-line" />
          <Reveal className="timeline-item" delay={120}>
            <div className="timeline-dot" />
            <div className="glass-card timeline-card">
              <div className="timeline-card-head">
                <GraduationCap size={22} className="icon-accent" />
                <span className="timeline-year">2023 – 2027</span>
              </div>
              <h3>B.Tech in Information Technology</h3>
              <p className="timeline-sub">PSNA College of Engineering and Technology, Tamil Nadu</p>
              <div className="cgpa-pill">Current CGPA: 7.5</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Skills                                                               */
/* ------------------------------------------------------------------ */

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <Reveal className="section-eyebrow">Skills</Reveal>
        <Reveal as="h2" className="section-title" delay={60}>What I work with</Reveal>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group, i) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={100 + i * 90}>
                <TiltCard className="glass-card skill-card">
                  <div className="skill-card-glow" />
                  <Icon size={24} className="icon-accent" />
                  <h3>{group.title}</h3>
                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <span key={item} className="skill-tag">{item}</span>
                    ))}
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="glass-card soft-skills-card" delay={200}>
          <div className="soft-skills-head">
            <Users size={20} className="icon-accent" />
            <h3>Soft Skills</h3>
          </div>
          <div className="skill-tags">
            {SOFT_SKILLS.map((s) => (
              <span key={s} className="skill-tag skill-tag-soft">{s}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Projects                                                             */
/* ------------------------------------------------------------------ */

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <Reveal className="section-eyebrow">Projects</Reveal>
        <Reveal as="h2" className="section-title" delay={60}>Things I've built</Reveal>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={100 + i * 120}>
              <TiltCard className="glass-card project-card">
                <div className="project-card-border" />
                <div className="project-card-body">
                  <h3>{p.title}</h3>
                  <p className="project-desc">{p.description}</p>
                  <p className="project-highlight">{p.highlight}</p>
                  <div className="skill-tags">
                    {p.tech.map((t) => (
                      <span key={t} className="skill-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Achievements                                                         */
/* ------------------------------------------------------------------ */

function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="section-inner">
        <Reveal className="section-eyebrow">Achievements</Reveal>
        <Reveal as="h2" className="section-title" delay={60}>Milestones along the way</Reveal>

        <div className="achieve-grid">
          {ACHIEVEMENTS.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.title} delay={100 + i * 90}>
                <div className="glass-card achieve-card">
                  <div className="achieve-icon"><Icon size={20} /></div>
                  <h3>{a.title}</h3>
                  <p>{a.detail}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Contact                                                              */
/* ------------------------------------------------------------------ */

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3200);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <Reveal className="section-eyebrow">Contact</Reveal>
        <Reveal as="h2" className="section-title" delay={60}>Let's build something</Reveal>

        <div className="contact-grid">
          <Reveal className="glass-card contact-info" delay={100}>
            <p className="contact-lede">
              Open to opportunities, collaborations, and conversations about software,
              data, or anything in between.
            </p>
            <a className="contact-row" href="mailto:aakashmr23it@psnacet.edu.in">
              <Mail size={18} className="icon-accent" /> aakashmr23it@psnacet.edu.in
            </a>
            <a className="contact-row" href="tel:+918838189914">
              <Phone size={18} className="icon-accent" /> +91 88381 89914
            </a>
            <div className="contact-row">
              <MapPin size={18} className="icon-accent" /> Dindigul, Tamil Nadu
            </div>
          </Reveal>

          <Reveal className="glass-card contact-form-card" delay={180}>
            <form onSubmit={submit} className="contact-form">
              <div className="form-field">
                <input
                  required
                  placeholder=" "
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <label>Your name</label>
              </div>
              <div className="form-field">
                <input
                  required
                  type="email"
                  placeholder=" "
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <label>Your email</label>
              </div>
              <div className="form-field">
                <textarea
                  required
                  rows={4}
                  placeholder=" "
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                <label>Message</label>
              </div>
              <Magnetic>
                <button type="submit" className="btn btn-primary form-submit">
                  {sent ? "Message noted ✓" : <>Send Message <Send size={15} /></>}
                </button>
              </Magnetic>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                               */
/* ------------------------------------------------------------------ */

function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="footer">
      <div className="footer-divider" />
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} M.R. Aakash. Built with intent.</span>
        <Magnetic>
          <button className="back-to-top" onClick={toTop} aria-label="Back to top">
            <ArrowUp size={16} />
          </button>
        </Magnetic>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* App                                                                  */
/* ------------------------------------------------------------------ */

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLoaded(true), 1500);
    const t2 = setTimeout(() => setHideLoader(true), 2100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="app-root">
      <style>{CSS}</style>
      {!hideLoader && <Loader done={loaded} />}
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CSS                                                                  */
/* ------------------------------------------------------------------ */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');

:root {
  --bg: #07070A;
  --surface: #111118;
  --purple: #7C3AED;
  --blue: #3B82F6;
  --gold: #FACC15;
  --text: #E9E9F2;
  --text-dim: #9797AC;
  --border: rgba(124,58,237,0.28);
}

* { box-sizing: border-box; }

.app-root {
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow-x: hidden;
  min-height: 100vh;
  cursor: default;
}

.app-root h1, .app-root h2, .app-root h3 {
  font-family: 'Space Grotesk', sans-serif;
  margin: 0;
}

.app-root p { color: var(--text-dim); line-height: 1.7; margin: 0 0 12px; }

.app-root button { font-family: inherit; cursor: pointer; }

@media (prefers-reduced-motion: reduce) {
  .app-root * { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }
}

/* ---------- Loader ---------- */
.loader {
  position: fixed; inset: 0; z-index: 200;
  background: var(--bg);
  display: flex; align-items: center; justify-content: center;
  transition: opacity 0.6s ease, filter 0.6s ease, visibility 0.6s;
}
.loader-hide { opacity: 0; filter: blur(12px); pointer-events: none; }
.loader-inner { display: flex; flex-direction: column; align-items: center; gap: 18px; }
.loader-logo {
  font-family: 'Space Grotesk', sans-serif; font-size: 32px; font-weight: 700; letter-spacing: 4px;
  background: linear-gradient(90deg, var(--purple), var(--blue));
  -webkit-background-clip: text; background-clip: text; color: transparent;
  animation: pulse 1.6s ease-in-out infinite;
}
.loader-bar-track { width: 220px; height: 3px; background: rgba(255,255,255,0.08); border-radius: 4px; overflow: hidden; }
.loader-bar-fill { height: 100%; background: linear-gradient(90deg, var(--purple), var(--blue)); transition: width 0.15s ease; box-shadow: 0 0 12px var(--purple); }
.loader-pct { font-size: 12px; color: var(--text-dim); letter-spacing: 2px; }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }

/* ---------- Cursor + scroll progress ---------- */
.cursor-glow {
  position: fixed; top: 0; left: 0; width: 380px; height: 380px; margin-left: -190px; margin-top: -190px;
  background: radial-gradient(circle, rgba(124,58,237,0.16), rgba(59,130,246,0.06) 45%, transparent 70%);
  border-radius: 50%; pointer-events: none; z-index: 5; will-change: transform;
  display: none;
}
@media (hover: hover) and (pointer: fine) { .cursor-glow { display: block; } }

.scroll-progress {
  position: fixed; top: 0; left: 0; height: 2px; z-index: 100;
  background: linear-gradient(90deg, var(--purple), var(--blue), var(--gold));
  box-shadow: 0 0 8px var(--purple);
}

/* ---------- Navbar ---------- */
.navbar { position: sticky; top: 0; z-index: 90; backdrop-filter: blur(16px); background: rgba(7,7,10,0.55); border-bottom: 1px solid rgba(255,255,255,0.06); }
.navbar-inner { max-width: 1180px; margin: 0 auto; padding: 16px 28px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
.brand { background: none; border: none; color: var(--text); font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: 17px; letter-spacing: 0.5px; }
.nav-links { display: flex; gap: 26px; }
.nav-link { position: relative; background: none; border: none; color: var(--text-dim); font-size: 14px; padding: 6px 0; transition: color 0.25s; }
.nav-link:hover { color: var(--text); }
.nav-underline { position: absolute; left: 0; bottom: -2px; height: 2px; width: 0; background: linear-gradient(90deg, var(--purple), var(--blue)); transition: width 0.3s ease; border-radius: 2px; }
.nav-link:hover .nav-underline, .nav-link-active .nav-underline { width: 100%; }
.nav-link-active { color: var(--text); }
.nav-toggle { display: none; background: none; border: none; color: var(--text); }
.nav-mobile { display: none; }

@media (max-width: 860px) {
  .nav-links, .nav-cta { display: none; }
  .nav-toggle { display: block; }
  .nav-mobile { display: flex; flex-direction: column; max-height: 0; overflow: hidden; transition: max-height 0.35s ease; padding: 0 28px; }
  .nav-mobile-open { max-height: 320px; padding: 8px 28px 18px; }
  .nav-mobile-link { background: none; border: none; color: var(--text-dim); text-align: left; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 15px; }
}

/* ---------- Buttons ---------- */
.magnetic { display: inline-block; transition: transform 0.15s ease-out; }
.btn { display: inline-flex; align-items: center; gap: 8px; padding: 13px 26px; border-radius: 20px; font-size: 14px; font-weight: 600; border: none; transition: all 0.3s ease; white-space: nowrap; }
.btn-primary { background: linear-gradient(135deg, var(--purple), var(--blue)); color: white; box-shadow: 0 0 24px rgba(124,58,237,0.35); }
.btn-primary:hover { box-shadow: 0 0 36px rgba(124,58,237,0.6); transform: translateY(-2px); }
.btn-outline { background: transparent; color: var(--text); border: 1px solid var(--border); }
.btn-outline:hover { border-color: var(--purple); box-shadow: 0 0 20px rgba(124,58,237,0.25); }
.btn-ghost { background: rgba(255,255,255,0.04); color: var(--text); border: 1px solid rgba(255,255,255,0.08); padding: 10px 20px; }
.btn-ghost:hover { border-color: var(--purple); }

/* ---------- Reveal ---------- */
.reveal { opacity: 0; transform: translateY(28px); filter: blur(6px); transition: opacity 0.8s cubic-bezier(.16,1,.3,1), transform 0.8s cubic-bezier(.16,1,.3,1), filter 0.8s cubic-bezier(.16,1,.3,1); }
.reveal-visible { opacity: 1; transform: translateY(0); filter: blur(0); }

/* ---------- Sections ---------- */
.section { position: relative; padding: 120px 28px; }
.section-inner { max-width: 1180px; margin: 0 auto; }
.section-eyebrow { display: inline-block; font-size: 13px; letter-spacing: 3px; text-transform: uppercase; color: var(--gold); margin-bottom: 14px; font-weight: 600; }
.section-title { font-size: clamp(28px, 4vw, 42px); font-weight: 600; margin-bottom: 52px; max-width: 640px; }

.glass-card { background: rgba(17,17,24,0.6); backdrop-filter: blur(18px); border: 1px solid var(--border); border-radius: 20px; padding: 30px; position: relative; }

.icon-accent { color: var(--purple); filter: drop-shadow(0 0 6px rgba(124,58,237,0.6)); }

/* ---------- Hero ---------- */
.hero { position: relative; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; padding: 140px 28px 60px; overflow: hidden; }
.hero-bg { position: absolute; inset: 0; z-index: 0; }
.grid-layer {
  position: absolute; inset: -10%;
  background-image: linear-gradient(rgba(124,58,237,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.10) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%);
  animation: gridDrift 26s linear infinite;
}
@keyframes gridDrift { from { transform: translate(0,0); } to { transform: translate(48px, 48px); } }
.orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.55; }
.orb-purple { width: 460px; height: 460px; background: var(--purple); top: -120px; left: -100px; animation: floatSlow 9s ease-in-out infinite; }
.orb-blue { width: 420px; height: 420px; background: var(--blue); bottom: -140px; right: -100px; animation: floatSlow 11s ease-in-out infinite reverse; }
@keyframes floatSlow { 0%,100% { transform: translate(0,0); } 50% { transform: translate(30px,-30px); } }
.beam { position: absolute; width: 2px; height: 60%; background: linear-gradient(to bottom, transparent, rgba(250,204,21,0.5), transparent); opacity: 0.4; }
.beam-1 { left: 22%; top: 0; animation: beamFade 6s ease-in-out infinite; }
.beam-2 { right: 30%; top: 10%; animation: beamFade 8s ease-in-out infinite 1s; }
@keyframes beamFade { 0%,100% { opacity: 0.1; } 50% { opacity: 0.5; } }
.noise-layer { position: absolute; inset: 0; opacity: 0.035; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }

.hero-content { position: relative; z-index: 1; max-width: 1180px; margin: 0 auto; width: 100%; display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 60px; align-items: center; }
.eyebrow { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; color: var(--text-dim); letter-spacing: 1px; margin-bottom: 22px; }
.dot-live { width: 7px; height: 7px; border-radius: 50%; background: var(--gold); box-shadow: 0 0 8px var(--gold); animation: pulse 1.8s ease-in-out infinite; }
.hero-title { display: flex; flex-direction: column; gap: 2px; margin-bottom: 18px; }
.hero-title-line { font-size: clamp(18px, 2.4vw, 24px); color: var(--text-dim); font-weight: 500; }
.hero-title-name { font-size: clamp(40px, 6vw, 68px); font-weight: 700; background: linear-gradient(120deg, #fff 30%, var(--purple) 70%, var(--blue)); -webkit-background-clip: text; background-clip: text; color: transparent; line-height: 1.05; }
.hero-role { display: flex; flex-wrap: wrap; gap: 8px; align-items: baseline; font-family: 'Space Grotesk', sans-serif; font-size: clamp(17px, 2vw, 22px); margin-bottom: 22px; }
.hero-role-prefix { color: var(--text-dim); font-weight: 500; }
.hero-role-typed { color: var(--gold); font-weight: 600; }
.caret { display: inline-block; width: 2px; height: 1em; background: var(--gold); margin-left: 3px; vertical-align: text-bottom; animation: blink 0.9s step-end infinite; }
@keyframes blink { 50% { opacity: 0; } }
.hero-desc { max-width: 480px; font-size: 15.5px; margin-bottom: 34px; }
.hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }

.hero-photo-wrap { position: relative; display: flex; align-items: center; justify-content: center; }
.hero-photo-glow { position: absolute; width: 340px; height: 340px; border-radius: 50%; background: radial-gradient(circle, rgba(124,58,237,0.4), transparent 70%); filter: blur(20px); animation: floatSlow 7s ease-in-out infinite; }
.hero-photo-card { position: relative; width: 300px; height: 360px; border-radius: 20px; overflow: hidden; animation: floatCard 6s ease-in-out infinite; box-shadow: 0 20px 60px rgba(0,0,0,0.5); }
@keyframes floatCard { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
.hero-photo { width: 100%; height: 100%; object-fit: cover; display: block; }
.hero-photo-border { position: absolute; inset: 0; border-radius: 20px; border: 1px solid rgba(124,58,237,0.55); box-shadow: inset 0 0 30px rgba(124,58,237,0.25); pointer-events: none; }
.floating-chip { position: absolute; background: rgba(17,17,24,0.75); backdrop-filter: blur(12px); border: 1px solid var(--border); border-radius: 14px; padding: 8px 14px; font-size: 12.5px; font-weight: 600; box-shadow: 0 0 18px rgba(124,58,237,0.2); }
.chip-1 { top: 8%; left: -8%; animation: floatChip 5s ease-in-out infinite; }
.chip-2 { bottom: 10%; right: -6%; animation: floatChip 6.5s ease-in-out infinite 0.6s; color: var(--gold); }
@keyframes floatChip { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }

.scroll-cue { position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 8px; font-size: 11px; letter-spacing: 2px; color: var(--text-dim); z-index: 1; }
.scroll-cue-line { width: 1px; height: 30px; background: linear-gradient(to bottom, var(--purple), transparent); animation: scrollLine 1.8s ease-in-out infinite; }
@keyframes scrollLine { 0% { opacity: 0; transform: scaleY(0.3); } 50% { opacity: 1; } 100% { opacity: 0; transform: scaleY(1); } }

@media (max-width: 900px) {
  .hero-content { grid-template-columns: 1fr; text-align: center; }
  .hero-actions { justify-content: center; }
  .hero-photo-wrap { margin-top: 20px; }
  .eyebrow { justify-content: center; }
}

/* ---------- About ---------- */
.about-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 28px; }
.about-card p:last-child { margin-bottom: 0; }
.stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.stat-card { background: rgba(17,17,24,0.6); border: 1px solid var(--border); border-radius: 20px; padding: 22px; text-align: center; transition: box-shadow 0.3s, transform 0.3s; }
.stat-card:hover { box-shadow: 0 0 26px rgba(124,58,237,0.25); transform: translateY(-4px); }
.stat-value { font-family: 'Space Grotesk', sans-serif; font-size: 30px; font-weight: 700; background: linear-gradient(120deg, var(--gold), var(--purple)); -webkit-background-clip: text; background-clip: text; color: transparent; }
.stat-label { font-size: 12.5px; color: var(--text-dim); margin-top: 4px; letter-spacing: 0.5px; }

@media (max-width: 780px) { .about-grid { grid-template-columns: 1fr; } }

/* ---------- Education timeline ---------- */
.timeline { position: relative; padding-left: 26px; }
.timeline-line { position: absolute; left: 6px; top: 6px; bottom: 6px; width: 2px; background: linear-gradient(to bottom, var(--purple), var(--blue), transparent); }
.timeline-item { position: relative; }
.timeline-dot { position: absolute; left: -26px; top: 26px; width: 14px; height: 14px; border-radius: 50%; background: var(--purple); box-shadow: 0 0 14px var(--purple); }
.timeline-card { transition: box-shadow 0.3s; }
.timeline-card:hover { box-shadow: 0 0 30px rgba(124,58,237,0.25); }
.timeline-card-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
.timeline-year { font-size: 13px; color: var(--gold); font-weight: 600; letter-spacing: 0.5px; }
.timeline-card h3 { font-size: 20px; margin-bottom: 6px; }
.timeline-sub { color: var(--text-dim); margin-bottom: 14px; }
.cgpa-pill { display: inline-block; background: rgba(124,58,237,0.12); border: 1px solid var(--border); color: var(--text); font-size: 13px; padding: 6px 14px; border-radius: 14px; }

/* ---------- Skills ---------- */
.skills-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 24px; }
.tilt-card { transition: transform 0.15s ease-out; transform-style: preserve-3d; }
.skill-card { position: relative; overflow: hidden; }
.skill-card-glow { position: absolute; inset: 0; background: radial-gradient(200px circle at var(--mx,50%) var(--my,50%), rgba(124,58,237,0.18), transparent 60%); opacity: 0; transition: opacity 0.3s; pointer-events: none; }
.skill-card:hover .skill-card-glow { opacity: 1; }
.skill-card h3 { font-size: 16px; margin: 12px 0 14px; }
.skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.skill-tag { font-size: 12.5px; padding: 6px 12px; border-radius: 12px; background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.3); color: var(--text); }
.skill-tag-soft { background: rgba(250,204,21,0.08); border-color: rgba(250,204,21,0.3); }
.soft-skills-card { }
.soft-skills-head { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
.soft-skills-head h3 { font-size: 16px; }

@media (max-width: 900px) { .skills-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px) { .skills-grid { grid-template-columns: 1fr; } }

/* ---------- Projects ---------- */
.projects-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
.project-card { padding: 0; overflow: hidden; }
.project-card-border { position: absolute; inset: 0; border-radius: 20px; padding: 1px; background: linear-gradient(135deg, var(--purple), transparent 40%, var(--blue)); opacity: 0; transition: opacity 0.4s; -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; }
.project-card:hover .project-card-border { opacity: 1; }
.project-card-body { padding: 30px; }
.project-card h3 { font-size: 19px; margin-bottom: 12px; }
.project-desc { font-size: 14.5px; }
.project-highlight { font-size: 13px; color: var(--gold); opacity: 0.9; margin-bottom: 18px; }

@media (max-width: 780px) { .projects-grid { grid-template-columns: 1fr; } }

/* ---------- Achievements ---------- */
.achieve-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.achieve-card { text-align: left; transition: box-shadow 0.3s, transform 0.3s; }
.achieve-card:hover { box-shadow: 0 0 26px rgba(250,204,21,0.18); transform: translateY(-4px); }
.achieve-icon { width: 42px; height: 42px; border-radius: 12px; background: rgba(250,204,21,0.1); border: 1px solid rgba(250,204,21,0.3); color: var(--gold); display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
.achieve-card h3 { font-size: 15.5px; margin-bottom: 8px; }
.achieve-card p { font-size: 13.5px; margin: 0; }

@media (max-width: 900px) { .achieve-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px) { .achieve-grid { grid-template-columns: 1fr; } }

/* ---------- Contact ---------- */
.contact-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 28px; }
.contact-lede { margin-bottom: 26px; }
.contact-row { display: flex; align-items: center; gap: 12px; color: var(--text); text-decoration: none; font-size: 14.5px; padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); transition: color 0.25s; }
.contact-row:hover { color: var(--gold); }
.contact-form { display: flex; flex-direction: column; gap: 22px; }
.form-field { position: relative; }
.form-field input, .form-field textarea { width: 100%; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 16px 14px 8px; color: var(--text); font-family: inherit; font-size: 14.5px; resize: none; transition: border-color 0.25s, box-shadow 0.25s; }
.form-field input:focus, .form-field textarea:focus { outline: none; border-color: var(--purple); box-shadow: 0 0 0 3px rgba(124,58,237,0.15); }
.form-field label { position: absolute; left: 14px; top: 16px; color: var(--text-dim); font-size: 14.5px; pointer-events: none; transition: all 0.2s ease; }
.form-field input:focus + label, .form-field input:not(:placeholder-shown) + label,
.form-field textarea:focus + label, .form-field textarea:not(:placeholder-shown) + label {
  top: 6px; font-size: 11px; color: var(--purple);
}
.form-submit { align-self: flex-start; }

@media (max-width: 780px) { .contact-grid { grid-template-columns: 1fr; } }

/* ---------- Footer ---------- */
.footer { padding: 0 28px 40px; }
.footer-divider { height: 1px; max-width: 1180px; margin: 0 auto; background: linear-gradient(90deg, transparent, var(--purple), var(--blue), transparent); opacity: 0.4; }
.footer-inner { max-width: 1180px; margin: 24px auto 0; display: flex; align-items: center; justify-content: space-between; font-size: 13px; color: var(--text-dim); }
.back-to-top { width: 38px; height: 38px; border-radius: 50%; background: rgba(255,255,255,0.04); border: 1px solid var(--border); color: var(--text); display: flex; align-items: center; justify-content: center; transition: box-shadow 0.3s, border-color 0.3s; }
.back-to-top:hover { border-color: var(--purple); box-shadow: 0 0 18px rgba(124,58,237,0.35); }
`;
