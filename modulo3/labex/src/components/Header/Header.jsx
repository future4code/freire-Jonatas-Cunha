import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { HeaderContainer, BoxTitle, Title, BoxNav } from "./style";
import { ScreenHeaAndFoo, ContainerWidth } from "../../base/GlobalStyles";
import Logo from "../Logo/Logo"

function Header() {
    const currentPage = useLocation().pathname;
    const navigate = useNavigate();
    console.log(currentPage);

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
                    <button>Area Admin</button>
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
                    <BoxTitle onClick={navigateToHome}>
                        <Logo />
                        <Title>LabeX</Title>
                    </BoxTitle>
                    <BoxNav currentPage={currentPage}>
                        <NavLink id={"inicio"} to="/">Ínicio</NavLink>
                        <NavLink id={"viagens"} to="/trips/list">Viagens</NavLink>
                        <NavLink id={"inscreva"} to="/trips/application">Inscreva-se</NavLink>
                    </BoxNav>
                    <RenderButton />
                </HeaderContainer>
            </ContainerWidth>
        </ScreenHeaAndFoo>
    )
}

export default Header