import React from 'react';
import styled from 'styled-components'
import SecaoInputs from './components/SecaoInputs/SecaoInputs.js'
import BackGround from "./img/backg.jpg"

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled.div`
  height: 100vh;
  width: 40%;
  border: 1px solid black;
  box-sizing: border-box;

  display: flex;
  flex-direction: column-reverse;
  overflow: auto;
  background: url(${BackGround}) center repeat;
  
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
       <Box>
       <SecaoInputs/>
       </Box>
      </MainContainer>
    );
  }
}

export default App;
