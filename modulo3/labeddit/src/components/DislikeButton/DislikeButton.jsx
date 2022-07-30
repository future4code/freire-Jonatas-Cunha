import { AiFillDislike, AiOutlineDislike } from 'react-icons/ai';
import Like from '../../services/Like';
import RemoveLike from '../../services/RemoveLike';


function DislikeButton(props) {
    
    const { id, disliked, setDisliked, setLiked, likes, setLikes, service } = props;


    const handleClick = () => {
        if (disliked) {
            RemoveLike(id, service);
            setLikes(likes + 1);
            setDisliked(false);
            setLiked(false);
        } else {
            Like(id, -1, service);
            setLikes(likes - 1);
            setDisliked(true);
            setLiked(false);
        }
    }

    const Icon = disliked ? AiFillDislike : AiOutlineDislike;
    const color = disliked ? '#d00032' : '#000';
    return (
        <Icon onClick={handleClick} color={color} cursor="pointer"/>
    );
}

export default DislikeButton;