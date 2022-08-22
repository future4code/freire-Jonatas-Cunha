import { Grayout, Box, Title } from "./styles";

function Loader(props) {
  return (
    <Grayout display={props.display}>
           <Box/>
           <Title>Carregando...</Title>
    </Grayout>
  );
}

export default Loader;