import { MenuIcon, BoxMenuMobile, MenuContainer, Container, ExternalContainer, BoxButton } from "./style";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';

function MenuMobile() {

    const [open, setOpen] = useState(false);
    const currentPage = useLocation().pathname;

    function unloadScrollBars(open) {
        if (open) {
            document.body.style.overflow = "hidden";
            document.body.scroll = "no"; // IE

        } else {
            document.body.style.overflow = "auto";
        }
    }


    const handleClick = () => {
        setOpen(!open);
        unloadScrollBars(!open);
    }

    const logout = () => {
        localStorage.removeItem("token");
    }

    const RenderButton = () => {
        if (currentPage.slice(0, 6) === "/admin") {
            return (
                <NavLink to="/" onClick={handleClick}>
                    <button onClick={logout} >Logout</button>
                </NavLink>
            )
        } else {
            return (
                <NavLink to="/login" onClick={handleClick}>
                    <button>Área Admin</button>
                </NavLink>
            )
        }
    }

    return (
        <Container className="menu-mobile">
            <BoxMenuMobile onClick={handleClick}>
            <MenuIcon open={open} />
            </BoxMenuMobile>

        {open && (
            <MenuContainer open={open} currentPage={currentPage}>
                <NavLink className="ItenMenu" id="inicio" onClick={handleClick} to="/">
                    <HomeIcon />
                    Início
                </NavLink>
                <NavLink className="ItenMenu" id="viagem" onClick={handleClick} to="/trips/list">
                    <LocalAirportIcon />
                    Viagens
                </NavLink>
                <NavLink className="ItenMenu" id="inscreva" onClick={handleClick} to="/trips/application">
                    <FormatAlignLeftIcon />
                    Inscreva-se
                </NavLink>
                <BoxButton>
                    <RenderButton />
                </BoxButton>
            </MenuContainer>
        )}


            <ExternalContainer open={open} onClick={handleClick} />
        </Container>
    );
}

export default MenuMobile;