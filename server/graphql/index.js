const { ApolloServer } = require('apollo-server-koa');
const {schema} = require('../component/book/schema');
const bookReducer = require('../component/book/resolvers');

const server = new ApolloServer({
    // 使用gql标签和字符串定义的graphql的DocumentNode
    typeDefs: [schema],
    resolvers: [bookReducer],   
    // mocks: true,
    formatError: error => {
        // log detail of error here
        return {
          code: error.extensions.code,
          message: error.message
        }
      },
  });

exports.graphql = (app) => {
    server.applyMiddleware({app});
}