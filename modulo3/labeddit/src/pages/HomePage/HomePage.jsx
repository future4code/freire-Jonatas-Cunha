import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import { usePostList } from "../../hooks/usePostList";
import { ContainerPrimary, Container, BoxCard } from "./styles";

function HomePage() {

    const { posts, loading, error } = usePostList();

  return (
    <ContainerPrimary>
    <Header />

    <Container>

      {error ? <p>Error</p> : (loading ? <p>Loading...</p> : (
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
              />
            </BoxCard>
          )})))
      
      }

    </Container>
    </ContainerPrimary>
  );
}

export default HomePage;