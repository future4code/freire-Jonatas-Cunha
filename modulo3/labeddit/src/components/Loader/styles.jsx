import styled from "styled-components";
import LoaderLogo from "../../assets/img/LoaderLogo.gif";
import { SecondaryTextColor } from "../../constants/Colors";

export const Grayout = styled.div`
    display: ${props => props.display ? "flex" : "none"};
    z-index: 99999;
    position: fixed;
    top: 0;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: #7979797e;
    backdrop-filter: blur(0.5em);
`

export const Title = styled.h1`
        position: relative;
        top: -5px;
        color: ${SecondaryTextColor}; 
`

export const Box = styled.div`
    @media(min-width: 768px) {
        width: 25%;
        height: 25%;
        margin-bottom: 25px;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 50%;
    border-radius: 0.5em;
    background: url(${LoaderLogo}) no-repeat center;
    background-size: contain;
`