import { Request, Response } from 'express';
import { Ambiente } from '../models/Ambiente';


// Cadastrar Ambiente
export async function criarAmbiente(req:Request, res: Response) {
    const { nome, categoria } = req.body;

    const ambiente = await Ambiente.create({nome, categoria});

    res.json(ambiente);
}


// Listar Ambientes por Categoria
export async function listarAmbientes(req:Request, res: Response) {
    const ambientes = await Ambiente.find({categoria: req.params.id});

    res.json(ambientes);
}

export default { criarAmbiente, listarAmbientes}