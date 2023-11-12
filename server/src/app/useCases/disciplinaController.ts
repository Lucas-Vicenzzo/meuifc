import { Request, Response } from 'express';
import { Disciplina } from '../models/Disciplina';


// Criar Disciplina
export async function criarDisciplina(req:Request, res: Response) {
    const { nome, horario, diaSemana, professores } = req.body;
    try {
      const disciplina = await Disciplina.create({nome, horario, diaSemana,professores});
      res.json(disciplina);
    }
    catch (error) {
        console.log(`Erro ao criar disciplina ${nome} pois ${error}`)
        res.send(`A disciplina ${nome} já existe caraio`)
    }
  }


  // Deletar Disciplina
export async function deletarDisciplina(req:Request, res: Response) {
    const body = req.params;

    await Disciplina.findByIdAndDelete(body.id)
    res.send(`deletado ${body.id}`)

  }


// Listar Disciplinas
export async function listarDisciplina(req:Request, res: Response) {
    const disciplina = await Disciplina.find();

    disciplina.length === 0
    ? res.send('Não há disciplinas cadastradas')
    : res.json(disciplina);

}

export default { criarDisciplina, deletarDisciplina, listarDisciplina }