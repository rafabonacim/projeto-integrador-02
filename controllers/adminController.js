const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { AreaDeAtendimento, Cliente, Endereco, Fornecedor, Orcamento, Plano, PlanoFornecedor, Usuario } = require('../database/models');

const adminController = {
    index: (req, res) => {
        return res.render('admin/index', { title: 'Painel Administrativo'})
    },
    listarFornecedor: async (req, res) => {
        const fornecedores = await Usuario.findAll({
            include: {
                model: Usuario,
                required: true
            }
        })
        return res.render('admin/listarFornecedor', { title: 'Listar de Fornecedores', fornecedores: fornecedores })
    },
    adicionarFornecedor: async (req, res) => {
        const { plan, name, document, email, phone, whatsapp, password, zipcode, address, numero, complement, district, state, city, stateArea } = req.body;

        await Usuario.create({
            plan, name, document, email, phone, whatsapp, password, zipcode, address, numero, complement, district, state, city, stateArea
        })
        
        return res.render('admin/adicionarFornecedor', { title: 'Adicionar Fornecedor'})
    },
    salvarFornecedor:  (req, res) => {
        return res.render('admin/adicionarFornecedor', { title: 'Adicionar Fornecedor'})
    },
    editarFornecedor:  (req, res) => {
        return res.render('admin/editarFornecedor', { title: 'Editar Fornecedor'})
    },
    atualizarFornecedor:  (req, res) => {
        return res.render('admin/editarFornecedor', { title: 'Editar Fornecedor'})
    },
    excluirFornecedor: (req,res) => {
        let { id } = req.params;
        let serviceFound = services.findIndex(fornecedor => fornecedor.id == id);
        
        return res.redirect('admin/listaServicos');
    },
    listarCliente:  (req, res) => {
        return res.render('admin/listarCliente', { title: 'Listar Clientes'})
    },
    adicionarCliente: (req,res) => {
        // const { name, email, phone, whatsapp, password, confirmPassword, zipcode, address, numero, complement, district, state, city } = req.body;
        return res.render('admin/adicionarCliente', { title: 'Adicionar Clientes'})
    },
    salvarCliente: (req,res) => {
        return res.render('admin/adicionarCliente', { title: 'Adicionar Clientes'})
    },
    editarCliente: (req,res) => {
        return res.render('admin/editarCliente', { title: 'Editar Clientes'})
    },
    atualizarCliente: (req,res) => {
        return res.render('admin/editarCliente', { title: 'Editar Clientes'})
    },
    excluirCliente: (req,res) => {
        let { id } = req.params;
        let clienteFound = clientes.findIndex(cliente => cliente.id == id);
        
        return res.redirect('admin/listarCliente');
    },

};

module.exports = adminController;