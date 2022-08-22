import { useState } from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import { usePostList } from "../../hooks/usePostList";
import { ContainerPrimary, Container, BoxCard, BoxNewPost } from "./styles";
import { PageButton, Separator } from "../../assets/style/GlobalStyles";
import InputTitle from "../../components/InputTitle/InputTitle";
import InputBody from "../../components/InputBody/InputBody";
import ContentLoader from "../../components/ContentLoader/ContentLoader.jsx";
import CreatePost from "../../services/CreatePost";
import ErrorLoading from "../../components/ErrorLoading/ErrorLoading";
import GenericToast from "../../components/GenericToast/GenericToast";
import Pagination from "../../components/Pagination/Pagination";


function HomePage() {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const { posts, loading, error, updatePosts, setError } = usePostList();
    const [sucessPost, setSucessPost] = useState(false);
    const [errorPost, setErrorPost] = useState(false);

    
    const handleClick = (e) => {
        e.preventDefault();
        CreatePost(title, body, setTitle, setBody, updatePosts, setErrorPost, setSucessPost);
    }

  return (
    <ContainerPrimary>
      <Header />
      <Container>
        <BoxNewPost onSubmit={handleClick}>
          <GenericToast severity="error" message="Erro ao enviar o poste, tente novamente." open={errorPost} close={setErrorPost} />
          <GenericToast severity="success" message="Sucesso ao enviar o poste!" open={sucessPost} close={setSucessPost} />
          <InputTitle value={title} change={setTitle} />
          <InputBody label="Texto" value={body} change={setBody} />
          <PageButton type="submit">Postar</PageButton>
          <Separator />
        </BoxNewPost>
      {error ? <ErrorLoading updatePosts={updatePosts} setError={setError}/> : (loading ? <ContentLoader name="Posts"/> : (
          posts.map(post => {
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
                  showComments={true}
                  showShare={true}
                  page="post"
                />
              </BoxCard>
            )})
            ))}
    </Container>
              <Pagination changePage={updatePosts}/>
    </ContainerPrimary>
  );
}

export default HomePage;