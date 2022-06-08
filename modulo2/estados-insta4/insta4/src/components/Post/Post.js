import React from 'react'
import styled from 'styled-components'

import { IconeComContador } from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeSalvarBranco from '../../img/save-white.svg'
import iconeSalvarPreto from '../../img/save.svg'
import iconeCompartilhar from '../../img/mandar.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import { SecaoCompartilhar } from '../SecaoCompartilhar/SecaoCompartilhar'
import facebook from '../../img/facebook.png'
import instagram from '../../img/instagram.png'
import twitter from '../../img/twitter.png'


const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`



const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    compartilhar: false,
    mensagem: "",
  }

  onClickCurtida = () => {
    if (!this.state.curtido) {
      this.setState({ curtido: true, numeroCurtidas: 1 })
      console.log('Curtiu!')
    } else {
      this.setState({ curtido: false, numeroCurtidas: 0 })
      console.log('Des-curtiu!')
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
      compartilhar: false,
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      numeroComentarios: this.state.numeroComentarios + 1,
      comentando: !this.state.comentando,

    })
  }



  onClickSalvo = () => {
    if (!this.state.salvo) {
      this.setState({ salvo: true })
      console.log('Salvou!')
    } else {
      this.setState({ salvo: false })
      console.log('Des-Salvol!')
    }
  }

  onClickCompartilhar = () => {
    if (!this.state.compartilhar) {
      this.setState({ compartilhar: true, comentando: false })
      this.setState({ comentando: false })
    } else {
      this.setState({ compartilhar: false })
    }
  }

  render() {
    let iconeCurtida
    let iconeSalvar

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    if (this.state.salvo) {
      iconeSalvar = iconeSalvarPreto
    } else {
      iconeSalvar = iconeSalvarBranco
    }

    let componenteComentario
    let componenteCompartilhar


    if (this.state.compartilhar) {
      componenteCompartilhar = <SecaoCompartilhar aoCompartilhar={this.aoCompartilharImg} facebook={facebook} instagram={instagram} twitter={twitter} />
    }

    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />


        <IconeComContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
        />

        <IconeComContador
          icone={iconeSalvar}
          onClickIcone={this.onClickSalvo}
        />

      </PostFooter>
      {componenteComentario}
      {componenteCompartilhar}
    </PostContainer>
  }
}

export default Post