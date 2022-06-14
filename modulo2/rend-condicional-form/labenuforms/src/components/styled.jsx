import styled from "styled-components";

export const Bloco = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const Formulario = styled.form`
    border: 1px solid;
    border-radius: 12px;
    padding: 4px 30px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;
`
export const Selecao = styled.select`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;
`

export const Botao = styled.button`
    padding: 10px 31px;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    background: #8f8f8f;
    color: white;
    margin: 0 8px;
`

export const Etiqueta = styled.label`
    margin: 16px;
`