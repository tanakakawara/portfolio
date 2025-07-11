import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Database,
  Globe,
  Box,
  Layout,
  Code,
  FileCode2,
  Palette,
  GitBranch,
  PenTool,
  CloudCog,
  Code2,
  Cloud,
  Server,
  GitFork,
  Lock,
  Users,
  Rocket,
  Zap,
} from "lucide-react";

// Tech Icons for Marquee
const technologies = [
  { name: "Node.js", icon: Server, color: "#10b981" },
  { name: "Express.js", icon: Box, color: "#4b5563" },
  { name: "Next.js", icon: Layout, color: "#000000" },
  { name: "React.js", icon: Code, color: "#3b82f6" },
  { name: "Angular.js", icon: Code, color: "#ef4444" },
  { name: "Python", icon: FileCode2, color: "#eab308" },
  { name: "HTML5", icon: Globe, color: "#f97316" },
  { name: "CSS3", icon: Palette, color: "#2563eb" },
  { name: "MS SQL Server", icon: Database, color: "#ef4444" },
  { name: "MySQL", icon: Database, color: "#1d4ed8" },
  { name: "PostgreSQL", icon: Database, color: "#38bdf8" },
  { name: "AWS", icon: CloudCog, color: "#f59e42" },
  { name: "MongoDB", icon: Database, color: "#22c55e" },
  { name: "GitHub", icon: GitBranch, color: "#0f172a" },
  { name: "Figma", icon: PenTool, color: "#a21caf" },
];

// Skill Cards
const skillList = [
  {
    icon: <Code2 size={34} />,
    label: "JavaScript / TypeScript",
    desc: "Advanced ES6+, React, Node.js, Next.js, TypeScript, and modern JS tooling.",
    level: "Expert",
  },
  {
    icon: <Database size={34} />,
    label: "Databases",
    desc: "PostgreSQL, MongoDB, MySQL, Redis, and data modeling for scalability.",
    level: "Advanced",
  },
  {
    icon: <Cloud size={34} />,
    label: "Cloud & DevOps",
    desc: "Azure, AWS, Docker, CI/CD, GitHub Actions, and scalable cloud deployments.",
    level: "Advanced",
  },
  {
    icon: <Server size={34} />,
    label: "Frontend Engineering",
    desc: "HTML5, CSS3, SASS, Responsive UI, Styled Components, ChakraUI, Bootstrap.",
    level: "Expert",
  },
  {
    icon: <Code size={34} />,
    label: "Backend Dev",
    desc: "express js, python django, , PHP, and .NET. API integration, REST APIs",
    level: "Advanced",
  },
  {
    icon: <GitFork size={34} />,
    label: "Version Control",
    desc: "Git, GitHub, GitLab, branching strategies, code reviews, and open source.",
    level: "Expert",
  },
  {
    icon: <Lock size={34} />,
    label: "Security",
    desc: "OWASP, JWT, OAuth, HTTPS, secure coding, and secrets management.",
    level: "Intermediate",
  },
  {
    icon: <Users size={34} />,
    label: "Teamwork & Mentorship",
    desc: "Agile, code mentoring, PR reviews, pair programming, and remote collaboration.",
    level: "Expert",
  },
  {
    icon: <Rocket size={34} />,
    label: "Performance & Optimization",
    desc: "Profiling, caching, lazy loading, Webpack, Lighthouse, and best coding practices.",
    level: "Advanced",
  },
  {
    icon: <Zap size={34} />,
    label: "Problem Solving",
    desc: "Algorithms, data structures, debugging, and system design interviews.",
    level: "Expert",
  },
];

