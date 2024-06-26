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
        const { id } = params;
        const result = await db.query(sql_delete, [id]);
        return result.rowCount > 0; // Retorna true se um medico foi deletado, false caso contrário
    } catch (error) {
        console.error('Erro ao deletar o Medicos:', error);
        throw error;
    }
};

const sql_patch_medicos = `UPDATE medicos SET`;

const patchMedicos = async (params) => {
    
    let fields = '';
    let binds = [params.id];
    let countParams = 1;

    if (params.MedicoNome) {
        countParams++;
        fields += ` MedicoNome = $${countParams} `;
        binds.push(params.MedicoNome);
    }
    if (params.Especialidade) {
        countParams++;
        fields += (fields ? ',' : '') + ` Especialidade = $${countParams} `;
        binds.push(params.Especialidade);
    }
    if (params.CRM) {
        countParams++;
        fields += (fields ? ',' : '') + ` CRM = $${countParams} `;
        binds.push(params.CRM);
    }
    if (params.MedicoTelefone) {
        countParams++;
        fields += (fields ? ',' : '') + ` MedicoTelefone = $${countParams} `;
        binds.push(params.MedicoTelefone);
    }

    if (fields === '') {
        throw new Error('Nenhum campo válido para atualizar');
    }

    let sql = sql_patch_medicos + fields + ' WHERE MedicoID = $1 RETURNING *;';
    try {
        const result = await db.query(sql, binds);
        return result.rows[0];
    } catch (error) {
        console.error('Erro ao atualizar médico:', error);
        throw error;
    }
};



module.exports.postMedicos = postMedicos
module.exports.patchMedicos = patchMedicos
module.exports.getMedicos = getMedicos
module.exports.deleteMedicos = deleteMedicos