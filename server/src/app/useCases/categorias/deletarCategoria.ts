import { Request, Response } from 'express';
import { Categoria } from '../../models/Categoria';

export async function deletarCategoria(req:Request, res: Response) {
  const { id } = req.params;

  await Categoria.findByIdAndDelete(id)
  res.send(`deletado ${id}`)
}