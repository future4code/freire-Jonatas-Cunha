import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
	flex-direction: column;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 95%;
    margin: 0 5px;
`

const BotoesDeCompartilhar = styled.div `
	display: flex;
	justify-content: center;
	align-items: center;
`
const BotoesDeCompartilharBtn = styled.button `
	margin: 10px;
	cursor: pointer;

`

const BotoesDeCompartilharImg = styled.img `
	width: 36px;
	margin: 10px;

`

export class SecaoCompartilhar extends Component {
	state = {
		mensagem: "",
	}

	alterarMensagem = (event) => {
		this.setState({ mensagem: event.target.value });
	}

	imprimeMensagem = (rede) => {
		if (this.state.mensagem === "") {
			console.log(`Post compartilhado no ${rede}!`)
		} else {
			console.log(`Post compartilhado no ${rede} com a mensagem: ${this.state.mensagem}`)
		}
	}

	render() {
		return <CommentContainer>
			<InputComentario
				placeholder={'Mensagem'}
				value={this.state.mensagem}
				onChange={this.alterarMensagem}
			/>
			<BotoesDeCompartilhar>
			<BotoesDeCompartilharBtn onClick={() => this.imprimeMensagem("Facebook")}><BotoesDeCompartilharImg src={this.props.facebook} alt="" /></BotoesDeCompartilharBtn>
			<BotoesDeCompartilharBtn onClick={() => this.imprimeMensagem("Instagram")}><BotoesDeCompartilharImg src={this.props.instagram} alt="" /></BotoesDeCompartilharBtn>
			<BotoesDeCompartilharBtn onClick={() => this.imprimeMensagem("Twitter")}><BotoesDeCompartilharImg src={this.props.twitter} alt="" /></BotoesDeCompartilharBtn>
			</BotoesDeCompartilhar>
		</CommentContainer>
	}
}
