import { Router } from "express";
import { listarCategorias } from "./app/useCases/categorias/listarCategorias";
import { criarCategoria } from "./app/useCases/categorias/criarCategoria";
import { deletarCategoria } from "./app/useCases/categorias/deletarCategoria";
import { listarSalas } from "./app/useCases/salas/listarSalas";
import { criarSala } from "./app/useCases/salas/criarSala";
import { deletarSala } from "./app/useCases/salas/deletarSala";

export const router = Router();


// Categorias
// List Categories
router.get('/categorias', listarCategorias)

// Create Category
router.post('/categorias', criarCategoria)

// Ambientes Por Categoria
router.get('/categorias/:id/ambientes', (req, res) => {
  res.send('Listando ambientes a partir da categoria')
})

// Remover Categoria
router.delete('/categorias/:id', deletarCategoria)


// Salas
// Listar Salas
router.get('/salas', listarSalas)

// Criar Sala
router.post('/salas', criarSala)

// Remover Sala
router.delete('/salas/:id', deletarSala)