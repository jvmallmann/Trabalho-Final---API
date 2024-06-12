const jwt = require('jsonwebtoken');
const fs = require('fs');

const payload = { userId: 123, permissions: ["read", "write"] };

const privatekey = fs.readFileSync('./private_key.pem');
const publickey = fs.readFileSync('./public_key.pem');

const createToken = (payload) => {
    return jwt.sign(payload, privatekey, { algorithm: 'RS256' });
};

const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, publickey, { algorithms: ['RS256'] });
        console.log('Decoded:', decoded);
    } catch (err) {
        console.error('Verification failed:', err);
    }
};

const token = createToken(payload);
console.log('Generated Token:', token);

verifyToken(token);

module.exports = {
    createToken,
    verifyToken
};
