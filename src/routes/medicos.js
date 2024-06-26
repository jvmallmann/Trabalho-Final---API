const MedicosController = require('../controllers/medicos');
const checkPermission = require("../middlewares/auth");

module.exports = (app) => {
    app.post('/medico',checkPermission, MedicosController.postMedicos
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
              CRM: '123456/SP',
              MedicoTelefone: '(11) 98765-4321'
          }
      }
      #swagger.responses[201] = {
          description: 'Médico cadastrado com sucesso'
      }
     */
    )
    
    app.get('/medico',checkPermission, MedicosController.getMedicos
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
              CRM: '123456/SP',
              MedicoTelefone: '(11) 98765-4321'
          }]
      }
     */
    )
    
    app.patch('/medico/:id',checkPermission, MedicosController.patchMedicos
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
              CRM: '123456/SP',
              MedicoTelefone: '(11) 98765-4321'
          }
      }
      #swagger.responses[200] = {
          description: 'Médico atualizado com sucesso'
      }
     */
    )
    
    
    app.delete('/medico/:id',checkPermission, MedicosController.deleteMedicos
    /**  
      #swagger.tags = ["Médicos"]
      #swagger.summary = 'Remove um Médico'
      #swagger.description = 'Remove um Médico cadastrado no sistema, baseado no ID fornecido.'
      #swagger.parameters['id'] = {
          in: 'path',
          description: 'ID do Médico a ser removido',
          required: true,
          type: 'integer'
      }
      #swagger.responses[204] = {
          description: 'Médico removido com sucesso'
      } 
      #swagger.responses[404] = {
          description: 'Médico não encontrado'
      }
     */
    )
}
