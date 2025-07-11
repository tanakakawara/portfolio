import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GraduationCap, BookOpen, Cloud } from "lucide-react";

// Color palette
const PRIMARY_COLOR = "#7c3aed";
const LIGHT_COLOR = "#211167ff";
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 4rem 0 2rem 0;
`;

const Heading = styled.h1`
  color: ${PRIMARY_COLOR};
  font-size: 2.7rem;
  font-weight: 900;
  margin-bottom: 0.4rem;
  text-align: center;
  text-shadow: 0 2px 20px rgba(124, 58, 237, 0.1);
`;

const SubTitle = styled.p`
  font-size: 1.18rem;
  color: #6d28d9;
  text-align: center;
  font-weight: 500;
  margin-bottom: 2.5rem;
`;

const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  position: relative;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  background: ${LIGHT_COLOR};
  border-radius: 18px;
  box-shadow: 0 6px 32px 0 rgba(124, 58, 237, 0.1);
  border: 2px solid rgba(124, 58, 237, 0.1);
  flex: 1 1 270px;
  max-width: 340px;
  padding: 2.1rem 1.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition:
    transform 0.23s,
    box-shadow 0.23s,
    border 0.23s;

  &:hover {
    transform: translateY(-7px) scale(1.03);
    box-shadow: 0 14px 36px 0 rgba(124, 58, 237, 0.2);
    border-color: ${PRIMARY_COLOR};
  }
`;

const IconCircle = styled.div`
  background: linear-gradient(145deg, #ede9fe 75%, #a78bfa 100%);
  color: ${PRIMARY_COLOR};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.15rem;
  font-size: 2.3rem;
  box-shadow: 0 2px 18px rgba(124, 58, 237, 0.1);
`;

const CardTitle = styled.h5`
  color: ${PRIMARY_COLOR};
  margin-bottom: 0.7rem;
  font-size: 1.28rem;
  font-weight: 700;
  text-align: center;
`;

const CardSub = styled.div`
  color: #6d28d9;
  font-size: 1.02rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const CardDesc = styled.p`
  color: #4b5563;
  font-size: 1.02rem;
  text-align: center;
  margin-bottom: 0.15rem;
`;

const DateText = styled.div`
  color: #a78bfa;
  font-size: 0.99rem;
  font-weight: 500;
  margin-top: 0.3rem;
  text-align: center;
`;

export default function Education() {
  const [loadText, setLoadText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoadText(true), 350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Section id="education">
      <style>{fadeInStyle}</style>
      <Heading>Education</Heading>
      <SubTitle>
        My learning journey: from high school to the cloud and beyond.
      </SubTitle>
      <OuterContainer>
        <Container>
          {/* University */}
          <Card className={loadText ? "fade-in" : "invisible"}>
            <IconCircle>
              <GraduationCap size={34} />
            </IconCircle>
            <CardTitle>Midlands State University</CardTitle>
            <CardSub>BSc Computer Science (Hons)</CardSub>
            <CardDesc>
              Graduated with a <b>2.1 (Upper Second Class)</b>.<br />
              4-year degree focused on software engineering, algorithms,
              databases, and networks.
            </CardDesc>
            <DateText>2019 – 2023</DateText>
          </Card>

          {/* High School */}
          <Card className={loadText ? "fade-in" : "invisible"}>
            <IconCircle>
              <BookOpen size={34} />
            </IconCircle>
            <CardTitle>Glen View 1 High School</CardTitle>
            <CardSub>A-Level</CardSub>
            <CardDesc>
              Completed Advanced Level studies.
              <br />
              Subjects included Computer Science, Accounting and Business
              Studies.
            </CardDesc>
            <DateText>2017 – 2018</DateText>
          </Card>

          {/* AWS Cloud Practitioner */}
          <Card className={loadText ? "fade-in" : "invisible"}>
            <IconCircle>
              <Cloud size={34} />
            </IconCircle>
            <CardTitle>AWS Cloud Practitioner</CardTitle>
            <CardSub>Amazon Web Services</CardSub>
            <CardDesc>
              Currently studying towards the{" "}
              <b>AWS Certified Cloud Practitioner</b> credential.
              <br />
              Gaining hands-on skills in cloud fundamentals, security, and AWS
              services.
            </CardDesc>
            <DateText>2024 – Present</DateText>
          </Card>
        </Container>
      </OuterContainer>
    </Section>
  );
}
