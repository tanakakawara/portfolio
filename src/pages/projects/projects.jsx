import React, { useEffect, useState } from "react";
import styled from "styled-components";
import blueroof from "./blueroof.png";
import loantech from "./loantech.png";
import strom from "./strom.jpg";
// Purple and white color palette
const PURPLE = "#7c3aed";
const LIGHT_PURPLE = "#ede9fe";
const WHITE = "#fff";

// Example project data
const projects = [
  {
    image: blueroof,
    title: "Blueroof Club",
    subtitle: "Express JS, blueroof management and Communications web App",
    codeLink: "https://github.com/tanakakawara/Blueroof-club-portal",
    liveLink: "",
  },
  {
    image: loantech,
    title: "LoanTech SVM System ",
    subtitle: "Python Flask, ML Model",
    codeLink:
      "https://github.com/tanakakawara/Loan-Management-Support-Vector-Machine-",
    liveLink: "",
  },
  {
    image: strom,
    title: "Strom Solar",
    subtitle: "PHP, solar company dynamic web site",
    codeLink: "https://github.com/example/task-manager",
    liveLink: "https://task-manager.example.com",
  },
];

const Section = styled.section`
  width: 100%;
  background: ${WHITE};
  padding: 4rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const SectionTitle = styled.h2`
  color: ${PURPLE};
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  text-align: center;
  letter-spacing: 0.01em;
  transition: color 0.3s;
`;

const CardsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.2rem;
  justify-content: center;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

const Card = styled.div`
  background: ${LIGHT_PURPLE};
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 32px 0 ${PURPLE}18;
  width: 340px;
  transition:
    transform 0.25s,
    box-shadow 0.25s;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 2px solid ${PURPLE}11;

  &:hover {
    transform: translateY(-10px) scale(1.04);
    box-shadow: 0 16px 48px 0 ${PURPLE}33;
    border-color: ${PURPLE};
  }
`;

const CardImage = styled.div`
  height: 180px;
  background: #e9e9ff;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-bottom: 2px solid ${PURPLE}11;
`;

const CardBody = styled.div`
  padding: 1.4rem 1.2rem 1.2rem 1.2rem;
  flex: 1 1 auto;
`;

const CardTitle = styled.h3`
  color: ${PURPLE};
  font-size: 1.35rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  letter-spacing: 0.01em;
  transition: color 0.3s;
`;

const CardSubtitle = styled.p`
  color: #7c3aedcc;
  font-size: 1.02rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
  letter-spacing: 0.01em;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.8rem;
`;

const CardButton = styled.a`
  flex: 1 1 0;
  padding: 0.6rem 0;
  text-align: center;
  background: ${(props) => (props.primary ? PURPLE : WHITE)};
  color: ${(props) => (props.primary ? WHITE : PURPLE)};
  font-size: 1.05rem;
  font-weight: 600;
  border: 2px solid ${PURPLE};
  border-radius: 8px;
  transition:
    background 0.21s,
    color 0.19s,
    box-shadow 0.18s,
    border 0.18s;
  box-shadow: 0 2px 14px 0 ${PURPLE}11;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: ${(props) => (props.primary ? WHITE : PURPLE)};
    color: ${(props) => (props.primary ? PURPLE : WHITE)};
    box-shadow: 0 4px 24px 0 ${PURPLE}22;
    border: 2.5px solid ${PURPLE};
  }
`;

export default function Projects() {
  const [loadText, setLoadText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoadText(true), 350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Section id="projects">
      <style>{`
        .fade-in {
          opacity: 1;
          transform: translateY(0);
          transition: opacity .7s cubic-bezier(.4,1.7,.67,.99), transform .7s cubic-bezier(.4,1.7,.67,.99);
        }
        .invisible {
          opacity: 0;
          transform: translateY(30px);
        }
      `}</style>
      <>
        <SectionTitle className={loadText ? "fade-in" : "invisible"}>
          <span
            style={{ display: "block", fontSize: "2.4rem", fontWeight: "800" }}
          >
            My Projects
          </span>
          <span
            style={{ fontSize: "1.05rem", fontWeight: "500", color: "#6b21a8" }}
          >
            Web apps, automation tools, and real-world solutions
          </span>
        </SectionTitle>
      </>

      <CardsGrid>
        {projects.map((proj, idx) => (
          <Card key={idx} className={loadText ? "fade-in" : "invisible"}>
            <CardImage src={proj.image} />
            <CardBody>
              <CardTitle>{proj.title}</CardTitle>
              <CardSubtitle>{proj.subtitle}</CardSubtitle>
              <ButtonRow>
                <CardButton
                  href={proj.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  primary
                >
                  View Code
                </CardButton>
                <CardButton
                  href={proj.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Preview
                </CardButton>
              </ButtonRow>
            </CardBody>
            <div className="btn-row" style={{ padding: "1rem" }}>
              View More
            </div>
          </Card>
        ))}
      </CardsGrid>
    </Section>
  );
}
