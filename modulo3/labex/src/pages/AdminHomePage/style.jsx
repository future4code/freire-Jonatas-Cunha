import styled from "styled-components";

export const ContainerTrips = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 880px;
    margin: 0 auto 20px auto;
    display: flex;
    flex-direction: column;
    gap: 20px;


    button#createTrip {
        width: 200px;
        padding: 10px;
        border-radius: 5px;
        border: none;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;

    }


`

export const BoxTrip = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #fff;
    box-shadow: 0px 0px 15px 0px rgb(255 255 255 / 30%);
    background-color: #0000006f;
    border-radius: 14px;
    padding: 0px 10px;
    margin: 0px auto;
    width: 90%;

    @media(max-width: 660px) {
        margin: 0px 80px;
    }

    #delet:hover::after, #delet:active::after, #settings:hover::before, #settings:active::before{
        position: absolute;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        top: -10px;
        right: 95px;
        width: 250px;
        height: 50px;
        background: #000000;
        z-index: 9999999;
        border-radius: 14px;
}

    #delet:hover::after, #delet:active::after{
        content: "Deletar";
    }

    #settings:hover::before, #settings:active::before{
        content: "Opções";
    }

    h3 {
        width: 75%;
    }
`
export const BoxButtons = styled.div`
    position: relative;
    width: 80px ;

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

`

export const ContainerTitlePage = styled.div`
    width: 90%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    color: #fff;
    text-align: center;

    h1 {
        margin-bottom: 5px;
    }

`
