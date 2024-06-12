const { loginUsuario } = require('../services/login');

const login = async (req, res) => {
    try {
        const token = await loginUsuario(req.body);
        res.status(200).json(token);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports.login = login;
