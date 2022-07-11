import React, { useState, useEffect } from "react";
import Loader from "../../Components/Loader/Loader";
import axios from "axios";
import Swal from "sweetalert2";
import { Container, ContainerMatch, BoxImg } from "./style";
import NaoHaMatches from "./NaoHaMatches";

export default function MatchPage() {
    const [match, setMatch] = useState([]);
    const [loading, setLoading] = useState(true);

    const listarMatch = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/freire-jonatas/matches`).then((res) => {
            setMatch(res.data.matches);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
        })
    }

    const clearMatchs = () => {

        Swal.fire({
            title: 'Você tem certeza?',
            text: "Todos os matches serão desfeitos!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar!',
            confirmButtonText: 'Sim, resetar!'
        }).then((result) => {
            if (result.isConfirmed) {

                axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/freire-jonatas/clear`)
                    .then((res) => {
                        listarMatch();
                        setLoading(true);
                    }).catch((err) => {
                        console.log(err);
                    })

                Swal.fire(
                    'Resetado!',
                    'Todos os seus matches foram desfeitos!',
                    'success'
                )
            }
        })
    }

    useEffect(() => {
        listarMatch()
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <Container>
            {match.length > 0 ? match.map((match) => {
                return (
                    <ContainerMatch key={match.id}>
                        <BoxImg src={match.photo}>
                            <img src={match.photo} alt="" />
                        </BoxImg>
                        <p>{match.name}</p>
                    </ContainerMatch>
                )
            }) : <NaoHaMatches/>}
            {match.length > 0 && <button id="button" onClick={clearMatchs}>Resetar Matches</button>}
        </Container>
    );
}