import { useState, useEffect } from "react";
import ListOfCountries from "../../utils/ListOfCountries";
import { useRequestList } from "../../hooks/useRequestList";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Loader } from "../../components/Loader/Loader"
import axios from "axios";
import BASE_URL from "../../constants/BASE_URL";
import AgeVerification from "../../utils/AgeVerification";


import { Container, ContainerForm } from "./style";


import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import AlertTitle from '@mui/material/AlertTitle';
import CloseIcon from '@mui/icons-material/Close';



function ApplicationFormPage() {


    const [tripsList, setTripsList] = useState([]);
    const [name, setName] = useState("");
    const [profession, setProfession] = useState("");
    const [age, setAge] = useState("");
    const [textCandidacy, setTextCandidacy] = useState("");
    const [trip, setTrip] = useState("");
    const [country, setCountry] = useState("");

    const [openAgeVerification, setOpenAgeVerification] = useState(false);
    const [opentripVerification, setOpenTripVerification] = useState(false);


    const contriesList = ListOfCountries().countries;
    const [trips, loading] = useRequestList();



    useEffect(() => {
        const tripOptions = () => {
            const list = []
            trips.forEach((trip) => {
                list.push({
                    value: trip.id,
                    label: trip.name
                })
            })
            return list;
        }
        setTripsList(tripOptions());
    }, [trips]);

    const myStyles = {
        width: "90%",
        backgroundColor: "white",
        border: "1px solid white",
        borderRadius: "4px",
        margin: "10px 50px",
    }

    const nameChange = (event) => {
        setName(event.target.value);
    }

    const professionChange = (event) => {
        setProfession(event.target.value);
    }

    const ageChange = (event) => {
        setAge(event.target.value);
    }

    const textCandidacyChange = (event) => {
        setTextCandidacy(event.target.value);
    }

    const sendForm = (event) => {
        event.preventDefault();

        if (!AgeVerification(age)) {
            return setOpenAgeVerification(true);
        }

        if (!trip) {
            return setOpenTripVerification(true);
        }


        const body = {
            name: name,
            age: age,
            applicationText: textCandidacy,
            profession: profession,
            country: country,
        }

        axios.post(`${BASE_URL}/trips/${trip}/apply`, body).then((res) => {
            setName(""); setProfession(""); setAge(""); setTextCandidacy(""); setCountry(""); setTrip("");
            alert("Solicitação enviada com sucesso!")
        }).catch((error) => {
            alert("Solicitação não enviada, por gentileza, verificar todos os campos e tentar novamente", error.response)
        })
    }





    return (
        loading ? <Loader /> :
            <Container>
                <h1>Application Form Page</h1>
                <ContainerForm onSubmit={sendForm}>
                    <TextField
                        required
                        value={name}
                        onChange={nameChange}
                        id="outlined-basic nome"
                        label="Nome"
                        variant="outlined"
                        sx={myStyles}
                    />

                    <TextField
                        required
                        value={profession}
                        onChange={professionChange}
                        id="outlined-basic profissao"
                        label="Profissão"
                        variant="outlined"
                        sx={myStyles}
                    />


                    <Box >
                        <Collapse in={openAgeVerification}>
                            <Alert
                                severity="error"
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setOpenAgeVerification(false);
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                            >
                                <AlertTitle> <strong>Usuario Menor de Idade.</strong></AlertTitle>
                                Apenas usuarios maiores de idade podem se cadidatar a uma trip.
                            </Alert>
                        </Collapse>
                    </Box>


                    <TextField
                        required
                        value={age}
                        onChange={ageChange}
                        id="outlined-basic idade"
                        type="number"
                        label="Idade"
                        variant="outlined"
                        sx={myStyles}

                    />

                    <TextField
                        required
                        value={textCandidacy}
                        onChange={textCandidacyChange}
                        id="outlined-multiline-static"
                        label="Texto de candidatura"
                        multiline
                        rows={4}
                        sx={myStyles}
                    />


                    <Box >
                        <Collapse in={opentripVerification}>
                            <Alert
                                severity="error"
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setOpenTripVerification(false);
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                            >
                                <AlertTitle> <strong>Selecione uma viagem.</strong></AlertTitle>
                                É nescessario selecionar uma viagem para prosseguir.
                            </Alert>
                        </Collapse>
                    </Box>

                    <Autocomplete
                        required
                        id="combo-box-demo AutocompleteOffChromeTrip"
                        variant="outlined"
                        options={tripsList}
                        onChange={(event, newInputValue) => {
                            setTrip(newInputValue.value);
                        }}
                        sx={myStyles}
                        renderInput={(params) => <TextField {...params} label="Escolha uma Viagem" />}
                    />


                    <Autocomplete
                        required
                        onInputChange={(event, newInputValue) => {
                            setCountry(newInputValue);
                        }}
                        id="country-select-demo AutocompleteOffChromeCountry"
                        sx={myStyles}
                        options={contriesList}
                        autoHighlight
                        label="Country"
                        getOptionLabel={(option) => option.label}
                        renderOption={(props, option) => (
                            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                <img
                                    loading="lazy"
                                    width="20"
                                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                    alt=""
                                />
                                {option.label} ({option.code})
                            </Box>
                        )}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Escolha um país"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-input-no-auto-complete', // disable autocomplete and autofill
                                    required: country.length === 0,

                                }}
                            />
                        )}
                    />
                    <button type="submit">Enviar</button>

                </ContainerForm>
            </Container>
    )
}

export default ApplicationFormPage;