import produtoModel from "../models/produtosModel.js";

class ProdutoController {
  getAll = async (req, res) => {
    try {
      const produtos = await produtoModel.getAll();
      res.json(produtos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar os produtos" });
    }
  };

  create = async (req, res) => {
    const { name, price, category, brand, stock, imageUrl, isActive } = req.body;
    try {
      if (!name) {
        return res.status(400).json({ erro: "Informe o nome do produto!" });
      }
      if (!price) {
        return res.status(400).json({ erro: "Informe o preço do produto!" });
      }
      if (!category) {
        return res.status(400).json({ erro: "Informe qual categoria o produto vai pertencer!" });
      }
      if (!brand) {
        return res.status(400).json({ erro: "Informe qual a marca do produto!" });
      }
      if (!stock) {
        return res.status(400).json({ erro: "Informe se o produto está em estoque ou não!" });
      }
      if (!imageUrl) {
        return res.status(400).json({ erro: "Informe a imagem do produto!" });
      }
      if (!isActive) {
        return res.status(400).json({ erro: "Informe se o produto está em venda ou não!" });
      }
  
      // Certifique-se de que isActive é um booleano
      const novoProduto = await produtoModel.create(
        name,
        price,
        category,
        brand,
        stock,
        imageUrl,
        isActive === "true" // Converte string para booleano, se necessário
      );
      res.status(201).json(novoProduto);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar novo produto!" });
    }
  };

  update = async (req, res) => {
    const { name, price, category, brand, stock, imageUrl, isActive } = req.body;
    const { id } = req.params;

    try {
      const produtoAtualizado = await produtoModel.update(
        parseInt(id),
        name,
        price,
        category,
        brand,
        stock,
        imageUrl,
        isActive
      );

      if (!produtoAtualizado) {
        return res.status(404).json({ erro: "Produto não encontrado!" });
      }

      res.json(produtoAtualizado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar informações do produto!" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await produtoModel.delete(parseInt(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Produto não encontrado!" });
      }

      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao excluir produto!" });
    }
  };

  getById = async (req, res) => {
    const { id } = req.params;

    try {
      const produto = await produtoModel.getById(parseInt(id));

      if (!produto) {
        return res.status(404).json({ erro: "Produto não encontrado!" });
      }

      res.json(produto);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar produto!" });
    }
  };
}

export default new ProdutoController();