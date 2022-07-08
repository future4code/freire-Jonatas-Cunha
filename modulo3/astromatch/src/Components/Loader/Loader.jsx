import React from 'react'
import Coracao from "../../Img/heart.png";
import styled, { keyframes } from 'styled-components'

const beatingAnimation = keyframes`
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

  /* 0% {
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
  }
  100% {
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
  } */

`

const LoaderWrapper = styled.div`
    position: absolute;
    top: 185px;
    width: 90%;
    box-sizing: border-box;
`

const LoaderContent = styled.div`
  margin: 0 auto;
  width: 120px;
  height: 120px;
  background: url(${Coracao});
  background-size: cover;
  animation: ${beatingAnimation} 1s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  /* animation: ${beatingAnimation} 0.2s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both; */
  
`

export default function Loader() {
    return (
        <LoaderWrapper>
            <LoaderContent />
        </LoaderWrapper>
    )
}

