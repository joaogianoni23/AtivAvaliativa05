import tarefaModel from "../models/tarefaModel.js";

class TarefaController {
  getAll = async (req, res) => {
    try {
      const tarefas = await tarefaModel.getAll();
      res.json(tarefas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar tarefas" });
    }
  };

  create = async (req, res) => {
    const { descricao } = req.body;
    try {
      if (!descricao) {
        return res.status(400).json({ erro: "Descrição é obrigatória" });
      }
      const novaTarefa = await tarefaModel.create(descricao);
      res.status(201).json(novaTarefa);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar tarefa" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { concluida } = req.body;

    try {
      const tarefaAtualizada = await tarefaModel.update(
        parseInt(id),
        concluida
      );

      if (!tarefaAtualizada) {
        return res.status(404).json({ erro: "Tarefa não encontrada" });
      }

      res.json(tarefaAtualizada);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar tarefa" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await tarefaModel.delete(parseInt(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Tarefa não encontrada" });
      }

      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao excluir tarefa" });
    }
  };

  getById = async (req, res) => {
    const { id } = req.params;

    try {
      const tarefa = await tarefaModel.getById(parseInt(id));

      if (!tarefa) {
        return res.status(404).json({ erro: "Tarefa não encontrada" });
      }

      res.json(tarefa);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar tarefa" });
    }
  };
}

export default new TarefaController();