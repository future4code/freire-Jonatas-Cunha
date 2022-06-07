import React from 'react';
import styled from 'styled-components'



const BigCardContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const BigCardContainerImg = styled.img `
    width: 70px;
    height: 44%;
    margin-right: 10px;
    border-radius: 50%;
`

const BigCardContainerH4 = styled.h4 `
    margin-bottom: 15px;
`

const BigCardContainerDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`




function CardGrande(props) {
    return (
        <BigCardContainer>
            <BigCardContainerImg src={ props.imagem } />
            <BigCardContainerH4>
                <BigCardContainerH4>{ props.nome }</BigCardContainerH4>
                <p>{ props.descricao }</p>
            </BigCardContainerH4>
        </BigCardContainer>
    )
}

export default CardGrande;