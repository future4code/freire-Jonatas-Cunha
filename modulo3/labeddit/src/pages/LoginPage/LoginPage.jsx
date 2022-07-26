import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/Logo.svg";
import { ButtonSign, ButtonSignUp, Separator, BoxErros } from "../../assets/style/GlobalStyles";
import { Container, BoxInputs, BackGroundDeskTop } from "./styles";
import Login from "../../services/Login";
import ErrorLogin from "../../components/ErrorLogin/ErrorLogin";
import InputPassword from "../../components/InputPassword/InputPassword";
import InputEmail from "../../components/InputEmail/InputEmail";
import RememberLogin from "../../components/RememberLogin/RememberLogin";
import ErrorEmail from "../../components/ErrorEmail/ErrorEmail";
import ErrorPassword from "../../components/ErrorPassword/ErrorPassword";
import Loader from "../../components/Loader/Loader";



function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [logged, setLogged] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    setLoading(true);
    Login(
      email,
      password,
      setError,
      setLogged,
      remember,
      setInvalidEmail,
      setInvalidPassword,
      setLoading
    );
  };

  useEffect(() => {
    logged && navigate("/", { replace: true });
  }, [logged, navigate]);

  return (
    <>
    <Loader display={loading}/>
    <BackGroundDeskTop>
      <Container>
        <header>
          <img src={Logo} alt="logo" />
          <h1>LabEddit</h1>
          <p>O projeto de rede social da Labenu</p>
        </header>
        <main>
          <form onSubmit={login}>
            <BoxErros>
              <ErrorLogin open={error} setOpen={setError} />
              <ErrorEmail open={invalidEmail} setOpen={setInvalidEmail} />
              <ErrorPassword open={invalidPassword} setOpen={setInvalidPassword} />
            </BoxErros>
            <BoxInputs>
              <InputEmail setEmail={setEmail} email={email} />
              <InputPassword password={password} setPassword={setPassword} />
              <RememberLogin remember={remember} setRemember={setRemember} />
            </BoxInputs>
            <ButtonSign type="submit">
              Continuar
            </ButtonSign>
            <Separator />
            <ButtonSignUp type="button" onClick={() => navigate("/signup")}>
              Crie uma Conta!
            </ButtonSignUp>
          </form>
        </main>
      </Container>
    </BackGroundDeskTop>
    </>
  );
}

export default LoginPage;
