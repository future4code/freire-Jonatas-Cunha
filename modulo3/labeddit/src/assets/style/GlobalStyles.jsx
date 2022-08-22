import styled from 'styled-components';
import { PrimaryGradient, PrimaryColor, TertiaryTextColor } from "../../constants/Colors";


export const ButtonSign = styled.button`
    color: ${PrimaryColor};
    background: ${PrimaryGradient};
    border: none;
    border-radius: 27px;
    min-width: 150px;
    height: 45px;
    margin: 5px auto;
    font-weight: bold;
    font-size: 1rem;
`
export const ButtonSignUp = styled.button`
    color: ${TertiaryTextColor};
    background: ${PrimaryColor};
    border: 1px solid ${TertiaryTextColor};
    border-radius: 27px;
    min-width: 150px;
    height: 45px;
    margin: 5px auto;
    font-weight: bold;
    font-size: 1rem;
`
export const PageButton = styled.button`
    color: ${PrimaryColor};
    background: ${PrimaryGradient};
    border: none;
    border-radius: 12px;
    min-width: 150px;
    height: 45px;
    margin: 5px auto;
    font-weight: bold;
    font-size: 1rem;
`

export const Separator = styled.div`
    width: 100%;
    height: 1px;
    margin: 10px auto;
    background: ${PrimaryGradient};
`

export const BoxErros = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`