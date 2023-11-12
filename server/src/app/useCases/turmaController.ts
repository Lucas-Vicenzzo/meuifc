import { Request, Response } from 'express';
import { Turma } from '../models/Turmas';


// Criar Turma
export async function criarTurma(req:Request, res: Response) {
    const { nome, disciplinas } = req.body;
    try {
      const turma = await Turma.create({nome, disciplinas});
      res.json(turma);
    }
    catch (error) {
        console.log(`Erro ao criar turma ${nome} pois ${error}`)
        res.send(`A turma ${nome} já existe caraio`)
    }
  }


  // Deletar Turma
export async function deletarTurma(req:Request, res: Response) {
    const body = req.params;

    await Turma.findByIdAndDelete(body.id)
    res.send(`deletado ${body.id}`)

  }


// Listar Turmas
export async function listarTurma(req:Request, res: Response) {
    const turma = await Turma.find();

    turma.length === 0
    ? res.send('Não há turmas cadastradas')
    : res.json(turma);

}

export default { criarTurma, deletarTurma, listarTurma }