import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import Like from '../../services/Like';


function LikeButton(props) {

    const { id, liked, setLiked, setDisliked,likes, setLikes } = props;

    const handleClick = () => {
        if (liked) {
            Like(id, 0);
            setLikes(likes - 1);
            setLiked(false);
            setDisliked(false);
        } else {
            Like(id, 1);
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