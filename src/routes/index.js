const pacientes = require('./pacientes');

module.exports = (app) => {
    app.use(pacientes);
};