import { Request, Response } from 'express';
import { Professor } from '../models/Professores';


// Criar Professor
export async function criarProfessor(req:Request, res: Response) {
    const { nome } = req.body;
    try {
      const professor = await Professor.create({nome});
      res.json(professor);
    }
    catch (error) {
        console.log(`Erro ao criar categoria ${nome} pois ${error}`)
        res.send(`O professor ${nome} já existe caraio`)
    }
  }


  // Deletar Professor
export async function deletarProfessor(req:Request, res: Response) {
    const body = req.params;

    await Professor.findByIdAndDelete(body.id)
    res.send(`deletado ${body.id}`)

  }


// Listar Professores
export async function listarProfessores(req:Request, res: Response) {
    const professores = await Professor.find();

    professores.length === 0
    ? res.send('Não há professores cadastrados')
    : res.json(professores);

}

export default { criarProfessor, deletarProfessor, listarProfessores }