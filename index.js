import express from 'express';

const PORT = 8090;

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is AmAzInG!');
});

app.get('/graphql', (req, res) => {
    res.send('GraphQL is Not available!');
});

app.listen(PORT, () => console.log(`Running server on localhost:${PORT}/graphql`) );