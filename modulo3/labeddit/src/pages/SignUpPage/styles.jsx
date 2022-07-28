import styled from "styled-components";
import { PrimaryColor, SecondaryTextColor, TertiaryColor, quarternaryTextColor } from "../../constants/Colors";


export const ContainerPrimary = styled.div`
        min-height: 100vh;
    @media(min-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 30px;
        background-color: ${TertiaryColor};
    }
`

export const Main = styled.main`
    @media(min-width: 768px) {
        display: flex;
        flex-direction: column;
        height: 100%;
        align-items: center;
        justify-content: center;
        background-color: ${TertiaryColor};
        margin-bottom: 30px;
    }
`

export const Container = styled.div`
    
     @media(min-width: 768px) {
       background-color: ${PrimaryColor};
       padding: 45px;
       max-width: 440px;
       margin: 0 auto;
       border-radius: 20px 100px;
       box-shadow: 0px 0px 15px 0.3px ${SecondaryTextColor};
     }

    @media(max-width: 768px) {

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 0 16px;
        margin: 0 auto;
    }

`

export const Title = styled.h1`

    @media(min-width: 768px) {
        margin: 30px 0 25px;
    }

`


export const BoxInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 15px 0 15px;
`

export const BoxContracts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    span {
        color: ${quarternaryTextColor};
    }

`
export const BoxCheckbox = styled.div`
        display: flex;
        align-items: center;
        gap: 10px;
`


export const BoxButtons = styled.div`
    margin-top: 25px;
`