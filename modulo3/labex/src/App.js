import Router from "./routes/Router";
import styled from "styled-components";
import Background from "./img/bg-2.webp"

const Screen = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Background}) no-repeat center center fixed;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  margin: 0;
`

function App() {
  return (
    <Screen>
        <Router />
    </Screen>
  );
}

export default App;
