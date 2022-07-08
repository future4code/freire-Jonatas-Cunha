import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import { AiOutlineClose, AiFillHeart } from "react-icons/ai";
import { BiReset } from "react-icons/bi";
import { Container, BoxImagem, Img, BoxBio, BoxBotoes } from "./style"
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {

    const [loading, setLoading] = useState(true);
    const [perfil, setPerfil] = useState({});


    const getProfile = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/freire-jonatas/person`).then((res) => {
            setPerfil(res.data.profile || { fim: true });
            setLoading(false);
        }).catch((err) => {
            console.log(err);
        }
        )
    }

    const choosePerson = (choice) => {
        const body = {
            id: perfil.id,
            choice: choice,
        }
        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/freire-jonatas/choose-person`, body).then((res) => {
            getProfile();
            setLoading(true);
            console.log(res.data.isMatch);
            if (res.data.isMatch) {
                toast.error('Você tem um novo match!', {
                    icon: "💖",
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                });
            }


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
                    getProfile();
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



    const RenderizarPefil = () => {
        return (
            <Container key={perfil.id}>
                <BoxImagem img={perfil.photo}>
                    <Img src={perfil.photo} alt="" />
                </BoxImagem>
                <BoxBio>
                    <div id="nameIdade">
                        <h1>{perfil.name}, {perfil.age}</h1>
                    </div>
                    <p>{perfil.bio}</p>
                </BoxBio>
                <BoxBotoes>
                    <button id="reject" onClick={() => choosePerson(false)}><AiOutlineClose /></button>
                    <button id="reset" onClick={clearMatchs}><BiReset /></button>
                    <button id="match" onClick={() => choosePerson(true)}><AiFillHeart /></button>
                </BoxBotoes>
            </Container>)
    }

    useEffect(() => {
        getProfile()
    }, []);


    return (
        <>
            <ToastContainer />
            {loading ? <Loader />
                : (perfil.fim ?
                    <>
                        <p>Ninguem ta querendo você :/</p>
                        <button onClick={clearMatchs}>teste</button>
                    </>
                    : <RenderizarPefil />)}
        </>
    )
}