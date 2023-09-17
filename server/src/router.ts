import { Router } from "express";
import { listarCategorias } from "./app/useCases/categorias/listarCategorias";
import { criarCategoria } from "./app/useCases/categorias/criarCategoria";
import { deletarCategoria } from "./app/useCases/categorias/deletarCategoria";

export const router = Router();


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