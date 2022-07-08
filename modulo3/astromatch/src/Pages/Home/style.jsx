import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
`

export const Img = styled.img`
    width: 100%;
    display: block;
    z-index: 2;
`

export const BoxImagem = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 95%;
    height: 430px;
    margin: 5px auto;
    border-radius: 15px;
    box-shadow: 0px 0px 6px 1px rgb(0 0 0 / 69%);
    
    ::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg,rgb(0 0 0 / 85%) 5%,rgba(0,0,0,0) 50%);
        z-index: 3;
    }

    ::after {
        content: "";
        background: url(${props => props.img}) no-repeat center;
        background-size: cover;
        filter: blur(30px);
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
    }
`

export const BoxBio = styled.div`
    position: absolute;
    z-index: 1000;
    bottom: 135px;
    right: 10px;
    color: white;
    width: 89%;
    padding: 0 10px;

    @media(max-width: 468px) {
        bottom: 130px;
    }

    #nameIdade {
        display: flex;
        align-items: center;
    }

`

export const BoxBotoes = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 120px;

    button {
        background: none;
        border-radius: 50%;
        width: 65px;
        height: 65px;
        font-size: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    #reject {
        color: red;
        border-color: red;
    }
    #reject:hover {
        color: white;
        background-color: red;
    }


    #reset {
        color: CornflowerBlue;
        border-color: CornflowerBlue;
    }
    #reset:hover {
        color: white;
        background-color: CornflowerBlue;
    }

    #match {
        color: green;
        border-color: green;
    }
    #match:hover {
        color: white;
        background-color: green;
    }

`