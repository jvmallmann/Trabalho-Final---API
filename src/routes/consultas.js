const consultasController = require('../controllers/consultas');
const checkPermission = require("../middlewares/auth");


module.exports = (app) => {

    app.post('/consulta',checkPermission, consultasController.postConsultas
    /**  
     #swagger.tags = ["Consultas"]
     #swagger.summary = 'Insere uma nova Consulta'
     #swagger.description = 'Cadastra uma nova Consulta no sistema.'
     #swagger.parameters['consulta'] = {
        in: 'body',
        description: 'Informações da Consulta a ser cadastrada',
        required: true,
        schema: {
            PacienteID: 1,
            MedicoID: 1,
            DataConsulta: '2024-05-25',
            HoraConsulta: '14:30:00',
            Descricao: 'Consulta de rotina',
            LocalConsuta: 'Sala 101'
        }
     }
     #swagger.responses[201] = {
        description: 'Consulta cadastrada com sucesso',
        schema: {
            ConsultaID: 1,
            PacienteID: 1,
            MedicoID: 1,
            DataConsulta: '2024-05-25',
            HoraConsulta: '14:30:00',
            Descricao: 'Consulta de rotina',
            LocalConsuta: 'Sala 101'
        }
     }
     #swagger.responses[400] = {
        description: 'Dados inválidos'
     }
    */
    )

    app.get('/consulta',checkPermission, consultasController.getConsultas
    /**  
     #swagger.tags = ["Consultas"]
     #swagger.summary = 'Consulta lista de Consultas'
     #swagger.description = 'Consulta a lista de todas as Consultas cadastradas no sistema.'
     #swagger.responses[200] = {
        description: 'Lista de Consultas retornada com sucesso',
        schema: [{
            ConsultaID: 1,
            PacienteID: 1,
            MedicoID: 1,
            DataConsulta: '2024-05-25',
            HoraConsulta: '14:30:00',
            Descricao: 'Consulta de rotina',
            LocalConsuta: 'Sala 101'
        }]
     }
    */
    )

    app.patch('/consulta/:id',checkPermission, consultasController.patchConsultas
    /**  
     #swagger.tags = ["Consultas"]
     #swagger.summary = 'Atualiza informações de uma Consulta'
     #swagger.description = 'Atualiza informações de uma Consulta já cadastrada no sistema.'
     #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID da Consulta a ser atualizada',
        required: true,
        type: 'integer',
        example: 1
     }
     #swagger.parameters['consulta'] = {
        in: 'body',
        description: 'Informações atualizadas da Consulta',
        required: true,
        schema: {
            PacienteID: 1,
            MedicoID: 1,
            DataConsulta: '2024-05-25',
            HoraConsulta: '15:00:00',
            Descricao: 'Consulta de retorno',
            LocalConsuta: 'Sala 102'
        }
     }
     #swagger.responses[200] = {
        description: 'Consulta atualizada com sucesso',
        schema: {
            ConsultaID: 1,
            PacienteID: 1,
            MedicoID: 1,
            DataConsulta: '2024-05-25',
            HoraConsulta: '15:00:00',
            Descricao: 'Consulta de retorno',
            LocalConsuta: 'Sala 102'
        }
     }
     #swagger.responses[400] = {
        description: 'Dados inválidos'
     }
     #swagger.responses[404] = {
        description: 'Consulta não encontrada'
     }
    */
    )

    app.delete('/consulta/:id', checkPermission,consultasController.deleteConsultas
    /**  
     #swagger.tags = ["Consultas"]
     #swagger.summary = 'Remove uma Consulta'
     #swagger.description = 'Remove uma Consulta cadastrada no sistema, baseada no ID fornecido.'
     #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID da Consulta a ser removida',
        required: true,
        type: 'integer'
     }
     #swagger.responses[204] = {
        description: 'Consulta removida com sucesso'
     }
     #swagger.responses[404] = {
        description: 'Consulta não encontrada'
     }
    */
    )
}
