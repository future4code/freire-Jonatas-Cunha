import { Container, H1 } from "./style"
import { MdOutlineSearchOff } from "react-icons/md"

function NoResults() {
    return (
        <Container>
            <H1>Nenhum resultado encontrado</H1>
            <MdOutlineSearchOff color="#fff" size="80px"/>
        </Container>
    )
}

export default NoResults;