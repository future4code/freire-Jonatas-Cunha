import axios from "axios";
import { useState, useEffect } from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { useNavigate } from "react-router-dom";
import HEADERS from "../constants/HEADERS";
import BASE_URL from "../constants/BASE_URL";
import { Loader } from "../components/Loader/Loader";


function AdminHomePage() {
    
    useProtectedPage();

    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();


    // PEGAR LISTA DE TRIPS
    const getTrips = () => {
        axios.get(`${BASE_URL}/trips`).then(res => {
            setTrips(res.data.trips);
            setLoading(false);
        }).catch(err => {
            setError(true);
            setLoading(false);
        })
    }


    // DELETA TRIP
    const deleteTrip = (id) => {

        const token = localStorage.getItem("token");

        if(window.confirm("deletar?")){
            axios.delete(`${BASE_URL}/trips/${id}`, {
                headers: {
                    auth: token
                }
            })
            .then((res) => {
                alert("Viagem deletada com sucesso!");
                getTrips();
            }).catch((error) => {
                alert("Erro ao deletar viagem", error.response);
            })
        }
    }

    // MAPEAR TRIPS
    const mapTrips = trips.map((trip) => {
        return (
            <div key={trip.id}>
                <h1>{trip.title}</h1>
                <p>{trip.description}</p>
                <button onClick={() => navegateToTripDetails(trip.id)}>Gerenciar</button>
                <button onClick={() => deleteTrip(trip.id)}>Delete</button>
            </div>
        )
    })


    const navegateToTripDetails = (id) => {
        navigate(`/admin/trips/${id}`);
    }

    // CARREGAR TRIPS
    useEffect(() => {
        getTrips();
    }, [trips]);

    return (
        <div>
            <h1>Admin Home Page</h1>
            {loading ? <Loader/> : (error ? <p>ERROR</p> : mapTrips)}
        </div>
    )
}

export default AdminHomePage;