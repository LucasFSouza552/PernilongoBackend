import { User } from "../models/user";

let users: User[] = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Beto" },
];

/* 
@params name: string
@returns User
*/
export function createUser(name: string): User {
  const lastId = users.reduce((acc, user) => Math.max(acc, user.id), 0);
  const newUser: User = { id: lastId + 1, name };
  users.push(newUser);
  return newUser;
}

/* 
@returns User[]
*/
export function getAllUsers(): User[] {
  return users;
}

/* 
@params id: number
@returns User | undefined
*/
export function getUserById(id: number): User | undefined {
  return users.find((u) => u.id === id);
}

/* 
@params id: number
@returns boolean
*/
export function deleteUser(id: number): boolean {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) {
    console.warn(`User with id ${id} not found.`);
    return false;
  }

  users.splice(index, 1);
  return true;
}