export default function Skills() {
  const [hovered, setHovered] = useState(null);
  const scrollRef = useRef();

  const scroll = (direction) => {
    const scrollAmount = 350;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="skills-root">
      <div className="skills-header">
        <h1 className="skills-title">TK DEV Skills</h1>
        <p className="skills-desc">
          A modern stack built on experience, passion, and best practices.
        </p>
      </div>
      <div className="skills-content">
        {/* Scroll arrows */}
        <button
          className="skills-scroll-btn left"
          onClick={() => scroll("left")}
          aria-label="Scroll left"
        >
          &#10094;
        </button>
        <button
          className="skills-scroll-btn right"
          onClick={() => scroll("right")}
          aria-label="Scroll right"
        >
          &#10095;
        </button>

        {/* Cards */}
        <div className="skills-scroll" ref={scrollRef}>
          {skillList.map((skill, idx) => (
            <div
              key={skill.label}
              className={`skills-card${hovered === idx ? " hovered" : ""}`}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="skills-icon">{skill.icon}</div>
              <h5>{skill.label}</h5>
              <p>{skill.desc}</p>
              <div className="skills-level">{skill.level}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Tech Marquee BELOW the skills cards */}
      <div className="container">
        <div className="marquee-wrap">
          <motion.div
            className="marquee-row"
            animate={{
              x: [0, -1800],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 28,
                ease: "linear",
              },
            }}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={index} className="marquee-icon" title={tech.name}>
                <tech.icon size={34} style={{ color: tech.color }} />
                <span>{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* CSS */}
      <style>{`
        .skills-root {
          background: linear-gradient(120deg, #0f172a 70%, #7c3aed 100%);
          min-height: 100vh;
          color: #ede9fe;
          padding-bottom: 0;
        }
        .skills-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 3.2rem;
          padding-bottom: 2.2rem;
        }
        .skills-title {
          font-size: 2.7rem;
          font-weight: 900;
          margin-bottom: 0.5rem;
          letter-spacing: -0.015em;
          text-align: center;
          text-shadow: 0 2px 20px #7c3aed18;
        }
        .skills-desc {
          font-size: 1.25rem;
          margin-bottom: 0;
          color: #d8b4fe;
          font-weight: 400;
          text-align: center;
          max-width: 540px;
        }
        .skills-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem 3rem 1rem;
          position: relative;
        }
        .skills-scroll {
          display: flex;
          overflow-x: auto;
          scroll-behavior: smooth;
          gap: 1.8rem;
          padding: 0.4rem 0 1rem 0;
        }
        .skills-card {
          min-width: 274px;
          max-width: 300px;
          background: #1e293b;
          border: 1.5px solid #7c3aed33;
          border-radius: 1.8rem;
          box-shadow: 0 2px 18px #7c3aed15;
          padding: 2.1rem 1.3rem 1.4rem 1.3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition:
            transform 0.33s cubic-bezier(.6,2,.8,1),
            box-shadow 0.3s,
            background 0.3s, color 0.3s;
          cursor: pointer;
        }
        .skills-card h5 {
          font-size: 1.18rem;
          font-weight: 700;
          margin-bottom: 0.65rem;
          color: #ede9fe;
        }
        .skills-card p {
          font-size: 1.01rem;
          color: #bdb6ed;
          min-height: 56px;
          margin-bottom: 1rem;
        }
        .skills-level {
          font-weight: 700;
          color: #a78bfa;
          letter-spacing: 0.05em;
        }
        .skills-card.hovered,
        .skills-card:hover {
          background: linear-gradient(110deg, #ede9fe 80%, #c4b5fd 100%);
          color: #312e81;
          box-shadow: 0 8px 36px #7c3aed3a;
          transform: scale(1.045) translateY(-3px);
        }
        .skills-card.hovered h5,
        .skills-card:hover h5 {
          color: #7c3aed;
        }
        .skills-card.hovered .skills-level,
        .skills-card:hover .skills-level {
          color: #7c3aed;
        }
        .skills-icon {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: linear-gradient(145deg, #ede9fe 75%, #a78bfa 100%);
          color: #7c3aed;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.1rem;
          font-size: 2rem;
          box-shadow: 0 2px 18px #7c3aed18;
        }
        /* Scroll buttons */
        .skills-scroll-btn {
          position: absolute;
          top: 44%;
          transform: translateY(-50%);
          z-index: 2;
          background: linear-gradient(120deg, #ede9fe 60%, #c4b5fd 100%);
          border: none;
          color: #7c3aed;
          font-size: 2.1rem;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          box-shadow: 0 6px 24px #7c3aed18;
          cursor: pointer;
          transition: background 0.24s, color 0.22s;
          opacity: 0.92;
        }
        .skills-scroll-btn:hover {
          background: #7c3aed;
          color: #ede9fe;
        }
        .skills-scroll-btn.left {
          left: -16px;
        }
        .skills-scroll-btn.right {
          right: -16px;
        }

        /* Marquee styles - transparent */
        .marquee-wrap {
          width: 100vw;
          background: transparent;
          overflow: hidden;
          padding: 1.5rem 0 1.5rem 0;
        }
        .marquee-row {
          display: flex;
          gap: 2.6rem;
          align-items: center;
          white-space: nowrap;
        }
        .marquee-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 0.99rem;
          font-weight: 600;
          opacity: 0.93;
          min-width: 80px;
          gap: 0.25rem;
          transition: transform 0.18s;
          cursor: pointer;
          background: transparent !important;
          box-shadow: none !important;
        }
        .marquee-icon:hover {
          transform: scale(1.13) translateY(-2px);
          opacity: 1;
        }
        .marquee-icon span {
          font-size: 0.77rem;
          margin-top: 0.15em;
          color: #d1d5db;
          font-weight: 500;
          letter-spacing: 0.01em;
        }

        @media (max-width: 900px) {
          .skills-content {
            padding: 0 0.5rem 2.5rem 0.5rem;
          }
          .skills-title {
            font-size: 2rem;
          }
          .skills-card {
            min-width: 220px;
            padding: 1.5rem 0.8rem 1.1rem 0.8rem;
          }
        }
        @media (max-width: 720px) {
          .skills-header {
            padding-top: 2.1rem;
            padding-bottom: 1.3rem;
          }
          .skills-scroll {
            gap: 1.1rem;
          }
          .skills-card {
            min-width: 170px;
            font-size: 0.95rem;
            padding: 1.1rem 0.5rem 0.8rem 0.5rem;
          }
          .skills-title {
            font-size: 1.4rem;
          }
          .skills-scroll-btn {
            display: none;
          }
        }
        /* Hide scrollbars but keep scrollability */
        .skills-scroll::-webkit-scrollbar {
          display: none;
        }
        .skills-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
