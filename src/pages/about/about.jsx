import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Code, Cloud, PenSquare } from "lucide-react";
import pic from "./tanaka.jpg";

const devImage = pic;

const AboutUs = () => {
  const [animate, setAnimate] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [loadText, setLoadText] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimate(true), 300);
    const timer2 = setTimeout(() => setLoadText(true), 400);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const cards = [
    {
      id: 1,
      icon: <Code size={38} className="about-icon mb-3" />,
      title: "Full-Stack Development",
      description:
        "Building modern web applications with React, Express, and SQL/NoSQL.",
    },
    {
      id: 2,
      icon: <Cloud size={38} className="about-icon mb-3" />,
      title: "Cloud & Infrastructure",
      description:
        "Proficient in cloud systems like Microsoft 365 and scalable services.",
    },
    {
      id: 3,
      icon: <PenSquare size={38} className="about-icon mb-3" />,
      title: "Content Creation",
      description:
        "Writing and documenting technical knowledge to inspire others.",
    },
  ];

  return (
    <section className="about-section py-5">
      <div className="container position-relative z-2">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div
              className={`text-center mb-5 ${loadText ? "fade-in" : "invisible"}`}
            >
              <h1 className="display-5 fw-bold about-title">
                About Tanaka Kawara
              </h1>
              <p className="lead about-subtitle">
                Passionate Developer | Cloud Enthusiast | Creative Technologist
              </p>
            </div>

            <div className="row align-items-center mb-5">
              <div
                className={`col-md-6 mb-4 mb-md-0 ${animate ? "animate-fade-in" : ""}`}
              >
                <img
                  src={devImage}
                  alt="Tanaka Kawara"
                  className="img-fluid rounded-circle shadow-lg mx-auto d-block profile-image"
                />
              </div>

              <div className={`col-md-6 ${loadText ? "fade-in" : "invisible"}`}>
                <h2 className="fw-semibold mb-3 about-subheading">Who I Am</h2>
                <p className="about-text">
                  I'm Tanaka Kawara, a software developer with hands-on
                  experience in modern technologies including Node.js, Python,
                  ASP.NET, and SQL/NoSQL databases. I design and build secure,
                  scalable systems that solve real-world problems with clean
                  architecture and optimal performance.
                </p>
                <p className="about-text">
                  My skills extend into cloud management (Microsoft 365), UI/UX
                  design, and content writing. I'm passionate about crafting
                  digital products that are both elegant and functional.
                </p>
              </div>
            </div>

            <div className="row text-center g-4">
              {cards.map((card) => (
                <div key={card.id} className="col-md-4">
                  <div
                    className={`about-card h-100 p-4 rounded-4 shadow ${
                      loadText ? "fade-in" : "invisible"
                    } ${hoveredCard === card.id ? "hovered" : ""}`}
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <span className="icon-circle mb-3">
                      {React.cloneElement(card.icon, {
                        className: "icon-inner",
                      })}
                    </span>
                    <h5 className="fw-bold mb-2">{card.title}</h5>
                    <p className="mb-0 about-card-desc">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <style>{`
              :root {
                --purple: #7c3aed;
                --light-purple: #ede9fe;
                --white: #ffffff;
                --dark-bg: #0f172a;
                --dark-card: #1e293b;
                --dark-border: #334155;
              }

              .about-section {
                min-height: 100vh;
                position: relative;
                overflow: hidden;
              }

              body.light-mode .about-section {
                background-color: var(--white);
                color: var(--purple);
              }

              body.dark-mode .about-section {
                background-color: var(--dark-bg);
                color: var(--light-purple);
              }

              .about-title {
                color: inherit;
              }

              .about-subtitle {
                font-weight: 500;
              }

              .about-subheading {
                color: inherit;
              }

              .about-text {
                font-size: 1.08rem;
                color: var(--text-secondary, #6b7280);
              }

              body.dark-mode .about-text {
                color: #cbd5e1;
              }

              .profile-image {
                border: 6px solid var(--light-purple);
                background: var(--light-purple);
                width: 300px;
                height: 300px;
                object-fit: cover;
                transform: scale(0.8);
                opacity: 0;
                transition: transform 0.6s ease, opacity 0.6s ease;
              }

              .animate-fade-in .profile-image {
                transform: scale(1);
                opacity: 1;
              }

              .btn-purple {
                background: var(--purple);
                color: #fff !important;
                border: none;
                font-weight: 600;
                letter-spacing: .02em;
                border-radius: 8px;
                transition: background .18s, color .18s;
              }

              .btn-purple:hover, .btn-purple:focus {
                background: #6d28d9;
                color: #fff !important;
              }

              .about-card {
                background-color: var(--light-purple);
                color: var(--purple);
                transition: all 0.4s ease;
                transform: scale(1);
              }

              .about-card.hovered {
                background: linear-gradient(120deg, var(--purple) 60%, var(--light-purple) 120%);
                color: #fff;
                transform: scale(1.05);
                box-shadow: 0 10px 30px var(--purple)33;
              }

              body.dark-mode .about-card {
                background-color: var(--dark-card);
                color: var(--light-purple);
              }

              .icon-circle {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: var(--white);
                width: 66px;
                height: 66px;
                transition: all 0.3s ease;
                border: 2px solid var(--purple);
              }

              .about-card.hovered .icon-circle {
                background: var(--purple);
                border: 2px solid var(--light-purple);
              }

              .icon-inner {
                color: inherit;
              }

              .about-card-desc {
                font-weight: 500;
                font-size: 1.01rem;
                letter-spacing: .01em;
                color: inherit;
              }

              .fade-in {
                opacity: 1;
                transform: translateY(0);
                transition: opacity .65s cubic-bezier(.4,1.7,.67,.99), transform .7s cubic-bezier(.4,1.7,.67,.99);
              }

              .invisible {
                opacity: 0;
                transform: translateY(40px);
              }

              @keyframes fadeInScale {
                0% {
                  opacity: 0;
                  transform: scale(0.89);
                }
                100% {
                  opacity: 1;
                  transform: scale(1);
                }
              }

              .animate-fade-in {
                animation: fadeInScale 0.8s cubic-bezier(.4,1.7,.67,.99) forwards;
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
