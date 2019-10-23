const Router = require('koa-router');
const StudentController = require('./controller/student');

const router = new Router();

module.exports = app => {
    // router.get('/student', StudentController.addStudent);
    app.use(router.routes()).use(router.allowedMethods());
};