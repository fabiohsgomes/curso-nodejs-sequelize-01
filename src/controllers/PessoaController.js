const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async pegaMatriculasAtivas(req, res) {
    const { estudanteId } = req.params;
    try {
      const listaMatriculas = await pessoaServices.pegaMatriculasAtivasPorEstudante(Number(estudanteId));
      return res.status(200).json(listaMatriculas);
    } catch (erro) {
      return res.status(500).json({erro: erro.message});
    }
  }

  async pegaTodasAsMatriculas(req, res) {
    const { estudanteId } = req.params;
    try {
      const listaMatriculas = await pessoaServices.pegaTodasAsMatriculasPorEstudante(Number(estudanteId));
      return res.status(200).json(listaMatriculas);
    } catch (erro) {
      return res.status(500).json({erro: erro.message});
    }
  }
  async pegaTodasAsPessoas(req, res) {
    try {
      const lista = await pessoaServices.pegaPessoasEscopoTodos();
      return res.status(200).json(lista);
    } catch (erro) {
      return res.status(500).json({erro: erro.message});
    }
  }


  async cancelaRegistroEstudante(req, res) {
    const {estudante_id} = req.params;

    try {
      await pessoaServices.cancelaPessoaEMatriculas(Number(estudante_id));
      return res.status(200).json({mensagem: `Matrículas ref. estudante ${estudante_id} canceladas.`});
    } catch (erro) {
      return res.status(500).json({erro: erro.message});
    }
  }
}

module.exports = PessoaController;