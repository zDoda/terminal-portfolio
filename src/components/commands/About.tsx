import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Camdyn Zook</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Software Engineer</HighlightAlt> based in Tampa Bay,
        Florida, USA.
      </p>
      <p>
        I am passionate about automating redundant tasks, <br />
        cleaning data, and all things AI!
      </p>
    </AboutWrapper>
  );
};

export default About;
