import { useState } from "react";
import Logo from "../../assets/img/Logo.svg";
import { ButtonSign, ButtonSignUp, Separator } from "../../styles";
import { Container, BoxInputs } from "./styles";
import Login from "../../services/Login";
import ErrorLogin from "../../components/ErrorLogin";
import InputPassword from "../../components/InputPassword";
import InputEmail from "../../components/InputEmail";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

 
  const login = (e) => {
    e.preventDefault();
    Login(email, password, setError);
  };

  return (
    <Container>
      <header>
        <img src={Logo} alt="logo" />
        <h1>LabEddit</h1>
        <p>O projeto de rede social da Labenu</p>
      </header>
      <main>
        <form>


          <ErrorLogin open={error} setOpen={setError}/>
          <BoxInputs>
            <InputEmail setEmail={setEmail} email={email} />
            <InputPassword password={password} setPassword={setPassword} />
          </BoxInputs>
          <ButtonSign type="submit" onClick={login}>Continuar</ButtonSign>
          <Separator />
          <ButtonSignUp type="button">Crie uma Conta!</ButtonSignUp>
        </form>
      </main>
    </Container>
  );
}

export default LoginPage;
