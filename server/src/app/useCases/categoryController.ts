import { Request, Response } from 'express';
import { Categoria } from '../models/Categoria';
import { Sala } from '../models/Sala';


// Criar Categoria
export async function criarCategoria(req:Request, res: Response) {
  try {
    const { nome } = req.body;
    const categoria = await Categoria.create({nome});
    res.json(categoria);
  }

    catch (error) {
      const { nome } = req.body;
      console.log(`Erro ao criar categoria ${nome} pois ${error}`)
      res.send(`O item ${nome} já existe caraio`)
    }
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
export async function listarCategoriasUnicas(req: Request, res: Response) {
  const categorias = await Sala.aggregate([
    {
      $group: {
        _id: "$categoria"
      }
    },
    {
      $project: {
        _id: 0,
        categoria: "$_id"
      }
    }
  ])
  categorias.length === 0 
  ? res.send('Não Há Categorias cadastradas')
  : res.json(categorias)
}

export default { criarCategoria, deletarCategoria, listarCategorias, listarCategoriasUnicas }