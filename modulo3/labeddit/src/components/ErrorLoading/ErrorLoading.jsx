import { AiOutlineReload } from 'react-icons/ai';
import { Container, Title, Button } from './style';

function ErrorLoading({ updatePosts, setError }) {

    const handleClick = () => {
        updatePosts();
        setError(false);
    }

  return (
    <Container>
        <Title>Erro, pane nos servidores.</Title>
        <Button onClick={handleClick}><AiOutlineReload/>Tentar novamente</Button>
    </Container>
  );
}

export default ErrorLoading;