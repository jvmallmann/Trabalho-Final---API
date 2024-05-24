const MedicosController = require('../controllers/medicos')

module.exports = (app) => {
    app.post('/medico', MedicosController.postMedicos
    /**  
      #swagger.tags = ["Médicos"]
      #swagger.summary = 'Insere um novo Médico'
      #swagger.description = 'Cadastra um novo Médico no sistema.'
      #swagger.parameters['medico'] = {
          in: 'body',
          description: 'Informações do Médico a ser cadastrado',
          required: true,
          schema: {
              MedicoNome: 'Dr. João Silva',
              Especialidade: 'Cardiologia',
              CRM: '123456',
              MedicoTelefone: '(11) 98765-4321'
          }
      }
      #swagger.responses[201] = {
          description: 'Médico cadastrado com sucesso'
      }
     */
    )
    
    app.get('/medico', MedicosController.getMedicos
    /**  
      #swagger.tags = ["Médicos"]
      #swagger.summary = 'Consulta lista de Médicos'
      #swagger.description = 'Consulta a lista de todos os Médicos cadastrados no sistema.'
      #swagger.responses[200] = {
          description: 'Lista de Médicos retornada com sucesso',
          schema: [{
              MedicoID: 1,
              MedicoNome: 'Dr. João Silva',
              Especialidade: 'Cardiologia',
              CRM: '123456',
              MedicoTelefone: '(11) 98765-4321'
          }]
      }
     */
    )
    
    app.patch('/medico', MedicosController.patchMedicos
    /**  
      #swagger.tags = ["Médicos"]
      #swagger.summary = 'Atualiza informações de um Médico'
      #swagger.description = 'Atualiza informações de um Médico já cadastrado no sistema.'
      #swagger.parameters['medico'] = {
          in: 'body',
          description: 'Informações atualizadas do Médico',
          required: true,
          schema: {
              MedicoNome: 'Dr. João Silva',
              Especialidade: 'Cardiologia',
              CRM: '123456',
              MedicoTelefone: '(11) 98765-4321'
          }
      }
      #swagger.responses[200] = {
          description: 'Médico atualizado com sucesso'
      }
     */
    )
    
    app.put('/medico', MedicosController.putMedicos
    /**  
      #swagger.tags = ["Médicos"]
      #swagger.summary = 'Substitui informações de um Médico'
      #swagger.description = 'Substitui todas as informações de um Médico existente no sistema.'
      #swagger.parameters['medico'] = {
          in: 'body',
          description: 'Informações completas do Médico',
          required: true,
          schema: {
              MedicoNome: 'Dr. João Silva',
              Especialidade: 'Cardiologia',
              CRM: '123456',
              MedicoTelefone: '(11) 98765-4321'
          }
      }
      #swagger.responses[200] = {
          description: 'Informações do Médico substituídas com sucesso'
      }
     */
    )
    
    app.delete('/medico/:MedicoID', MedicosController.deleteMedicos
    /**  
      #swagger.tags = ["Médicos"]
      #swagger.summary = 'Remove um Médico'
      #swagger.description = 'Remove um Médico cadastrado no sistema, baseado no ID fornecido.'
      #swagger.parameters['MedicoID'] = {
          in: 'path',
          description: 'ID do Médico a ser removido',
          required: true,
          type: 'integer'
      }
      #swagger.responses[200] = {
          description: 'Médico removido com sucesso'
      }
     */
    )
}
