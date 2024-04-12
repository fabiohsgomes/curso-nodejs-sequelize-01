const Controller = require('./Controller.js');
const CursoServices = require('../services/CursoServices.js');
const {Op} = require('sequelize');

const cursoServices = new CursoServices();

class CursoController extends Controller {
  constructor() {
    super(cursoServices);
  }

  async pegaCursos(req, res) {
    const {data_inicio, data_final} = req.query;
    const where = {};

    data_inicio || data_final ? where.data_inicio = {} : null;
    data_inicio ? where.data_inicio[Op.gte] = data_inicio : null;
    data_final ? where.data_inicio[Op.lte] = data_inicio : null;

    try {
      const listaCursos = await cursoServices.pegaTodosOsRegistros(where);
      return res.status(200).json(listaCursos);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = CursoController;
