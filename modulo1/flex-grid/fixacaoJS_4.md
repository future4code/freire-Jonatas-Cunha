function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {

  let quantidade = 0

  for(let i = 0; i < arrayDeNumeros.length; i++) {

    if(arrayDeNumeros[i] === numeroEscolhido){

      quantidade+=1

    }

  }

  if (!quantidade) return Número não encontrado

  return `O número ${numeroEscolhido} aparece ${quantidade}x`

}