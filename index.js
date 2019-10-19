import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const PORT = 8090;

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is AmAzInG!');
});

//Query Resolver
const root = { hello: () => "Hello, It's FaceBox!"}

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));

app.listen(PORT, () => console.log(`Running server on localhost:${PORT}/graphql`) );