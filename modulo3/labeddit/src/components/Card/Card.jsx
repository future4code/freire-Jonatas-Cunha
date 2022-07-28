import { useState } from "react";
import {
  Container,
  TitlePost,
  ContentPost,
  AuthorPost,
  BoxActions,
  BoxLikesAndComments,
} from "./styles";
import { BiComment } from "react-icons/bi";
import LikeButton from "../../components/LikeButton/LikeButton";
import DislikeButton from "../DislikeButton/DislikeButton";

function Card(props) {
  const { id, body, title, voteSum, commentCount, userVote, username } = props;
  const [likes, setLikes] = useState(voteSum === null ? 0 : parseInt(voteSum));
  const [liked, setLiked] = useState(userVote === 1);
  const [disliked, setDisliked] = useState(userVote === -1);

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
          />
          <span>{likes}</span>
          <DislikeButton
            id={id}
            setLikes={setLikes}
            likes={likes}
            disliked={disliked}
            setDisliked={setDisliked}
            setLiked={setLiked}
          />
        </BoxLikesAndComments>

        <BoxLikesAndComments>
          <BiComment style={{ cursor: "pointer" }} />
          <span>{commentCount}</span>
        </BoxLikesAndComments>
      </BoxActions>
    </Container>
  );
}

export default Card;