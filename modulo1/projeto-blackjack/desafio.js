
// FUNÇÃO QUE PERGUNTA SE DESEJA INICIAR O JOGO
const peguntaParaIniciarOJogo = () => {
   const iniciarJogo = confirm(`Bem vindo ao jogo de Blackjack! \nQuer iniciar uma nova rodada?`)
   return iniciarJogo
}

// FUNÇÃO QUE MOSTRA A FRASE DE PEDIR MAIS CARTAS
const frasePedirMaisCartas = (fraseCartasUsuario, cartasComputador) => {
   const frase = confirm(`Suas cartas são ${fraseCartasUsuario}. A carta revelada do computador é ${cartasComputador[0].texto}.
    Deseja comprar mais uma carta?`)
   return frase
}

// FUNÇÃO QUE MOSTRAR O GANHADOR
const resultado = (pontuacaoUsuario, pontuacaoComputador, fraseUsuario, fraseComputador) => {
   if (pontuacaoUsuario > 21) {
      alert(`${fraseUsuario}
${fraseComputador}
O computador ganhou!`)
   } else if (pontuacaoComputador > 21) {
      alert(`${fraseUsuario}
${fraseComputador}
O usuário ganhou!`)
   } else if (pontuacaoUsuario === pontuacaoComputador) {
      alert(`${fraseUsuario}
${fraseComputador}
Empate!`)
   } else if (pontuacaoUsuario > pontuacaoComputador) {
      alert(`${fraseUsuario}
${fraseComputador}
O usuário ganhou!`)
   } else {
      alert(`${fraseUsuario}
${fraseComputador}
O computador ganhou!`)
   }
}

//FUNÃO COM LOÇO PARA JOGAR VARIAS VEZES
const iniciarJogo = () => {
   while (peguntaParaIniciarOJogo()) {
      jogo(true)
   }
   jogo(false)
}

const jogo = (iniciarJogo) => {

   // CONDIÇÃO PARA INICIAR O JOGO
   if (iniciarJogo) {

      // DISTRIBUIR AS CARTAS
      let cartasUsuario = [comprarCarta(), comprarCarta()]
      let cartasComputador = [comprarCarta(), comprarCarta()]

      // LAÇO QUE VERIFICA DOIS A's E SORTEIA NOVAMENTE AS CARTAS
      while (((cartasUsuario[0].texto[0] === "A") && (cartasUsuario[1].texto[0] === "A")) ||
         ((cartasComputador[0].texto[0] === "A") && (cartasComputador[1].texto[0] === "A"))) {
         cartasUsuario = [comprarCarta(), comprarCarta()]
         cartasComputador = [comprarCarta(), comprarCarta()]
      }

      // VARIAVEIS QUE ARMAZENAM PONTUAÇÃO
      let pontuacaoUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor
      let pontuacaoComputador = cartasComputador[0].valor + cartasComputador[1].valor

      // STRING COM AS CARTAS DOS JOGADORES
      let fraseCartasUsuario = `${cartasUsuario[0].texto}, ${cartasUsuario[1].texto}`
      let fraseCartasComputador = `${cartasComputador[0].texto}, ${cartasComputador[1].texto}`

      // LAÇO PARA ENTREGAR MAIS CARTAS AO JOGADOR
      for (let i = 2; (pontuacaoUsuario < 21) && frasePedirMaisCartas(fraseCartasUsuario, cartasComputador); i++) {
         cartasUsuario.push(comprarCarta())
         fraseCartasUsuario += `, ${cartasUsuario[i].texto}`
         pontuacaoUsuario += cartasUsuario[i].valor
      }

      // LAÇO PARA ENTREGAR MAIS CARTAS AO COMPUTADOR
      for (let i = 2; (pontuacaoComputador < 21 && pontuacaoUsuario <= 21) &&
         (pontuacaoComputador < pontuacaoUsuario); i++) {
         cartasComputador.push(comprarCarta())
         pontuacaoComputador += cartasComputador[i].valor
         fraseCartasComputador += `, ${cartasComputador[i].texto}`
      }

      // FRASE COM AS CARTAS E PONTUAÇÕES DOS JOGADORES
      const fraseUsuario = `"Usuário - cartas: ${fraseCartasUsuario} - pontuação ${pontuacaoUsuario}`
      const fraseComputador = `"Computador - cartas: ${fraseCartasComputador} - pontuação ${pontuacaoComputador}`

      // CHAMANDO A FUNÇÃO QUE MOSTRA O RESULTADO
      resultado(pontuacaoUsuario, pontuacaoComputador, fraseUsuario, fraseComputador)

      // CASO O USUARIO NÃO QUEIRA JOGAR
   } else {
      alert("O jogo acabou");
   }
}

// CHAMANDO A FUNÇÃO PARA INICIAR O JOGO
iniciarJogo()