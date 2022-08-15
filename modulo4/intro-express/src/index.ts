import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());


// 1

app.get('/', (req, res) => {
    res.status(200).send("Server is running");
})

// 2

type User = {
    id: number;
    name: string;
    phone: string;
    email: string;
    website: string;
}

// 3

const users: User[] = [
    {
        id: 1,
        name: 'John Doe',
        phone: '+1 (123) 456-7890',
        email: 'email@email.com',
        website: 'www.website.com'
    }, 
    {
        id: 2,
        name: 'Jane Doe',
        phone: '+1 (123) 456-7890',
        email: 'email@email.com',
        website: 'www.website.com'
    },
    {
        id: 3,
        name: 'Jack Doe',
        phone: '+1 (123) 456-7890',
        email: 'email@email.com',
        website: 'www.website.com'
    }
]


// 4 

app.get('/users', (req, res) => {
    res.status(200).send(users);
})


// 5

type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
}

// 6

const posts: Post[] = [
    {
        id: 1,
        title: 'Post 1',
        body: 'This is the first post',
        userId: 1
    },
    {
        id: 2,
        title: 'Post 2',
        body: 'This is the second post',
        userId: 1
    },
    {
        id: 3,
        title: 'Post 3',
        body: 'This is the third post',
        userId: 1
    }

]

// 7

app.get('/posts', (req, res) => {
    res.status(200).send(posts);
})

// 8

app.get('/posts/:userId', (req, res) => {
    const { userId } = req.params;
    if(posts.some(post => post.userId === Number(userId))) {
        const userPosts = posts.filter(post => post.userId === Number(userId));
        res.status(200).send(userPosts);
    }   else {
       if(!userId) {
           res.status(404).send({message: 'Please provide a userId'});
       } else if (users.some(user => user.id === Number(userId))) {
           res.status(404).send({message: 'No posts found for this user'});
       } else {
            res.status(404).send({message: 'User not found'});
       }
    }
})


/// DESAFIOS

// 9

app.delete('/post/:id', (req, res) => {
    const { id } = req.params;
    const postIndex = posts.findIndex(post => post.id === Number(id))

    if(postIndex !== -1) {
        posts.splice(postIndex, 1);
        res.status(200).send({
            message: 'Post deleted',
            posts: posts
        });
    } else {
        res.status(404).send({ message: 'Post not found' });
    }
})


// 10

app.delete('/user/:id', (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(user => user.id === Number(id))

    if(userIndex !== -1) {
        users.splice(userIndex, 1);
        res.status(200).send({
            message: 'User deleted',
            users: users
        });
    } else {
        res.status(404).send({ message: 'User not found' });
    }
})

// 11
// DOCUMENTAÇÃO https://documenter.getpostman.com/view/19882336/VUjTihj9


app.listen(3003, () => {
    console.log('Server started on port 3003');
})