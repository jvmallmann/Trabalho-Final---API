const pacientes = require('./pacientes');
const medicos = require('./medicos');
const enfermeiros = require('./enfermeiros');
const equipamentos = require('./equipamentos');
const enfermarias = require('./enfermarias');
const consultas = require('./consultas');
const internacoes = require('./internacoes');
const internacaoEquipamentos = require('./internacaoEquipamentos');
const Usuarios = require('./usuarios');
const login = require('./login');


module.exports = (app) => {
    pacientes(app)
    medicos(app)
    enfermeiros(app)
    equipamentos(app)
    enfermarias(app)
    consultas(app)
    internacoes(app)
    internacaoEquipamentos(app)
    Usuarios(app)
    login(app)
    
}