import styled from "styled-components";
import { TertiaryColor } from "../../constants/Colors";

export const ContainerPrimary = styled.div`
    min-height: 100vh;
    @media(min-width: 768px) {
        padding-bottom: 2px;
        background-color: ${TertiaryColor};
    }


`


export const Container = styled.div`
    margin: 25px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 1440px;



    @media (max-width: 767px) {
        padding: 16px;
        display: flex; 
        flex-direction: column; 
        gap: 15px;
    }
`

export const BoxCard = styled.div`
    @media (min-width: 768px) {
        width: 330px;

        div{
            height: 100%;
        }
    }
`