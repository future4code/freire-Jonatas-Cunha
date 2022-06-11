import React from 'react';
import styled from 'styled-components'
import SecaoInputs from './components/SecaoInputs/SecaoInputs.js'
import BackGround from "./img/backg.png"
import LogoLabenu from "./img/labenulogo.jpg"


const Header = styled.header`
  background-color: #cececf;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 12px;
`
const BoxImgTitulo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

const ImgBox = styled.img`
  width: 50px;
  border-radius: 50%;
  margin-right: 8px;
  margin-left: 24px;

`

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled.div`
  height: 100vh;
  border-radius: 12px;
  width: 40%;
  border: 1px solid black;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
  background: url(${BackGround}) center repeat;
  background-size: contain;
  
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Box>
          <Header>
            <BoxImgTitulo>
              <ImgBox src={LogoLabenu} alt="" />
              <h4>Turma Labenu</h4>
            </BoxImgTitulo>
          </Header>
          <SecaoInputs />
        </Box>
      </MainContainer>
    );
  }
}

export default App;
