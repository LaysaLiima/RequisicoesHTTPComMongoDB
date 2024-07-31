const Professor = require('../Models/Professor');

const listarProfessores = async (req, res) => {
  try {
      const professores = await Professor.find();

      if (professores.length === 0) {
          return res.status(404).json("Não existem professores cadastrados");
      }

      return res.status(200).json(professores);
  } catch (error) {
      return res.status(500).json("Erro interno do servidor");
  }
};

const ObterUmProfessor = async (req, res) => {  
  const { id } = req.params;

  try {
      const professor = await Professor.findById(id);

      if (!professor) {
          return res.status(404).json("Professor não encontrado");
      }

      return res.status(200).json(professor);
  } catch (error) {
      return res.status(500).json("Erro interno do servidor");
  }
};


const cadastrarProfessor = async (req, res) => {
    const { nome, disciplina, carga_horaria } = req.body;

    try {
        const novoProfessor = new Professor({ nome, disciplina, carga_horaria });
        await novoProfessor.save();
        return res.status(201).json("Professor cadastrado");
    } catch (error) {
        return res.status(500).json("Erro interno do servidor");
    }
};

const AtualizarUmProfessor = async (req, res) => {
  const { id } = req.params;
  const { nome, disciplina, carga_horaria } = req.body;

  try {
      const professor = await Professor.findById(id);

      if (!professor) {
          return res.status(404).json("Professor não encontrado");
      }

      await Professor.findByIdAndUpdate(id, { nome, disciplina, carga_horaria });
      return res.status(200).json("Professor atualizado");
  } catch (error) {
      return res.status(500).json("Erro interno do servidor");
  }
};

const DeletarUmProfessor = async (req, res) => {
  const { id } = req.params;

  try {
      const professor = await Professor.findById(id);

      if (!professor) {
          return res.status(404).json("Professor não encontrado");
      }

      await Professor.findByIdAndDelete(id);
      return res.status(200).json("Professor deletado");
  } catch (error) {
      return res.status(500).json("Erro interno do servidor");
  }
};

module.exports = {
    listarProfessores,
    ObterUmProfessor,
    cadastrarProfessor,
    AtualizarUmProfessor,
    DeletarUmProfessor
};
