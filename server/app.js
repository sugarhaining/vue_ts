require('dotenv').config();
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const port = 8081;
// const router = require('./router');
const {graphql} = require('./graphql');
const {dbConnect} = require('./db/');

const app = new Koa();

app.use(bodyParser());

dbConnect();
graphql(app);

//  后端路由逻辑改为graphqlresolvers逻辑？
//  router(app);

app.listen(port, () => {
    console.log('server is running on port 8081');
});


