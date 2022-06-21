import React from "react";
import axios from "axios";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Button = styled.button`
    padding: 8px 25px;
    margin-top: 12px;
`

const Label = styled.label`
    margin-bottom: 8px;
`

export default class PostUsuarios extends React.Component {
    state = {
        name:"",
        email: "",
    }

    pegarNome = (event) => {
        this.setState({name: event.target.value})
    }
    
    pegarEmail = (event) => {
        this.setState({email: event.target.value})
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
      <Form onSubmit={this.cadastrarUsuario}>
        <Label htmlFor="nome">Usuario:</Label>
        <input 
        type="text" 
        name="Nome" 
        id="nome" 
        placeholder="Digite o nome de Usuario"
        onChange={this.pegarNome}
        value={this.state.name}
        />
        <Label htmlFor="email">Email:</Label>
        <input 
        type="email" 
        name="Email" 
        id="email" 
        placeholder="Digite o Email"
        onChange={this.pegarEmail}
        value={this.state.email}
        />
        <Button>Cadastrar</Button>
      </Form>
    );
  }
}