import { Request, Response } from 'express';
import { Sala } from '../models/Sala';


// Criar Sala
export async function criarSala(req: Request, res: Response) {
    const sala = req.body;
    try {
        const salaCriada = await Sala.create(sala);
        res.json(`Salinha ${salaCriada.nome} criada: `);
    }
    catch (error) {
        console.log(`Erro ao criar sala ${sala.nome} pois ${error}`);
        res.send(`O item ${sala.nome} já existe`);
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

  // Listar Ambientes por Categoria
export async function listarSalasPorCategoria(req:Request, res: Response) {
    const ambientes = await Sala.find({categoria: req.params.id});

    res.json(ambientes);
}


export default { criarSala, deletarSala, listarSalas, listarSalasPorCategoria }