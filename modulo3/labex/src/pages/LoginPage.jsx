import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../constants/BASE_URL";


// import IconButton from '@mui/material/IconButton';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';


function LoginPage() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errorLogin, setErrorLogin] = useState(false);

    // const [values, setValues] = React.useState({
    //     password: '',
    //     showPassword: false,
    // });

    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    // };

    // const handleClickShowPassword = () => {
    //     setValues({
    //         ...values,
    //         showPassword: !values.showPassword,
    //     });
    // };

    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };



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

    const myStyles = {
        width: "100%",
        backgroundColor: "white",
        border: "1px solid white",
        borderRadius: "4px",
        margin: "10px 0px",
    }


    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            navigate("/admin/trips/list");
        }
    }, [navigate])

    return (
        <div>
            {/* <TextField 
                id="outlined-basic" 
                label="Outlined" 
                variant="outlined" 
                o
                /> */}

            {/* <FormControl sx={myStyles} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl> */}


            <input value={email} onChange={changeEmail} type="text" placeholder='EMAIL' />
            <input value={senha} onChange={changeSenha} type="text" placeholder='SENHA' />
            <button onClick={() => login(email, senha)}>LOGAR</button>

        </div>
    )
}

export default LoginPage;