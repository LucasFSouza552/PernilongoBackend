import { Activity } from "../models/activity";
import { ActivityType } from "../models/activityType";
import { getUserById } from "../services/userService";

let activities: Activity[] = [
    { id: 1, userId: 1, type: ActivityType.RUN, distance: 5, time: 30 },
    { id: 2, userId: 2, type: ActivityType.BIKE, distance: 20, time: 60 }
];

export function createActivity(
    userId: number,
    type: string,
    distance: number,
    time: number
  ): Activity {
    const user = getUserById(userId);
    if (!user) {
        throw new Error("User does not exist");
    }
  
    const possibleTypes = Object.values(ActivityType) as string[];
    if (!possibleTypes.includes(type)) {
        throw new Error(`Invalid ActivityType: ${type}`);
    }
  
    const typed = type as ActivityType;
    const newId = Math.max(...activities.map(a => a.id), 0) + 1;
    const newActivity: Activity = { id: newId, userId, type: typed, time , distance };
    activities.push(newActivity);
    return newActivity;
}

export function getAllActivities(): Activity[] {
  return activities;
}