import React, { Component } from "react";
import EntradaCursoComplementar from "../SecaoEntradaDeDado/EntradaCursoComplementar";
import EntradaDeTexto from "../SecaoEntradaDeDado/EntradaDeTexto";
import { Bloco, Formulario, Botao } from "../styled";

export default class EtapaTres extends Component {
    render() {
        return (
            <Bloco>
                <h2>ETAPA 3 - DADOS GERAIS</h2>
                <Formulario onSubmit={this.props.proximo}>
                    <EntradaDeTexto type="text" htmlForLabel={"fimGraduacao"} informacao="5. Por que você não terminou um curso de graduação?" />
                    <EntradaCursoComplementar />
                    <div>
                        <Botao onClick={this.props.voltar}>Voltar</Botao>
                        <Botao>Proximo</Botao>
                    </div>
                </Formulario>
            </Bloco>
        )
    }
}