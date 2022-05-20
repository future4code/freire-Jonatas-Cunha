// FUNÇÃO PARA MOSTRAR O GANHADOR
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

// CONDIÇÃO PARA INICIAR O JOGO
if (confirm(`Bem vindo ao jogo de Blackjack!
Quer iniciar uma nova rodada?`)) {
   // DISTRIBUIR AS CARTAS
   let cartasUsuario = [comprarCarta(), comprarCarta()]
   let pontuacaoUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor
   let cartasComputador = [comprarCarta(), comprarCarta()]
   let pontuacaoComputador = cartasComputador[0].valor + cartasComputador[1].valor
   let fraseCartasUsuario = `${cartasUsuario[0].texto}, ${cartasUsuario[1].texto}`
   let fraseCartasComputador = `${cartasComputador[0].texto}, ${cartasComputador[1].texto}`

   // SE A CARTA RECEBIDA FOR 2 A's SORTEIA NOVAMENTE
   while (((cartasUsuario[0].texto[0] === "A") && (cartasUsuario[1].texto[0] === "A")) ||
      ((cartasComputador[0].texto[0] === "A") && (cartasComputador[1].texto[0] === "A"))) {
      cartasUsuario = [comprarCarta(), comprarCarta()]
      cartasComputador = [comprarCarta(), comprarCarta()]
      pontuacaoComputador = cartasComputador[0].valor + cartasComputador[1].valor
      pontuacaoUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor
   }

   // FUNÇÃO QUE MOSTRA A FRASE DE PEDIR MAIS CARTAS
   const frasePedirMaisCartas = () => {
      const frase = confirm(`Suas cartas são ${fraseCartasUsuario}. A carta revelada do computador é ${cartasComputador[0].texto}.
    Deseja comprar mais uma carta?`)
      return frase
   }

   // LAÇO PARA ENTREGAR MAIS CARTAS AO JOGADOR
   for (let i = 2; (pontuacaoUsuario < 21) && frasePedirMaisCartas(); i++) {
      if (pontuacaoUsuario < 21) {
         cartasUsuario.push(comprarCarta())
         fraseCartasUsuario += `, ${cartasUsuario[i].texto}`
         pontuacaoUsuario += cartasUsuario[i].valor
      } else {
         break
      }
   }

   // LAÇO PARA ENTREGAR MASI CARTAS AO COMPUTADOR
   for (let i = 2; (pontuacaoComputador < 21 && pontuacaoUsuario <= 21) &&
      (pontuacaoComputador < pontuacaoUsuario); i++) {
      cartasComputador.push(comprarCarta())
      pontuacaoComputador += cartasComputador[i].valor
      fraseCartasComputador += `, ${cartasComputador[i].texto}`
   }

   const fraseUsuario = `"Usuário - cartas: ${fraseCartasUsuario} - pontuação ${pontuacaoUsuario}`
   const fraseComputador = `"Computador - cartas: ${fraseCartasComputador} - pontuação ${pontuacaoComputador}`

   resultado(pontuacaoUsuario, pontuacaoComputador, fraseUsuario, fraseComputador)

} else {
   console.log("O jogo acabou");
}





