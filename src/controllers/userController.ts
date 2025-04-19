import { Request, Response } from "express";
import { createUser, getAllUsers, getUserById } from "../services/userService";

export function createUserController(req: Request, res: Response): void {
  const { name } = req.body;
  if (!name) {
    res.status(409).json({ error: "Name is required" });
    return;
  }
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
  res.json(user);
}