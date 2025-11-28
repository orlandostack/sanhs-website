import LandingPage from "./pages/LandingPage";
import GlobalStyle from "./styles/Global";
import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  width: 100%;
  background-color: ${({ $bg }) => $bg || "white"};
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <LandingPage />
      <Section id="announcement">Announcements</Section>
      <Section id="contacts">Contact</Section>
    </>
  );
}

export default App;
