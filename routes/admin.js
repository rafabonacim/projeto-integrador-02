var express = require('express');
var router = express.Router();

const auth = require('../middlewares/auth');
const adminController = require('../controllers/adminController');

router.use(auth);

// Roras inicial do Admin
router.get('/', adminController.index);

// Rotas de Fornecedores
router.get('/listarFornecedor', adminController.listarFornecedor);
router.get('/listarFornecedor/resultado', adminController.buscarFornecedor);
router.get('/adicionarFornecedor', adminController.adicionarFornecedor);
router.post('/adicionarFornecedor', adminController.adicionarFornecedorCreate);
router.get('/editarFornecedor/:id', adminController.editarFornecedor);
router.put('/editarFornecedor/:id', adminController.atualizarFornecedor);
router.delete('/deletarFornecedor/:id', adminController.excluirFornecedor);


// Rotas de Clientes
router.get('/listarCliente', adminController.listarCliente);

router.get('/adicionarCliente', adminController.adicionarCliente);

router.get('/editarCliente/:id', adminController.editarCliente);

// Rotas orçamentos
router.get('/listarOrcamentos', adminController.listarOrcamentos);
router.get('/orcamentoDetalhado/:id', adminController.orcamentoDetalhado);

router.get('/orcamentosFornecedor/:id', adminController.listarOrcamentosFornecedor);

module.exports = router;