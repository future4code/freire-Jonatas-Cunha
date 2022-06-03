function criarArrayNomesAnimais() {

    const animais = [

      { nome: "Cachorro", classificacao: "mamífero" },

      { nome: "Papagaio", classificacao: "ave" },

      { nome: "Gato", classificacao: "mamífero" },

      { nome: "Carpa", classificacao: "peixe" },

      { nome: "Pomba", classificacao: "ave" }

    ]
  
    const nomes = animais.map((objeto) => {

    return objeto.nome

    })
  
    return nomes

}
  
``OU``

function criarArrayNomesAnimais() {

    const animais = [

      { nome: "Cachorro", classificacao: "mamífero" },

      { nome: "Papagaio", classificacao: "ave" },

      { nome: "Gato", classificacao: "mamífero" },

      { nome: "Carpa", classificacao: "peixe" },

      { nome: "Pomba", classificacao: "ave" }

    ]
  

  let nomes = []
  
  for (let objeto of animais) {

    nomes.push(objeto.nome)

  }

  
  return nomes
  
}


