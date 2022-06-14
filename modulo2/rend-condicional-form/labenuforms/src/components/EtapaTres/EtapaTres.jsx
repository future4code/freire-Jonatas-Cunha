import React, { Component } from "react";
import PerguntaOpcoes from "../SecaoEntradaDeDados/PerguntaOpcoes";
import EntradaDeTexto from "../SecaoEntradaDeDados/EntradaDeTexto";
import { Bloco, Formulario, Botao } from "../styled";

export default class EtapaTres extends Component {
    render() {
        return (
            <Bloco>
                <h2>ETAPA 3 - DADOS GERAIS</h2>
                <Formulario onSubmit={this.props.proximo}>
                    <EntradaDeTexto
                        type="text"
                        htmlForLabel={"fimGraduacao"}
                        informacao="5. Por que você não terminou um curso de graduação?"
                    />

                    <PerguntaOpcoes 
                        htmlFor="complementar"
                        informacao="6. Você fez algum curso complementar?"
                        opcoes= {[
                            "Curso técnico",
                            "Cursos de inglês",
                            "Não fiz nem curso complementar"
                        ]}
                    />
                    <div>
                        <Botao onClick={this.props.voltar}>Voltar</Botao>
                        <Botao>Proximo</Botao>
                    </div>
                </Formulario>
            </Bloco>
        )
    }
}