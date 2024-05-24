const pacientes = require('./pacientes');
const medicos = require('./medicos');
const enfermeiros = require('./enfermeiros');


module.exports = (app) => {
    pacientes(app)
    medicos(app)
    enfermeiros(app)
}