const equipamentosController = require('../controllers/equipamentos');
const checkPermission = require("../middlewares/auth");


module.exports = (app) => {

    app.post('/equipamento',checkPermission, equipamentosController.postEquipamentos
    /**  
        #swagger.tags = ["Equipamentos"]
        #swagger.summary = 'Insere um novo Equipamento'
        #swagger.description = 'Cadastra um novo Equipamento no sistema.'
        #swagger.parameters['equipamento'] = {
            in: 'body',
            description: 'Informações do Equipamento a ser cadastrado',
            required: true,
            schema: {
                Descricao: 'Equipamento de Raios-X',
                Fabricante: 'GE Healthcare',
                DataCompra: '2023-05-12',
                NumeroSerie: '12345XYZ',
                StatusEquipamento: 'Operacional'
            }
        }
        #swagger.responses[201] = {
            description: 'Equipamento cadastrado com sucesso',
            schema: {
                EquipamentoID: 1,
                Descricao: 'Equipamento de Raios-X',
                Fabricante: 'GE Healthcare',
                DataCompra: '2023-05-12',
                NumeroSerie: '12345XYZ',
                StatusEquipamento: 'Operacional'
            }
        }
        #swagger.responses[400] = {
            description: 'Dados inválidos'
        }
    */
    );

    app.get('/equipamento',checkPermission, equipamentosController.getEquipamentos
    /**  
        #swagger.tags = ["Equipamentos"]
        #swagger.summary = 'Consulta lista de Equipamentos'
        #swagger.description = 'Consulta a lista de todos os Equipamentos cadastrados no sistema.'
        #swagger.responses[200] = {
            description: 'Lista de Equipamentos retornada com sucesso',
            schema: [{
                EquipamentoID: 1,
                Descricao: 'Equipamento de Raios-X',
                Fabricante: 'GE Healthcare',
                DataCompra: '2023-05-12',
                NumeroSerie: '12345XYZ',
                StatusEquipamento: 'Operacional'
            }]
        }
    */
    );

    app.patch('/equipamento/:id',checkPermission, equipamentosController.patchEquipamentos
    /**  
        #swagger.tags = ["Equipamentos"]
        #swagger.summary = 'Atualiza informações de um Equipamento'
        #swagger.description = 'Atualiza informações de um Equipamento já cadastrado no sistema.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do Equipamento a ser atualizado',
            required: true,
            type: 'integer',
            example: 1
        }
        #swagger.parameters['equipamento'] = {
            in: 'body',
            description: 'Informações atualizadas do Equipamento',
            required: true,
            schema: {
                Descricao: 'Novo Descrição do Equipamento',
                Fabricante: 'Novo Fabricante',
                DataCompra: '2023-05-12',
                NumeroSerie: '12345XYZ',
                StatusEquipamento: 'Em Manutenção'
            }
        }
        #swagger.responses[200] = {
            description: 'Equipamento atualizado com sucesso'
        }
        #swagger.responses[400] = {
            description: 'Dados inválidos'
        }
        #swagger.responses[404] = {
            description: 'Equipamento não encontrado'
        }
    */
    );


    app.delete('/equipamento/:id',checkPermission, equipamentosController.deleteEquipamentos
    /**  
        #swagger.tags = ["Equipamentos"]
        #swagger.summary = 'Remove um Equipamento'
        #swagger.description = 'Remove um Equipamento cadastrado no sistema, baseado no ID fornecido.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do Equipamento a ser removido',
            required: true,
            type: 'integer',
            example: 1
        }
        #swagger.responses[204] = {
            description: 'Equipamento removido com sucesso'
        }
        #swagger.responses[404] = {
            description: 'Equipamento não encontrado'
        }
    */
    );
};
