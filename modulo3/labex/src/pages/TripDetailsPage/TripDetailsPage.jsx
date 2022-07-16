import axios from "axios";
import { useEffect, useState } from "react";
import BASE_URL from "../../constants/BASE_URL";
import { Loader } from "../../components/Loader/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";

import {
    Screen,
    TripDetails,
    BoxDetails,
    Details,
    ContainerCandidates,
    ContainerApproveds,
    BoxCandidates,
    BoxApproveds,
} from "./style";


function TripDetailsPage() {
    const [trip, setTrip] = useState({});
    const [candidates, setCandidates] = useState([]);
    const [approved, setApproved] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    useProtectedPage();

    const getTripDetails = () => {
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
        }).catch(err => {
            alert("Erro ao carregar viagem");
            setLoading(true);
        })
    }

    const TakeTripDetails = () => {
        return (
            <div>
                <h2>{trip.name}</h2>
                <p>{trip.description}</p>
                <p>{trip.planet}</p>
                <p>{trip.durationInDays}</p>
                <p>{trip.date}</p>
            </div>
        )
    }

    const takeTripCandidates = candidates.map((candidate, i) => {
        return (
            <details>
                <summary>Solicitação {i + 1} {candidate.name}</summary>
            <BoxDetails key={candidate.id} styly={{ background: "white" }} >
                <p><b>Nome:</b> {candidate.name}</p>
                <p><b>Profissão:</b> {candidate.profession}</p>
                <p><b>Idade:</b> {candidate.age}</p>
                <p><b>Texto da candidatura:</b> {candidate.applicationText}</p>
                <div>
                    <button onClick={() => approveCandidate(candidate.id, true)}>APROVAR</button>
                    <button onClick={() => approveCandidate(candidate.id, false)}>REPROVAR</button>
                </div>
            </BoxDetails>
            </details>
        )
    })

    const takeTripApproveds = approved.map((candidate) => {
        return (
            <BoxDetails key={candidate.id} >
                <p><b>Nome:</b> {candidate.name}</p>
                <p><b>Profissão:</b> {candidate.profession}</p>
                <p><b>Idade:</b> {candidate.age}</p>
                {/* <p><b>Texto da candidatura:</b> {candidate.applicationText}</p> */}
            </BoxDetails>
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
            alert(`Candidato ${decide ? 'aprovado' : 'repovado'} com sucesso!! 😀`)
            getTripDetails();

        }).catch((error) => {
            alert("Desculpe, tivemos um imprevisto, tente mais tarde!", error.response)
        })
    }

    const backPage = () => {
        navigate(-1)
    }


    useEffect(() => {
        getTripDetails();
    }, []);


    return (
        <Screen>
            <h1>Trip Details Page</h1>
            {loading ? <Loader /> : (
                error ? <p>Erro ao carregar viagem</p> : (
                    <TripDetails>
                        <TakeTripDetails />
                            <h3>Lista de Candidatos</h3>
                            <ContainerCandidates>
                                <BoxCandidates>
                                    {candidates.length > 0 ? takeTripCandidates
                                        : (
                                            <p>Não há candidatos para essa viagem</p>
                                        )}
                                </BoxCandidates>
                            </ContainerCandidates>
                            <h3>Lista de Aprovados</h3>
                            <ContainerApproveds>
                                <BoxApproveds>
                                    {approved.length > 0 ? takeTripApproveds
                                        : (
                                            <p>Não há candidatos aprovados para essa viagem</p>
                                        )}
                                </BoxApproveds>
                            </ContainerApproveds>
                    </TripDetails>
                )
            )}
            <button onClick={backPage} >Voltar</button>
        </Screen>
    )
}

export default TripDetailsPage;