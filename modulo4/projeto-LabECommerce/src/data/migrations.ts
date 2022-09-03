import { connection } from "./connection"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`
      CREATE TABLE IF NOT EXISTS labecommerce_users(  
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS labecommerce_products(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price FLOAT NOT NULL,
            image_url VARCHAR(255) NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS labecommerce_purchases(
            id VARCHAR(255) PRIMARY KEY,
            user_id VARCHAR(255) NOT NULL,
            product_id VARCHAR(255) NOT NULL,
            quantity INT NOT NULL,
            total_price FLOAT NOT NULL,
            FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
            FOREIGN KEY (product_id) REFERENCES labecommerce_products(id)
      );
`)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const insertUsers = () => connection.raw(`
   INSERT INTO labecommerce_users (id, name, email, password)
   VALUES   ("5d57be21-9b18-46ee-8b93-1f92c9cf732b", "Jonatas", "jonatas@labenu.com", "123456"),
            ("cdd54bd3-0d5a-4d4c-8817-bf7e53e53c8f", "João", "joae@labenu.com", "123456"),
            ("8b452dcf-265e-4d53-bc4a-7519fe53dcc9", "Maria", "maria@labenu.com", "123456");
`)
   .then(() => { console.log("Usuários criados") })
   .catch(printError)

const insertProducts = () => connection.raw(`
   INSERT INTO labecommerce_products (id, name, price, image_url)
   VALUES   ("541cd8a2-0e4c-4a95-85eb-9d61b2bd0912", "Bola", 22.5, "https://st.depositphotos.com/1000459/2436/i/450/depositphotos_24366251-stock-photo-soccer-ball.jpg"),
            ("6e90b625-c2ac-43b4-af66-4e5b6d5462e8","The Batman","45.9","https://rihappy.vtexassets.com/arquivos/ids/2572955-800-auto?v=637813364993100000");
   `)
   .then(() => { console.log("Receitas criadas") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertUsers)
   .then(insertProducts)
   .finally(closeConnection)