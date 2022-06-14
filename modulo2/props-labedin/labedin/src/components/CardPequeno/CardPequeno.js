import React from "react";
import styled from 'styled-components';


const InfoPessoais = styled.div`
    display: flex;
    border: 1px solid black;
    margin: 10px 0;
    padding: 20px 8px;
    align-items: center;
`;

const ImagemP = styled.img`
    width: 30px;
    margin-right: 10px;
`;

const InfomacaoP = styled.h4`
   margin-right: 5px;
`;

const CardPequeno = (props) => {
    return (
        <InfoPessoais>
            <ImagemP src={props.link} alt={props.descricao} />
            <InfomacaoP>{props.informacao}: </InfomacaoP>
            <p>{props.conteudo}</p>


        </InfoPessoais>
    )
}


export default CardPequeno
