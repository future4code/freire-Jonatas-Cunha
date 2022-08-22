import { useLocation, useParams, useNavigate } from "react-router-dom";
import { HeaderContainer, LogoImg } from "./styles";
import LogoutButton  from "./LogoutButton/LogoutButton";
import LogInButton from "./LogInButton/LogInButton";
import ClosePostButton from "./ClosePostButton/ClosePostButton";
import Logo from "../../assets/img/Logo.svg";
import { goToFeed, goToLogin } from "../../router/Coordinatis"

function Header() {

    const location = useLocation();
    const params = useParams().id;
    const navigate = useNavigate();


    const handleClick = () => {
      if (location.pathname === `/post/${params}` || location.pathname === "/404") {
        goToFeed(navigate);
      }

      if ( location.pathname === "/signup") {
        goToLogin(navigate);
      }

    }

  return (
  <HeaderContainer>

    <div id="LeftButtons">
        {(location.pathname === `/post/${params}` || location.pathname === "/404") && <ClosePostButton />}
    </div>

    <div id="logo">
        <LogoImg onClick={handleClick} src={Logo} alt="Logo" />
    </div>

    <div id="RightButtons">
    {(location.pathname === "/" || location.pathname === `/post/${params}`) && <LogoutButton/>}
    {location.pathname === "/signup" && <LogInButton/>}
    </div>



  </HeaderContainer>);
}

export default Header;
