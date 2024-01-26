import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";
import { 
  Cmd,
} from "../styles/Welcome.styled";

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
        I am passionate about automating redundant tasks,
        cleaning data, and all things AI!
      </p>
      <p>
        I currently work for  <HighlightAlt>Collins Aerospace</HighlightAlt> as a 
        Software Engineer. type <Cmd>resume</Cmd> for my full resume!
      </p>
    </AboutWrapper>
  );
};

export default About;
