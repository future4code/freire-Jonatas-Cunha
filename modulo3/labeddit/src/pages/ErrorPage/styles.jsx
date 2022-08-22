import styled from "styled-components";
import { TertiaryColor } from "../../constants/Colors";



export const ContainerPrimary = styled.div`
    height: 100vh;
    background: ${TertiaryColor};
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20vh;
    text-align: center;
    height: 100%;
`

export const Title = styled.h1`
    font-size: 6rem;
`

export const Information = styled.p`
    font-size: 2rem;
`