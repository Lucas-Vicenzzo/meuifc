import { Router } from "express";

import categoryController from "./app/useCases/categoryController";
import salasController from "./app/useCases/salasController";
import professoresController from "./app/useCases/professoresController";
import disciplinaController from "./app/useCases/disciplinaController";
import andarController from "./app/useCases/andarController";
import blocoController from "./app/useCases/blocoController";
import turmaController from "./app/useCases/turmaController";


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


// Professores -----------------------------
router.get('/professor', professoresController.listarProfessores)

// Criar Sala
router.post('/professor', professoresController.criarProfessor)

// Remover Sala
router.delete('/professor/:id', professoresController.deletarProfessor)



// Disciplina -----------------------------
router.get('/disciplina', disciplinaController.listarDisciplina)

// Criar Sala
router.post('/disciplina', disciplinaController.criarDisciplina)

// Remover Sala
router.delete('/disciplina/:id', disciplinaController.deletarDisciplina)


// Andar -----------------------------
router.get('/andar', andarController.listarAndar)

// Criar Andar
router.post('/andar', andarController.criarAndar)

// Remover Andar
router.delete('/andar/:id', andarController.deletarAndar)


// Bloco -----------------------------
router.get('/bloco', blocoController.listarBloco)

// Criar Bloco
router.post('/bloco', blocoController.criarBloco)

// Remover Bloco
router.delete('/bloco/:id', blocoController.deletarBloco)

// Turma -----------------------------
router.get('/turma', turmaController.listarTurma)

// Criar Bloco
router.post('/turma', turmaController.criarTurma)

// Remover Bloco
router.delete('/turma/:id', turmaController.deletarTurma)