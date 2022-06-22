import React from "react";
import axios from "axios";
import styled from "styled-components";
import LoginImg from "../../img/loginImg.jpg"

const Container = styled.div`
    display: flex;
    border-radius: 70px 12px 12px;
    box-shadow: 0px 0px 15px 0px #000000;
`

const BoxInfos = styled.div`

    .img{
        width: 330px;
        border-radius: 70px 0 0 12px;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 260px;
    background: linear-gradient(0deg, rgba(0,97,182,1) 0%, rgba(2,179,249,1) 100%);
    border-radius: 0 12px 12px 0;

    .h2{
        color: white;
        margin: 0;
    }

`

const Button = styled.button`
    color: white;
    background-color: #11cc97;
    text-transform: uppercase;
    font-weight: bold;
    padding: 10px 40px;
    margin-top: 17px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
`

const BoxInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 85%;
    border-radius: 8px;
    margin-top: 22px;
    background-color: white;

    .input{
        width: 70%;
        border: none;
        text-align: center;
    }

    .input:focus{
        outline: none;
    }
`


export default class PostUsuarios extends React.Component {
    state = {
        name: "",
        email: "",
    }

    pegarNome = (event) => {
        this.setState({ name: event.target.value })
    }

    pegarEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    cadastrarUsuario = (e) => {
        e.preventDefault()
        const body = {
            name: this.state.name,
            email: this.state.email
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers: {
                Authorization: "jonatas-felix-freire"
            }
        }).then(response => {
            alert("Cadastrado com Sucesso")
        }).catch(error => {
            alert(error.message)
        })
    }

    render() {
        return (
            <Container>
                <BoxInfos>
                    <img  className="img" src={LoginImg} alt="" />
                </BoxInfos>
                <Form onSubmit={this.cadastrarUsuario}>
                    <h2 className="h2">Bem-Vindo</h2>
                    <BoxInput>
                    <input className="input"
                        type="text"
                        name="Nome"
                        id="nome"
                        placeholder="Digite o nome de Usuario"
                        onChange={this.pegarNome}
                        value={this.state.name}
                    />
                    </BoxInput>
                    <BoxInput>
                    <input className="input"
                        type="email"
                        name="Email"
                        id="email"
                        placeholder="Digite o Email"
                        onChange={this.pegarEmail}
                        value={this.state.email}
                    />
                    </BoxInput>
                    <Button>Cadastrar</Button>
                </Form>
            </Container>
        );
    }
}