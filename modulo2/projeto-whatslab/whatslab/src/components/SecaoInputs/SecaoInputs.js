import React, { Component } from "react";
import styled from "styled-components";
import ImagemEnviar from "../../img/enviar-mensagem.svg"
import ImagemCheck from "../../img/doublecheck.svg"

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const BlocoMensagem = styled.div`
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

const ParagrafoNome = styled.p`
    color: #b5d5b0;
    font-size: 0.8em;
    font-weight: 600;
    margin-bottom: 0.2em;
`

const ParagrafoMensagem = styled.p`
    margin: 5px;
`

const ParagrafoHora = styled.p`
    font-weight: 100;
    font-size: 12px;
    margin: 0 0 4px;
    align-self: flex-end;
`

const BoxIputs = styled.form`
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

const Entrada = styled.input`
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

const BotaoMensagem = styled.button`
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

const ImagemBotaoMensagem = styled.img`
    width: 28px;
    height: 28px;
    transform: translate(-2px, 1px);
`

const ImagemCheckPosition = styled.img`
    width: 16px;
    margin-left: 4px;
`

export default class SecaoInputs extends Component {

    state = {
        arrayMenssagens: [],
        nome: "",
        mensagem: "",
    }

    pegarNome = (event) => {
        this.setState({ nome: event.target.value, })
    }

    pegarMensagem = (event) => {
        this.setState({ mensagem: event.target.value })
    }

    postarMensagem = (event) => {
        event.preventDefault()
        const objetoPessoaMensagem = { nome: this.state.nome, mensagem: this.state.mensagem, hora: new Date().toLocaleTimeString(), key: Math.random() }
        const mensagensAtualizadas = [...this.state.arrayMenssagens, objetoPessoaMensagem]
        this.setState({ arrayMenssagens: mensagensAtualizadas })
        this.setState({ nome: "", mensagem: "", })
    }

    deletarMensagem = (key) => {
        const novaListaUsuariosFiltrado = this.state.arrayMenssagens.filter((objeto) => {
            return objeto.key !== key;
        });
        if (window.confirm("Apagar Mensagem?")) {
            this.setState({ arrayMenssagens: novaListaUsuariosFiltrado })
        }
    };




    render() {

        const imprimirMensagens = this.state.arrayMenssagens.map((mensagem) => {
            if (mensagem.nome.toLowerCase() === "eu") {
                return (
                    <BlocoMensagem tipo="eu" key={mensagem.key} onDoubleClick={() => this.deletarMensagem(mensagem.key)}>
                        <ParagrafoMensagem>{mensagem.mensagem}</ParagrafoMensagem>
                        <ParagrafoHora>{mensagem.hora} <ImagemCheckPosition src={ImagemCheck} alt="" /></ParagrafoHora>
                    </BlocoMensagem>

                )
            } else {

                return (
                    <BlocoMensagem tipo="outro" key={mensagem.key}>
                        <ParagrafoNome>{mensagem.nome}: </ParagrafoNome>
                        <ParagrafoMensagem>{mensagem.mensagem}</ParagrafoMensagem>
                        <ParagrafoHora>{mensagem.hora}</ParagrafoHora>
                    </BlocoMensagem>
                )
            }

        })


        return (
            <Container>
                {imprimirMensagens}
                <BoxIputs onSubmit={this.postarMensagem}>
                    <Entrada tipo="nome" value={this.state.nome} onChange={this.pegarNome} type="text" placeholder="Nome" required/>
                    <Entrada value={this.state.mensagem} onChange={this.pegarMensagem} type="text" placeholder="Digite uma mensagem" required/>
                    <BotaoMensagem><ImagemBotaoMensagem src={ImagemEnviar} alt="Botão Enviar" /></BotaoMensagem>
                </BoxIputs>
            </Container>
        )
    }
}