import { User } from "../models/user";

let users: User[] = [
	{ id: 1, name: "Ana" },
	{ id: 2, name: "Beto" },
	{ id: 3, name: "Carlos" },
	{ id: 4, name: "Diana" },
	{ id: 5, name: "Eva" },
];

export function createUser(name: string): User {
	const lastId = users.reduce((acc, user) => Math.max(acc, user.id), 0);
	const newUser: User = { id: lastId + 1, name };
	users.push(newUser);
	return newUser;
}

export function getAllUsers(): User[] {
	return users;
}

export function getUserById(id: number): User | undefined {
	return users.find((u) => u.id === id);
}

export function deleteUser(id: number): boolean {
	const index = users.findIndex((u) => u.id === id);
	if (index === -1) {
		console.warn(`User with id ${id} not found.`);
		return false;
	}

	users.splice(index, 1);
	return true;
}
