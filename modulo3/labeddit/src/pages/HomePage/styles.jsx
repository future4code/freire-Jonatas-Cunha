import styled from "styled-components";
import { PrimaryColor, TertiaryColor } from "../../constants/Colors";

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
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    grid-gap: 20px;
    max-width: 1440px;

    @media (max-width: 767px) {
        padding: 16px;
        display: flex; 
        flex-direction: column; 
        gap: 15px;
    }
`

export const BoxCard = styled.div`
    @media(max-width: 767px) {
        width: 100%;
    }

    @media (min-width: 768px) {
        width: 330px;
    }
`

export const BoxNewPost = styled.form`
    width: 100%;
    max-width: 1376px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    @media(min-width: 768px) {
        width: 100%;
        margin: 0 auto;
        background: ${PrimaryColor};
        padding: 30px;
        /* border-radius: 30px; */
    }
`