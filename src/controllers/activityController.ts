import { Request, Response } from "express";
import {
	createActivity,
	getActivityByUserId,
	getAllActivities,
		getTopUsers
} from "../services/activityService";

export function createActivityController(req: Request, res: Response): void {
	if (!req.body || Object.keys(req.body).length === 0) {
		res.status(400).json({ error: "Request body is empty" });
		return;
	}

	const { userId, type, distance, time } = req.body;

	if (!userId || !type || !distance || !time) {
		res.status(400).json({ error: "Missing fields in request body" });
		return;
	}

	try {
		const newAct = createActivity(userId, type, distance, time);
		res.status(201).json(newAct);
	} catch (error) {
		res.status(400).json({ error: (error as Error).message });
	}
}

export function getAllActivitiesController(req: Request, res: Response): void {
	const list = getAllActivities();
	res.status(200).json(list);
}

export function getActivityByUserIdController(req: Request, res: Response): void {
	if(!req.params.userId) {
		res.status(400).json({ error: "Missing userId" });
		return;
	}
	const userId = parseInt(req.params.userId);
	const activity = getActivityByUserId(userId);
	if (!activity) {
		res.status(404).json({ error: "Activity not found" });
		return;
	}
	res.status(200).json(activity);
}

export function getTopUsersController(req: Request, res: Response): void {
	const top5Users = getTopUsers();
	res.status(200).json(top5Users);
}

