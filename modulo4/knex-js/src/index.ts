import express from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import connection from './connection';

const port = process.env.PORT || 3003;
const app = express();
app.use(cors());
app.use(express.json());

// 1 
// A) Ele retorna uma array com 2 objetos, um com os dados e outro com informações do banco
// ---------------------------------------------------------------------------------------------------------------------
// B)
const searchActorRaw = async (name: string): Promise<any> => {  // RAW
    const result = await connection.raw(`SELECT * FROM Actor WHERE name = "${name}"`)
    return result[0]
  }

const searchActorQuery = async (nome: string): Promise<any> => { // QUERY BUILDER
    const result = await connection('Actor').where('name', nome);
    return result;
}
// ---------------------------------------------------------------------------------------------------------------------
// C)
const countActorsRaw = async (gender: string): Promise<any> => { // RAW
    const result = await connection.raw(` SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}" `);
    return result[0];
  };

const countActorsQuery = async (gender: string): Promise<any> => { // QUERY BUILDER
    const result = await connection('Actor').count('* as quantity').where('gender', gender)
    return result[0];
}

// 2
// A)
const updadeSalary = async (id: string, salary: number): Promise<any> => { 
    await connection('Actor').where('id', id).update({ salary: salary });
}
// ---------------------------------------------------------------------------------------------------------------------
// B)
const deleteActor = async (id: string): Promise<any> => {
    await connection('Actor').where('id', id).delete();
}
// ---------------------------------------------------------------------------------------------------------------------
// C)
const averageSalary = async (gender: string): Promise<any> => {
    const result = await connection('Actor').where('gender', gender).avg('salary as average')
    return result[0];
}




// 3
// A)

const getActorById = async (id: string): Promise<any> => {
    const result = await connection('Actor').where('id', id);
    return result[0];
}

app.get('/actor/:id', async (req, res) => {
    let statusCode = 500;
    try {
        const id = req.params.id;
        await getActorById(id).then(result => {
           if (!result) {
                statusCode = 404;
              throw new Error('Actor not found');
           }
              statusCode = 200;
               res.status(statusCode).send(result);
        })
    } catch (error: any) {
        statusCode = 500;
        res.status(statusCode).send({error: error.message || "Internal server error"});
    }
})

// ---------------------------------------------------------------------------------------------------------------------
// B)
app.get("/actor", async (req, res) => {
    let statusCode = 500;
    try {
        const gender = req.query.gender as string
        await countActorsQuery(gender).then(result => {
            if (!result) {
                statusCode = 404;
                throw new Error('Actor not found');
            }
            statusCode = 200;
            res.status(statusCode).send(result);
        })
    }   catch (error: any) {
        statusCode = 500;
        res.status(statusCode).send({error: error.message || "Internal server error"});
    }
})


// 4

const createActor = async (id : string, name: string, salary: number, date: Date, gender: string): Promise<any> => {
    await connection('Actor').insert({id: id, name: name, salary: salary, birth_date: date, gender: gender});
}

app.post("/actor", async (req, res) => {
    console.log(req.body.dateOfBirth);
    try {
      await createActor(
        req.body.id,
        req.body.name,
        req.body.salary,
        req.body.dateOfBirth,
        req.body.gender
      ).then(result => {
        res.status(201).send(result);
      })
 
    } catch (error: any) {
      res.status(400).send({
        message: error.message,
      });
    }
  });
// ---------------------------------------------------------------------------------------------------------------------
// A)
app.put("/actor", async (req, res) => {
    try {
      await updadeSalary(req.body.id, req.body.salary);
      res.status(200).send({
        message: "Success",
      });
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

// ---------------------------------------------------------------------------------------------------------------------
// B)
app.delete("/actor", async (req, res) => {
    const id = req.query.id as string;
    try {
        await deleteActor(id).then(result => {
            res.status(200).send({
                message: "Success",
            });
        })
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
})


// ---------------------------------- DESAFIOS --------------------------------------- 

// 5

type Movie = {
    id: string, 
    titulo: string, 
    sinopse: string,
    data: Date,
    avaliação: number,
    playing_limit_date: Date, 
}

const addMovie = async (movie: Movie): Promise<any> => {
    await connection('Movie').insert(movie);
}


app.post('/movie', async (req, res) => {
    try{

        await addMovie(req.body).then(result => {
            res.status(201).send({message: "Success"});
        })

    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
} )


// 6

const getMoviesRaw = async (): Promise<any> => {
    const result = await connection.raw(`SELECT * FROM Movie LIMIT 15`);
    return result[0];
}

const getMovies = async (): Promise<any> => {
    const result = await connection('Movie').select('*').limit(15);
    return result;
}

app.get('/movie/all', async (req, res) => {
    try {
        await getMovies().then(result => {
            res.status(200).send(result);
        })
    }   catch (error: any) {
        res.status(400).send({message: error.message});
    }
})

// 7

const searchMovieRaw = async (texto: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Movie WHERE (titulo LIKE "%${texto}%") OR (sinopse LIKE "%${texto}%") ORDER BY data`);
    return result[0]
}

const searchMovieQuery = async (texto: string): Promise<any> => {
    const result = await connection('Movie')
    .where('titulo', 'LIKE', `%${texto}%`)
    .orWhere('sinopse', 'LIKE', `%${texto}%`)
    .orderBy('data');
    return result;
}

app.get('/movie/search', async (req, res) => {
    try {
        const texto = req.query.texto as string;
        await searchMovieQuery(texto).then(result => {
            res.status(200).send(result);
        })
    } catch (error: any) {
        res.status(400).send({message: error.message});
    }
})




const server = app.listen (port, () => {
    if (server){
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`)
    }else{
        console.error(`Failure upon starting server.`)
    }
})
