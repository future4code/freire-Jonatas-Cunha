import React from "react";
import axios from "axios";
import DelUsuario from "../DelUsuario/DelUsuario";
import { Container, ContainerUser } from "./style"

export default class GetUsuarios extends React.Component {

    state ={
        usuarios: [],
        pesquisa: "",
    }

    componentDidMount () {
        this.getAllUsers()
    }

    componentDidUpdate() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers:{
                Authorization: "jonatas-felix-freire"
            }
        }).then(response => {
            this.setState({usuarios: response.data})
        })
    }

    pegarPesquisa = (e) => {
        this.setState({pesquisa: e.target.value})
    }

  render() {
    const renderizarUsers = this.state.usuarios
    .filter(usuario => {
       return usuario.name.toLowerCase().includes(this.state.pesquisa.toLowerCase())
    })
    .map(usuario => {
        return (
            <ContainerUser key={usuario.id}>
                <p>{usuario.name}</p>
               <DelUsuario usuarioId={usuario.id}/>
            </ContainerUser>
        )
    })
    return (
      <Container className="App">
        <label htmlFor="buscar">Procurar</label>
        <input type="text" 
        id="buscar"
        value={this.state.pesquisa}
        onChange={this.pegarPesquisa}
        />
        {renderizarUsers.length === 0 ? <p>Nada Encontrado</p> :renderizarUsers}
      </Container>
    );
  }
}



