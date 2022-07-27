import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import BASE_URL from "../../constants/BASE_URL";
import { Loader } from "../../components/Loader/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { TiArrowBack } from "react-icons/ti";
import ImgPlanets from "../../utils/ImgPlanets";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {
    TripDetails,
    Screen,
    ContainerTripDetails,
    ContainerCandidates,
    ContainerApproveds,
    BoxCandidates,
    BoxApproveds,
    ContainerTitlePage,
    EmptyDiv
} from "./style";


function TripDetailsPage() {

    useProtectedPage();


    const [trip, setTrip] = useState({});
    const [candidates, setCandidates] = useState([]);
    const [approved, setApproved] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const getTripDetails = useCallback(() => {
        axios.get(`${BASE_URL}/trip/${id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }
        ).then(res => {
            setTrip(res.data.trip);
            setCandidates(res.data.trip.candidates);
            setApproved(res.data.trip.approved);
            setLoading(false);
            setError(res.data.trip.name === undefined ? true : false);
        }).catch(err => {
            alert("Erro ao carregar viagem");
            setError(true);
            setLoading(false);
        })
    }, [id]);

    const TakeTripDetails = () => {
        return (
            <TripDetails>
                <h2 id="name">{trip.name}</h2>
                <p id="planet">{trip.planet}</p>
                <ImgPlanets planet={trip.planet} />
                <p id="date">&#128197;{trip.date}</p>
                <p id="description">{trip.description}</p>
                <p id="duration">{trip.durationInDays} Dias</p>
            </TripDetails>
        )
    }

    const takeTripCandidates = candidates.map((candidate, i) => {
        return (
            <ContainerCandidates key={i}>
                <p><strong>Nome:</strong> {candidate.name}</p>
                <div>
                    <button id="approve" onClick={() => approveCandidate(candidate.id, true)}>Aprovar</button>
                    <button id="recuse" onClick={() => approveCandidate(candidate.id, false)}>Reprovar</button>
                </div>
            </ContainerCandidates>
        )
    })

    const takeTripApproveds = approved.map((candidate, i) => {
        return (
            <ContainerApproveds key={i}>
                <p><strong>Nome:</strong> {candidate.name}</p>
                <p><strong>Idade:</strong> {candidate.age}</p>
            </ContainerApproveds>
        )
    })

    const approveCandidate = (candidateId, decide) => {
        const body = {
            approve: decide
        }
        axios.put(`${BASE_URL}/trips/${id}/candidates/${candidateId}/decide`, body, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then((res) => {
            toast.success(`Candidato ${decide ? 'aprovado' : 'reprovado'} com sucesso!!`, {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            getTripDetails();
        }).catch((error) => {
            toast.error("Desculpe, tivemos um imprevisto, tente mais tarde!", {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
    }


    useEffect(() => {
        getTripDetails();
    }, [getTripDetails]);


    return (
        <Screen>
            <ToastContainer />
            <ContainerTitlePage>
                <TiArrowBack style={{ cursor: "pointer" }} color="#fff" size={40} onClick={() => navigate(-1)} />
                <h1>Detalhes da viagem</h1>
                <EmptyDiv></EmptyDiv>
            </ContainerTitlePage>
            {loading ? <Loader /> : (
                error ? <h1 style={{ color: "#fff", textAlign: "center" }}>Erro ao carregar viagem</h1> : (
                    <ContainerTripDetails>
                        <TakeTripDetails />

                        <BoxCandidates>
                            <summary>Candidatos Pendentes</summary>
                            {candidates.length === 0 && <h2>Não há candidatos pendentes.</h2>}
                            {takeTripCandidates}
                        </BoxCandidates>

                        <BoxApproveds>
                            <summary>Candidatos Aprovados</summary>
                            {approved.length === 0 && <h2>Não há candidatos aprovados.</h2>}
                            {takeTripApproveds}
                        </BoxApproveds>



                    </ContainerTripDetails>
                )
            )}
        </Screen>
    )
}

export default TripDetailsPage;