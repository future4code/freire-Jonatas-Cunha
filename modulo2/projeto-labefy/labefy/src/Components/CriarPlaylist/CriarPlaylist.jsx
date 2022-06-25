import axios from "axios";
import React from "react";



export default class CriarPlaylist extends React.Component{

    state={
        inputNome:"",
    }

    pegarNome = (e) => {
        this.setState({inputNome: e.target.value})
    }

    createPlaylist = (e) => {
        e.preventDefault()

        this.props.atualizarListas()

        const body = {
            name: this.state.inputNome,
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
            headers:{
                Authorization: "jonatas-felix-freire"
            }
        }).then(reponse => {
            alert("Playlist criada com sucesso!")
        }).catch(error => {
            alert(error.data.menssage)
        })

    }


    render(){
        return(
            <div>
                <p></p>
                <div>
                    <form onSubmit={this.createPlaylist}>
                        <input type="text"
                        value={this.state.inputNome}
                        onChange={this.pegarNome}
                        />
                        <button>Adicionar</button>
                    </form>
                </div>
            </div>
        )
    }
}