const db = require('../configs/pg');

const sqlInsert = `INSERT INTO pacientes (PacienteID, PacienteNome, DataNascimento, Sexo, Endereco)
                   VALUES ($1, $2, $3, $4, $5)`;

const postPacientes = async (params) => {
    const { PacienteID, PacienteNome, DataNascimento, Sexo, Endereco } = params;
    console.log(params);
    await db.query(sqlInsert, [PacienteID, PacienteNome, DataNascimento, Sexo, Endereco]);
};

const sqlGet = `SELECT PacienteID, PacienteNome, DataNascimento FROM pacientes`;

const getPacientes = async () => {
    let pacientes = {};
    await db.query(sqlGet)
        .then(ret => pacientes = { total: ret.rows.length, pacientes: ret.rows })
        .catch(err => pacientes = err.stack);
    return pacientes;
};

module.exports.getPacientes = getPacientes
module.exports.postPacientes = postPacientes


