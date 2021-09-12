// import other routes
const addressRoutes = require('./address');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    // // other routes
    addressRoutes(app, fs);

};

module.exports = appRouter;