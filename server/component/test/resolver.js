const {Product, Order} = require('../../db/test');
const resolvers = {
    Product: {
        orders: parent => {
            return [{
                name: 'RW',
                productIndex: 1,
            }, {
                name: 'jrk',
                productIndex: 1,
            }, {
                name: 'fds',
                productIndex: 1,
            }, {
                name: 'vc',
                productIndex: 1,
            }] 
        }
    },
    Order: {
        product: parent => {
            return {
                name: 'hdsjbfjsb',
            }
        }
    },
    Query: {
        order: () => ({
            name: '4314242',
            productIndex: 1
        }),
        product: () =>({
            name: '舒服',
            orderIndex: [1, 2, 34, 34],
        }) 
    }
}
  
  module.exports = resolvers;