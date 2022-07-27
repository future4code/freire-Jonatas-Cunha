import styled from "styled-components";

export const Container = styled.div`
    max-width: 880px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    h1{
        color: #fff;
    }

`

export const ContainerForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

`

export const Button = styled.button`
    width: 280px;
    letter-spacing: 5px;
    padding: 21px 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;

    :hover{
        letter-spacing: 10px;
        transition-duration: 0.5s;
    }

`

export const ContainerTitlePage = styled.div`
    width: 90%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
`

export const EmptyDiv = styled.div`
    width: 40px;
`