const usuariosController = require('../controllers/usuarios');
const checkPermission = require("../middlewares/auth");


module.exports = (app) => {
    app.post('/user',checkPermission, usuariosController.postUsuarios
    /**  
     #swagger.tags = ["Usuários"]
     #swagger.summary = 'Insere um novo Usuário'
     #swagger.description = 'Cadastra um novo Usuário no sistema.'
     #swagger.parameters['user'] = {
        in: 'body',
        description: 'Informações do Usuário a ser cadastrado',
        required: true,
        schema: {
            Username: 'usuario_exemplo',
            Senha: 'senha_exemplo'
        }
     }
     #swagger.responses[201] = {
        description: 'Usuário cadastrado com sucesso',
        schema: {
            UsuarioID: 1,
            Username: 'usuario_exemplo',
            Senha: 'senha_exemplo'
        }
     }
     #swagger.responses[400] = {
        description: 'Dados inválidos'
     }
    */
    );

    app.get('/user',checkPermission, usuariosController.getUsuarios
    /**  
     #swagger.tags = ["Usuários"]
     #swagger.summary = 'Consulta lista de Usuários'
     #swagger.description = 'Consulta a lista de todos os Usuários cadastrados no sistema.'
     #swagger.responses[200] = {
        description: 'Lista de Usuários retornada com sucesso',
        schema: [{
            UsuarioID: 1,
            Username: 'usuario_exemplo',
            Salt: 'salt_exemplo',
            Senha: 'senha_exemplo'
        }]
     }
    */
    );

    app.patch('/usuarios/:id', checkPermission,usuariosController.patchUsuarios
        /**  
         #swagger.tags = ["Usuários"]
         #swagger.summary = 'Atualiza a senha de um Usuário'
         #swagger.description = 'Atualiza a senha de um Usuário já cadastrado no sistema.'
         #swagger.parameters['senha'] = {
            in: 'body',
            description: 'Nova senha do Usuário',
            required: true,
            schema: {
                Senha: 'nova_senha123'
            }
         }
         #swagger.responses[200] = {
            description: 'Senha atualizada com sucesso'
         }
         #swagger.responses[404] = {
            description: 'Usuário não encontrado'
         }
        */
        );

    app.delete('/user/:id',checkPermission, usuariosController.deleteUsuarios
    /**  
     #swagger.tags = ["Usuários"]
     #swagger.summary = 'Remove um Usuário'
     #swagger.description = 'Remove um Usuário cadastrado no sistema, baseado no ID fornecido.'
     #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do Usuário a ser removido',
        required: true,
        type: 'integer'
     }
     #swagger.responses[204] = {
        description: 'Usuário removido com sucesso'
     }
     #swagger.responses[404] = {
        description: 'Usuário não encontrado'
     }
    */
    );
};
