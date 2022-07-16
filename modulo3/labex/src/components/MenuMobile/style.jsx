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


export const MenuContainer = styled.div`
    display: ${props => props.open ? "flex" : "none"};
    position: absolute;
    top: 84px;
    left: 0;
    height: 85%;
    width: 260px;
    background-color: #fff;
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
    }



`

export const ExternalContainer = styled.div`
    display: ${props => props.open ? "block" : "none"};
    position: absolute;
    top: 84px;
    left: 0;
    height: 90vh;
    width: 100%;
    background-color: rgb(0 0 0 / 51%);
    z-index: 999;
`