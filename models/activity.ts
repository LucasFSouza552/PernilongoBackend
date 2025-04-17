import { ActivityType } from "./activityType";

export interface Activity {
	id: number;
	userId: number;
	type: ActivityType;
	distance: number;
	time: number;
}