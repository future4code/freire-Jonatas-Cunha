import { useNavigate } from 'react-router-dom';
import { Button } from './styles';
import { goToLogin } from '../../../router/Coordinatis';

function LogInButton() {
    const navigate = useNavigate();

    function handleClick() {
        goToLogin(navigate);
    }

    return (
        <Button onClick={handleClick}>Entrar</Button>
    );
}

export default LogInButton;