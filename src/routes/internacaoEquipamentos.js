const internacaoEquipamentosController = require('../controllers/internacaoEquipamentos');

module.exports = (app) => {

    app.post('/internacaoEquipamento', internacaoEquipamentosController.postInternacaoEquipamentos
    /**  
     #swagger.tags = ["InternacaoEquipamentos"]
     #swagger.summary = 'Insere uma nova Internação de Equipamento'
     #swagger.description = 'Cadastra uma nova Internação de Equipamento no sistema.'
     #swagger.parameters['internacaoEquipamento'] = {
        in: 'body',
        description: 'Informações da Internação de Equipamento a ser cadastrada',
        required: true,
        schema: {
            EquipamentoID: 1,
            InternacaoID: 1,
            DataDeUso: '2024-05-25',
            Situacao: 'Em uso'
        }
     }
     #swagger.responses[201] = {
        description: 'Internação de Equipamento cadastrada com sucesso',
        schema: {
            Inter_Equip_Id: 1,
            EquipamentoID: 1,
            InternacaoID: 1,
            DataDeUso: '2024-05-25',
            Situacao: 'Em uso'
        }
     }
     #swagger.responses[400] = {
        description: 'Dados inválidos'
     }
    */
    )

    app.get('/internacaoEquipamento', internacaoEquipamentosController.getInternacaoEquipamentos
    /**  
     #swagger.tags = ["InternacaoEquipamentos"]
     #swagger.summary = 'Consulta lista de Internações de Equipamentos'
     #swagger.description = 'Consulta a lista de todas as Internações de Equipamentos cadastradas no sistema.'
     #swagger.responses[200] = {
        description: 'Lista de Internações de Equipamentos retornada com sucesso',
        schema: [{
            Inter_Equip_Id: 1,
            EquipamentoID: 1,
            InternacaoID: 1,
            DataDeUso: '2024-05-25',
            Situacao: 'Em uso'
        }]
     }
    */
    )

    app.patch('/internacaoEquipamento/:id', internacaoEquipamentosController.patchInternacaoEquipamentos
    /**  
     #swagger.tags = ["InternacaoEquipamentos"]
     #swagger.summary = 'Atualiza informações de uma Internação de Equipamento'
     #swagger.description = 'Atualiza informações de uma Internação de Equipamento já cadastrada no sistema.'
     #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID da Internação de Equipamento a ser atualizada',
        required: true,
        type: 'integer',
        example: 1
     }
     #swagger.parameters['internacaoEquipamento'] = {
        in: 'body',
        description: 'Informações atualizadas da Internação de Equipamento',
        required: true,
        schema: {
            EquipamentoID: 1,
            InternacaoID: 1,
            DataDeUso: '2024-05-25',
            Situacao: 'Em manutenção'
        }
     }
     #swagger.responses[200] = {
        description: 'Internação de Equipamento atualizada com sucesso',
        schema: {
            Inter_Equip_Id: 1,
            EquipamentoID: 1,
            InternacaoID: 1,
            DataDeUso: '2024-05-25',
            Situacao: 'Em manutenção'
        }
     }
     #swagger.responses[400] = {
        description: 'Dados inválidos'
     }
     #swagger.responses[404] = {
        description: 'internacaoEquipamento não encontrado'
     }
    */
    )

    app.delete('/internacaoEquipamento/:id', internacaoEquipamentosController.deleteInternacaoEquipamentos
    /**  
     #swagger.tags = ["InternacaoEquipamentos"]
     #swagger.summary = 'Remove uma Internação de Equipamento'
     #swagger.description = 'Remove uma Internação de Equipamento cadastrada no sistema, baseada no ID fornecido.'
     #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID da Internação de Equipamento a ser removida',
        required: true,
        type: 'integer'
     }
     #swagger.responses[204] = {
        description: 'internacaoEquipamento removido com sucesso'
     }
     #swagger.responses[404] = {
        description: 'internacaoEquipamento não encontrado'
     }
    */
    )
}
