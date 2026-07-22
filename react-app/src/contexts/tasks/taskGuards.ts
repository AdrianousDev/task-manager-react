import type { Task } from "../../interfaces/tasks/ITask";

export const isTask = (value: unknown): value is Task => {
    if (typeof value !== "object" || value === null) {
        return false;
    }

    const task = value as Record<string, unknown>;

    return (
        typeof task.id === "number" &&
        typeof task.title === "string" &&
        typeof task.description === "string" &&
        typeof task.completed === "boolean"
    );
};

export const isTaskArray = (value: unknown): value is Task[] => {
    return Array.isArray(value) && value.every(isTask);
};
