import { goToFeed } from '../../../router/Coordinatis';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { Button } from './styles';

function ClosePostButton() {

    const navigate = useNavigate();

    return(
        <Button onClick={() => goToFeed(navigate)}><AiOutlineClose size="35px"/></Button>
    )
}

export default ClosePostButton;