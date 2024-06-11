const db = require('../configs/pg');

const sql_insert = `
INSERT INTO internacao (EnfermariaID, MedicoID, PacienteID, DataInicioInternacao, DataFimInternacao, ValorTotal, StatusInternacao)
VALUES ($1, $2, $3, $4, $5, $6, $7)`;

const postInternacao = async (params) => {
    const { EnfermariaID, MedicoID, PacienteID, DataInicioInternacao, DataFimInternacao, ValorTotal, StatusInternacao } = params;
    try {
        const result = await db.query(sql_insert, [EnfermariaID, MedicoID, PacienteID, DataInicioInternacao, DataFimInternacao, ValorTotal, StatusInternacao]);
        return result.rows[0];
    } catch (error) {
        console.error('Erro ao criar uma nova internação:', error);
        throw error;
    }
};

const sql_get = `
    SELECT 
        InternacaoID, 
        EnfermariaID, 
        MedicoID, 
        PacienteID, 
        DataInicioInternacao, 
        DataFimInternacao, 
        ValorTotal, 
        StatusInternacao 
    FROM 
        internacao`;

const getInternacoes = async () => {
    try {
        const result = await db.query(sql_get);
        const internacoes = {
            total: result.rows.length,
            internacoes: result.rows
        };
        return internacoes;
    } catch (error) {
        console.error('Erro ao obter as Internações:', error);
        throw error;
    }
};

const sql_patchInternacao = `UPDATE internacao SET`;

const patchInternacao = async (params) => {
    
    let fields = '';
    let binds = [params.id];
    let countParams = 1;

    if (params.EnfermariaID) {
        countParams++;
        fields += ` EnfermariaID = $${countParams} `;
        binds.push(params.EnfermariaID);
    }

    if (params.MedicoID) {
        countParams++;
        fields += (fields ? ',' : '') + ` MedicoID = $${countParams} `;
        binds.push(params.MedicoID);
    }

    if (params.PacienteID) {
        countParams++;
        fields += (fields ? ',' : '') + ` PacienteID = $${countParams} `;
        binds.push(params.PacienteID);
    }

    if (params.DataInicioInternacao) {
        countParams++;
        fields += (fields ? ',' : '') + ` DataInicioInternacao = $${countParams} `;
        binds.push(params.DataInicioInternacao);
    }

    if (params.DataFimInternacao) {
        countParams++;
        fields += (fields ? ',' : '') + ` DataFimInternacao = $${countParams} `;
        binds.push(params.DataFimInternacao);
    }

    if (params.ValorTotal) {
        countParams++;
        fields += (fields ? ',' : '') + ` ValorTotal = $${countParams} `;
        binds.push(params.ValorTotal);
    }

    if (params.StatusInternacao) {
        countParams++;
        fields += (fields ? ',' : '') + ` StatusInternacao = $${countParams} `;
        binds.push(params.StatusInternacao);
    }

    if (fields === '') {
        throw new Error('Nenhum campo válido para atualizar');
    }

    let sql = sql_patchInternacao + fields + ' WHERE InternacaoID = $1';
    try {
        const result = await db.query(sql, binds);
        return result.rows[0];
    } catch (error) {
        console.error('Erro ao atualizar a internação:', error);
        throw error;
    }
};

const sql_delete = `DELETE FROM internacao WHERE InternacaoID = $1`;

const deleteInternacao = async (params) => {
    try {
        const { id } = params;
        const result = await db.query(sql_delete, [id]);
        return result.rowCount > 0; 
    } catch (error) {
        console.error('Erro ao deletar a internação:', error);
        throw error;
    }
};

module.exports.postInternacao = postInternacao
module.exports.patchInternacao = patchInternacao
module.exports.getInternacoes = getInternacoes
module.exports.deleteInternacao = deleteInternacao