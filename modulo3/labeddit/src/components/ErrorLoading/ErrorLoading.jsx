import { AiOutlineReload } from 'react-icons/ai';

function ErrorLoading({ updatePosts, setError }) {

    const handleClick = () => {
        updatePosts();
        setError(false);
    }

  return (
    <div>
        <h2>Erro, pane nos servidores.</h2>
        <button onClick={handleClick}><AiOutlineReload/>Tentar novamente</button>
    </div>
  );
}

export default ErrorLoading;