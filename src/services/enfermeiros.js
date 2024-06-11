const db = require('../configs/pg');

const sql_insert =
    `INSERT INTO enfermeiros ( EnfermeiroNome, Registro, EnfermeiroTelefone, DataAdmissao,Turno)
     VALUES ($1, $2, $3, $4, $5)`


const postEnfermeiros = async (params) => {
    const {  EnfermeiroNome, Registro, EnfermeiroTelefone, DataAdmissao,Turno } = params;

    try {
        const result = await db.query(sql_insert, [ EnfermeiroNome, Registro, EnfermeiroTelefone, DataAdmissao, Turno]);
        return result;
    } catch (error) {
        console.error('Erro ao inserir um novo Enfermeiros:', error);
        throw error;
    }
}


const sqlGet = `SELECT EnfermeiroID, EnfermeiroNome,Registro, DataAdmissao, Turno FROM enfermeiros`;

const getEnfermeiros = async () => {
    try {
        const result = await db.query(sqlGet);
        const enfermeiros = {
            total: result.rows.length,
            enfermeiros: result.rows
        };
        return enfermeiros;
    } catch (error) {
        console.error('Erro ao obter os Enfermeiros:', error);
        throw error;
    }
};

const sql_delete = `DELETE FROM enfermeiros WHERE EnfermeiroID = $1`;

const deleteEnfermeiros = async (params) => {
    try {
        const { id } = params;
        const result = await db.query(sql_delete, [id]);
        return result.rowCount > 0; 
    } catch (error) {
        console.error('Erro ao deletar o Enfermeiros:', error);
        throw error;
    }
};

const sql_patchEnfermeiros = 
    `UPDATE enfermeiros
        SET `;

const patchEnfermeiros = async (params) => {
    let fields = '';
    let binds = [];
    binds.push(params.id);
    let countParams = 1;

    if (params.EnfermeiroNome) {
        countParams++;
        fields += `EnfermeiroNome = $${countParams}`;
        binds.push(params.EnfermeiroNome);
    }
    if (params.Registro) {
        countParams++;
        fields += (fields ? ', ' : '') + `Registro = $${countParams}`;
        binds.push(params.Registro);
    }
    if (params.EnfermeiroTelefone) {
        countParams++;
        fields += (fields ? ', ' : '') + `EnfermeiroTelefone = $${countParams}`;
        binds.push(params.EnfermeiroTelefone);
    }
    if (params.DataAdmissao) {
        countParams++;
        fields += (fields ? ', ' : '') + `DataAdmissao = $${countParams}`;
        binds.push(params.DataAdmissao);
    }
    if (params.Turno) {
        countParams++;
        fields += (fields ? ', ' : '') + `Turno = $${countParams}`;
        binds.push(params.Turno);
    }

    if (!fields) {
        throw new Error('At least one field must be provided for PATCH operation');
    }

    let sql = sql_patchEnfermeiros + fields + ' WHERE EnfermeiroID = $1';
    return await db.query(sql, binds);
}

module.exports.postEnfermeiros = postEnfermeiros
module.exports.patchEnfermeiros = patchEnfermeiros
module.exports.getEnfermeiros = getEnfermeiros
module.exports.deleteEnfermeiros = deleteEnfermeiros
