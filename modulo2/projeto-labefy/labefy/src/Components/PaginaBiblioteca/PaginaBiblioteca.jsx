import React from "react";
import axios from "axios";
import { Container, BoxLista, BoxRecomendados, BlocoPlayer, NomePlayList, PlayImg, ParagrafoPlaylist, BoxPlay, BoxTopo, BuscaEAdd, Lista, InputBusca } from "./style";
import Musica from "../../img/notas-musicais.png"
import IconeBuscarBranco from "../../img/icone-buscar-branco.svg"
import Adicionar from "../../img/adicionar.svg"

import Loader from "../Loader/Loader";


export default class PaginaBiblioteca extends React.Component {

    state = {
        playlists: [],
        player: false,
        loading: true,
        buscar: false,
        inputBusca: "",
    }

    componentDidMount() {
        this.getPlayLists()
    }

    abrirBusca = () => {
        this.setState({ buscar: !this.state.buscar })
    }

    getPlayLists = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
            headers: {
                Authorization: "jonatas-felix-freire"
            }
        }).then(response => {
            this.setState({ playlists: response.data.result.list })
            this.setState({ loading: false })
        })
    }

    generateColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;

    }

    paginaDaPlaylist = (id, nome) => {
        this.props.capturarID(id, nome)
    }

    deletarPlaylist = (id, nome) => {
        if (nome === "Rock" || nome === "MPB" || nome === "Pop" || nome === "Eletronica" || nome === "Sertanejo" || nome === "Reggae") {
            alert("Apague apenas Playlists Criadas Por Você!!!!")
        } else {
            if (window.confirm(`Você realmente deseja apagar ${nome}?`)) {
                axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
                    headers: {
                        Authorization: "jonatas-felix-freire"
                    }
                }).then(response => {
                    alert("Apagado com sucesso!")
                    this.getPlayLists()
                    this.props.atualizarListas()
                }).catch(error => {
                    alert(error.data.menssage)
                })
            }
        }
    }

    pegarInputBusca = (e) => {
        this.setState({ inputBusca: e.target.value })
    }

    render() {
        const renderizarRecomendadas = this.state.playlists
            .filter(playlist => {
                return (
                    playlist.name.toLowerCase().includes(this.state.inputBusca.toLowerCase())
                )
            })
            .map(o => {
                return (
                    <BoxPlay key={o.id}>
                        <BoxRecomendados key={o.id} onClick={() => this.paginaDaPlaylist(o.id, o.name)}>
                            <BlocoPlayer cor={this.generateColor}><PlayImg src={Musica} alt="Play" /></BlocoPlayer>
                            <NomePlayList>{o.name}</NomePlayList>
                        </BoxRecomendados>
                        <button onClick={() => this.deletarPlaylist(o.id, o.name)}>DELETAR</button>
                    </BoxPlay>
                )
            })
        return (
            <Container>
                <BoxTopo>
                    <ParagrafoPlaylist buscar={this.state.buscar}>Playlists</ParagrafoPlaylist>
                    <BuscaEAdd buscar={this.state.buscar}>
                        {this.state.buscar && <InputBusca
                            value={this.state.inputBusca}
                            onChange={this.pegarInputBusca}
                            type="text" 
                            placeholder="Procurar Playlist..."
                            />}
                        <img onClick={this.abrirBusca} src={IconeBuscarBranco} alt="Buscar" />
                        <img onClick={() => this.props.pagina("Criar")} src={Adicionar} alt="Adicionar" />
                    </BuscaEAdd>
                </BoxTopo>
                <Lista>
                    <BoxLista inicio={this.props.inicio}>
                        {this.state.loading ? <Loader /> : ""}
                        {renderizarRecomendadas}
                    </BoxLista>
                </Lista>
            </Container>
        )
    }
}