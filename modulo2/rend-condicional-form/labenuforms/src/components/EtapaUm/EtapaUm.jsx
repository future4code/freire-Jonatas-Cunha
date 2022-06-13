import React, { Component } from "react";
import EntradaDeFromacao from "../SecaoEntradaDeDado/EntradaDeFromacao";
import EntradaDeTexto from "../SecaoEntradaDeDado/EntradaDeTexto";
import { Bloco, Formulario, Botao } from "../styled";

export default class EtapaUm extends Component {
    render() {
        return (
            <Bloco>
            <h2>ETAPA 1 - DADOS GERAIS</h2>
            <Formulario onSubmit={this.props.proximo}>
                <EntradaDeTexto type="text"  htmlForLabel={"nome"} informacao="1. Qual seu nome?" />
                <EntradaDeTexto type="number" htmlForLabel={"Idade"} informacao="2. Qual sua idade?" />
                <EntradaDeTexto type="email"  htmlForLabel={"nome"} informacao="3. Qual seu email?" />
                <EntradaDeFromacao/>
                <Botao>Proximo</Botao>
            </Formulario>
            </Bloco>
        )
    }
}