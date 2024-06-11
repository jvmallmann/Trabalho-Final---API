const internacaoController = require('../controllers/internacoes');

module.exports = (app) => {

    app.post('/internacao', internacaoController.postInternacao
    /**  
     #swagger.tags = ["Internacoes"]
     #swagger.summary = 'Insere uma nova Internação'
     #swagger.description = 'Cadastra uma nova Internação no sistema.'
     #swagger.parameters['internacao'] = {
        in: 'body',
        description: 'Informações da Internação a ser cadastrada',
        required: true,
        schema: {
            EnfermariaID: 1,
            MedicoID: 1,
            PacienteID: 1,
            DataInicioInternacao: '2024-01-01',
            DataFimInternacao: '2024-01-10',
            ValorTotal: 1000.00,
            StatusInternacao: 'Em andamento'
        }
     }
     #swagger.responses[201] = {
        description: 'Internação cadastrada com sucesso',
        schema: {
            InternacaoID: 1,
            EnfermariaID: 1,
            MedicoID: 1,
            PacienteID: 1,
            DataInicioInternacao: '2024-01-01',
            DataFimInternacao: '2024-01-10',
            ValorTotal: 1000.00,
            StatusInternacao: 'Em andamento'
        }
     }
     #swagger.responses[400] = {
        description: 'Dados inválidos'
     }
    */
    );

    app.get('/internacao', internacaoController.getInternacoes
    /**  
     #swagger.tags = ["Internacoes"]
     #swagger.summary = 'Consulta lista de Internações'
     #swagger.description = 'Consulta a lista de todas as Internações cadastradas no sistema.'
     #swagger.responses[200] = {
        description: 'Lista de Internações retornada com sucesso',
        schema: [{
            InternacaoID: 1,
            EnfermariaID: 1,
            MedicoID: 1,
            PacienteID: 1,
            DataInicioInternacao: '2024-01-01',
            DataFimInternacao: '2024-01-10',
            ValorTotal: 1000.00,
            StatusInternacao: 'Em andamento'
        }]
     }
    */
    );

    app.patch('/internacao/:id', internacaoController.patchInternacao
    /**  
     #swagger.tags = ["Internacoes"]
     #swagger.summary = 'Atualiza informações de uma Internação'
     #swagger.description = 'Atualiza informações de uma Internação já cadastrada no sistema.'
     #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID da Internação a ser atualizada',
        required: true,
        type: 'integer',
        example: 1
     }
     #swagger.parameters['internacao'] = {
        in: 'body',
        description: 'Informações atualizadas da Internação',
        required: true,
        schema: {
            EnfermariaID: 1,
            MedicoID: 1,
            PacienteID: 1,
            DataInicioInternacao: '2024-01-01',
            DataFimInternacao: '2024-01-10',
            ValorTotal: 1000.00,
            StatusInternacao: 'Concluída'
        }
     }
     #swagger.responses[200] = {
        description: 'Internação atualizada com sucesso',
        schema: {
            InternacaoID: 1,
            EnfermariaID: 1,
            MedicoID: 1,
            PacienteID: 1,
            DataInicioInternacao: '2024-01-01',
            DataFimInternacao: '2024-01-10',
            ValorTotal: 1000.00,
            StatusInternacao: 'Concluída'
        }
     }
     #swagger.responses[400] = {
        description: 'Dados inválidos'
     }
     #swagger.responses[404] = {
        description: 'Internação não encontrada'
     }
    */
    );
    app.delete('/internacao/:id', internacaoController.deleteInternacao
    /**  
     #swagger.tags = ["Internacoes"]
     #swagger.summary = 'Remove uma Internação'
     #swagger.description = 'Remove uma Internação cadastrada no sistema, baseada no ID fornecido.'
     #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID da Internação a ser removida',
        required: true,
        type: 'integer'
     }
     #swagger.responses[200] = {
        description: 'Internação removida com sucesso'
     }
     #swagger.responses[404] = {
        description: 'Internação não encontrada'
     }
     */
    );
};