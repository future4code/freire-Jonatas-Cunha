import Checkbox from "@mui/material/Checkbox";
import { Container } from "./styles";

function RememberLogin(props) {
  return (
    <Container>
        <Checkbox sx={{padding: "0"}} onChange={() => props.setRemember(!props.remember)} id="remember"/>
        <label htmlFor="remember">Continuar conectado</label>
    </Container>
  );
};

export default RememberLogin;
