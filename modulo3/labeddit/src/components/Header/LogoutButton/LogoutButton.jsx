import { useNavigate } from 'react-router-dom';
import { Button } from './styles'
import { goToLogin } from '../../../router/Coordinatis';

function LogoutButton() {
    const navigate = useNavigate();

    function handleClick() {
        localStorage.removeItem('token') || sessionStorage.removeItem('token');
        goToLogin(navigate);
    }

    return (
        <Button onClick={handleClick}>Logout</Button>
    );
}

export default LogoutButton;