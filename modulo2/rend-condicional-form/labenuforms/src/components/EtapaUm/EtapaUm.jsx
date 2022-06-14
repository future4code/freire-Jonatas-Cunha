import React, { Component } from "react";
import PerguntaOpcoes from "../SecaoEntradaDeDados/PerguntaOpcoes";
import EntradaDeTexto from "../SecaoEntradaDeDados/EntradaDeTexto";
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
                <PerguntaOpcoes
                    htmlFor="ensino"
                    informacao="4. Qual a sua escolaridade?"
                    opcoes={[
                        "Ensino Médio Incompleto",
                        "Ensino Médio Completo",
                        "Ensino Superior Incompleto",
                        "Ensino Superior Completo"
                    ]}
                />
                <Botao>Proximo</Botao>
            </Formulario>
            </Bloco>
        )
    }
}