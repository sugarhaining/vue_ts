const { ApolloServer } = require('apollo-server-koa');
const mongoose = require('mongoose');
const {schemas, resolvers} = require('../component');
const {DB_URL} = process.env;

exports.graphqlInit = (app) => {
    mongoose.connect(DB_URL,  {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    mongoose.connection.on('disconnected', () => {
        console.log('ooooooops, db srvice has dropped');
    });

    mongoose.connection.on('open', () => {
        console.log('client has gotten db service');
    });

    const server = new ApolloServer({
        typeDefs: [...schemas],
        resolvers: [...resolvers],
        // mocks: true,
        formatError: error => {
            return {
              code: error.extensions.code,
              message: error.message
            }
          },
      });

      server.applyMiddleware({app});
};
