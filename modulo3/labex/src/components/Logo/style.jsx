import styled from "styled-components";

export const Logo = styled.div`
    position: relative;

    .loader {
        width: 60px;
        height: 60px;
        border: 3px solid #FFF;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        animation: rotation 2.2s linear infinite;
    }

    .loader::after {
        content: '';  
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        background: #ffffff;
        width: 11px;
        height: 11px;
        transform: translate(-50%, 50%);
        border-radius: 50%;
    }

    .circle {
        position: absolute;
        background: #ffffff;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        top: 20px;
        right: 20px;
    }

    .loader.internal {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 40px;
        height: 40px;
        animation: rotation 2.8s linear infinite;

    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
} 

`