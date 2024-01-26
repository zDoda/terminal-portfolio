import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Resume: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  if (rerender && currentCommand[0] === "resume" && currentCommand.length <= 1) {
    window.open('/Camdyn_Zook_Resume.pdf', '_black')
  }

  return (
    <Wrapper>
      <p>Camdyn Zook Resume - camdynzook.dev/Camdyn_Zook_Resume.pdf</p>
    </Wrapper>
  );
};

export default Resume;
