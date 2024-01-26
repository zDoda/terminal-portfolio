import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>my_next_employer</User>@<WebsiteName>camdynzook.dev</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
