var express = require('express');
var router = express.Router();

// Importação das Controllers
const adminController = require('../controllers/adminController');

// Roras inicial do Admin
router.get('/', adminController.index);

// Rotas de Fornecedores
router.get('/listarFornecedor', adminController.listarFornecedor);

router.get('/adicionarFornecedor', adminController.adicionarFornecedor);
router.post('/adicionarFornecedor', adminController.salvarFornecedor);

router.get('/editarFornecedor', adminController.editarFornecedor);
router.put('/editarFornecedor', adminController.atualizarFornecedor);

router.delete('/excluirFornecedor', adminController.atualizarFornecedor);
router.delete('/listarFornecedor/deletar/:id', adminController.excluirFornecedor);


// Rotas de Clientes
router.get('/listarCliente', adminController.listarCliente);

router.get('/adicionarCliente', adminController.adicionarCliente);
router.post('/adicionarCliente', adminController.salvarCliente);

router.get('/editarCliente/:id', adminController.editarCliente);
router.put('/editarCliente/:id', adminController.atualizarCliente);

router.delete('/listarCliente/deletar/:id', adminController.excluirCliente);

 
// Rotas orçamentos
router.get('/listarOrcamentos', adminController.listarOrcamentos);
router.get('/orcamentoDetalhado', adminController.orcamentoDetalhado);

module.exports = router;