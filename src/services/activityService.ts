import { Activity } from "../models/activity";
import { ActivityType } from "../models/activityType";
import { getUserById } from "../services/userService";

let activities: Activity[] = [
	{ id: 1, userId: 1, type: ActivityType.RUN, distance: 5, time: 30, },
	{ id: 2, userId: 2, type: ActivityType.BIKE, distance: 20, time: 60 },
	{ id: 3, userId: 3, type: ActivityType.SWIM, distance: 10, time: 45 },
	{ id: 4, userId: 4, type: ActivityType.WALK, distance: 3, time: 20 },
	{ id: 5, userId: 4, type: ActivityType.HIKE, distance: 8, time: 40 },
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

export function getActivityByUserId(userId: number): Activity[] {
	return activities.filter(a => a.userId === userId);
}

export function getTopUsers(): { userId: number, totalTime: number }[] {
	const activities = getAllActivities();
	const userActivityMap = new Map();
	for (const activity of activities) {
		const userId = activity.userId;
		const time = activity.time;
		if (userActivityMap.has(userId)) {
			userActivityMap.set(userId, (userActivityMap.get(userId) ?? 0) + time);
		} else {
			userActivityMap.set(userId, time);
		}
	}

	const sortedUsers = Array.from(userActivityMap.entries()).sort((a, b) => b[1] - a[1]);
	return sortedUsers.slice(0, 5).map(([userId, totalTime]) => ({ userId, totalTime }));
}

