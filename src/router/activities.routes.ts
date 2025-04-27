import { Router } from "express";
import { createActivityController, getActivityByIdController, getAllActivitiesController, getTopUsersController } from "../controllers/activityController";

const activitiesRouter = Router();


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
 *                 description: ID do usuário
 *               type:
 *                 type: string
 *                 description: Tipo da atividade
 *                 enum: [RUN, BIKE, SWIM, WALK, HIKE]
 *               distance:
 *                 type: number
 *                 description: Distância da atividade (em km)
 *               time:
 *                 type: number
 *                 description: Tempo da atividade (em minutos)
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
activitiesRouter.post("/", createActivityController);

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
activitiesRouter.get("/", getAllActivitiesController);


/**
 * @swagger
 * /activities/top:
 *   get:
 *     summary: Retorna os 5 usuários com mais atividades
 *     tags: [Activities]
 *     responses:
 *       200:
 *         description: Lista dos 5 usuários mais ativos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   userId:
 *                     type: integer
 *                   totalActivities:
 *                     type: integer
 */
activitiesRouter.get("/top", getTopUsersController);

/**
 * @swagger
 * /activities/{userId}:
 *   get:
 *     summary: Retorna as atividades de um usuário específico
 *     tags: [Activities]
 *     parameters:
 *       - in: path
 *         name: userId
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
activitiesRouter.get("/:userId", getActivityByIdController);


export default activitiesRouter;
