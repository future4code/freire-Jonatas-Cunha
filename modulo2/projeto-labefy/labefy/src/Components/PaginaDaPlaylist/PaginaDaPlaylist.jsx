import React from "react";
import axios from "axios";
import { Container, BoxRecomendados, BlocoPlayer, NomePlayList, ContainerVideos, NomePlayP, ListaVazia, ListaVaziaImg, BoxListaVazia, BoxInfos } from "./style";
import Loader from "../Loader/Loader";
import ImgVazio from "../../img/empty.png"
import { BsPlusSquareFill } from "react-icons/bs"
import AdicionarMusicas from "../AdicionarMusicas/AdicionarMusicas";


export default class PaginaDaPlaylist extends React.Component {

    state = {
        playlists: [],
        loading: true,
        boxMusic: false,
    }

    componentDidMount() {
        this.getPlayLists()
    }

    getPlayLists = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`, {
            headers: {
                Authorization: "jonatas-felix-freire"
            }
        }).then(response => {
            this.setState({ playlists: response.data.result.tracks })
            this.setState({ loading: false })
        })
    }

    abrirBoxAdiconarMusica = () => {
        this.setState({ boxMusic: !this.state.boxMusic })
    }

    render() {
        const renderizarRecomendadas = this.state.playlists.map(o => {
            const link = `${o.url.substring(32)}`
            return (
                <BoxRecomendados key={o.id}>
                    <BlocoPlayer>
                        <iframe title={o.name} width="100%" height="100%"
                            src={`https://www.youtube.com/embed/${link}`}>
                        </iframe>
                    </BlocoPlayer>
                    <NomePlayList>{o.artist} - {o.name}</NomePlayList>
                </BoxRecomendados>
            )
        })
        return (

            <Container>
                <BoxInfos>
                    <NomePlayP>Playlist: {this.props.nomePlaylist}</NomePlayP>
                    <div onClick={this.abrirBoxAdiconarMusica} className="btnAdicionarLista"><BsPlusSquareFill /><p>Adicionar Musica</p></div>
                </BoxInfos>
                {this.state.boxMusic && <AdicionarMusicas id={this.props.idPlaylist} />}
                <ContainerVideos>
                    {this.state.loading ? <Loader /> : ""}
                    {renderizarRecomendadas.length === 0 && !this.state.loading ?
                        <BoxListaVazia>
                            <ListaVaziaImg src={ImgVazio} alt="Caixa Vazia" />
                            <ListaVazia>Lista Vazia</ListaVazia>
                        </BoxListaVazia>
                        : renderizarRecomendadas}
                </ContainerVideos>
            </Container>
        )
    }
}
