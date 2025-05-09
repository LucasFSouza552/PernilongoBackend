import { Request, Response } from "express";
import {
    createActivity,
    getActivitiesByUserId,
    getAllActivities
} from "../services/activityService";
import { getUserById } from "../services/userService";

/**
 * Controlador para criar uma nova atividade.
 * @param req Requisição HTTP contendo os campos `userId`, `type`, `distance` e `time` no corpo (body).
 * @param res Resposta HTTP com a atividade criada ou erro de validação.
 */
export function createActivityController(req: Request, res: Response): void {
    const { userId, type, distance, time } = req.body;
  
    if (!userId || !type || distance === undefined || time === undefined) {
      res.status(400).json({ error: "Missing fields in request body" });
      return
    }
  
    try {
      const newAct = createActivity(userId, type, distance, time);
      res.status(201).json(newAct);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
}

/**
 * Controlador para obter a lista de todas as atividades.
 * @param req Requisição HTTP.
 * @param res Resposta HTTP com a lista de todas as atividades.
 */
export function getAllActivitiesController(req: Request, res: Response): void {
  const list = getAllActivities();
  res.status(200).json(list);
}

/**
 * Controlador para buscar todas as atividades de um usuário específico
 * @param req Requisição HTTP com ID do usuário nos parâmetros
 * @param res Resposta HTTP
 */
export function getActivitiesByUserIdController(req: Request, res: Response): void {
  const userId = parseInt(req.params.id);
  
  // Verificar se o usuário existe
  const user = getUserById(userId);
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }
  
  const activities = getActivitiesByUserId(userId);
  res.status(200).json(activities);
}
