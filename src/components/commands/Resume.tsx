import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Resume: React.FC = () => {

  window.open('/Camdyn_Zook_Resume.pdf', '_black')

  return (
    <Wrapper>
      <a href="/Camdyn_Zook_Resume.pdf" target="_blank">Camdyn Zook Resume - Opens in new tab</a>
    </Wrapper>
  );
};

export default Resume;
