import express from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';

import getHelloWorld from './controllers/getHelloWorld';
import getUserById from './controllers/getUserById';
import postUser from './controllers/postUser';
import putUser from './controllers/putUser';
import postTask from './controllers/postTask';
import getTaskById from './controllers/getTaskById';
import getAllUsers from './controllers/getAllUsers';
import getTasksCreatedByAUser from './controllers/getTasksCreatedByAUser';
import getSearchUser from './controllers/getSearchUser';

const port = process.env.PORT || 3003;
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', getHelloWorld);
app.get('/user', getSearchUser);
app.get('/user/all', getAllUsers); // DATA SEPARADA CRIADA
app.get('/user/:id', getUserById);
app.post('/user', postUser);
app.put('/user/:id', putUser);


app.get('/task', getTasksCreatedByAUser);
app.get('/task/:id', getTaskById);
app.post('/task', postTask);



const server = app.listen (port, () => {
    if (server){
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`)
    }else{
        console.error(`Failure upon starting server.`)
    }
})
