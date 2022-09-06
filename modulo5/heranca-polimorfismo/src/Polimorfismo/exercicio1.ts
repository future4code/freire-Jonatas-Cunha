import { Client } from "../interfaces/Client";

export const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
  }

// Foi possivel imprimir todos os dados do objeto client, 
// pois o objeto client implementa a interface Client, que possui os atributos name, 
// registrationNumber, consumedEnergy e calculateBill. O objeto client possui todos esses atributos, 
// então ele implementa a interface Client.