import React from 'react';
import './App.css';
import jonatas from "./img/jonatas.jpg"
import ficr from "./img/ficr.png"
import freelance from "./img/freelance.png"
import netflix from "./img/netflix.webp"
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno'
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled from 'styled-components'
import email from './img/email.png'
import endereco from './img/endereco.png'


const AppPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const PageSectionConainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`;


const PageSectionConainerH3 = styled.h3 `
  text-align: center;
  margin-bottom: 20px;
`

const PageH2 = styled.h2 `
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`



function App() {
  return (
    <div className="App">
      <AppPrincipal>
        <PageSectionConainer>
          <PageH2>Dados pessoais</PageH2>
          <CardGrande
            imagem={jonatas}
            nome="Jônatas Felix"
            descricao="Olá, eu sou o Jônatas. Sou estudande de Web Full Stack na Labenu. Adoro Animais, inclusive tenho três, um chachorros e um casal de calopsitas!"
          />

          <ImagemButton
            imagem="https://cdn-icons-png.flaticon.com/512/626/626013.png"
            texto="Ver mais"
          />
        </PageSectionConainer>

        <PageSectionConainer>
          <CardPequeno link={email} descricao={"E-mail"} informacao={"E-mail"} conteudo={"jon.cunha@hotmail.com"} />
          <CardPequeno link={endereco} descricao={"Endereço"} informacao={"Endereço"} conteudo={"Rua dos Bobos, Nº 0"} />
        </PageSectionConainer>

        <PageSectionConainer>
          <PageH2>Experiências profissionais</PageH2>
          <CardGrande
            imagem={freelance}
            nome="Freelance"
            descricao="Criador de Templates para sites."
          />

          <CardGrande
            imagem={netflix}
            nome="Netflix"
            descricao="Analisando cada série minuciosamente. Hahaha"
          />
        </PageSectionConainer>

        <PageSectionConainer>
          <PageH2>Escolaridade</PageH2>
          <CardGrande
            imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
            nome="Labenu"
            descricao="Estudante de Web Full Stack"
          />

          <CardGrande
            imagem={ficr}
            nome="FICR"
            descricao="Estudante de Análise e Desenvolvimento de Sistemas."
          />
        </PageSectionConainer>


        <PageSectionConainer>
          <PageH2>Minhas redes sociais</PageH2>
          <ImagemButton
            imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
            texto="Facebook"
          />

          <ImagemButton
            imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
            texto="Twitter"
          />
        </PageSectionConainer>
      </AppPrincipal>
    </div>
  );
}

export default App;
