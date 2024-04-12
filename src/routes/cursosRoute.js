const { Router } = require('express');
const CursoController = require('../controllers/CursoController.js');

const cursoController = new CursoController();

const router = Router();

router.get('/pessoas', (req, res) => cursoController.pegaCursos(req, res));
router.get('/pessoas/:id', (req, res) => cursoController.pegaUmPorId(req, res));
router.post('/pessoas', (req, res) => cursoController.criaNovo(req, res));
router.put('/pessoas/:id', (req, res) => cursoController.atualiza(req, res));
router.delete('/pessoas/:id', (req, res) => cursoController.exclui(req, res));

module.exports = router;
