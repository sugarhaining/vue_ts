const fs = require('fs');
const path = require('path');

const generateApolloOptions = (nativePath) => {
    const schemas = [];
    const resolvers = [];
    const res = fs.readdirSync(path.resolve(__dirname, nativePath));
    res.forEach(item => {
        if (item == 'show') {
            const schema = require(`./${item}/schema`);
            const resolver = require(`./${item}/resolver`);
            schemas.push(schema);
            resolvers.push(resolver);
        }
    });
    return {
        schemas, 
        resolvers,
    }
}

const {schemas, resolvers} = generateApolloOptions('./');

module.exports = {
    schemas,
    resolvers,
}