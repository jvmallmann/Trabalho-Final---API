const db = require('../configs/pg');
const cript = require('../utils/salt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const privatekeyPath = path.join(__dirname, '../private/private_key.pem');
const privatekey = fs.readFileSync(privatekeyPath);

const sql_getUser = 'SELECT * FROM usuarios WHERE Username = $1';

const loginUsuario = async (params) => {
    const { Username, Senha } = params;
    const result = await db.query(sql_getUser, [Username]);
    
    if (result.rows.length === 0) {
        throw new Error('Usuário não encontrado');
    }

    const user = result.rows[0];
    const isPasswordValid = cript.comparePassword(user.senha, user.salt, Senha);
    
    if (!isPasswordValid) {
        throw new Error('Senha inválida');
    }

    const payload = { userId: user.usuarioid, username: user.username };
    const token = jwt.sign(payload, privatekey, { algorithm: 'RS256' });

    return { token };
};

module.exports = {
    loginUsuario,
};
