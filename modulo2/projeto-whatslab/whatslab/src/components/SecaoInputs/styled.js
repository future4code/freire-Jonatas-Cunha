import React from "react";
import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
`

export const BlocoMensagem = styled.div`
display: flex;
position: relative;
flex-direction: column;
margin: 0 16px 12px;
border-radius: 12px;
padding: 0px 12px;
min-width: 80px;
max-width: 80%;
word-break: break-all;
box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);

align-self: ${props => {
        if (props.tipo === "eu") {
            return "flex-end"
        } else {
            return "flex-start"
        }
    }};
background-color: ${props => {
        if (props.tipo === "eu") {
            return "#d9fdd3"
        } else {
            return "white"
        }
    }};

&:after {
content: '';
border: 15px solid transparent;
position: absolute;
top: 0px;
border-top-color: ${props => {
        if (props.tipo === "eu") {
            return "#D8FDD2"
        } else {
            return "white"
        }
    }} ;

right: ${props => {
        if (props.tipo === "eu") {
            return "-8px";
        }
    }
    };
left: ${props => {
        if (props.tipo === "outro") {
            return "-8px";
        }
    }
    };

}
`

export const ParagrafoNome = styled.p`
    color: #b5d5b0;
    font-size: 0.8em;
    font-weight: 600;
    margin-bottom: 0.2em;
`

export const ParagrafoMensagem = styled.p`
    margin: 5px;
`

export const ParagrafoHora = styled.p`
    font-weight: 100;
    font-size: 12px;
    margin: 0 0 4px;
    align-self: flex-end;
`

export const BoxIputs = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-right: 17px;
    padding-left: 10px;
    border-left: 1px solid #e9edef;
    background-color: #cececf;
    padding-top: 6px;
    box-shadow: 1px 4px 14px 0px rgb(0 0 0 / 69%);
`

export const Entrada = styled.input`
    width: ${props => {
        if (props.tipo === "nome") {
            return "25%"
        } else {
            return "50%"
        }
    }};
    height: 30px;
    margin: 0 16px 8px 16px;
    border: none;
    border-radius: 8px;
    border: 1px solid #fff;

&:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    }

    @media(max-width:580px) {
        margin: 0 4px 8px 4px;
    }

`

export const BotaoMensagem = styled.button`
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 50%;
    margin-bottom: 9px;
    cursor: pointer;

&:hover{
    box-shadow: 0px 0px 5px 0px  rgb(0 0 0 / 30%);
}
`

export const ImagemBotaoMensagem = styled.img`
    width: 28px;
    height: 28px;
    transform: translate(-2px, 1px);
`

export const ImagemCheckPosition = styled.img`
    width: 16px;
    margin-left: 4px;
`