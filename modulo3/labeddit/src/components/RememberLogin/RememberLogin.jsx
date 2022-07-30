import Checkbox from "@mui/material/Checkbox";
import { Container, Label } from "./styles";

function RememberLogin(props) {
  return (
    <Container>
        <Checkbox sx={{padding: "0"}} onChange={() => props.setRemember(!props.remember)} id="remember"/>
        <Label htmlFor="remember">Continuar conectado</Label>
    </Container>
  );
};

export default RememberLogin;
