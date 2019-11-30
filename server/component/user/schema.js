const { gql } = require('apollo-server-koa')

const schema = gql`
    type Query {
        user: User
        allUsers: [User]
        loginStatus(token: String!): loginStatus
    }

    type Mutation {
        addUser(name: String!, password: String!): User
    }

    type User {
        id: ID
        name: String
        password: String
    }

    type loginStatus {
        status: Boolean
    }
`
module.exports = schema;