import styled from "styled-components";
import {TertiaryTextColor} from "../../constants/Colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
`

export const Title = styled.h1`
    text-align: center;
`

export const Button = styled.button`
    padding: 10px;
    width: 220px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    border-radius: 5px;
    color: ${TertiaryTextColor};
    border: 1px solid ${TertiaryTextColor};
    background: none;

`