const { gql } = require('apollo-server-koa')

const schema = gql`
    type Query {
        student: Student
    }

  enum BookStatus {
    DELETED
    NORMAL
  }

  type Student {
    id: ID
    name: String
    age: Int
  }
`
exports.schema = schema;