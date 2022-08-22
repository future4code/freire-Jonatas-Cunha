import Header from "../../components/Header/Header";
import { ContainerPrimary, Container, Title, Information } from "./styles";

function ErrorPage() {
  return (
    <ContainerPrimary>
      <Header />
      <Container>
        <Title>404</Title>
        <Information>Page not found</Information>
      </Container>
    </ContainerPrimary>
  );
}

export default ErrorPage;
