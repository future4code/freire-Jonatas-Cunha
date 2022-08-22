import styled, { keyframes } from "styled-components";
import {
  PrimaryColor,
  PrimaryTextColor,
  TertiaryTextColor,
  TertiaryColor,
} from "../../constants/Colors";

const diamondLoader = keyframes`
    0%, 10% {
      transform: translate(-64px, -64px) rotate(-45deg);
    }
    90%, 100% {
      transform: translate(0px, 0px) rotate(-45deg);
    }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const Loader = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  background-color: ${PrimaryTextColor};
  transform: rotate(45deg);
  overflow: hidden;
  margin-top: 20px;
  margin-bottom: 20px;

  &:after {
    content: "";
    position: absolute;
    inset: 8px;
    margin: auto;
    background: ${PrimaryColor};
    @media (min-width: 768px) {
      background-color: ${TertiaryColor};
    }
  }
  &:before {
    content: "";
    position: absolute;
    inset: -15px;
    margin: auto;
    background: ${TertiaryTextColor};
    animation: ${diamondLoader} 2s linear infinite;
  }
`;
