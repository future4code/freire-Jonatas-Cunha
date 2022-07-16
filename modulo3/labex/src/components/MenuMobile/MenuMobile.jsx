import { MenuIcon, MenuContainer, Container, ExternalContainer } from "./style.jsx";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';

function MenuMobile() {

    const [open, setOpen] = useState(false);
    const currentPage = useLocation().pathname;

    const handleClick = () => {
        setOpen(!open);
    }

    const handleClickOutside = () => {
        setOpen(!open);
    }

    const logout = () => {
        localStorage.removeItem("token");
    }

    const RenderButton = () => {
        if (currentPage.slice(0, 6) === "/admin") {
            return (
                <NavLink to="/" onClick={() => setOpen(!open)}>
                    <button onClick={logout} >Logout</button>
                </NavLink>
            )
        } else {
            return (
                <NavLink to="/login" onClick={() => setOpen(!open)}>
                    <button>Area Admin</button>
                </NavLink>
            )
        }
    }

    return (
      <Container className="menu-mobile">

        <MenuIcon open={open} onClick={handleClick}/>
        <MenuContainer open={open}>
            <NavLink className="ItenMenu" onClick={handleClick} to="/">
                <HomeIcon />
                Início
            </NavLink>
            <NavLink className="ItenMenu" onClick={handleClick} to="/trips/list">
                <LocalAirportIcon />
                Viagens
            </NavLink>
            <NavLink className="ItenMenu" onClick={handleClick} to="/trips/application">
                <FormatAlignLeftIcon />
                Inscreva-se
            </NavLink>
            <RenderButton/>
        </MenuContainer>
        <ExternalContainer open={open} onClick={handleClickOutside} />
      </Container>
    );
  }
  
  export default MenuMobile;