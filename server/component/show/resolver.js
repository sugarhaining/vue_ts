const {Product, Order, User} = require('../../db/show');
const resolvers = {
    Product: {
        users: parent => {

        },
        orders: parent => {
             
        }
    },
    Order: {
        product: parent => {
            
        },
        user: parent => {

        }
    },
    User: {
        products: parent => {
            return [{
                _id: 3516731,
                name: '一卡通',
            }, {
                _id: 87617824124,
                name: '笔记本',
            }, {
                _id: 429842,
                name: 'U盘'
            }]
        },
        orders: parent => {

        }
    },
    Query: {
        order: () => {},
        product: () => {},
        users: () => /* {} */([{
            _id: 43241242,
            name: '苏国涛',
        }, {
            _id: 432,
            name: 'sgt',
        }, {
            _id: 12,
            name: '苏国涛',
        }, {
            _id: 43241656242,
            name: '苏国涛',
        }, {
            _id: 432441242,
            name: '苏国涛',
        }])
    },
    Mutation: {
        addUser: async (_, {input}) => {
            const newUser = new User({
                ...input
            })

            const res = await newUser.save();
            if (res) {
                return newUser;
            }
        },
        addProduct: async (_, {input}) => {
            const newProduct = new Product({
                ...input
            })

            const res = await newProduct.save();
            if (res) {
                return newProduct;
            }
        },
        addOrder: async (_, {input}) => {
            const newOrder = new Order({
                ...input
            })

            const res = await newOrder.save();
            if (res) {
                return newOrder;
            }
        }
    }
}
  
  module.exports = resolvers;