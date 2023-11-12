import { Router } from "express";

import categoryController from "./app/useCases/categoryController";
import salasController from "./app/useCases/salasController";

export const router = Router();


// Root -----------------------------
router.get('/', (req, res) => {
    res.send('Hello World!')
})


// Categorias -----------------------------

// List Categories
router.get('/categorias', categoryController.listarCategorias)


// Create Category
router.post('/categorias', categoryController.criarCategoria)

// Remover Categoria
router.delete('/categorias/:id', categoryController.deletarCategoria)


// Salas -----------------------------

// Listar Salas
router.get('/salas', salasController.listarSalas)

// Criar Sala
router.post('/salas', salasController.criarSala)

// Remover Sala
router.delete('/salas/:id', salasController.deletarSala)

// Mostrar Salas por Categoria
router.get('/categorias/:id/salas', salasController.listarSalasPorCategoria)