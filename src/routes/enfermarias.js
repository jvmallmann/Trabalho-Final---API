const enfermariasController = require('../controllers/enfermarias')
const checkPermission = require("../middlewares/auth");


module.exports = (app) => {

    app.post('/enfermaria',checkPermission, enfermariasController.postEnfermarias
    /**  
     #swagger.tags = ["Enfermarias"]
     #swagger.summary = 'Insere uma nova Enfermaria'
     #swagger.description = 'Cadastra uma nova Enfermaria no sistema.'
     #swagger.parameters['enfermaria'] = {
        in: 'body',
        description: 'Informações da Enfermaria a ser cadastrada',
        required: true,
        schema: {
            EnfermariaNome: 'Enfermaria A',
            Numero: 101,
            Tipo: 'Geral',
            Capacidade: 20,
            Localizacao: 'Bloco B, 2º andar'
        }
     }
     #swagger.responses[201] = {
        description: 'Enfermaria cadastrada com sucesso',
        schema: {
            EnfermariaID: 1,
            EnfermariaNome: 'Enfermaria A',
            Numero: 101,
            Tipo: 'Geral',
            Capacidade: 20,
            Localizacao: 'Bloco B, 2º andar'
        }
     }
     #swagger.responses[400] = {
        description: 'Dados inválidos'
     }
    */
    )

    app.get('/enfermaria',checkPermission, enfermariasController.getEnfermarias
    /**  
     #swagger.tags = ["Enfermarias"]
     #swagger.summary = 'Consulta lista de Enfermarias'
     #swagger.description = 'Consulta a lista de todas as Enfermarias cadastradas no sistema.'
     #swagger.responses[200] = {
        description: 'Lista de Enfermarias retornada com sucesso',
        schema: [{
            EnfermariaID: 1,
            EnfermariaNome: 'Enfermaria A',
            Numero: 101,
            Tipo: 'Geral',
            Capacidade: 20,
            Localizacao: 'Bloco B, 2º andar'
        }]
     }
    */
    )

    app.patch('/enfermaria/:id',checkPermission, enfermariasController.patchEnfermarias
    /**  
     #swagger.tags = ["Enfermarias"]
     #swagger.summary = 'Atualiza informações de uma Enfermaria'
     #swagger.description = 'Atualiza informações de uma Enfermaria já cadastrada no sistema.'
     #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID da Enfermaria a ser atualizada',
        required: true,
        type: 'integer',
        example: 1
     }
     #swagger.parameters['enfermaria'] = {
        in: 'body',
        description: 'Informações atualizadas da Enfermaria',
        required: true,
        schema: {
            EnfermariaNome: 'Enfermaria A',
            Numero: 101,
            Tipo: 'Geral',
            Capacidade: 20,
            Localizacao: 'Bloco B, 2º andar'
        }
     }
     #swagger.responses[200] = {
        description: 'Enfermaria atualizada com sucesso',
        schema: {
            EnfermariaID: 1,
            EnfermariaNome: 'Enfermaria A',
            Numero: 101,
            Tipo: 'Geral',
            Capacidade: 20,
            Localizacao: 'Bloco B, 2º andar'
        }
     }
     #swagger.responses[400] = {
        description: 'Dados inválidos'
     }
     #swagger.responses[404] = {
        description: 'Enfermaria não encontrada'
     }
    */
    )

    app.delete('/enfermaria/:id',checkPermission, enfermariasController.deleteEnfermarias
    /**  
     #swagger.tags = ["Enfermarias"]
     #swagger.summary = 'Remove uma Enfermaria'
     #swagger.description = 'Remove uma Enfermaria cadastrada no sistema, baseada no ID fornecido.'
     #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID da Enfermaria a ser removida',
        required: true,
        type: 'integer'
     }
     #swagger.responses[204] = {
        description: 'Enfermaria removida com sucesso'
     }
     #swagger.responses[404] = {
        description: 'Enfermaria não encontrada'
     }
    */
    )
}