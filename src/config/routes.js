module.exports = (app) => {
    app.route('/users')
        .get(app.routes.users.findAll)
        .post(app.route.users.createUser);
};