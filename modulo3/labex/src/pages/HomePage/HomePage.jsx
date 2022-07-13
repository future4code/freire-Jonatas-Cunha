import { Container } from './style';
import { ContainerWidth } from '../../base/GlobalStyles';
import { NavLink } from 'react-router-dom';


function HomePage() {
    return (
        <ContainerWidth>
            <Container>
                <div>
                    <h2>Boas-Vindas</h2>
                    <p>As melhores viagens com passagens só de ida!</p>
                </div>
                <div>
                    <NavLink to="/trips/list">Área do Viajante</NavLink>
                    <NavLink to="/login">Área do Administrador</NavLink>
                </div>
            </Container>
        </ContainerWidth>
    )
}
export default HomePage;