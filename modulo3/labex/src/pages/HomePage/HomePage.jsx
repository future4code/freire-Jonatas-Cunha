import { Container, BoxMens, BoxButtons, Button } from './style';
import { ContainerWidth } from '../../base/GlobalStyles';
import { NavLink } from 'react-router-dom';


function HomePage() {
    return (
        <ContainerWidth>
            <Container>
                <BoxMens>
                    <h1>Boas-Vindas</h1>
                    <div>
                        <p>As melhores viagens com passagens só de ida você encontra aqui!</p>
                    </div>
                </BoxMens>
                <BoxButtons>
                    <NavLink to="/trips/list"><Button>Área do Viajante</Button></NavLink>
                    <NavLink to="/login"><Button>Área do Administrador</Button></NavLink>
                </BoxButtons>
            </Container>
        </ContainerWidth>
    )
}
export default HomePage;