import BaseDatabase  from "../BaseDatabase"
import UserDatabase from "../UserDatabase"
import { users } from "./data"

class Migrations extends BaseDatabase {
    execute = async () => {
        try {

            await this.createTables()
            console.log("Tables created successfully.")

            // await this.insertData()
            // console.log("Tables populated successfully.")

            console.log("Migrations completed.")

        } catch (error) {
            console.log("Error in migrations...")
            console.log(error.message)
        } finally {
            BaseDatabase.getConnection().destroy()
        }
    }

    createTables = async () => {
        await BaseDatabase.getConnection().raw(` 
        CREATE TABLE labook_users (  
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
        );
        
        CREATE TABLE labook_posts (  
            id VARCHAR(255) PRIMARY KEY,
            content VARCHAR(255) NOT NULL,
            user_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES labook_users(id)
        );
        
        CREATE TABLE labook_likes (  
            id VARCHAR(255) PRIMARY KEY,
            user_id VARCHAR(255) NOT NULL,
            post_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES labook_users(id),
            FOREIGN KEY (post_id) REFERENCES labook_posts(id)
        );
        `)
    }

    insertData = async () => {
        await BaseDatabase
            .getConnection()(UserDatabase.TABLE_NAME)
            .insert(users)
    }
}

const migrations = new Migrations()
migrations.execute()