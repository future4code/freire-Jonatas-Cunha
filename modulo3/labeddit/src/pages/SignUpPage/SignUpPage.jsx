import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import InputUsername from "../../components/InputUsername/InputUsername";
import InputEmail from "../../components/InputEmail/InputEmail";
import InputPassword from "../../components/InputPassword/InputPassword";
import Checkbox from "@mui/material/Checkbox";
import { ButtonSign, BoxErros } from "../../assets/style/GlobalStyles";
import SignUp from "../../services/SignUp";

import ErrorEmail from "../../components/ErrorEmail/ErrorEmail";
import ErrorPassword from "../../components/ErrorPassword/ErrorPassword";
import ErrorSignUp from "../../components/ErrorSignUp/ErrorSignUp";
import Loader from "../../components/Loader/Loader";

import { ContainerPrimary, Main, Container, BoxInputs, BoxContracts, BoxButtons } from "./styles";


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
          <h1>Olá, boas vindas ao LabEddit ;) </h1>

          <form onSubmit={signUp}>
            <BoxErros>
              <ErrorSignUp errorMessage={"Nome muito curto"} open={invalidUsername} setOpen={setInvalidUsername} />
              <ErrorSignUp errorMessage={error} open={error} setOpen={setError} />
              <ErrorEmail open={invalidEmail} setOpen={setInvalidEmail} />
              <ErrorPassword open={invalidPassword} setOpen={setInvalidPassword} />
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
    </>
  );
}

export default SignUpPage;
