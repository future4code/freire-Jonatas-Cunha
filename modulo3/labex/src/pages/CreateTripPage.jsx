import React from 'react';
import useForm from '../hooks/useForm';
import axios from 'axios';
import BASE_URL from '../constants/BASE_URL';
import { useNavigate } from 'react-router-dom';

function CreateTripPage() {
    const today = new Date().toISOString().split("T")[0]
    const navigate = useNavigate();
    const { form, onChange, cleanFields } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })

    const createTrip = (event) => {
        event.preventDefault()

        const token = localStorage.getItem("token");
        const body ={
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
                alert("Viagem cadastrada com sucesso")
                cleanFields()
            }).catch((error) => {
                console.log("Aconteceu algo errado, por gentileza tenta mais tarde", error.response)
            })
    }

    const backPage = () => {
        navigate(-1)
    }


    return (
        <div>
            <h1>Create Trip</h1>
        <form onSubmit={createTrip}>
            <input
                        placeholder={"Nome"}
                        value={form.name}
                        onChange={onChange}
                        required
                        name={"name"}
                        pattern={"^.{5,}"}
                        title={"O nome deve ter no mínimo 5 letras"}
                    />
                    <select value={form.planet}
                        onChange={onChange}
                        name={"planet"}
                        required
                        placeholder={"planet"}>
                        <option value="" selected disabled>Escolha um planeta</option>
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
                        name={"date"}
                        min={today}
                    />
                    <input
                        placeholder={"Descrição"}
                        value={form.description}
                        onChange={onChange}
                        required
                        name={"description"}
                        pattern={"^.{30,}"}
                        title={"A descrição deve ter no mínimo 30 leras"}
                    />
                    <input
                        placeholder={"Duração em dias"}
                        value={form.durationInDays}
                        onChange={onChange}
                        required
                        name={"durationInDays"}
                        type={"number"}
                        min={50}
                    />
                    <button type="submit">Cadastrar</button>
        </form>
        <button onClick={backPage}>Voltar</button>
        </div>
    )
}
export default CreateTripPage;