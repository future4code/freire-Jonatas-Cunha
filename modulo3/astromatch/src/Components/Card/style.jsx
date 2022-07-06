import styled from "styled-components";
import ChaletNewYorkNineteenSeventy from "./ChaletNewYorkNineteenSeventy.ttf" ;

export const ContainerCard = styled.div`
    position: relative;
    width: 400px;
    height: 645px;
    border: 1px solid #000000;

    @media(max-width: 468px) {
        width: 100%;
        height: 99vh;
    }

`

export const BoxHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const EmptyBox = styled.div`
    width: 32px;
`

export const BoxLogo = styled.div`
        @font-face{
        font-family: ChaletNewYorkNineteenSeventy;
        src: url(${ChaletNewYorkNineteenSeventy}) ;
    }

    font-family: ChaletNewYorkNineteenSeventy;
    display: flex;
    align-items: center;

    h1{
    background-image: linear-gradient(to top,#fa0037,#f8939c);
    background-clip: text;
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent;
    color: black;
  

    }


    img{
        width: 45px;
        height: 50px;
    }

`

export const BoxTelas = styled.main`
    margin: 20px;
    height: 85%;
`