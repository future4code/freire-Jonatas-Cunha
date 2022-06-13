import React, { Component } from "react";
import { Bloco, Selecao, Etiqueta } from "../styled";

export default class EntradaCursoComplementar extends Component{
    state = {
       entradaDeSelecao: "",
    }

    pegarTextoEntrada = (event) => {
        this.setState({ textoEntrada: event.target.value })
    }

    render() {
        return (
            <Bloco>
                <Etiqueta htmlFor="complementar">6. Você fez algum curso complementar?</Etiqueta>
                <Selecao name="complementar" id="complementar">
                   <option value="tecnico" key="0">Curso técnico</option>
                   <option value="ingles" key="1">Cursos de inglês</option>
                   <option value="nada" key="2">Não fiz nem curso complementar</option>
                </Selecao>
            </Bloco>
        )
    }
}