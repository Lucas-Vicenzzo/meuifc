import { Request, Response } from "express";
import { Sala } from "../../models/Sala";

export async function listarSalas(req: Request, res: Response) {
  const salas = await Sala.find();
  res.json(salas);
}