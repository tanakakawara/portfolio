import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Purple and white color palette
const PURPLE = "#7c3aed";
const LIGHT_PURPLE = "#ede9fe";
const WHITE = "#fff";

// Fade-in animation
const fadeInStyle = `
  .fade-in {
    opacity: 1;
    transform: translateY(0);
    transition: opacity .7s cubic-bezier(.4,1.7,.67,.99), transform .7s cubic-bezier(.4,1.7,.67,.99);
  }
  .invisible {
    opacity: 0;
    transform: translateY(30px);
  }
`;

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  background: ${WHITE};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 4rem 0 2rem 0;
`;

const Heading = styled.h1`
  color: ${PURPLE};
  font-size: 2.7rem;
  font-weight: 900;
  margin-bottom: 0.4rem;
  letter-spacing: -0.01em;
  text-align: center;
  text-shadow: 0 2px 20px #7c3aed18;
`;

const SubTitle = styled.p`
  font-size: 1.18rem;
  color: #6d28d9;
  text-align: center;
  font-weight: 500;
  margin-bottom: 2.5rem;
  letter-spacing: 0.01em;
`;

const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  background: rgba(0, 0, 0, 0.01);

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.7rem;
    padding: 0 1rem;
  }
`;

const Card = styled.div`
  background: ${LIGHT_PURPLE};
  border-radius: 18px;
  box-shadow: 0 6px 32px 0 ${PURPLE}18;
  border: 2px solid ${PURPLE}13;
  flex: 1 1 350px;
  max-width: 420px;
  min-width: 310px;
  padding: 2.3rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition:
    transform 0.23s,
    box-shadow 0.23s,
    border 0.23s;

  &:hover {
    transform: translateY(-7px) scale(1.03);
    box-shadow: 0 14px 36px 0 ${PURPLE}33;
    border-color: ${PURPLE};
  }

  @media (max-width: 600px) {
    padding: 1.4rem 1rem;
    min-width: unset;
    max-width: 100vw;
  }
`;

const CardTitle = styled.h5`
  color: ${PURPLE};
  margin-bottom: 1.2rem;
  font-size: 1.45rem;
  font-weight: 700;
  letter-spacing: 0.01em;
`;

const Label = styled.label`
  color: ${PURPLE};
  font-weight: 500;
  font-size: 1.01rem;
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.7rem;
  margin-bottom: 1.1rem;
  border-radius: 7px;
  border: 1.5px solid ${LIGHT_PURPLE};
  background: #fff;
  color: ${PURPLE};
  font-size: 1.05rem;

  &:focus {
    outline: 2px solid ${PURPLE};
    background: ${LIGHT_PURPLE};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.7rem;
  border-radius: 7px;
  border: 1.5px solid ${LIGHT_PURPLE};
  background: #fff;
  color: ${PURPLE};
  font-size: 1.05rem;
  margin-bottom: 1.1rem;
  resize: vertical;

  &:focus {
    outline: 2px solid ${PURPLE};
    background: ${LIGHT_PURPLE};
  }
`;

const SubmitButton = styled.button`
  background: ${PURPLE};
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 1.08rem;
  font-weight: 600;
  padding: 0.7rem 2.6rem;
  margin-bottom: 1.2rem;
  transition:
    background 0.19s,
    box-shadow 0.19s,
    color 0.19s;
  box-shadow: 0 2px 10px 0 ${PURPLE}14;
  cursor: pointer;

  &:hover {
    background: #6d28d9;
    color: #fff;
    box-shadow: 0 4px 24px 0 ${PURPLE}22;
  }
`;

const InfoText = styled.p`
  color: #6d28d9;
  font-size: 1.04rem;
  margin-bottom: 0.2rem;
`;

const InfoStrong = styled.span`
  color: ${PURPLE};
  font-weight: 600;
`;

const Divider = styled.hr`
  border-top: 1.5px solid ${PURPLE}22;
  margin: 1.2rem 0;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1rem;
`;

const SocialButton = styled.a`
  color: ${({ color }) => color || PURPLE};
  font-size: 2rem;
  transition:
    color 0.17s,
    transform 0.21s;
  display: flex;
  align-items: center;

  &:hover {
    color: ${PURPLE};
    transform: scale(1.16);
  }
`;

function sendEmail(name, email, message) {
  const mailto = `mailto:tanakakwr3011@gmail.com?subject=Contact from ${encodeURIComponent(
    name
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`
  )}`;
  window.location.href = mailto;
}

export default function Contact() {
  const [loadText, setLoadText] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoadText(true), 350);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formData.name, formData.email, formData.message);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Section id="contact">
      <style>{fadeInStyle}</style>
      <Heading>My Contacts</Heading>
      <SubTitle>
        I'd love to connect with you! Reach out for any collaboration, project
        or just to say hi.
      </SubTitle>
      <OuterContainer>
        <Container>
          <Card className={loadText ? "fade-in" : "invisible"}>
            <CardTitle>Contact Me</CardTitle>
            <form onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </div>
              <div>
                <Label htmlFor="email">Email address</Label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <SubmitButton type="submit">Send</SubmitButton>
            </form>
            <Divider />
            <InfoText>
              <InfoStrong>Email:</InfoStrong> tanakakwr3011@gmail.com
            </InfoText>
            <InfoText>
              <InfoStrong>Phone:</InfoStrong> +263771028615
            </InfoText>
          </Card>

          <Card className={loadText ? "fade-in" : "invisible"}>
            <CardTitle>More About Me</CardTitle>
            <InfoText>
              <InfoStrong>Location:</InfoStrong> Harare, Zimbabwe
            </InfoText>
            <InfoText>
              <InfoStrong>Languages:</InfoStrong> English, Shona, Swahili
            </InfoText>
            <Divider />
            <h6 style={{ color: PURPLE, fontWeight: 600, marginTop: "0.6rem" }}>
              Connect on Social Media
            </h6>
            <SocialRow>
              <SocialButton
                href="https://github.com/tanakakawara?tab=repositories"
                color={PURPLE}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <i className="bi bi-github" />
              </SocialButton>
              <SocialButton
                href="https://www.linkedin.com/in/tanaka-kawara-928a75260/"
                color="#6d28d9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <i className="bi bi-linkedin" />
              </SocialButton>
              <SocialButton
                href="https://www.instagram.com/yrnfirmino/"
                color="#a78bfa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <i className="bi bi-instagram" />
              </SocialButton>
            </SocialRow>
          </Card>
        </Container>
      </OuterContainer>
    </Section>
  );
}
