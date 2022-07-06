import React, { useState, useEffect } from "react";
import axios from "axios";
import Coracao from "../../Img/heart.png";
import { ContainerCard, BoxTelas, BoxHeader, EmptyBox, BoxLogo } from "../Card/style";

export default function Card(props) {

    const Botao = () => {
        return (
            props.pagina === "inicio" ? (
                <button onClick={() => props.mudarTela("Matchs")}>Matchs</button>
            ) : (
                <button onClick={() => props.mudarTela("inicio")}>Início</button>
            ))
    }

    return (
        <ContainerCard>
            <BoxHeader>
                <EmptyBox></EmptyBox>
                <BoxLogo>
                    <img src={Coracao} alt="" />
                    {/* <AiFillHeart size={50} className="logo"/> */}
                    <h1 className="logo">Flinter</h1>
                </BoxLogo>
                <Botao />
            </BoxHeader>

            <BoxTelas>
                <props.tela />
            </BoxTelas>

        </ContainerCard>
    );
}