const db = require('../configs/pg');

const sql_insert =
    `INSERT INTO equipamentos ( Descricao, Fabricante, DataCompra, NumeroSerie,StatusEquipamento)
     VALUES ($1, $2, $3, $4, $5  )`

const postEquipamentos = async (params) => {
    const {  Descricao, Fabricante, DataCompra, NumeroSerie,StatusEquipamento } = params;

    try {
        const result = await db.query(sql_insert, [ Descricao, Fabricante, DataCompra, NumeroSerie,StatusEquipamento]);
        return result;
    } catch (error) {
        console.error('Erro ao inserir um novo Equipamento:', error);
        throw error;
    }
}


const sqlGet = `SELECT EquipamentoID, Descricao, Fabricante, StatusEquipamento,DataCompra FROM equipamentos`;

const getEquipamentos = async () => {
    try {
        const result = await db.query(sqlGet);
        const medicos = {
            total: result.rows.length,
            equipamentos: result.rows
        };
        return medicos;
    } catch (error) {
        console.error('Erro ao obter os Medicos:', error);
        throw error;
    }
};

const sql_patch = `UPDATE equipamentos SET`;

const patchEquipamentos = async (params) => {
    
    let fields = '';
    let binds = [params.id];
    let countParams = 1;

    if (params.Descricao) {
        countParams++;
        fields += ` Descricao = $${countParams} `;
        binds.push(params.Descricao);
    }
    if (params.Fabricante) {
        countParams++;
        fields += (fields ? ',' : '') + ` Fabricante = $${countParams} `;
        binds.push(params.Fabricante);
    }
    if (params.DataCompra) {
        countParams++;
        fields += (fields ? ',' : '') + ` DataCompra = $${countParams} `;
        binds.push(params.DataCompra);
    }
    if (params.NumeroSerie) {
        countParams++;
        fields += (fields ? ',' : '') + ` NumeroSerie = $${countParams} `;
        binds.push(params.NumeroSerie);
    }
    if (params.StatusEquipamento) {
        countParams++;
        fields += (fields ? ',' : '') + ` StatusEquipamento = $${countParams} `;
        binds.push(params.StatusEquipamento);
    }

    if (fields === '') {
        throw new Error('Nenhum campo válido para atualizar');
    }

    let sql = sql_patch + fields + ' WHERE EquipamentoID = $1 RETURNING *;';
    try {
        const result = await db.query(sql, binds);
        return result.rows[0];
    } catch (error) {
        console.error('Erro ao atualizar equipamento:', error);
        throw error;
    }
};

const sql_delete = `DELETE FROM equipamentos WHERE EquipamentoID = $1`;

const deleteEquipamentos = async (params) => {
    try {
        const { id } = params;
        const result = await db.query(sql_delete, [id]);
        return result.rowCount > 0; 
    } catch (error) {
        console.error('Erro ao deletar o Equipamentos:', error);
        throw error;
    }
};


module.exports.postEquipamentos = postEquipamentos
module.exports.patchEquipamentos = patchEquipamentos
module.exports.getEquipamentos = getEquipamentos
module.exports.deleteEquipamentos = deleteEquipamentos