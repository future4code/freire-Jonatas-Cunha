import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { HeaderContainer, BoxTitle, Title, BoxNavDesktop, ConainerButton, DivVazia } from "./style";
import { ScreenHeaAndFoo, ContainerWidth } from "../../base/GlobalStyles";
import Logo from "../Logo/Logo"
import MenuMobile from "../MenuMobile/MenuMobile";

function Header() {
    const currentPage = useLocation().pathname;
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
    }

    const RenderButton = () => {
        if (currentPage.slice(0, 6) === "/admin") {
            return (
                <NavLink to="/">
                    <button onClick={logout} >Logout</button>
                </NavLink>
            )
        } else {
            return (
                <NavLink to="/login">
                    <button>Área Admin</button>
                </NavLink>
            )
        }
    }

    const navigateToHome = () => {
        currentPage !== "/" && navigate("/");
    }

    
    return (
        <ScreenHeaAndFoo>
            <ContainerWidth>
                <HeaderContainer>
                <MenuMobile/>
                    <BoxTitle onClick={navigateToHome}>
                        <Logo />
                        <Title>LabeX</Title>
                    </BoxTitle>
                    <BoxNavDesktop currentPage={currentPage}>
                        <NavLink id={"inicio"} to="/">Ínicio</NavLink>
                        <NavLink id={"viagens"} to="/trips/list">Viagens</NavLink>
                        <NavLink id={"inscreva"} to="/trips/application">Inscreva-se</NavLink>
                    </BoxNavDesktop>
                    <ConainerButton>
                        <RenderButton />
                    </ConainerButton>
                    <DivVazia />
                </HeaderContainer>
            </ContainerWidth>
        </ScreenHeaAndFoo>
    )
}

export default Header