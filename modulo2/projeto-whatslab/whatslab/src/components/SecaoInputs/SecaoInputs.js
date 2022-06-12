import React, { Component } from "react";
import styled from "styled-components";
import ImagemEnviar from "../../img/enviar-mensagem.svg"
import ImagemCheck from "../../img/doublecheck.svg"
import { Container, BlocoMensagem, ParagrafoNome, ParagrafoMensagem, BoxIputs, ParagrafoHora, BotaoMensagem, Entrada, ImagemBotaoMensagem, ImagemCheckPosition } from "./styled";


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