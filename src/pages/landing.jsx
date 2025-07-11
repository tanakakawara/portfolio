import React from "react";
import styled, { keyframes } from "styled-components";
import pp from "./about/tanaka.jpg";
import sdPDF from "./sd.pdf";
import bg from "./bgx.jpg";

// Background image resembling software development (replace with your own if desired)
const bgImage = bg;
// Coding screens

// Developer's profile picture
const devImage = pp;

// Download image URL (example)
const downloadImage =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80";

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(30,144,255,0.3); }
  70% { box-shadow: 0 0 0 20px rgba(30,144,255,0); }
  100% { box-shadow: 0 0 0 0 rgba(30,144,255,0); }
`;

const HeroWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;
  background: url(${bgImage}) center/cover no-repeat;
`;

const Musk = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(24, 26, 35, 0.75);
  z-index: 1;
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1150px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 670px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Card for developer info
const DevCard = styled.div`
  background: rgba(34, 42, 60, 0.92);
  border-radius: 18px;
  box-shadow: 0 6px 36px 0 rgba(30, 144, 255, 0.1);
  padding: 2.5rem 2rem 2rem 2rem;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  width: 100%;

  @media (max-width: 600px) {
    padding: 1.5rem 1rem;
    max-width: 95vw;
  }
`;

const Avatar = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #12d8fa;
  margin-bottom: 1.2rem;
  box-shadow: 0 2px 14px 0 rgba(30, 144, 255, 0.13);
`;

const DevName = styled.h2`
  font-size: 1.7rem;
  font-weight: 700;
  margin: 0.3rem 0 0.2rem 0;
`;

const DevRole = styled.p`
  font-size: 1.1rem;
  color: #aee2f7;
  margin: 0 0 0.8rem 0;
  font-weight: 500;
`;

const DevBio = styled.p`
  font-size: 1rem;
  color: #e0e0e0;
  margin-bottom: 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  color: #e0e0e0;
  max-width: 600px;
`;

const CircleButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1fa2ff, #12d8fa, #a6ffcb);
  border-radius: 50%;
  width: 96px;
  height: 96px;
  box-shadow: 0 6px 24px rgba(30, 144, 255, 0.15);
  position: relative;
  text-decoration: none;
  cursor: pointer;
  animation: ${pulse} 2s infinite;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 8px 32px rgba(30, 144, 255, 0.3);
  }

  @media (max-width: 600px) {
    width: 72px;
    height: 72px;
  }
`;

const DownloadIcon = styled.svg`
  width: 2.5rem;
  height: 2.5rem;
  fill: #fff;
`;

export default function Landing() {
  return (
    <HeroWrapper>
      <Musk />
      <Container>
        <Content>
          <DevCard>
            <Avatar src={devImage} alt="Developer" />
            <DevName>Tanaka Kawara</DevName>
            <DevRole>Full Stack Software Engineer</DevRole>
            <DevBio>
              Passionate about building web apps, UI/UX, and solving real-world
              problems with code. Always learning, always shipping.
            </DevBio>
          </DevCard>
          <Title>Welcome to My Portfolio</Title>
          <br></br>
          <Subtitle>download my resume</Subtitle>
          <CircleButton
            href={sdPDF}
            download="Tanaka_Kawara_Resume.pdf" // <-- Change filename as desired
            aria-label="Download CV"
          >
            <DownloadIcon viewBox="0 0 24 24">
              <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm-9 4v2h18v-2H3z" />
            </DownloadIcon>
          </CircleButton>
        </Content>
      </Container>
    </HeroWrapper>
  );
}
