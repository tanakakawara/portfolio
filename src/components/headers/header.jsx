import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logoPic from "./logo.png";
import G from "./github.png";

// Color palette
const SPARKLING_BLUE = "#00aaff"; // Replaced purple with sparkling blue
const WHITE = "#fff"; // Kept for contrast in hover states
const pp = G;
const profilePic = logoPic;
const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  box-shadow: 0 2px 18px 0 ${SPARKLING_BLUE}13;
  backdrop-filter: blur(8px);
  transition: box-shadow 0.21s;
`;

const NavContainer = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 700px) {
    height: 54px;
    padding: 0 0.7rem;
  }
`;

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
`;

const LogoImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 2.5px solid ${SPARKLING_BLUE};
  object-fit: cover;
  box-shadow: 0 2px 10px ${SPARKLING_BLUE}18;
  transition:
    border 0.18s,
    box-shadow 0.18s;

  &:hover {
    box-shadow: 0 2px 18px ${SPARKLING_BLUE}33;
  }
`;

const LogoText = styled.span`
  font-size: 1.22rem;
  font-weight: 800;
  color: ${SPARKLING_BLUE};
  letter-spacing: 0.03em;

  @media (max-width: 540px) {
    display: none;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2.3rem;
  align-items: center;

  @media (max-width: 700px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 54px;
    right: 0;
    left: 0;
    padding: 1.5rem 0 1rem 0;
    gap: 1.4rem;
    box-shadow: 0 2px 16px 0 ${SPARKLING_BLUE}14;
    z-index: 49;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
  }
`;

const NavLink = styled.a`
  color: ${SPARKLING_BLUE};
  font-size: 1.13rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.15s;

  &:after {
    content: "";
    display: block;
    margin: 0 auto;
    height: 2.2px;
    width: 0;
    background: ${SPARKLING_BLUE};
    transition: width 0.22s;
    border-radius: 2px;
  }

  &:hover,
  &.active {
    color: ${WHITE};
    background: ${SPARKLING_BLUE};
    border-radius: 6px;
    padding: 0.1rem 0.5rem;
  }

  &:hover:after,
  &.active:after {
    width: 80%;
    background: ${WHITE};
  }
`;

const IconLink = styled.a`
  color: ${SPARKLING_BLUE};
  font-size: 1.47rem;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  transition:
    color 0.17s,
    transform 0.17s;

  &:hover {
    color: #6d28d9; // Adjust as needed for hover state
    transform: scale(1.16);
  }
`;

const DarkModeBtn = styled.button`
  background: ${SPARKLING_BLUE};
  color: ${WHITE};
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  margin-left: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.32rem;
  cursor: pointer;
  box-shadow: 0 2px 12px ${SPARKLING_BLUE}18;
  transition:
    background 0.17s,
    color 0.14s,
    box-shadow 0.17s;

  &:hover {
    color: ${SPARKLING_BLUE};
    background: ${WHITE};
    box-shadow: 0 2px 20px ${SPARKLING_BLUE}25;
    border: 2px solid ${SPARKLING_BLUE};
  }
`;

const Burger = styled.div`
  display: none;
  cursor: pointer;
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  z-index: 51;

  @media (max-width: 700px) {
    display: flex;
  }
`;

const Bar = styled.div`
  width: 26px;
  height: 3.2px;
  background: ${SPARKLING_BLUE};
  margin: 4px 0;
  border-radius: 5px;
  transition: 0.3s;
`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true); // Default to dark mode

  const handleNavClick = () => setOpen(false);

  const toggleDark = () => {
    const newDark = !dark;
    setDark(newDark);

    if (typeof window !== "undefined") {
      document.body.classList.toggle("dark-mode", newDark);
      document.body.classList.toggle("light-mode", !newDark);
    }
  };

  useEffect(() => {
    document.body.classList.add("dark-mode");
  }, []);

  return (
    <HeaderWrapper>
      <NavContainer>
        <LogoContainer href="#home">
          <LogoImg src={profilePic} alt="Logo" />
          <LogoText>TK.Dev</LogoText>
        </LogoContainer>

        <Burger
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Bar
            style={{ transform: open ? "rotate(45deg) translateY(7px)" : "" }}
          />
          <Bar style={{ opacity: open ? 0 : 1 }} />
          <Bar
            style={{ transform: open ? "rotate(-45deg) translateY(-7px)" : "" }}
          />
        </Burger>

        <NavLinks open={open}>
          <NavLink href="#about" onClick={handleNavClick}>
            About
          </NavLink>
          <NavLink href="#skills" onClick={handleNavClick}>
            Skills
          </NavLink>
          <NavLink href="#projects" onClick={handleNavClick}>
            Projects
          </NavLink>
          <NavLink href="#education" onClick={handleNavClick}>
            Education
          </NavLink>
          <NavLink href="#contact" onClick={handleNavClick}>
            Contact
          </NavLink>

          <DarkModeBtn
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
            aria-label="Toggle dark mode"
            onClick={toggleDark}
          >
            {dark ? (
              <i className="bi bi-sun-fill" />
            ) : (
              <i className="bi bi-moon-stars-fill" />
            )}
          </DarkModeBtn>

          <NavLink
            href="https://github.com/tanakakawara?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            aria-label="GitHub"
            style={{
              padding: "0.2rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={pp}
              alt="Logo"
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                border: `2px solid ${SPARKLING_BLUE}`,
                objectFit: "cover",
              }}
            />
          </NavLink>
        </NavLinks>
      </NavContainer>
    </HeaderWrapper>
  );
}
