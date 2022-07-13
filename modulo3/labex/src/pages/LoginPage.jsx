import { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import  BASE_URL  from "../constants/BASE_URL";

function LoginPage() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errorLogin, setErrorLogin] = useState(false);

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    const changeSenha = (e) => {
        setSenha(e.target.value);
    }

    const login = (email, password) => {

        const body = {
            email: email,
            password: password
        }
    
        axios.post(`${BASE_URL}/login`, body).then((res) => {
            setErrorLogin(false);
            localStorage.setItem("token", res.data.token);
            navigate("/admin/trips/list", { replace: true });
        }).catch((error) => {
            setErrorLogin(true);
            alert("Solicitação não enviada, por gentileza, verificar todos os campos e tentar novamente", error.response)
        })
    
    }


    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            navigate("/admin/trips/list");
        }
    }, [navigate])

    return (
        <div>
            <input value={email} onChange={changeEmail} type="text" placeholder='EMAIL'/>
            <input value={senha} onChange={changeSenha} type="text" placeholder='SENHA'/>
            <button onClick={() => login(email, senha)}>LOGAR</button>
            
        </div>
    )
}

export default LoginPage;