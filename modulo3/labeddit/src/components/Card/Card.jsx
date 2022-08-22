import { useState } from "react";
import { BiComment } from "react-icons/bi";
import LikeButton from "../../components/LikeButton/LikeButton";
import DislikeButton from "../DislikeButton/DislikeButton";
import { useNavigate } from "react-router-dom";
import { goToPost } from "../../router/Coordinatis";
import ShareButton from "../../components/ShareButton/ShareButton";

import {
  Container,
  TitlePost,
  ContentPost,
  AuthorPost,
  BoxActions,
  BoxLikesAndComments,
} from "./styles";


function Card(props) {
  const {
    id,
    body,
    title,
    voteSum,
    commentCount,
    userVote,
    username,
    showComments,
    showShare,
    page,
  } = props;
  const [likes, setLikes] = useState(voteSum === null ? 0 : parseInt(voteSum));
  const comments = commentCount === null ? 0 : parseInt(commentCount)
  const [liked, setLiked] = useState(userVote === 1);
  const [disliked, setDisliked] = useState(userVote === -1);
  const navigate = useNavigate();

  return (
    <Container>
      <TitlePost>{title}</TitlePost>
      <ContentPost>{body}</ContentPost>
      <AuthorPost>Enviado por: {username}</AuthorPost>

      <BoxActions>
        <BoxLikesAndComments>
          <LikeButton
            id={id}
            setLikes={setLikes}
            likes={likes}
            liked={liked}
            setLiked={setLiked}
            setDisliked={setDisliked}
            service={page}
          />
          <span>{likes}</span>
          <DislikeButton
            id={id}
            setLikes={setLikes}
            likes={likes}
            disliked={disliked}
            setDisliked={setDisliked}
            setLiked={setLiked}
            service={page}
          />
        </BoxLikesAndComments>

        {showComments && (
          <BoxLikesAndComments style={{cursor: "pointer"}} onClick={() => goToPost(navigate, id, page)}>
            <BiComment style={{ cursor: "pointer" }} />
            <span>{comments}</span>
          </BoxLikesAndComments>
        )}

        {(showShare && navigator.share !== undefined) && (
        <BoxLikesAndComments>
          <ShareButton id={id} title={title} body={body}/>
        </BoxLikesAndComments>
        )}

      </BoxActions>
    </Container>
  );
}

export default Card;
