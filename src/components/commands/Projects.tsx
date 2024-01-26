import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        "SHOW ME WHAT YOU GOT" - Some Planet, Rick and Morty <br />
        Here are some of my projects that I am most proud of!
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Blogo",
    desc: "Automated blog writer, written in Python",
    url: "https://github.com/zDoda/Blogo",
  },
  {
    id: 2,
    title: "WhatsApp Chatbot",
    desc: "Uses OpenAI Assistants API, Twilio API, and a Flask backend",
    url: "https://github.com/zDoda/chatbot_scripts/tree/main/whatsapp_bot",
  },
  {
    id: 3,
    title: "Terminal-Portfolio",
    desc: "React, Typescript 'terminal' that has commands to show my skills",
    url: "https://github.com/zDoda/terminal-portfolio",
  },
  {
    id: 4,
    title: "wordp",
    desc: "Wordpress API Command Line Interface, written in Golang",
    url: "https://github.com/zDoda/wordp",
  },
];

export default Projects;
