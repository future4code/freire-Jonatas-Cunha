import knex, { Knex } from "knex"
import dotenv from 'dotenv'

dotenv.config()

class BaseDataBase {
    private static connection: Knex | null = null;
    
    protected static getConnection = () => {
        if(this.connection === null) { 
            this.connection = knex({ 
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    port: 3306,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE,
                    multipleStatements: true
                }
            })

        }
        return this.connection;
    }
}

export default BaseDataBase;