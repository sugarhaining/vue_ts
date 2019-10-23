const mongoose = require('mongoose');

exports.dbConnect = () => {
    mongoose.connect('mongodb://localhost/graphql',  {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

    mongoose.connection.on('disconnected', () => {
        console.log('ooooooops, db srvice has dropped');
    });

    mongoose.connection.on('open', () => {
        console.log('client has gotten db service');
    });
}