const db = require('../configs/pg');

const sql_insert = `
    INSERT INTO internacaoEquipamentos (InternacaoID, EquipamentoID, DataDeUso, Situacao)
    VALUES ($1, $2, $3, $4)
    `;

const postInternacaoEquipamentos = async (params) => {
    const { InternacaoID, EquipamentoID, DataDeUso, Situacao } = params;

    try {
        const result = await db.query(sql_insert, [InternacaoID, EquipamentoID, DataDeUso, Situacao]);
        return result.rows[0];
    } catch (error) {
        console.error('Erro ao criar uma nova internacaoEquipamentos:', error);
        throw error;
    }
};

const sqlGet = `
    SELECT Inter_Equip_Id, EquipamentoID, InternacaoID, DataDeUso, Situacao
    FROM internacaoEquipamentos`;

const getInternacaoEquipamentos = async () => {
    try {
        const result = await db.query(sqlGet);
        return {
            total: result.rows.length,
            internacaoEquipamentos: result.rows
        };
    } catch (error) {
        console.error('Erro ao obter os registros de internacaoEquipamentos:', error);
        throw error;
    }
};

const sql_patchInternacaoEquipamentos = 
    `UPDATE internacaoEquipamentos
        SET `;

const patchInternacaoEquipamentos = async (params) => {
    let fields = '';
    let binds = [];
    binds.push(params.id); 
    let countParams = 1;

    if (params.EquipamentoID) {
        countParams++;
        fields += `EquipamentoID = $${countParams}`;
        binds.push(params.EquipamentoID);
    }
    if (params.InternacaoID) {
        countParams++;
        fields += (fields ? ', ' : '') + `InternacaoID = $${countParams}`;
        binds.push(params.InternacaoID);
    }
    if (params.DataDeUso) {
        countParams++;
        fields += (fields ? ', ' : '') + `DataDeUso = $${countParams}`;
        binds.push(params.DataDeUso);
    }
    if (params.Situacao) {
        countParams++;
        fields += (fields ? ', ' : '') + `Situacao = $${countParams}`;
        binds.push(params.Situacao);
    }

    if (!fields) {
        throw new Error('At least one field must be provided for PATCH operation');
    }

    let sql = sql_patchInternacaoEquipamentos + fields + ' WHERE Inter_Equip_Id = $1';

    try {
        const result = await db.query(sql, binds);
        return result.rows[0];
    } catch (error) {
        console.error('Erro ao atualizar a internacaoEquipamentos:', error);
        throw error;
    }
};

const sql_delete = `DELETE FROM internacaoEquipamentos WHERE Inter_Equip_Id = $1`;

const deleteInternacaoEquipamentos = async (params) => {
    try {
        const { id } = params;
        const result = await db.query(sql_delete, [id]);
        return result.rowCount > 0;
    } catch (error) {
        console.error('Erro ao deletar a internacaoEquipamentos:', error);
        throw error;
    }
};

module.exports.postInternacaoEquipamentos = postInternacaoEquipamentos
module.exports.patchInternacaoEquipamentos = patchInternacaoEquipamentos
module.exports.getInternacaoEquipamentos = getInternacaoEquipamentos
module.exports.deleteInternacaoEquipamentos = deleteInternacaoEquipamentos