const db = require('../configs/pg');

const sql_insert =
    `INSERT INTO consultas ( PacienteID, MedicoID, DataConsulta, HoraConsulta, Descricao, LocalConsuta)
     VALUES ($1, $2, $3, $4, $5, $6)`

const postConsultas = async (params) => {
    const { PacienteID, MedicoID, DataConsulta, HoraConsulta, Descricao, LocalConsuta } = params;

    try {
        const result = await db.query(sql_insert, [ PacienteID, MedicoID, DataConsulta, HoraConsulta, Descricao, LocalConsuta ]);
        return result;
    } catch (error) {
        console.error('Erro ao inserir uma nova Consulta:', error);
        throw error;
    }
}

const sqlGet = `
    SELECT 
        consultas.ConsultaID, 
        pacientes.PacienteNome, 
        medicos.MedicoNome,
        consultas.DataConsulta,
        consultas.HoraConsulta,
        consultas.Descricao,
        consultas.LocalConsuta
    FROM 
        consultas 
    JOIN 
        pacientes ON consultas.PacienteID = pacientes.PacienteID
    JOIN 
        medicos  ON consultas.MedicoID = medicos.MedicoID
`;

const getConsultas = async () => {
    try {
        const result = await db.query(sqlGet);
        const consultas = {
            total: result.rows.length,
            consultas: result.rows
        };
        return consultas;
    } catch (error) {
        console.error('Erro ao obter as Consultas:', error);
        throw error;
    }
};

const sql_delete = `DELETE FROM consultas WHERE ConsultaID = $1`;

const deleteConsultas = async (params) => {
    try {
        const { id } = params;
        const result = await db.query(sql_delete, [id]);
        return result.rowCount > 0; // Retorna true se uma consulta foi deletada, false caso contrário
    } catch (error) {
        console.error('Erro ao deletar a Consulta:', error);
        throw error;
    }
};

const sql_patchConsultas = 
    `UPDATE consultas
        SET `;

const patchConsultas = async (params) => {
    let fields = '';
    let binds = [];
    binds.push(params.id); 
    let countParams = 1;

    if (params.PacienteID) {
        countParams++;
        fields += `PacienteID = $${countParams}`;
        binds.push(params.PacienteID);
    }
    if (params.MedicoID) {
        countParams++;
        fields += (fields ? ', ' : '') + `MedicoID = $${countParams}`;
        binds.push(params.MedicoID);
    }
    if (params.DataConsulta) {
        countParams++;
        fields += (fields ? ', ' : '') + `DataConsulta = $${countParams}`;
        binds.push(params.DataConsulta);
    }
    if (params.HoraConsulta) {
        countParams++;
        fields += (fields ? ', ' : '') + `HoraConsulta = $${countParams}`;
        binds.push(params.HoraConsulta);
    }
    if (params.Descricao) {
        countParams++;
        fields += (fields ? ', ' : '') + `Descricao = $${countParams}`;
        binds.push(params.Descricao);
    }
    if (params.LocalConsuta) {
        countParams++;
        fields += (fields ? ', ' : '') + `LocalConsuta = $${countParams}`;
        binds.push(params.LocalConsuta);
    }

    if (!fields) {
        throw new Error('At least one field must be provided for PATCH operation');
    }

    let sql = sql_patchConsultas + fields + ' WHERE ConsultaID = $1';
    return await db.query(sql, binds);
}




module.exports.postConsultas = postConsultas
module.exports.getConsultas = getConsultas
module.exports.patchConsultas = patchConsultas
module.exports.deleteConsultas = deleteConsultas