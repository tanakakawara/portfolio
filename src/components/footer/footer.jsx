import React from "react";
import styled from "styled-components";
import "bootstrap-icons/font/bootstrap-icons.css";

// Styled Footer Wrapper
const FooterWrapper = styled.footer`
  background: rgb(4, 14, 24); /* Blue background */
  color: #ffffff; /* White text for contrast */
  padding: 3rem 0 1.2rem 0;
  margin-top: 5rem;
  font-family: "Inter", "Segoe UI", Arial, sans-serif;

  @media (max-width: 600px) {
    padding: 2rem 0 0.7rem 0;
    margin-top: 2.5rem;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2.2rem;
    align-items: center;
    text-align: center;
  }
`;

const FooterCol = styled.div`
  flex: 1 1 280px;
  min-width: 220px;
  margin-bottom: 1.7rem;
`;

const FooterTitle = styled.h5`
  color: #ffffff;
  font-size: 1.17rem;
  font-weight: 700;
  margin-bottom: 1.1rem;
  letter-spacing: 0.01em;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.1rem;
  align-items: center;
  margin-top: 0.7rem;
`;

const SocialIcon = styled.a`
  color: #ffffff;
  font-size: 1.47rem;
  transition:
    color 0.17s,
    transform 0.18s;

  &:hover {
    color: #cce9ff;
    transform: scale(1.18);
  }
`;

const QuickLinksList = styled.ul`
  list-style: none;
  padding: 0;
`;

const QuickLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.07rem;
  display: block;
  margin-bottom: 0.3rem;
  transition: color 0.17s;

  &:hover {
    color: #cce9ff;
    text-decoration: underline;
  }
`;

const ContactInfo = styled.p`
  color: #d9ecff;
  font-size: 1rem;
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.6em;
`;

const Divider = styled.div`
  width: 100%;
  margin-top: 1.7rem;
  border-top: 1.5px solid #cce9ff;
`;

const Copyright = styled.div`
  width: 100%;
  text-align: center;
  color: #e0f2ff;
  font-size: 1.04rem;
  padding-top: 1.3rem;
  letter-spacing: 0.01em;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        {/* Social Media */}
        <FooterCol>
          <FooterTitle>Follow Me</FooterTitle>
          <SocialLinks>
            <SocialIcon
              href="https://github.com/tanakakawara?tab=repositories"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <i className="bi bi-github" />
            </SocialIcon>
            <SocialIcon
              href="https://www.linkedin.com/in/tanaka-kawara-928a75260/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <i className="bi bi-linkedin" />
            </SocialIcon>
            <SocialIcon
              href="https://www.facebook.com/tanaka.kawara"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <i className="bi bi-facebook" />
            </SocialIcon>
          </SocialLinks>
        </FooterCol>

        {/* Quick Links */}
        <FooterCol>
          <FooterTitle>Quick Links</FooterTitle>
          <QuickLinksList>
            <li>
              <QuickLink href="/about">About</QuickLink>
            </li>
            <li>
              <QuickLink href="/skills">Skills</QuickLink>
            </li>
            <li>
              <QuickLink href="/projects">Projects</QuickLink>
            </li>
            <li>
              <QuickLink href="/contact">Contact</QuickLink>
            </li>
          </QuickLinksList>
        </FooterCol>

        {/* Contact Info */}
        <FooterCol>
          <FooterTitle>Contact</FooterTitle>
          <ContactInfo>
            <i className="bi bi-envelope-fill" /> tanakakwr3011@gmail.com
          </ContactInfo>
          <ContactInfo>
            <i className="bi bi-phone-fill" /> +263771028615
          </ContactInfo>
          <ContactInfo>
            <i className="bi bi-geo-alt-fill" /> Harare, Zimbabwe
          </ContactInfo>
        </FooterCol>
      </Container>
      <Divider />
      <Copyright>
        Made with <span style={{ color: "red", fontWeight: 700 }}>♥</span> by
        TK
      </Copyright>
    </FooterWrapper>
  );
}
