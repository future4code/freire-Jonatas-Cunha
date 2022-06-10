import React, { Component } from "react";
import styled from "styled-components";
import ImagemEnviar from "../../img/enviar-mensagem.svg"


const PersonalizarBlocoMensagem = styled.div`
    display: flex;
    margin: 0 16px;
`
const ParagrafoNome = styled.p`
    font-weight: bolder;
    margin-right: 5px;
`

const InputNome = styled.input`
    width: 25%;
    height: 20px;
    margin: 0 16px 8px 16px;
    
&:focus{
    box-shadow: 0 0 0 0;
    outline: 0;
}
`

const InputMensagem = styled.input`
    width: 50%;
    height: 20px;
    margin: 0 16px 8px 16px;

&:focus{
    box-shadow: 0 0 0 0;
    outline: 0;
}
`

const BotaoMensagem = styled.button`
    border-radius: 50%;
    width: 46px;
    height: 40px;
    cursor: pointer;
`

const ImagemBotaoMensagem = styled.img`
    width: 50%;
    height: 50%;
`

export default class SecaoInputs extends Component {

    state = {
        arrayMenssagens: [],
        nome: "",
        menssagem: "",
        hora:"",

    }

    pegarNome = (event) => {
        this.setState({ nome: event.target.value,})
    }

    pegarMensagem = (event) => {
        this.setState({ menssagem: event.target.value })
    }

    postarMenssagem = () => {
        const objetoPessoaMenssagem = { nome: this.state.nome, mensagem: this.state.menssagem }
        const mensagensAtualizadas = [...this.state.arrayMenssagens, objetoPessoaMenssagem]
        this.setState({ arrayMenssagens: mensagensAtualizadas })
        this.setState({hora: new Date().toLocaleTimeString()})
        this.setState({ nome: "", menssagem: "",})
    }

    render() {

        const imprimirMensagens = this.state.arrayMenssagens.map((mensagem) => {
            return (
                <PersonalizarBlocoMensagem key={Math.random()}>
                    <ParagrafoNome>{mensagem.nome}: </ParagrafoNome>
                    <p>{mensagem.mensagem}</p>
                    <p>{this.state.hora}</p>
                </PersonalizarBlocoMensagem>
            )
        })


        return (
            <div>
                {imprimirMensagens}
                <InputNome value={this.state.nome} onChange={this.pegarNome} type="text" placeholder="Digite Seu nome" />
                <InputMensagem value={this.state.menssagem} onChange={this.pegarMensagem} type="text" placeholder="Digite uma menssagem" />
                <BotaoMensagem onClick={this.postarMenssagem}><ImagemBotaoMensagem src={ImagemEnviar} alt="Botão Enviar" /></BotaoMensagem>
            </div>
        )
    }
}