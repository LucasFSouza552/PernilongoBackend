import { Request, Response } from "express";
import {
  createActivity,
  getAllActivities
} from "../services/activityService";

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

export function getAllActivitiesController(req: Request, res: Response): void {
  const list = getAllActivities();
  res.status(200).json(list);
}
