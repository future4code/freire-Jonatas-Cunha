import { Container, TitlePost, ContentPost, AuthorPost, BoxActions, BoxLikesAndComments } from './styles';
import { BiComment } from 'react-icons/bi';
import { AiFillLike, AiFillDislike, AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';


function Card(props) {

    const { id, body, title, voteSum, commentCount, userVote, username } = props;

    return (
        <Container>
            <TitlePost>{title}</TitlePost>
            <ContentPost>{body}</ContentPost>
            <AuthorPost>Enviado por: {username}</AuthorPost>

            <BoxActions>
                <BoxLikesAndComments>
                    <AiOutlineLike />
                    <span>{voteSum}</span>
                    <AiOutlineDislike />
                </BoxLikesAndComments>

                <BoxLikesAndComments>
                    <BiComment style={{cursor: "pointer"}}/>
                    <span>{commentCount}</span>
                </BoxLikesAndComments>
            </BoxActions>

        </Container>
    )
}

export default Card;