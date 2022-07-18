import styled from "styled-components";

export const Screen = styled.main`
    max-width: 880px;
    margin: 0 auto 20px auto;
`

export const ContainerTitlePage = styled.div`
    width: 90%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    color: #fff ;

`

export const EmptyDiv = styled.div`
    width: 40px;
`

export const ContainerForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    input, textarea, select {
        box-sizing: unset;
        position: relative;
        vertical-align: top;
        width: 90%;
        background-color: white;
        border: 1px solid white;
        border-radius: 4px;
        margin: 10px 0;
        padding: 16.5px 14px;
    }

    textarea {
        height: 92px;
    }



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

