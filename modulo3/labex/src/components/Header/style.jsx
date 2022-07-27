import styled from "styled-components";


export const ConainerButton = styled.div`
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        width: 125px;
        padding: 8px 0;
        border-radius: 5px;
        border: none;
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
    }


    @media (max-width: 611px) {
        display: none;
    }
`


export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
`
export const BoxTitle = styled.div`
    display: flex;
    align-items: center;
    margin: 5px;
    cursor: pointer;
`

export const Title = styled.h1`
    color: white;
    font-size: 2.5rem;
    margin: 0 0 0 5px;
`


export const BoxNavDesktop = styled.nav`

    text-decoration: none;

    #inicio, #viagens, #inscreva {
        padding: 2px;
        margin: 0 5px;
        text-decoration: none;
    }


    #inicio{
        color: ${props => props.currentPage === "/" ? "#ff0000" : "#fff"};
    }

    #viagens{
        color: ${props => props.currentPage === "/trips/list" ? "#ff0000" : "#fff"};
    }

    #inscreva{
        color: ${props => props.currentPage.slice(0, 18) === "/trips/application" ? "#ff0000" : "#fff"};
    }

    @media (max-width: 611px) {
        display: none;
    }

`

export const DivVazia = styled.div`
    @media(min-width: 612px){
        display: none;
    }
`