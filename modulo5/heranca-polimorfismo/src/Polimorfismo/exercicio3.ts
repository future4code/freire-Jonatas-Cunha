import Residence from "../classes/Residence";

// 1 - Criar uma classe que herde de Place
// 2 - Porque uma interface não pode ter implementação de métodos.
// 3 - Porque ela não pode ser instanciada, apenas herdada.


const residence = new Residence(3, "12345678");
const residence2 = new Residence(2, "12345678");

console.log(residence.getCep());
console.log(residence2.getCep());
console.log(residence.getResidentsQuantity());
console.log(residence2.getResidentsQuantity());
