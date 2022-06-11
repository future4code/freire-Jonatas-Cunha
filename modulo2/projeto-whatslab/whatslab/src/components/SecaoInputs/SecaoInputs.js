import React, { Component } from "react";
import styled from "styled-components";
import ImagemEnviar from "../../img/enviar-mensagem.svg"
import ImagemCheck from "../../img/doublecheck.svg"



const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const PersonalizarBlocoMensagem = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    margin: 0 16px 12px;
    background-color: white;
    align-self: start;
    border-radius: 12px;
    padding: 0px 12px;
    min-width: 80px;
    max-width: 80%;
    word-break: break-all;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
&:after {
	content: '';
	border: 15px solid transparent;
    border-top-color: #ffffff;
    position: absolute;
    top: 0px;
    left: -8px;
}
`

const PersonalizarBlocoMensagemEu = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    margin: 0 16px 12px;
    align-self: flex-end;
    background-color: #d9fdd3;
    border-radius: 12px;
    padding: 0px 12px;
    min-width: 80px;
    max-width: 80%;
    word-break: break-all;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
&:after {
	content: '';
	border: 15px solid transparent;
	border-top-color: #D8FDD2;
    position: absolute;
    top: 0px;
    right: -8px;
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
`

const InputNome = styled.input`
    width: 25%;
    height: 30px;
    margin: 0 16px 8px 16px;
    border: none;
    border-radius: 8px;
    border: 1px solid #fff;

&:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    }
`

const InputMensagem = styled.input`
    width: 50%;
    height: 30px;
    margin: 0 16px 8px 16px;
    border-radius: 8px;
    border: 1px solid #fff;
    word-wrap: break-word;

&:focus{
    box-shadow: 0 0 0 0;
    outline: 0;
}
`


const BotaoMensagem = styled.button`
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 50%;
    margin-bottom: 9px;
    cursor: pointer;
`

const ImagemBotaoMensagem = styled.img`
    width: 28px;
    height: 28px;
    transform: translate(3px, 1px);
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
                    <PersonalizarBlocoMensagemEu key={mensagem.key} onDoubleClick={() => this.deletarMensagem(mensagem.key)}>
                        <ParagrafoMensagem>{mensagem.mensagem}</ParagrafoMensagem>
                        <ParagrafoHora>{mensagem.hora} <ImagemCheckPosition src={ImagemCheck} alt="" /></ParagrafoHora>
                    </PersonalizarBlocoMensagemEu>

                )
            } else {

                return (
                    <PersonalizarBlocoMensagem key={mensagem.key}>
                        <ParagrafoNome>{mensagem.nome}: </ParagrafoNome>
                        <ParagrafoMensagem>{mensagem.mensagem}</ParagrafoMensagem>
                        <ParagrafoHora>{mensagem.hora}</ParagrafoHora>
                    </PersonalizarBlocoMensagem>
                )
            }

        })


        return (
            <Container>
                {imprimirMensagens}
                <BoxIputs onSubmit={this.postarMensagem}>
                    <InputNome value={this.state.nome} onChange={this.pegarNome} type="text" placeholder="Digite Seu nome" />
                    <InputMensagem value={this.state.mensagem} onChange={this.pegarMensagem} type="text" placeholder="Digite uma mensagem" />
                    <BotaoMensagem><ImagemBotaoMensagem src={ImagemEnviar} alt="Botão Enviar" /></BotaoMensagem>
                </BoxIputs>
            </Container>
        )
    }
}