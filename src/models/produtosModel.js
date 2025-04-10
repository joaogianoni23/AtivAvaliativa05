import prisma from "../../prisma/client.js";

class ProdutoModel {
  getAll = async () => {
    return await prisma.produto.findMany();
  };

  create = async (name, price, category, brand, stock, imageUrl, isActive) => {
    return await prisma.produto.create({
      data: {
        name,
        price,
        category,
        brand,
        stock,
        imageUrl,
        isActive
      },
    });
  };

  update = async (id, name, price, category, brand, stock, imageUrl, isActive) => {
    try {
      return await prisma.produto.update({
        where: { id },
        data: {
         name,
         price,
         category,
         brand,
         stock,
         imageUrl,
         isActive
        },
      });
    } catch (error) {
      if (error.code === "P2025") {
        return null;
      }
      throw error;
    }
  };

  delete = async (id) => {
    try {
      await prisma.produto.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      if (error.code === "P2025") {
        return false;
      }
      throw error;
    }
  };

  getById = async (id) => {
    console.log("id", id);
    return await prisma.produto.findUnique({
      where: { id },
    });
  };
}

export default new ProdutoModel();