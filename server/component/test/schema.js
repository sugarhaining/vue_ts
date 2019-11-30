const { gql } = require('apollo-server-koa')

const schema = gql`
    type Query {
        order: Order
        product: Product
    }
    type Product {
        name: String
        orderIndex: [Int]
        orders: [Order]
    }

    type Order {
        name: String
        productIndex: Int
        product: Product
    }
`
module.exports = schema;

/* type Query {
    allProducts: [Product]
    allOrders: [Order]
}

type Mutation {
    addProduct(name: String, orders: [Int]): Product
    addOrder(name: String, product: Int): Order
} */