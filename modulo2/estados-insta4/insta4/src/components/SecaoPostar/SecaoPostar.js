import React, { Component } from "react";
import Post from '../Post/Post';
import styled from "styled-components"


const Formulario = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #99ccee;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
`

const TituloFormulario = styled.h2`
    margin-top: 0px;
    text-align: center;
`

const InputFormulario = styled.input`
    width: 100%;
    height: 30px;
    border-radius: 8px;
    border: none;
    margin: 8px 0;
&:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
}
`

const BtnFormulario = styled.button`
    padding: 12px 32px;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 8px;

&:hover {
    letter-spacing: 4px;
    transition-duration: 0.2s;
}
`


export default class SecaoPostar extends Component {
    state = {
        postagem: [
            {
                nome: 'Paulinha',
                fotoPerfil: 'https://picsum.photos/50/50?a=1',
                fotoPost: 'https://picsum.photos/200/150?a=2',
            },
            {
                nome: 'Felipe',
                fotoPerfil: 'https://picsum.photos/50/50?a=3',
                fotoPost: 'https://picsum.photos/200/150?a=4',
            },
            {
                nome: 'Henrique',
                fotoPerfil: 'https://picsum.photos/50/50?a=5',
                fotoPost: 'https://picsum.photos/200/150?a=6',
            },
        ],
        nome: "",
        fotoPerfil: "",
        fotoPost: "",
    }

    pegarValorNome = (event) => {
        this.setState({ nome: event.target.value })
    }

    pegarValorfotoPerfil = (event) => {
        this.setState({ fotoPerfil: event.target.value })
    }

    pegarValorFotoPost = (event) => {
        this.setState({ fotoPost: event.target.value })
    }


    addPost = () => {
        const post = {
            nome: this.state.nome,
            fotoPerfil: this.state.fotoPerfil,
            fotoPost: this.state.fotoPost,
        }

        const listaDeObjAtualizada = [post, ...this.state.postagem]
        this.setState({ postagem: listaDeObjAtualizada, })
        this.setState({ nome: "" , fotoPerfil: "", fotoPost:""})

    }

    render() {

        const imprimirLista = this.state.postagem.map((objeto) => {
            return (
                <Post 
                key={objeto.nome}
                nomeUsuario={objeto.nome}
                fotoUsuario={objeto.fotoPerfil}
                fotoPost={objeto.fotoPost}
                />
            )
        })

        return (
            <div>
                <Formulario>

                    <TituloFormulario>Nova Postagem</TituloFormulario>

                    <label htmlFor="nome">Nome: </label>
                    <InputFormulario
                        type="text"
                        id="nome"
                        placeholder="Digite Seu nome"
                        value={this.state.nome}
                        onChange={this.pegarValorNome}
                    />

                    <label htmlFor="fotoProfile">Foto do Perfil: </label>
                    <InputFormulario
                        type="text"
                        id="fotoProfile"
                        placeholder="Digite o link da foto"
                        value={this.state.fotoPerfil}
                        onChange={this.pegarValorfotoPerfil}
                    />

                    <label htmlFor="fotoPost">Foto do Post: </label>
                    <InputFormulario
                        type="text"
                        id="fotoPost"
                        placeholder="Digite o link da foto"
                        value={this.state.fotoPost}
                        onChange={this.pegarValorFotoPost}
                    />

                    <BtnFormulario onClick={this.addPost}>Postar</BtnFormulario>
                </Formulario>
                    <TituloFormulario>Postagens</TituloFormulario>
                {imprimirLista}

            </div>
        )
    }




}