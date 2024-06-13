const { loginUsuario } = require('../services/login');

const login = async (req, res) => {
    try {
        const { token } = await loginUsuario(req.body);
        res.cookie('auth', token, { httpOnly: true, secure: true });
        res.status(200).json({ message: 'Login realizado com sucesso' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports.login = login;
