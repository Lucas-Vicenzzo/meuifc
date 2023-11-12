import { Router } from "express";

import categoryController from "./app/useCases/categoryController";
import salasController from "./app/useCases/salasController";
import ambieneController from "./app/useCases/ambienteController";

export const router = Router();


// Categorias
router.get('/', (req, res) => {
    res.send('Hello World!')
})

// List Categories
router.get('/categorias', categoryController.listarCategorias)


// Create Category
router.post('/categorias', categoryController.criarCategoria)

// Remover Categoria
router.delete('/categorias/:id', categoryController.deletarCategoria)

// Cadastrar Ambiente
router.post('/ambientes', ambieneController.criarAmbiente)

// Mostrar Ambientes por Categoria
router.get('/categorias/:id/ambientes', ambieneController.listarAmbientes)

// Salas
// Listar Salas
router.get('/salas', salasController.listarSalas)

// Criar Sala
router.post('/salas', salasController.criarSala)

// Remover Sala
router.delete('/salas/:id', salasController.deletarSala)