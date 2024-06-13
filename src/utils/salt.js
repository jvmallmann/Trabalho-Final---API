const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const fs = require('fs');

// Função para gerar um salt aleatório
function generateSalt() {
    // Gera 16 bytes de salt em formato hexadecimal
    return crypto.randomBytes(16).toString('hex');
}

// Função para gerar um hash da senha utilizando o salt
function hashedPassword(password, salt) {
    // Usa o algoritmo PBKDF2 para derivar a chave da senha com o salt
    return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
}

// Função para criar um usuário, gerando um salt e a senha hasheada
function createUser(password) {
    // Gera um salt
    const salt = generateSalt();
    // Gera um hash da senha utilizando o salt
    const hashedPass = hashedPassword(password, salt);
    // Retorna o salt e a senha hasheada
    return { salt, hashedPass };
}

// Função para comparar a senha fornecida com a senha armazenada
function comparePassword(storedPassword, salt, providedPassword) {
    // Gera um hash da senha fornecida utilizando o salt armazenado
    const hash = hashedPassword(providedPassword, salt);
    // Compara o hash da senha fornecida com o hash da senha armazenada
    return hash === storedPassword;
}

// Função para verificar a validade de um token JWT
function checkToken(token) {
    // Lê a chave privada do arquivo
    const privateKey = fs.readFileSync("./src/private/private_key.pem");
    // Verifica e decodifica o token usando a chave privada
    const decoded = jwt.verify(token, privateKey, { algorithm: 'RS256' });
    // Retorna o payload decodificado do token
    return decoded;
}

// Exporta as funções para serem usadas em outros arquivos
module.exports.createUser = createUser;
module.exports.comparePassword = comparePassword;
module.exports.checkToken = checkToken;
