import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import InputUsername from "../../components/InputUsername/InputUsername";
import InputEmail from "../../components/InputEmail/InputEmail";
import InputPassword from "../../components/InputPassword/InputPassword";
import Checkbox from "@mui/material/Checkbox";
import { ButtonSign } from "../../assets/style/GlobalStyles";

import {ContainerPrimary, Main, Container, BoxInputs, BoxContracts, BoxButtons } from "./styles";

import ErrorEmail from "../../components/ErrorEmail/ErrorEmail";
// import ErrorUsername from "../../components/ErrorUsername/ErrorUsername";
import ErrorPassword from "../../components/ErrorPassword/ErrorPassword";
import ErrorSignUp from "../../components/ErrorSignUp/ErrorSignUp";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [logged, setLogged] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signUpP = (e) => {
    e.preventDefault();
    setLoading(true);
    // Login(
    //   email,
    //   password,
    //   setError,
    //   setLogged,
    //   remember,
    //   setInvalidEmail,
    //   setInvalidPassword,
    //   setLoading
    // );
  };

  useEffect(() => {
    logged && navigate("/", { replace: true });
  }, [logged, navigate]);




  return (
    <ContainerPrimary>
      <Header />
      <Main>
        <Container>

        <h1>Olá, boas vindas ao LabEddit ;) </h1>

        <form>
          <BoxInputs>
            <InputUsername />
            <InputEmail />
            <InputPassword />
          </BoxInputs>

          <BoxContracts>
            <p>
              Ao continuar, você concorda com o nosso 
              <span> Contrato de usuário</span> e nossa
              <span> Política de Privacidade</span>
            </p>
            <div id="CheckboxFeed">
              <Checkbox sx={{ padding: "0" }} id="remember" />
              Eu concordo em receber emails sobre coisas legais no Labeddit
            </div>
          </BoxContracts>

          <BoxButtons>
            <ButtonSign>Cadastrar</ButtonSign>
          </BoxButtons>
        </form>
        </Container>
      </Main>
    </ContainerPrimary>
  );
}

export default SignUpPage;
