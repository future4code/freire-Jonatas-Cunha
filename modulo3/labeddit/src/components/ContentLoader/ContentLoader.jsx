import { Container, Loader } from "./style";

function ContentLoader (props) {
    return(
        <Container>
            <Loader></Loader>
            <h2>Carregando {props.name}...</h2>
        </Container>
    )
}

export default ContentLoader;