import { Request, Response } from 'express';
import { Categoria } from '../models/Categoria';


// Criar Categoria
export async function criarCategoria(req:Request, res: Response) {
    const { nome } = req.body;
      const categoria = await Categoria.create({nome});
      res.json(categoria);

    // catch (error) {
    //   console.log(`Erro ao criar categoria ${nome} pois ${error}`)
    //   res.send(`O item ${nome} já existe caraio`)
    // }

  }


  // Deletar Categoria
export async function deletarCategoria(req:Request, res: Response) {
    const body = req.params;

    await Categoria.findByIdAndDelete(body.id)
    res.send(`deletado ${body.id}`)

  }


// Listar Categorias
export async function listarCategorias(req:Request, res: Response) {
    const categorias = await Categoria.find();

    categorias.length === 0
    ? res.send('Não há categorias cadastradas')
    : res.json(categorias);

}

export default { criarCategoria, deletarCategoria, listarCategorias }