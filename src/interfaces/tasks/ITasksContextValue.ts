import type { Task } from "./ITask";

export interface TasksContextValue {
    tasks: Task[];
    addTask: (title: string, description: string) => void;
}
