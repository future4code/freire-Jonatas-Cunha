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
  
`

export default function Loader() {
    return (
        <LoaderWrapper>
            <LoaderContent />
        </LoaderWrapper>
    )
}

