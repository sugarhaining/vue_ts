const {User} = require('../../db/user');
const {hash} = require('../../utils/hash');
const resolvers = {
    Query: {
        allUsers: () => {
            return User.find().sort();
        },
        user: () => ({
            name: '张施翌',
            password: 234252,
        }),
        loginStatus: () => ({
            status: true,
        }),
    },
    Mutation: {
        addUser: async (_, {name, password}) => {
            password = await hash(password);
            
            const newUser = new User({
                name,
                password,
            });
            const res = await newUser.save();
            if (res) {
                return newUser;
            }
        }
    }
}
  
  module.exports = resolvers;