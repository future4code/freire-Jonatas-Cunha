import styled from 'styled-components';

export const ContainerTrips = styled.main`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 25px;

    max-width: 1280px;
    margin: 20px auto;

`

export const BoxTrip = styled.div`
    color: #fff;
    background-color: #0000006f;
    border-radius: 14px;
    padding: 20px;
    margin: 0 20px;
    width: 300px;
    min-width: 300px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    box-shadow: 0px 0px 15px 0px rgb(255 255 255 / 30%);

    h3 {
        margin: 0;
    }

    p {
        margin: 5px;
    }

    button {
        width: 200px;
        padding: 10px;
        border-radius: 5px;
        border: none;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        margin: 10px 0 0;
    }

`


export const BoxPlanet = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 32px;
    }

`

export const ContainerSearchBar = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    padding: 2px 5px;
    margin: 23px auto 10px auto;
    border-radius: 12px;

    background: #fff;

    form{
        width: 100%;
    }

    input{
        width: 100%;
        border: none;
    }

    input:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    } 

    button {
        background: none;
        border: none;
        margin: 0;
        padding: 0;
        height: 31px;
        width: 36px;
    }


`