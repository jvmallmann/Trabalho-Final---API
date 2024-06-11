const enfermeirosController = require('../controllers/enfermeiros')

module.exports = (app) => {

    app.post('/enfermeiro', enfermeirosController.postEnfermeiros
    /**  
     #swagger.tags = ["Enfermeiros"]
    #swagger.summary = 'Insere um novo Enfermeiro'
    #swagger.description = 'Cadastra um novo Enfermeiro no sistema.'
    #swagger.parameters['enfermeiro'] = {
        in: 'body',
        description: 'Informações do Enfermeiro a ser cadastrado',
        required: true,
        schema: {
            EnfermeiroNome: 'Ana Souza',
            Registro: 'ENF12345',
            EnfermeiroTelefone: '(11) 98765-4321',
            DataAdmissao: '2024-01-01',
            Turno: 'Diurno'
        }
    }
    #swagger.responses[201] = {
        description: 'Enfermeiro cadastrado com sucesso'
    }
    */
    )

    app.get('/enfermeiro', enfermeirosController.getEnfermeiros
    /**  
     #swagger.tags = ["Enfermeiros"]
    #swagger.summary = 'Consulta lista de Enfermeiros'
    #swagger.description = 'Consulta a lista de todos os Enfermeiros cadastrados no sistema.'
    #swagger.responses[200] = {
        description: 'Lista de Enfermeiros retornada com sucesso',
        schema: [{
            EnfermeiroNome: 'Ana Souza',
            Registro: 'ENF12345',
            EnfermeiroTelefone: '(11) 98765-4321',
            DataAdmissao: '2024-01-01',
            Turno: 'Diurno'
        }]
    }
    */
    )

    app.patch('/enfermeiro/:id', enfermeirosController.patchEnfermeiros
    /**  
    #swagger.tags = ["Enfermeiros"]
    #swagger.summary = 'Atualiza informações de um Enfermeiro'
    #swagger.description = 'Atualiza informações de um Enfermeiro já cadastrado no sistema.'
    #swagger.parameters['enfermeiro'] = {
        in: 'body',
        description: 'Informações atualizadas do Enfermeiro',
        required: true,
        type: 'json',
        schema: {
            EnfermeiroNome: 'Ana Souza',
            Registro: 'ENF12345',
            EnfermeiroTelefone: '(11) 98765-4321',
            DataAdmissao: '2024-01-01',
            Turno: 'Noturno'
        }
    }
    #swagger.responses[200] = {
        description: 'Enfermeiro atualizado com sucesso'
    }
    */
    )

    app.delete('/enfermeiro/:id', enfermeirosController.deleteEnfermeiros
    /**  
     #swagger.tags = ["Enfermeiros"]
    #swagger.summary = 'Remove um Enfermeiro'
    #swagger.description = 'Remove um Enfermeiro cadastrado no sistema, baseado no ID fornecido.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do Enfermeiro a ser removido',
        required: true,
        type: 'integer'
    }
    #swagger.responses[200] = {
        description: 'Enfermeiro removido com sucesso'
    }
    */
    )
}
