import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import { AiOutlineClose, AiFillHeart } from "react-icons/ai";
import { BiReset } from "react-icons/bi";
import { Container, BoxImagem, Img, BoxBio, BoxBotoes, Acabou } from "./style"
import { ToastContainer, toast } from "react-toastify";
import TinderCard from "react-tinder-card";
import Swal from "sweetalert2";
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {

    const [loading, setLoading] = useState(true);
    const [perfil, setPerfil] = useState({});
    const [animacao, setAnimacao] = useState(true);
    const [direction, setDirection] = useState(0);
    const [mensagem, setMensagem] = useState("Like");


    const getProfile = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/freire-jonatas/person`).then((res) => {
            setPerfil(res.data.profile || { fim: true });
            setLoading(false);
            setAnimacao(false);
        }).catch((err) => {
            console.log(err);
        }
        )
    }

    const choosePerson = (choice) => {

        choice ? setMensagem("Like") : setMensagem("Nope");
        choice ? setDirection(1) : setDirection(0);
        setAnimacao(true);        

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

    const onSwipe = (direction) => {
        console.log("You swiped: " + direction);
        if (direction === "right" || direction === "up") {
            choosePerson(true);
        } else {
            choosePerson(false);
        }
    };

    // const onCardLeftScreen = (myIdentifier) => {
    //     console.log(myIdentifier + " left the screen");
    // };


    const RenderizarPefil = () => {
        return (
            <Container key={perfil.id}>
                <TinderCard
                    className="swipe"
                    onSwipe={onSwipe}
                >
                    <BoxImagem img={perfil.photo} animacao={animacao} direction={direction}>
                        <p id="mensagem">{mensagem}</p>
                        <Img src={perfil.photo} alt="" />
                    </BoxImagem>
                    <BoxBio>
                        <div id="nameIdade">
                            <h2>{perfil.name}, {perfil.age}</h2>
                        </div>
                        <p>{perfil.bio}</p>
                    </BoxBio>
                </TinderCard>
                <BoxBotoes>
                    <button id="reject" onClick={() => choosePerson(false)}><AiOutlineClose /></button>
                    <button id="reset" onClick={clearMatchs}><BiReset /></button>
                    <button id="match" onClick={() => choosePerson(true)}><AiFillHeart /></button>
                </BoxBotoes>

            </Container>

        )
    }

    useEffect(() => {
        getProfile()
    }, []);


    return (
        <>
            <ToastContainer />
            {loading ? <Loader />
                : (perfil.fim ?
                    <Acabou>
                        <p>Acabou :/ </p>
                        <button onClick={clearMatchs}>Limpar Matches</button>
                    </Acabou>
                    : <RenderizarPefil />)}
        </>
    )
}