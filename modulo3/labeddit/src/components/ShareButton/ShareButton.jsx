import { AiOutlineShareAlt } from 'react-icons/ai';
import SharePost from "../../services/SharePost";

function ShareButton({ id, title, body }) {
  return (
    <AiOutlineShareAlt color='#000' cursor="pointer" onClick={() => SharePost(title, body, `/post/${id}`)} />
  );
}

export default ShareButton;