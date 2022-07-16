import axios from "axios";
import { useState, useEffect } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useNavigate, NavLink } from "react-router-dom";
import BASE_URL from "../../constants/BASE_URL";
import { Loader } from "../../components/Loader/Loader";
import { ContainerTrips, BoxTrip, BoxButtons } from "./style";
import { IoMdSettings } from "react-icons/io";
import { MdDelete } from "react-icons/md";


function AdminHomePage() {

    useProtectedPage();

    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [settings, setSettings] = useState(0);
    const [delet, setDelet] = useState(0);


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

        if (window.confirm("deletar?")) {
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
            <BoxTrip idName={trip.id} settings={settings} delet={delet} key={trip.id} id="trip">
                <h3>{trip.name}</h3>
                <BoxButtons >
                    <button
                        id="settings"
                        onClick={() => navegateToTripDetails(trip.id)}
                        onMouseOver={() => setSettings(1)}
                        onMouseOut={() => setSettings(0)}
                    >
                        <IoMdSettings
                            color="white"
                            size="28px"
                        />
                    </button>
                    <button
                        id="delet"
                        onClick={() => deleteTrip(trip.id)}
                        onMouseOver={() => setDelet(1)}
                        onMouseOut={() => setDelet(0)}
                    >
                        <MdDelete
                            color="white"
                            size="28px"
                        />
                    </button>
                </BoxButtons>
            </BoxTrip>
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
        <ContainerTrips>
            <h1>Admin Home Page</h1>
            <NavLink to="/admin/trips/create"><button>Criar Nova Viagem</button></NavLink>
            {loading ? <Loader /> : (error ? <p>ERROR</p> : mapTrips)}
        </ContainerTrips>
    )
}

export default AdminHomePage;