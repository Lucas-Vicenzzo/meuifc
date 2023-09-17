import { Request, Response } from "express";
import { Sala } from "../../models/Sala";

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