import axios from "axios";
import { useState, useEffect } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useNavigate, NavLink } from "react-router-dom";
import BASE_URL from "../../constants/BASE_URL";
import { Loader } from "../../components/Loader/Loader";
import { ContainerTrips, BoxTrip, BoxButtons, ContainerTitlePage } from "./style";
import { IoMdSettings } from "react-icons/io";
import { MdDelete } from "react-icons/md";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminHomePage() {

    useProtectedPage();

    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [settings, setSettings] = useState(0);
    const [delet, setDelet] = useState(0);

    const navigate = useNavigate();

    const getTrips = () => {
        axios.get(`${BASE_URL}/trips`).then(res => {
            setTrips(res.data.trips);
            setLoading(false);
        }).catch(err => {
            setError(true);
            setLoading(false);
        })
    }

    const deleteTrip = (id) => {

        const token = localStorage.getItem("token");

        if (window.confirm("deletar?")) {
            axios.delete(`${BASE_URL}/trips/${id}`, {
                headers: {
                    auth: token
                }
            })
                .then((res) => {
                    toast.success('Viagem deletada com sucesso!', {
                        position: "top-center",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                    getTrips();
                }).catch((error) => {
                    toast.error('Erro ao deletar viagem!', {
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
    }
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
    }, []);

    return (
        <ContainerTrips>
             <ToastContainer />
            <ContainerTitlePage>
                <h1>Painel Administrador</h1>
            </ContainerTitlePage>
            <NavLink to="/admin/trips/create"><button id="createTrip">Criar Nova Viagem</button></NavLink>
            {loading ? <Loader /> : (error ? <p>ERROR</p> : mapTrips)}
        </ContainerTrips>
    )
}

export default AdminHomePage;