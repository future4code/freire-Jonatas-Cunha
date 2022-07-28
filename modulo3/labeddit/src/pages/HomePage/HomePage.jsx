import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import { usePostList } from "../../hooks/usePostList";

function HomePage() {

    const { posts, loading, error } = usePostList();

  return (
    <>
    <Header />

    <div style={{padding: "16px", display:"flex", flexDirection: "column", gap:"15px"}}>

      {error ? <p>Error</p> : (loading ? <p>Loading...</p> : (

        posts.map(post => {
          return (
            <Card 
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              voteSum={post.voteSum || 0}
              commentCount={post.commentCount}
              userVote={post.userVote}
              username={post.username}
            />
          )})))
      
      }

    </div>
    </>
  );
}

export default HomePage;