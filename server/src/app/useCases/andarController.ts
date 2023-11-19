import { Request, Response } from 'express';
import { Andar } from '../models/Andar';


// Criar Andar
export async function criarAndar(req:Request, res: Response) {
    const { nome } = req.body;
    try {
      const andar = await Andar.create({nome});
      res.json(andar);
    }
    catch (error) {
        console.log(`Erro ao criar andar ${nome} pois ${error}`)
        res.send(`O andar ${nome} já existe caraio`)
    }
  }


  // Deletar Professor
export async function deletarAndar(req:Request, res: Response) {
    const body = req.params;

    await Andar.findByIdAndDelete(body.id)
    res.send(`deletado ${body.id}`)

  }


// Listar Andares
export async function listarAndar(req:Request, res: Response) {
    const andar = await Andar.find();

    andar.length === 0
    ? res.send('Não há andares cadastrados')
    : res.json(andar);

}

export default { criarAndar, deletarAndar, listarAndar }