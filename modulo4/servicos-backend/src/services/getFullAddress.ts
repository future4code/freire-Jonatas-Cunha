import axios from "axios"
import { Address } from "../types/typeAddress";


export const getFullAddress = async (cep: string): Promise<Address | undefined> => {
    try {

        cep = cep.replace(/\D/g, '');
        if(cep.length !== 8){
            return undefined
        }

        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        if (response.data.erro) {
            return undefined
        }

        const adress: Address = {
            logradouro: response.data.logradouro,
            bairro: response.data.bairro,
            cidade: response.data.localidade,
            estado: response.data.uf
        }

        return adress;
    }   catch (error) {
        return undefined
    }
}