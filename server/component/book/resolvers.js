// src/components/book/resolver.js
const BookStatus = {
    DELETED: 0,
    NORMAL: 1
  }
  
  const resolvers = {
    BookStatus,
  
    Query: {
  
      student: (parent, args, context, info) => ({
        name: '地球往事',
        price: 66.3,
        age: 112,
        status: BookStatus.NORMAL,
        client: 'free parent',
      })
  
    }
  }
  
  module.exports = resolvers;