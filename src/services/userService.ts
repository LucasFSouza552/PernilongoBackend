import { User } from "../models/user";

let users: User[] = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Beto" }
];

export function createUser(name: string): User {
  const newId = Math.max(...users.map(u => u.id), 0);
  const newUser: User = { id: newId, name };
  users.push(newUser);
  return newUser;
}

export function getAllUsers(): User[] {
  return users;
}

export function getUserById(id: number): User | undefined {
  return users.find(u => u.id === id);
}