const db = require('../configs/pg');

const sql_insert =
    `INSERT INTO enfermarias ( EnfermariaNome, Numero, Tipo, Capacidade,Localizacao)
     VALUES ($1, $2, $3, $4, $5)`


const postEnfermarias = async (params) => {
    const {  EnfermariaNome, Numero, Tipo, Capacidade,Localizacao } = params;

    try {
        const result = await db.query(sql_insert, [ EnfermariaNome, Numero, Tipo, Capacidade,Localizacao ]);
        return result;
    } catch (error) {
        console.error('Erro ao inserir um novo Enfermarias:', error);
        throw error;
    }
}

const sqlGet = `SELECT EnfermariaID, EnfermariaNome, Numero, Tipo, Capacidade, Localizacao FROM enfermarias`;

const getEnfermarias = async () => {
    try {
        const result = await db.query(sqlGet);
        const enfermeiros = {
            total: result.rows.length,
            enfermarias: result.rows
        };
        return enfermeiros;
    } catch (error) {
        console.error('Erro ao obter os Enfermarias:', error);
        throw error;
    }
};

const sql_delete = `DELETE FROM enfermarias WHERE EnfermariaID = $1`;

const deleteEnfermarias = async (params) => {
    try {
        const { id } = params;
        const result = await db.query(sql_delete, [id]);
        return result.rowCount > 0; // Retorna true se uma Enfermaria foi deletado, false caso contrário
    } catch (error) {
        console.error('Erro ao deletar o Enfermarias:', error);
        throw error;
    }
};


const sql_patchEnfermarias = 
    `UPDATE enfermarias
        SET `;

const patchEnfermarias = async (params) => {
    let fields = '';
    let binds = [];
    binds.push(params.id);  // Assuming the ID is passed as 'id'
    let countParams = 1;

    if (params.EnfermariaNome) {
        countParams++;
        fields += `EnfermariaNome = $${countParams}`;
        binds.push(params.EnfermariaNome);
    }
    if (params.Numero) {
        countParams++;
        fields += (fields ? ', ' : '') + `Numero = $${countParams}`;
        binds.push(params.Numero);
    }
    if (params.Tipo) {
        countParams++;
        fields += (fields ? ', ' : '') + `Tipo = $${countParams}`;
        binds.push(params.Tipo);
    }
    if (params.Capacidade) {
        countParams++;
        fields += (fields ? ', ' : '') + `Capacidade = $${countParams}`;
        binds.push(params.Capacidade);
    }
    if (params.Localizacao) {
        countParams++;
        fields += (fields ? ', ' : '') + `Localizacao = $${countParams}`;
        binds.push(params.Localizacao);
    }

    if (!fields) {
        throw new Error('At least one field must be provided for PATCH operation');
    }

    let sql = sql_patchEnfermarias + fields + ' WHERE EnfermariaID = $1';
    return await db.query(sql, binds);
}





module.exports.postEnfermarias = postEnfermarias
module.exports.getEnfermarias = getEnfermarias
module.exports.deleteEnfermarias = deleteEnfermarias
module.exports.patchEnfermarias = patchEnfermarias