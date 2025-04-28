import { Request, Response } from "express";
import { getTotalUserActivityTime, userHasActivities } from "../services/activityService";
import { createUser, deleteUser, getAllUsers, getUserById } from "../services/userService";

/**
 * Controlador para criar um novo usuário
 * @param req Requisição HTTP com o nome do usuário
 * @param res Resposta HTTP
 */
export function createUserController(req: Request, res: Response): void {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ error: "Name is required" });
    return;
  }
  const user = createUser(name);
  res.status(201).json(user);
}

/**
 * Controlador para buscar todos os usuários
 * @param req Requisição HTTP
 * @param res Resposta HTTP
 */
export function getAllUsersController(req: Request, res: Response): void {
  const list = getAllUsers();
  res.status(200).json(list);
}

/**
 * Controlador para buscar um usuário pelo ID
 * @param req Requisição HTTP com o ID do usuário nos parâmetros
 * @param res Resposta HTTP
 */
export function getUserByIdController(req: Request, res: Response): void {
  const id = parseInt(req.params.id);
  const user = getUserById(id);
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }  res.status(200).json(user);
}

/**
 * Controlador para deletar um usuário pelo ID
 * @param req Requisição HTTP com o ID do usuário nos parâmetros
 * @param res Resposta HTTP
 */
export function deleteUserByIdController(req: Request, res: Response): void {
  const id = parseInt(req.params.id);
  const user = getUserById(id);
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  if (userHasActivities(id)) {
    res.status(409).json({ 
      error: "Cannot delete user with activities",
      message: "Delete all user activities before deleting the user" 
    });
    return;
  }

  const deleted = deleteUser(id);
  if (!deleted) {
    res.status(404).json({ error: "User not found" });
    return;
  }
  res.status(200).json({ message: `User with id ${id} deleted` });
}

/**
 * Controlador para obter o ranking dos 5 usuários com mais tempo de atividade
 * @param req Requisição HTTP
 * @param res Resposta HTTP
 */
export function getUserRankingController(req: Request, res: Response): void {
  const users = getAllUsers();
  
  // Calcular o tempo total de atividade para cada usuário
  const usersWithTime = users.map(user => {
    const totalTime = getTotalUserActivityTime(user.id);
    return {
      ...user,
      totalTime
    };
  });
  
  // Ordenar por tempo total (decrescente) e pegar os 5 primeiros
  const topUsers = usersWithTime
    .sort((a, b) => b.totalTime - a.totalTime)
    .slice(0, 5);
  
  res.status(200).json(topUsers);
}