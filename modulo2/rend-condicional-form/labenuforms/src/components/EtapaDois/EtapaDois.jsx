import React, { Component } from "react";
import EntradaDeTexto from "../SecaoEntradaDeDados/EntradaDeTexto";
import { Bloco, Formulario, Botao } from "../styled";

export default class EtapaDois extends Component {
    render() {
        return (
            <Bloco>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <Formulario onSubmit={this.props.proximo}>
                    <EntradaDeTexto type="text" htmlForLabel={"curso"} informacao="5. Qual curso?" />
                    <EntradaDeTexto type="text" htmlForLabel={"instituicaoDeEnsino"} informacao="6. Qual a unidade de ensino?" />
                    <div>
                        <Botao onClick={this.props.voltar}>Voltar</Botao>
                        <Botao>Proximo</Botao>
                    </div>
                </Formulario>
            </Bloco>
        )
    }
}