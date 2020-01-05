import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Query {
        hello: String
        cliff: String
        age: Int
        tweets: Int
    }
`);

export default schema;
