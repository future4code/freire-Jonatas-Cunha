import styled from "styled-components";


export const Container = styled.div`
    @media(min-width: 612px){
        display: none;
        z-index: 100000;
    }
`

export const MenuIcon = styled.div`
    position: relative;
    width: 40px;
    height: 4px;
    background-color: #fff;
    border-radius: 5px;
    transform: ${props => props.open ? "rotate(45deg)" : "rotate(0deg)"};
    z-index: 100000;

    ::before, ::after {
        content: "";
        width: 40px;
        height: 4px;
        background-color: #fff;
        border-radius: 5px;
        transform: ${props => props.open ? "rotate(90deg)" : "rotate(0deg)"};

    }

    ::after {
        position: absolute;
        bottom: -12px;
        bottom: ${props => props.open ? "0" : "-12px"};
        transform: ${props => props.open ? "rotate(90deg)" : "rotate(0deg)"};
        
    }

    ::before {
        position: absolute;
        top: ${props => props.open ? "0" : "-12px"};
    }

`

export const BoxMenuMobile = styled.div`
    padding: 20px 0;
    cursor: pointer;
`


export const MenuContainer = styled.div`
    display: ${props => props.open ? "flex" : "none"};
    position: absolute;
    top: 84px;
    left: 0;
    height: 100%;
    width: 260px;
    background-color: #3f3f3f;
    z-index: 100000;

    flex-direction: column;
    /* align-items: center; */
    gap: 5px;


    .ItenMenu{
        display: flex;
        align-items: center;
        gap: 5px;
        margin: 5px 0 0 0;
        padding: 5px;
        color: white;
        text-decoration: none;
    }

    #inicio{
        color: ${props => props.currentPage === "/" ? "#ff0000" : "#fff"};
    }

    #viagem{
        color: ${props => props.currentPage === "/trips/list" ? "#ff0000" : "#fff"};
    }

    #inscreva{
        color: ${props => props.currentPage.slice(0, 18) === "/trips/application" ? "#ff0000" : "#fff"};
    }


`

export const ExternalContainer = styled.div`
    display: ${props => props.open ? "block" : "none"};
    position: absolute;
    top: 84px;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgb(0 0 0 / 51%);
    z-index: 999;
`

export const BoxButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        width: 125px;
        padding: 8px 0;
        border-radius: 5px;
        border: none;
        text-transform: uppercase;
        font-weight: bold;
        margin-top: 25px;
        cursor: pointer;
    }

`