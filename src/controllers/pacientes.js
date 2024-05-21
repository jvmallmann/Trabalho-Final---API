const pacientesService = require('../services/pacientes');

const postPacientes = async (req, res) => {
    try {
        const retorno = await pacientesService.postPacientes(req.body);
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getPacientes = async (req, res) => {
    try {
        const retorno = await pacientesService.getPacientes();
        res.status(200).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};


// const deleteUser = async (req, res, next) => {
//     try {
//         const retorno = await usuarioService.deleteUser(req.params)
//         res.status(204).json(retorno)
//     } catch (err){
//         res.status(500).send(err.message)
//     }
// }

// const patchPassword = async (req, res, next) => {
//     try {
//         let params = req.body
//         params.id = req.params.id
//         const retorno = await usuarioService.patchPassword(params)
//         .then(ret => res.status(200).send(ret))
//         .catch(err => res.status(500).send(err.message))
//     } catch (err){
//         res.status(500).send(err.message)
//     }
// }

// module.exports.patchPassword = patchPassword
module.exports = { postPacientes, getPacientes };
module.exports.postPacientes = postPacientes
module.exports.getPacientes = getPacientes
// module.exports.deleteUser = deleteUser