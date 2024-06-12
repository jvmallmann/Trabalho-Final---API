
const db = require('../configs/pg');

const checkUsuarioExiste = async (MedicoID) => {
    const result = await db.query('SELECT 1 FROM usuarios WHERE UsuarioID = $1', [MedicoID]);
    return result.rowCount > 0;
};

module.exports = {
    checkUsuarioExiste
};
