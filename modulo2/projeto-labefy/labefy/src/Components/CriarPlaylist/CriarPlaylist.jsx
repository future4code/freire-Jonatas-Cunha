import axios from "axios";
import React from "react";
import { Container, ParagrafoReco } from "./style";
import Playlist from "../../img/add-list.png"
import PlaylistRecomendada from "../PlaylistRecomendada/PlaylistRecomendada";



export default class CriarPlaylist extends React.Component {

    state = {
        inputNome: "",
    }

    pegarNome = (e) => {
        this.setState({ inputNome: e.target.value })
    }

    createPlaylist = (e) => {
        e.preventDefault()

        this.props.atualizarListas()

        const body = {
            name: this.state.inputNome,
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
            headers: {
                Authorization: "jonatas-felix-freire"
            }
        }).then(response => {
            alert("Playlist criada com sucesso!")
        }).catch(error => {
            alert(error.data.menssage)
        })

    }

    render() {
        return (
            <div>
                <Container>
                    <p>Criar Playlist</p>
                    <div>
                        <img src={Playlist} alt="" />
                        <form onSubmit={this.createPlaylist}>
                            <input type="text"
                                placeholder="Summer Eletro Hits...."
                                value={this.state.inputNome}
                                onChange={this.pegarNome}
                            />
                            <button>Criar</button>
                        </form>
                    </div>
                </Container>
                <ParagrafoReco>Playlists Recomendadas</ParagrafoReco>
                <PlaylistRecomendada capturarID={this.props.capturarID}/>
            </div>
        )
    }
}