const { checkUsuarioExiste } = require('../validates/usuarios');
const usuariosService = require('../services/usuarios');

const postUsuarios = async (req, res, next) => {
    try {
        const retorno = await usuariosService.postUsuarios(req.body)
        res.status(201).json(retorno)
    } catch (err){
        res.status(500).send(err.message)
    }
}

const getUsuarios = async (req, res, next) => {
    try {
        const retorno = await usuariosService.getUsuarios()
        res.status(200).json(retorno)
    } catch (err){
        res.status(500).send(err.message)
    }
}

const deleteUsuarios = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        const existe = await checkUsuarioExiste(id);
        if (!existe) {
            return res.status(404).json({ message: 'Usuario não encontrado' });
        }
        await usuariosService.deleteUsuarios({ id });
        res.status(204).json({ message: 'Usuario deletado com sucesso' });
    } catch (err){
        res.status(500).send(err.message)
    }
}


const patchUsuarios = async (req, res) => {
    try {
        const { id } = req.params;
        const { Senha } = req.body;
        const updated = await usuariosService.patchUsuarios({ UsuarioID: id, Senha });
        if (updated) {
            res.status(200).json({ message: 'Senha atualizada com sucesso' });
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports.patchUsuarios = patchUsuarios
module.exports.postUsuarios = postUsuarios
module.exports.getUsuarios = getUsuarios
module.exports.deleteUsuarios = deleteUsuarios