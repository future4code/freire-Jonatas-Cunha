import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

  const [curtido, setCurtido] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [comentarios, setComentarios] = useState([])

  const onClickCurtida = () => {
    setCurtido(!curtido)
    setNumeroCurtidas(curtido ? numeroCurtidas - 1 : numeroCurtidas + 1)
  };

  const onClickComentario = () => {
    setComentando(!comentando)
  };

  const enviarComentario = (comentario) => {
    if (comentario.length) {
      setComentarios([...comentarios, comentario])
      setNumeroComentarios(numeroComentarios + 1)
      setComentando(false)
    } else {
      alert('Comentário vazio')
    }
  }

  const caixaDeComentario = comentando && (

    <SecaoComentario enviarComentario={enviarComentario} />
  )

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={curtido ? iconeCoracaoPreto : iconeCoracaoBranco}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {caixaDeComentario}
      {comentarios.map((comentario, indice) => (
        <CommentContainer key={indice}>
          <p>{comentario}</p>
        </CommentContainer>
      ))}
    </PostContainer>
  )
}

export default Post