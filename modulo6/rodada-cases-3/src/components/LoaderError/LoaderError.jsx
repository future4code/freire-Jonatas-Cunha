import * as s from "./styles";

const LoaderError = ({ setReload, reload }) => {

    const Reload = () => {
        setReload(!reload);
    };

    return (
        <s.Container>
            <s.H1>Erro ao carregar os resultados</s.H1>
            <s.Button onClick={Reload}>Tentar novamente</s.Button>
        </s.Container>
    )

};

export default LoaderError;