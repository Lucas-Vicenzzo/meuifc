import { Request, Response } from 'express';
import { Categoria } from '../../models/Categoria';

export async function listarCategorias(req:Request, res: Response) {
  const categorias = await Categoria.find();

  res.json(categorias);
}