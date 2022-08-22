import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import InputUsername from "../../components/InputUsername/InputUsername";
import InputEmail from "../../components/InputEmail/InputEmail";
import InputPassword from "../../components/InputPassword/InputPassword";
import Checkbox from "@mui/material/Checkbox";
import { ButtonSign, BoxErros } from "../../assets/style/GlobalStyles";
import SignUp from "../../services/SignUp";

import ErrorToast from "../../components/ErrorToast/ErrorToast";
import Loader from "../../components/Loader/Loader";

import { ContainerPrimary, Main, Container, BoxInputs, BoxContracts, BoxButtons, Title, BoxCheckbox } from "./styles";


function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [invalidUsername, setInvalidUsername] = useState(false);
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(0);

  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    setLoading(1);
    SignUp(
      email,
      password,
      username,
      setError,
      setLogged,
      setInvalidEmail,
      setInvalidPassword,
      setInvalidUsername,
      setLoading
    );
  };

  useEffect(() => {
    logged && navigate("/", { replace: true });
  }, [logged, navigate]);

  return (
    <>
    <Loader display={loading}/>

    <ContainerPrimary>
      <Header />
      <Main>
        <Container>
          <Title>Olá, boas vindas ao LabEddit ;) </Title>

          <form onSubmit={signUp}>
            <BoxErros>
              <ErrorToast message="Nome muito curto" open={invalidUsername} setOpen={setInvalidUsername} />
              <ErrorToast message={error} open={error} setOpen={setError} />
              <ErrorToast message="Digite um e-mail válido." open={invalidEmail} setOpen={setInvalidEmail} />
              <ErrorToast message="Senha muito curta." open={invalidPassword} setOpen={setInvalidPassword} />
            </BoxErros>
            <BoxInputs>
              <InputUsername username={username} setUsername={setUsername} />
              <InputEmail email={email} setEmail={setEmail} />
              <InputPassword password={password} setPassword={setPassword} />
            </BoxInputs>

            <BoxContracts>
              <p>
                Ao continuar, você concorda com o nosso
                <span> Contrato de usuário</span> e nossa
                <span> Política de Privacidade</span>
              </p>
              <BoxCheckbox>
                <Checkbox sx={{ padding: "0" }} id="remember" />
                <label htmlFor="remember">Eu concordo em receber emails sobre coisas legais no Labeddit</label>
              </BoxCheckbox>
            </BoxContracts>

            <BoxButtons>
              <ButtonSign>Cadastrar</ButtonSign>
            </BoxButtons>
          </form>
        </Container>
      </Main>
    </ContainerPrimary>
    </>
  );
}

export default SignUpPage;
