import React from 'react';
import styled from 'styled-components'
import SecaoPostar from './components/SecaoPostar/SecaoPostar';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <SecaoPostar/>
      </MainContainer>
    );
  }
}

export default App;
