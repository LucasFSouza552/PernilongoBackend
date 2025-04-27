import { Router } from "express";
import {
    createUserController,
    deleteUserByIdController,
    getAllUsersController,
    getUserByIdController,
    getUserRankingController
} from "../controllers/userController";

import {
    createActivityController,
    getActivitiesByUserIdController,
    getAllActivitiesController
} from "../controllers/activityController";

const router = Router();

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Nome é obrigatório
 */
router.post("/users", createUserController);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retorna todos os usuários
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get("/users", getAllUsersController);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retorna um usuário pelo ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuário não encontrado
 */
router.get("/users/:id", getUserByIdController);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Exclui um usuário pelo ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário excluído com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       409:
 *         description: Não é possível excluir usuário com atividades registradas
 */
router.delete("/users/:id", deleteUserByIdController);

/**
 * @swagger
 * /activities:
 *   post:
 *     summary: Cria uma nova atividade
 *     tags: [Activities]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - type
 *               - distance
 *               - time
 *             properties:
 *               userId:
 *                 type: integer
 *               type:
 *                 type: string
 *                 enum: [running, cycling, swimming, walking]
 *               distance:
 *                 type: number
 *               time:
 *                 type: number
 *     responses:
 *       201:
 *         description: Atividade criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Activity'
 *       400:
 *         description: Dados inválidos ou campos obrigatórios ausentes
 */
router.post("/activities", createActivityController);

/**
 * @swagger
 * /activities:
 *   get:
 *     summary: Retorna todas as atividades
 *     tags: [Activities]
 *     responses:
 *       200:
 *         description: Lista de atividades
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Activity'
 */
router.get("/activities", getAllActivitiesController);

/**
 * @swagger
 * /users/ranking:
 *   get:
 *     summary: Retorna os 5 usuários com mais tempo de atividade
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista dos 5 usuários com mais tempo de atividade
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 allOf:
 *                   - $ref: '#/components/schemas/User'
 *                   - type: object
 *                     properties:
 *                       totalTime:
 *                         type: number
 *                         description: Tempo total de atividade em minutos
 */
router.get("/users/ranking", getUserRankingController);

/**
 * @swagger
 * /users/{id}/activities:
 *   get:
 *     summary: Retorna todas as atividades de um usuário específico
 *     tags: [Activities, Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Lista de atividades do usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Activity'
 *       404:
 *         description: Usuário não encontrado
 */
router.get("/users/:id/activities", getActivitiesByUserIdController);

export default router;