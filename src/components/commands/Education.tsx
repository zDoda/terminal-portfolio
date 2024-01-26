import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Master in Computer Science (part-time)",
    desc: "University of Illinois Urbana-Champaign | 2024 ~ 2025 est",
  },
  { 
    title: "Bachelor's in Computer Science",
    desc: "Iowa State University | 2019 - 2022",
  }
];

export default Education;
