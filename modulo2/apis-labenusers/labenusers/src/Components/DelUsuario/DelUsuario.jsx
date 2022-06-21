import React from "react";
import axios from "axios";
import {MdOutlineDeleteForever} from "react-icons/md"
import styled from "styled-components"

const Deleter = styled.div`
    cursor: pointer;
`

export default class DelUsuario extends React.Component {

   deletUser = (id) => {
    if(window.confirm("Deseja mesmo deletar?")) {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
            headers:{
                Authorization: "jonatas-felix-freire"
            }
        }).then(response => {
           alert("Deletado")
        })
    }
    }

    

  render() {
    return (
        <Deleter onClick={() => this.deletUser(this.props.usuarioId)}>
        <MdOutlineDeleteForever title="Deletar" color="red" size="30px"/>
        </Deleter>
    );
  }
}



