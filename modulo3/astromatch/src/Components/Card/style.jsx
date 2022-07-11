import styled from "styled-components";
import ChaletNewYorkNineteenSeventy from "./ChaletNewYorkNineteenSeventy.ttf" ;

export const ContainerCard = styled.div`
    position: relative;
    width: 400px;
    height: 645px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 0px 10px 2px #270f15;


    @media(max-width: 468px) {
        width: 95%;
        height: 95vh;
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
    cursor: pointer;

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

export const ImgLogo = styled.img`

    @keyframes coracaobatendo {
        0% {
            transform: scale(0.95);
        }
        5% {
            transform: scale(1.1);
        }
        39% {
            transform: scale(0.85);
        }
        45% {
            transform: scale(1);
        }
        60% {
            transform: scale(0.95);
        }
        100% {
            transform: scale(0.9);
        }
    }

    width: 45px;
    height: 50px;

    ${BoxLogo}:hover &{
        animation: coracaobatendo 1s ease-in-out infinite;
    }

`



export const BoxTelas = styled.main`
    margin: 20px;
    height: 85%;
`

export const Button = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    padding: 5px 8px;

    :hover{
        border-radius: 50%;
        background-color: #e6e6e6;
    }



`