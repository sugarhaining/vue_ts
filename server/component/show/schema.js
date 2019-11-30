const { gql } = require('apollo-server-koa')

const schema = gql`
    type Query {
        order: Order
        orders: [Order]
        product: Product
        products: [Product]
        user: User
        users: [User]
    }
    type Mutation {
        addUser(input: userInput): User
        addProduct(input: productInput): Product
        addOrder(input: orderInput): Order
    }
    type User {
        _id: ID!
        name: String
        productIndexes: [Int]
        products: [Product]
        orderIndexes: [Int]
        orders: [Order]
    }
    type Product {
        _id: ID!
        name: String
        userIndexes: [Int]
        users: [User]
        orderIndexes: [Int]
        orders: [Order]
    }
    type Order {
        id: ID!
        productIndex: Int
        product: Product
        userIndex: Int
        user: User
    }
    input userInput {
        name: String!
    }
    input productInput {
        name: String!
    }
    input orderInput {   
        productIndex: Int!
        userIndex: Int!
    }
`
module.exports = schema;