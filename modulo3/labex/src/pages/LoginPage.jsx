import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../constants/BASE_URL";

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import AlertTitle from '@mui/material/AlertTitle';
import CloseIcon from '@mui/icons-material/Close';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

function LoginPage() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [open, setOpen] = useState(false);

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    const changepassword = (e) => {
        setpassword(e.target.value);
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

    const backPage = () => {
        navigate(-1);
    }


    const login = (e) => {

        e.preventDefault();

        const body = {
            email: email,
            password: password
        }

        axios.post(`${BASE_URL}/login`, body).then((res) => {
            setOpen(false);
            localStorage.setItem("token", res.data.token);
            navigate("/admin/trips/list", { replace: true });
        }).catch((error) => {
            console.log(error);
            setOpen(true);
        })

    }

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            navigate("/admin/trips/list");
        }
    }, [navigate])


    const myStyles = {
        width: "100%",
        backgroundColor: "white",
        border: "1px solid white",
        borderRadius: "4px",
        margin: "10px 0px",
    }

    return (
        <div>

            <Box sx={{ width: '100%' }}>
                <Collapse in={open}>
                    <Alert
                        severity="error"
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        <AlertTitle> <strong>Error</strong></AlertTitle>
                        Email ou senha incorretos.
                    </Alert>
                </Collapse>
            </Box>

            <form onSubmit={login}>

                <TextField sx={myStyles}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={changeEmail}
                />

                <FormControl sx={myStyles} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={changepassword}
                        autoComplete="current-password"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <button onClick={backPage}>Voltar</button>

                <button type='submit'>LOGAR</button>

            </form>



        </div>
    )
}

export default LoginPage;