const db = require('../configs/pg');

const sql_insert =
    `INSERT INTO pacientes ( PacienteNome, DataNascimento, Sexo, Endereco)
     VALUES ($1, $2, $3, $4)`

const postPacientes = async (params) => {
    const {  PacienteNome, DataNascimento, Sexo, Endereco } = params;

    try {
        const result = await db.query(sql_insert, [ PacienteNome, DataNascimento, Sexo, Endereco]);
        return result;
    } catch (error) {
        console.error('Erro ao inserir um novo paciente:', error);
        throw error;
    }
}

const sqlGet = `SELECT PacienteID, PacienteNome, DataNascimento FROM pacientes`;

const getPacientes = async () => {
    try {
        const result = await db.query(sqlGet);
        const pacientes = {
            total: result.rows.length,
            pacientes: result.rows
        };
        return pacientes;
    } catch (error) {
        console.error('Erro ao obter os pacientes:', error);
        throw error;
    }
};

const sql_delete = `DELETE FROM pacientes WHERE PacienteID = $1`;

const deletePacientes = async (params) => {
    try {
        const { id } = params;
        const result = await db.query(sql_delete, [id]);
        return result.rowCount > 0; // Retorna true se um paciente foi deletado, false caso contrário
    } catch (error) {
        console.error('Erro ao deletar o Paciente:', error);
        throw error;
    }
};

const SqlPutPaciente =
    `update pacientes
        set PacienteNome = $2,
        DataNascimento = $3,
        Sexo = $4,
        Endereco = $5
        where PacienteID = $1`

const putPacientes = async (params) => {
    const {PacienteID, PacienteNome, DataNascimento, Sexo, Endereco} = params
    return await db.query(SqlPutPaciente, [PacienteID, PacienteNome, DataNascimento, Sexo, Endereco])
}

const sql_patch = 
    `UPDATE pacientes
        SET `;

const patchPacientes = async (params) => {
    let fields = '';
    let binds = [];
    binds.push(params.PacienteID);
    let countParams = 1;

    if (params.PacienteNome) {
        countParams++;
        fields += `PacienteNome = $${countParams}`;
        binds.push(params.PacienteNome);
    }
    if (params.DataNascimento) {
        countParams++;
        fields += (fields ? ', ' : '') + `DataNascimento = $${countParams}`;
        binds.push(params.DataNascimento);
    }
    if (params.Sexo) {
        countParams++;
        fields += (fields ? ', ' : '') + `Sexo = $${countParams}`;
        binds.push(params.Sexo);
    }
    if (params.Endereco) {
        countParams++;
        fields += (fields ? ', ' : '') + `Endereco = $${countParams}`;
        binds.push(params.Endereco);
    }

    if (!fields) {
        throw new Error('At least one field must be provided for PATCH operation');
    }

    let sql = sql_patch + fields + ' WHERE PacienteID = $1';
    return await db.query(sql, binds);
}



module.exports.getPacientes = getPacientes
module.exports.postPacientes = postPacientes
module.exports.deletePacientes = deletePacientes
module.exports.putPacientes = putPacientes
module.exports.patchPacientes = patchPacientes


