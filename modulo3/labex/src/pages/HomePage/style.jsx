import styled from "styled-components";

export const Container = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    box-shadow: 0px 0px 15px 0px rgb(255 255 255 / 30%);
    background: #0000006f;
    color: white;
    height: 344px;
    border-radius: 14px;
    padding: 0px 20px;
    max-width: 812px;
    box-sizing: border-box;
    margin: 80px auto;
`

export const BoxMens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    text-align: center;

    h1 {
        margin: 0;
    }

    div{
        max-width: 410px;
    }
    
    p{
        font-size: 18px;
    }
`

export const BoxButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 0;
    gap: 20px;

`

export const Button = styled.button`
    width: 200px;
    padding: 10px ;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    text-transform: uppercase;

    cursor: pointer;
`