import { Request, Response } from 'express';
import { Sala } from '../../models/Sala';

export async function criarSala(req: Request, res: Response) {
  try {
    const sala = req.body;
    const salaCriada = await Sala.create(sala);
    res.json(`Salinha criada: ${salaCriada}`);

  } catch {
    const { nome } = req.body;
    res.send(`O item ${nome} já existe caraio`)
    
  } finally {
    console.log('Fim da requisição')
  }
}