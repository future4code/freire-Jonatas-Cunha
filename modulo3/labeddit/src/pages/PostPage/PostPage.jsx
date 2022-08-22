import { useState } from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import { useParams } from "react-router-dom";
import { ContainerPrimary, Container, BoxPost, BoxNewComment, BoxCard, BoxNoComments } from "./styles";
import { usePostComments } from "../../hooks/usePostComments";
import { usePostList } from "../../hooks/usePostList";
import ContentLoader  from "../../components/ContentLoader/ContentLoader";
import InputBody from "../../components/InputBody/InputBody";
import ErrorLoading from "../../components/ErrorLoading/ErrorLoading";
import GenericToast from "../../components/GenericToast/GenericToast";
import { PageButton, Separator } from "../../assets/style/GlobalStyles";
import CreateComment from "../../services/CreateComment";

function PostPage() {

  const { id } = useParams();
  const { comments, loading, error, updateComments, setError } = usePostComments(id);
  const [comment, setComment] = useState("");
  const [sucessComment, setSucessComment] = useState(false);
  const [errorComment, setErrorComment] = useState(false);
  const post = usePostList(1, 9999999);

  const handleClick = (e) => {
    e.preventDefault();
    CreateComment(comment, id, setComment, updateComments, setErrorComment, setSucessComment);
}

  return (
    <ContainerPrimary>
      <Header />
      <Container>
        {post.error ? <ErrorLoading updatePosts={post.updatePosts} setError={post.setError} />: (post.loading && loading) ? <ContentLoader name="Post"/> : post.posts.filter(post => post.id === id).map(post => {
          return (
            <BoxPost key={post.id}>
              <Card 
                 id={post.id}
                 title={post.title}
                 body={post.body}
                 voteSum={post.voteSum || 0}
                 commentCount={post.commentCount}
                 userVote={post.userVote}
                 username={post.username}
                 showComments={false}
                 showShare={true}
                 page="post"
              />
            </BoxPost>
          );
        })}
        <BoxNewComment onSubmit={handleClick}>
          <GenericToast severity="error" message="Erro ao enviar o comentário, tente novamente." open={errorComment} close={setErrorComment} />
          <GenericToast severity="success" message="Sucesso ao enviar o comentário!" open={sucessComment} close={setSucessComment} />
          <InputBody label="Comentário" value={comment} change={setComment} />
          <PageButton type="submit">Postar</PageButton>
          <Separator />
        </BoxNewComment>
        {error ? <ErrorLoading updatePosts={updateComments} setError={setError}/> : ((loading && post.loading ) ? <ContentLoader name="Comentarios"/> : (
          comments.length === 0 ? <BoxNoComments>Nenhum comentário</BoxNoComments> : (
          comments.map(post => {
            return (
              <BoxCard key={post.id}>
                <Card 
                  id={post.id}
                  title={post.title}
                  body={post.body}
                  voteSum={post.voteSum || 0}
                  commentCount={post.commentCount}
                  userVote={post.userVote}
                  username={post.username}
                  showComments={false}
                  showShare={false}
                  page="comments"
                />
              </BoxCard>
            )}))
            ))}
      </Container>
    </ContainerPrimary>
  );
}

export default PostPage;