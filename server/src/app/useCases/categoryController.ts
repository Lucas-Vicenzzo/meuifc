import { Request, Response } from 'express';
import { Categoria } from '../models/Categoria';


// Criar Categoria
export async function criarCategoria(req:Request, res: Response) {
    try {
      const { name } = req.body;

      const categoria = await Categoria.create({name});

    res.json(categoria);
    } catch (error){
      const { name } = req.body;
      console.log(`Erro ao criar categoria ${name} pois ${error}`)
      res.send(`O item ${name} já existe caraio`)
    }
  }




// Deletar Categoria
export async function deletarCategoria(req:Request, res: Response) {
    const { id } = req.params;

    await Categoria.findByIdAndDelete(id)
    res.send(`deletado ${id}`)
  }

// Listar Categorias
export async function listarCategorias(req:Request, res: Response) {
    const categorias = await Categoria.find();

    res.json(categorias);

}

export default { criarCategoria, deletarCategoria, listarCategorias}