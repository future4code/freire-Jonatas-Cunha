import { BaseDatabase } from "../BaseDatabase"

class Migrations extends BaseDatabase {
    
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            if (error instanceof Error) {
                console.log(error.message)
            }
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS products_amaral;
        
        CREATE TABLE IF NOT EXISTS products_amaral(
            id INTEGER PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            tags VARCHAR(255) NOT NULL
        );

    `)
    }

}

const migrations = new Migrations()
migrations.execute()