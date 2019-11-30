require('dotenv').config();
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const {SERVER_PORT} = process.env;
const {graphqlInit} = require('./graphql');

const app = new Koa();

app.use(bodyParser());

graphqlInit(app);

//  后端路由逻辑改为graphql/resolvers逻辑？

app.listen(SERVER_PORT, () => {
    console.log(`server is running on port ${SERVER_PORT}`);
});


