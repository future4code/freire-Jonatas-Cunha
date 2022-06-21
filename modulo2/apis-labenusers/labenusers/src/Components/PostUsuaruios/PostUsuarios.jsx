import React from "react";
import axios from "axios";

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
      <form onSubmit={this.cadastrarUsuario}>
        <label htmlFor="nome">Usuario:</label>
        <input 
        type="text" 
        name="Nome" 
        id="nome" 
        placeholder="Digite o nome de Usuario"
        onChange={this.pegarNome}
        value={this.state.name}
        />
        <label htmlFor="email">Email:</label>
        <input 
        type="email" 
        name="Email" 
        id="email" 
        placeholder="Digite o Email"
        onChange={this.pegarEmail}
        value={this.state.email}
        />
        <button>Cadastrar</button>
      </form>
    );
  }
}