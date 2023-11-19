import { Request, Response } from 'express';
import { Bloco } from '../models/Bloco';


// Criar Bloco
export async function criarBloco(req:Request, res: Response) {
    const { nome } = req.body;
    try {
      const bloco = await Bloco.create({nome});
      res.json(bloco);
    }
    catch (error) {
        console.log(`Erro ao criar bloco ${nome} pois ${error}`)
        res.send(`O bloco ${nome} já existe caraio`)
    }
  }


  // Deletar Professor
export async function deletarBloco(req:Request, res: Response) {
    const body = req.params;

    await Bloco.findByIdAndDelete(body.id)
    res.send(`deletado ${body.id}`)

  }


// Listar Blocoes
export async function listarBloco(req:Request, res: Response) {
    const bloco = await Bloco.find();

    bloco.length === 0
    ? res.send('Não há blocos cadastrados')
    : res.json(bloco);

}

export default { criarBloco, deletarBloco, listarBloco }