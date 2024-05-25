const pacientes = require('./pacientes');
const medicos = require('./medicos');
const enfermeiros = require('./enfermeiros');
const equipamentos = require('./equipamentos');
const enfermarias = require('./enfermarias');


module.exports = (app) => {
    pacientes(app)
    medicos(app)
    enfermeiros(app)
    equipamentos(app)
    enfermarias(app)
}