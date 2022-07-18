import React from 'react';
import useForm from '../../hooks/useForm';
import axios from 'axios';
import BASE_URL from '../../constants/BASE_URL';
import { useNavigate } from 'react-router-dom';
import { Screen, ContainerForm, ContainerTitlePage, EmptyDiv, Button } from './style';
import { TiArrowBack } from "react-icons/ti";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CreateTripPage() {
    const today = new Date().toISOString().split("T")[0]
    const navigate = useNavigate();
    const { form, onChange, cleanFields } = useForm({
        name: "",
        planet: "",
        date: today,
        description: "",
        durationInDays: ""
    })

    const createTrip = (event) => {
        event.preventDefault()

        const token = localStorage.getItem("token");
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date.split("-").reverse().join("/"),
            description: form.description,
            durationInDays: form.durationInDays
        }



        axios.post(`${BASE_URL}/trips`, body,
            {
                headers: {
                    auth: token
                }
            }).then(() => {

                toast.success('Viagem cadastrada com sucesso!', {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                cleanFields()
            }).catch((error) => {

                toast.error('Aconteceu algo errado, por gentileza tenta mais tarde!', {
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

    return (
        <Screen>
             <ToastContainer />
            <ContainerTitlePage>
                <TiArrowBack style={{ cursor: "pointer" }} color="#fff" size={40} onClick={() => navigate(-1)} />
                <h1>Criar Viagem</h1>
                <EmptyDiv></EmptyDiv>
            </ContainerTitlePage>


            <ContainerForm onSubmit={createTrip}>
                <input
                    placeholder={"Nome *"}
                    value={form.name}
                    onChange={onChange}
                    required
                    name={"name"}
                    pattern={"^.{5,}"}
                    title={"O nome deve ter no mínimo 5 letras"}
                />
                <select
                    defaultValue={''}
                    // value={form.planet}
                    onChange={onChange}
                    name={"planet"}
                    required
                    placeholder={"planet"}>
                    <option value='' disabled>Escolha um planeta *</option>
                    <option value="Mercúrio">Mercúrio</option>
                    <option value="Vênus">Vênus</option>
                    <option value="Terra">Terra</option>
                    <option value="Marte">Marte</option>
                    <option value="Júpiter">Júpiter</option>
                    <option value="Saturno">Saturno</option>
                    <option value="Urano">Urano</option>
                    <option value="Netuno">Netuno</option>
                    <option value="Plutão">Plutão</option>
                </select>
                <input
                    type="date"
                    value={form.date}
                    onChange={onChange}
                    required
                    placeholder="Data *"
                    name={"date"}
                    min={today}
                />
                <textarea
                    placeholder={"Descrição *"}
                    value={form.description}
                    onChange={onChange}
                    required
                    name={"description"}
                    pattern={"^.{30,}"}
                    title={"A descrição deve ter no mínimo 30 leras"}
                />
                <input
                    placeholder={"Duração em dias *"}
                    value={form.durationInDays}
                    onChange={onChange}
                    required
                    name={"durationInDays"}
                    type={"number"}
                    min={50}
                />
                <Button type="submit">Criar</Button>
            </ContainerForm>
        </Screen>
    )
}
export default CreateTripPage;