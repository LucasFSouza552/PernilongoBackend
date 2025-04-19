import { Request, Response } from "express";
<<<<<<< HEAD
import { createUser, getAllUsers, getUserById } from "../services/userService";

export function createUserController(req: Request, res: Response): void {
  const { name } = req.body;
  if (!name) {
    res.status(409).json({ error: "Name is required" });
    return;
  }
=======
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
} from "../services/userService";

export function createUserController(req: Request, res: Response): void {
  if (!req.body) {
    res.status(400).json({ error: "Body is required" });
    return;
  }

  const { name } = req.body;

  if (!name) {
    res.status(400).json({ error: "Name is required" });
    return;
  }

>>>>>>> 091ae7b8e9274db34c449c74592fd8fe6f9a553b
  const user = createUser(name);
  res.status(201).json(user);
}

export function getAllUsersController(req: Request, res: Response): void {
  const list = getAllUsers();
  res.status(200).json(list);
}

export function getUserByIdController(req: Request, res: Response): void {
  const id = parseInt(req.params.id);
  const user = getUserById(id);
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }
<<<<<<< HEAD
  res.json(user);
}
=======
  res.status(200).json(user);
}

export function deleteUserByIdController(req: Request, res: Response): void {
  // TODO: Falta verificar se o usuário tem atividades
  const id = parseInt(req.params.id);
  const user = getUserById(id);
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  const deleted = deleteUser(id);
  if (!deleted) {
    res.status(404).json({ error: "User not found" });
    return;
  }
  res.status(200).json({ message: `User with id ${id} deleted` });
}
>>>>>>> 091ae7b8e9274db34c449c74592fd8fe6f9a553b
