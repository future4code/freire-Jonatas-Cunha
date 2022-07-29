import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import Like from '../../services/Like';
import RemoveLike from '../../services/RemoveLike';


function LikeButton(props) {

    const { id, liked, setLiked, setDisliked,likes, setLikes, service } = props;

    const handleClick = () => {
        if (liked) {
            RemoveLike(id, service);
            setLikes(likes - 1);
            setLiked(false);
            setDisliked(false);
        } else {
            Like(id, 1, service);
            setLikes(likes + 1);
            setLiked(true);
            setDisliked(false);
        }
    }
    const Icon = liked ? AiFillLike : AiOutlineLike;
    const color = liked ? '#00af27' : '#000';
    return (
        <Icon onClick={handleClick} color={color} cursor="pointer"/>
    );
}

export default LikeButton;