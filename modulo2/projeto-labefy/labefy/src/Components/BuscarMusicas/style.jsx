import styled from "styled-components"

export const Conainer = styled.div`

    form{
        display: flex;
        justify-content: space-between;
        width: 85%;
        height: 50px;
        margin: 0 auto;
        border-bottom: 1px solid white;
        border-radius: 8px;
    }

    form input{
        height: 100%;
        width: 65%;
        font-size: 2rem;
        margin-left: 8px;
        background-color: transparent;
        border: none;
    }

    form input:focus{
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    form input::placeholder {
        color: #808080bf;
        font-weight: bold;
    }

    form select{
        margin-right: -1px;
        background: none;
        color: #808080bf;
        border-radius: 12px;
        padding: 0 25px;
        border: 1px solid #808080bf;
        font-size: 1.2rem;
        font-weight: bold;
    }

    form select:focus{
        box-shadow: 0 0 0 0;
        outline: 0
    }

    .BoxMusicas {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        min-height: 265px;
    }

`


export const BoxRecomendados = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 25%;
    height: 220px;
    margin: 1%;
    color: white;
    font-weight: bold;
    background: rgb(213 212 212 / 32%);
    border-radius: 5px;
    transition-duration: 1s;
    padding: 10px;
    min-width: 175px;
    &:hover {
        transition-duration: 1s;
        background: rgb(213 212 212 / 50%);
    }
`

export const TituloBusca = styled.div`
    color: white;
    font-weight: bold;
    font-size: 1.6rem;
    margin: 30px 12px;
`


export const BlocoPlayer = styled.div`
    height: 70%;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`

export const NomePlayList = styled.p`
    margin: 0;
    margin-top: 20px;
    text-align: center;

`