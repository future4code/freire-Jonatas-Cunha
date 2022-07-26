import { Grayout, Box } from "./styles";

function Loader(props) {
  return (
    <Grayout display={props.display}>
           <Box/>
           <h1>Carregando...</h1>
    </Grayout>
  );
}

export default Loader;