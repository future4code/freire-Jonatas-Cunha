import styled from "styled-components";

export const ContainerTrips = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 1280px;
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
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
    margin: 0px 214px;
    width: 100%;

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

    
   /* ::after, ::before {
    position: absolute;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 70%;
    height: 100%;
    background: #000000;
    z-index: 9999999;
    border-radius: 14px;

}

::after{
    ${props => props.delet && "content: 'Deletar';"}
}

::before {
    ${props => props.settings && "content: 'Editar';"}
} */



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