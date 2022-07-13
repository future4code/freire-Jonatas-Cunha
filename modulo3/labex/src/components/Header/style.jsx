import styled from "styled-components";


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
`

export const Title = styled.h1`
    color: white;
    font-size: 2.5rem;
    margin: 0 0 0 5px;
`


export const BoxNav = styled.nav`

    text-decoration: none;

    #inicio{
        color: ${props => props.currentPage === "/" ? "#ff0000" : "#fff"};
    }

    #viagens{
        color: ${props => props.currentPage === "/trips/list" ? "#ff0000" : "#fff"};
    }

    #inscreva{
        color: ${props => props.currentPage === "/trips/application" ? "#ff0000" : "#fff"};
    }

`