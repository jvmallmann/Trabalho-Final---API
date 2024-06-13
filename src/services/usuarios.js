const db = require('../configs/pg');
const cript = require('../utils/salt');

const sql_insert = `
    INSERT INTO usuarios (Username, salt, Senha)
    VALUES ($1, $2, $3)
`;

const postUsuarios = async (params) => {
    const { Username, Senha } = params;
    const { salt, hashedPass } = cript.createUser(Senha);
    const result = await db.query(sql_insert, [Username, salt, hashedPass]);
    return result;
};

const sql_get = `SELECT UsuarioID, Username, salt FROM usuarios`;

const getUsuarios = async () => {
    const result = await db.query(sql_get, []);
    return {
        total: result.rows.length,
        usuarios: result.rows
    };
};

const sql_delete = `DELETE FROM usuarios WHERE UsuarioID = $1`;

const deleteUsuarios = async (params) => {
    const result = await db.query(sql_delete, [params.id]);
    return result.rowCount > 0;
};

const sql_update_password = `
    UPDATE usuarios
    SET Senha = $1, salt = $2
    WHERE UsuarioID = $3
`;

const patchUsuarios = async (params) => {
    const { UsuarioID, Senha } = params;
    const { salt, hashedPass } = cript.createUser(Senha);
    const result = await db.query(sql_update_password, [hashedPass, salt, UsuarioID]);
    return result.rowCount > 0;
};

module.exports = {
    postUsuarios,
    getUsuarios,
    deleteUsuarios,
    patchUsuarios
};
