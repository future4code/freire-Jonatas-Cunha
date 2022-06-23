import styled from "styled-components";

export const Container = styled.div`
    color: white;
    opacity: ${props => props.corTitulo ? 1 : 0.6};
    display: flex;
    cursor: pointer;
    padding: 4px;
    margin: 6px;
    margin-left: 30px;
    &:hover{
        opacity: 1;
    }
`

export const IconeBotao = styled.img`
    width: 25px;
`

export const TituloBotao = styled.p`

    padding-left: 10px;
    margin: 0;

`