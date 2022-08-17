import express from 'express';
import cors from 'cors';
import { Product } from './types';
import { products } from './data';

const app = express()
app.use(express.json())
app.use(cors())


app.get('/test', (req, res) => {
    res.status(200).send("Servidor funcionando")
})

app.post('/products', (req, res) => {
    const { name, price } = req.body
    const id = products.length + 1

    try{

        if(!name || !price){
            throw new Error('Nome e preço são obrigatórios')
        }

        if(!isNaN(name)){
            throw new Error('Nome deve ser texto')
        }

        if(price <= 0){
            throw new Error('Preço precisa ser maior que zero')
        }

        if(isNaN(price)){
            throw new Error('Preço precisa ser um número')
        }

        if(products.find(product => product.name === name)){
            throw new Error('Produto já cadastrado')
        }

        const product: Product = {
            id: id.toString(),
            name,
            price: +price
        }
        products.push(product)

        res.status(200).send(products)

    }catch(error: any){

        switch(error.message){
            case 'Nome e preço são obrigatórios':
                res.status(422).send({error: error.message})
                break
            case 'Nome deve ser texto':
                res.status(400).send({error: error.message})
                break
            case 'Produto já cadastrado':
                res.status(409).send({error: error.message})
                break
            case 'Preço precisa ser maior que zero':
                res.status(400).send({error: error.message})
                break
            case 'Preço precisa ser um número':
                res.status(400).send({error: error.message})
                break
            default:
                res.status(500).send({error: "Erro inesperado"})
        }

    }
})

app.get('/products', (req, res) => {

    const search = req.query.search as string

    if(search){
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
        if(filteredProducts.length > 0){
            res.status(200).send(filteredProducts)
        } else { 
            res.status(404).send({messagem: "Nenhum produto encontrado"})
        }
    } else {
        if(products.length === 0){
            res.status(204).send()
        }else{
            res.status(200).send(products)
        }
    }
})


app.put('/products/:id', (req, res) => {
    const { id } = req.params
    const { name, price } = req.body

    try{

        const productIndex = products.findIndex(product => product.id === id)

        if(productIndex < 0){
            throw new Error('Produto não encontrado')
        }


        if(name && !price){

            if(!isNaN(name)){
                throw new Error('Nome deve ser texto')
            }

            products[productIndex].name = name
            res.status(200).send({
                message: "Produto atualizado com sucesso",
                products
            })
        } else if(!name && price){

            if(!price){
                throw new Error('Preço é obrigatório')
            }
    
            if(isNaN(price)){
                throw new Error('Preço precisa ser um número')
            }
    
            if(price <= 0){
                throw new Error('Preço precisa ser maior que zero')
            }


            products[productIndex].price = price
            res.status(200).send({
                message: "Produto atualizado com sucesso",
                products
            })
        } else if(name && price){

            if(!isNaN(name)){
                throw new Error('Nome deve ser texto')
            }

            if(!price){
                throw new Error('Preço é obrigatório')
            }
    
            if(isNaN(price)){
                throw new Error('Preço precisa ser um número')
            }
    
            if(price <= 0){
                throw new Error('Preço precisa ser maior que zero')
            }



            products[productIndex].name = name
            products[productIndex].price = price
            res.status(200).send({
                message: "Produto atualizado com sucesso",
                products
            })
        } else {
            throw new Error('Nome e preço são obrigatórios')
        }


    }catch(error: any){
            
            switch(error.message){
                case 'Preço é obrigatório':
                    res.status(422).send({error: error.message})
                    break
                case 'Nome deve ser texto':
                    res.status(400).send({error: error.message})
                    break
                case 'Preço precisa ser um número':
                    res.status(400).send({error: error.message})
                    break
                case 'Preço precisa ser maior que zero':
                    res.status(400).send({error: error.message})
                    break
                case 'Produto não encontrado':
                    res.status(404).send({error: error.message})
                    break
                case 'Nome e preço são obrigatórios':
                    res.status(422).send({error: error.message})
                    break
                default:
                    res.status(500).send({error: "Erro inesperado"})
            }
    
        }
})


app.delete('/products/:id', (req, res) => {
    const { id } = req.params

    try{

        const productIndex = products.findIndex(product => product.id === id)
        if(productIndex < 0){
            throw new Error('Produto não encontrado')
        }

        products.splice(productIndex, 1)

        res.status(200).send(products)

    }catch(error: any){

        switch(error.message){
            case 'Produto não encontrado':
                res.status(404).send({error: error.message})
                break
            default:
                res.status(500).send({error: "Erro inesperado"})
        }

    }
})


/// DOCUMENTAÇÃO https://documenter.getpostman.com/view/19882336/VUqmvyoe#8823f787-c246-4e2c-9aa3-903d93bfa060

app.listen(3003, () => {
    console.log("RODANDO NA PORTA 3003")
})