import { connection } from "./connection"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTable = () => connection.raw(`
   CREATE TABLE Users_atv(  
    id int NOT NULL PRIMARY KEY,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL UNIQUE,
    type ENUM("admin", "user") NOT NULL DEFAULT "user"
    );
`)
    .then(() => { console.log("Tabelas criadas") })
    .catch(printError)

const insertUsers = () => connection.raw(`
INSERT INTO Users_atv (id, name, email, type) 
VALUES  (1, "Jonatas Cunha", "Jonatas@gmail.com", "admin"),
        (2, "Jose Melo", "Jose@gmail.com", "user"),
        (3, "Maria Silva", "Maria@gmail.com", "user"),
        (4, "Joao da Silva", "Joao@gmail.com", "user"),
        (5, "Pedro Silva", "email1@gmail.com", "admin"),
        (6, "Joao da Silva", "email2@gmail.com", "user"),
        (7, "Pedro Silva", "email3@gmail.com", "user"),
        (8, "Joao da Silva", "email4@gmail.com", "user"),
        (9, "Pedro Silva", "email5@gmail.com", "user"),
        (10, "Joao da Silva", "email6@gmail.com", "admin"),
        (11, "Pedro Silva", "email7@gmail.com", "user"),
        (12, "Joao da Silva", "email8@gmail.com", "user"),
        (13, "Pedro Silva", "email9@gmail.com", "user"),
        (14, "Joao da Silva", "email10@gmail.com", "user"),
        (15, "Pedro Silva", "email11@gmail.com", "user"),
        (16, "Joao da Silva", "email12@gmail.com", "user"),
        (17, "Pedro Silva", "email13@gmail.com", "user"),
        (18, "Joao da Silva", "email14@gmail.com", "admin"),
        (19, "Pedro Silva", "email15@gmail.com", "user"),
        (20, "Joao da Silva", "email16@gmail.com", "user"),
        (21, "Pedro Silva", "email17@gmail.com", "user"),
        (22, "Joao da Silva", "email18@gmail.com", "user"),
        (23, "Pedro Silva", "email19@gmail.com", "user"),
        (24, "Joao da Silva", "email20@gmail.com", "user"),
        (25, "Pedro Silva", "email21@gmail.com", "admin"),
        (26, "Joao da Silva", "email22@gmail.com", "user"),
        (27, "Pedro Silva", "email23@gmail.com", "admin"),
        (28, "Joao da Silva", "email24@gmail.com", "admin"),
        (29, "Pedro Silva", "email25@gmail.com", "user"),
        (30, "Joao da Silva", "email26@gmail.com", "user"),
        (31, "Pedro Silva", "email27@gmail.com", "user"),
        (32, "Joao da Silva", "email28@gmail.com", "user"),
        (33, "Pedro Silva", "email29@gmail.com", "user"),
        (34, "Joao da Silva", "email30@gmail.com", "user");
`)
    .then(() => { console.log("Usuários inseridos") })
    .catch(printError)


const closeConnection = () => { connection.destroy() }

createTable()
    .then(insertUsers)
    .finally(closeConnection)