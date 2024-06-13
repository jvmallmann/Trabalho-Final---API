const loginController = require('../controllers/login');
const checkPermission = require("../middlewares/auth");


module.exports = (app) => {
    app.post('/login', loginController.login
    /**  
     #swagger.tags = ["Auth"]
     #swagger.summary = 'Faz login do usuário'
     #swagger.description = 'Faz login de um usuário existente e retorna um token JWT.'
     #swagger.parameters['login'] = {
        in: 'body',
        description: 'Informações do usuário para login',
        required: true,
        schema: {
            Username: 'usuario_teste',
            Senha: 'senha123'
        }
     }
     #swagger.responses[200] = {
        description: 'Login realizado com sucesso',
        schema: {
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
        }
     }
     #swagger.responses[400] = {
        description: 'Credenciais inválidas',
        schema: {
            message: 'Usuário ou senha inválidos'
        }
     }
    */
    );
};
