const db = require('../configs/pg');

const sql_insert =
    `INSERT INTO medicos ( MedicoNome, Especialidade, CRM, MedicoTelefone)
     VALUES ($1, $2, $3, $4 )`

const postMedicos = async (params) => {
    const {  MedicoNome, Especialidade, CRM, MedicoTelefone } = params;

    try {
        const result = await db.query(sql_insert, [ MedicoNome, Especialidade, CRM, MedicoTelefone]);
        return result;
    } catch (error) {
        console.error('Erro ao inserir um novo Medicos:', error);
        throw error;
    }
}


const sqlGet = `SELECT MedicoID, MedicoNome, Especialidade, CRM FROM medicos`;

const getMedicos = async () => {
    try {
        const result = await db.query(sqlGet);
        const medicos = {
            total: result.rows.length,
            medicos: result.rows
        };
        return medicos;
    } catch (error) {
        console.error('Erro ao obter os Medicos:', error);
        throw error;
    }
};

const sql_delete = `DELETE FROM medicos WHERE MedicoID = $1`;

const deleteMedicos = async (params) => {
    try {
        const { MedicoID } = params;
        const result = await db.query(sql_delete, [MedicoID]);
        return result.rowCount > 0; // Retorna true se um paciente foi deletado, false caso contrário
    } catch (error) {
        console.error('Erro ao deletar o Medicos:', error);
        throw error;
    }
};


const SqlPutMedico =
    `update medicos
        set MedicoNome = $2,
        Especialidade = $3,
        CRM = $4,
        MedicoTelefone = $5
        where MedicoID = $1`

const putMedicos = async (params) => {
    const {MedicoID, MedicoNome, Especialidade, CRM, MedicoTelefone} = params
    return await db.query(SqlPutMedico, [MedicoID, MedicoNome, Especialidade, CRM, MedicoTelefone])
}

const sql_patch = 
    `UPDATE medicos
        SET `;

const patchMedicos = async (params) => {
    let fields = '';
    let binds = [];
    binds.push(params.MedicoID);
    let countParams = 1;

    if (params.MedicoNome) {
        countParams++;
        fields += `MedicoNome = $${countParams}`;
        binds.push(params.MedicoNome);
    }
    if (params.Especialidade) {
        countParams++;
        fields += (fields ? ', ' : '') + `Especialidade = $${countParams}`;
        binds.push(params.Especialidade);
    }
    if (params.CRM) {
        countParams++;
        fields += (fields ? ', ' : '') + `CRM = $${countParams}`;
        binds.push(params.CRM);
    }
    if (params.MedicoTelefone) {
        countParams++;
        fields += (fields ? ', ' : '') + `MedicoTelefone = $${countParams}`;
        binds.push(params.MedicoTelefone);
    }

    if (!fields) {
        throw new Error('At least one field must be provided for PATCH operation');
    }

    let sql = sql_patch + fields + ' WHERE MedicoID = $1';
    return await db.query(sql, binds);
}

module.exports.postMedicos = postMedicos
module.exports.patchMedicos = patchMedicos
module.exports.putMedicos = putMedicos
module.exports.getMedicos = getMedicos
module.exports.deleteMedicos = deleteMedicos