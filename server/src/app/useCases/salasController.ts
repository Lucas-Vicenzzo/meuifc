import { Request, Response } from 'express';
import { Sala } from '../models/Sala';


// Criar Sala
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

// Deletar Sala
export async function deletarSala(req: Request, res: Response) {
    try {
      const { salaId } = req.params;
      await Sala.findByIdAndDelete(salaId)
      res.send(`deletado ${salaId}`)

    } catch {
      const { salaId } = req.params;
      res.send(`O item ${salaId} não existe`)

    } finally {
      console.log('Fim da requisição')

    }
  }

// Listar Salas
export async function listarSalas(req: Request, res: Response) {
    const salas = await Sala.find();
    res.json(salas);
  }


export default { criarSala, deletarSala, listarSalas }