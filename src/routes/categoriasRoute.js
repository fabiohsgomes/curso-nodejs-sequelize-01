const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController.js');

const categoriaController = new CategoriaController();

const router = Router();

router.get('/pessoas', (req, res) => categoriaController.pegaTodos(req, res));
router.get('/pessoas/:id', (req, res) => categoriaController.pegaUmPorId(req, res));
router.post('/pessoas', (req, res) => categoriaController.criaNovo(req, res));
router.put('/pessoas/:id', (req, res) => categoriaController.atualiza(req, res));
router.delete('/pessoas/:id', (req, res) => categoriaController.exclui(req, res));

module.exports = router;
