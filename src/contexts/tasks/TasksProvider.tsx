import { useState } from "react";
import { TasksContext } from "./TasksContext";
import type { ITasksProviderProps } from "../../interfaces/props/ITasksProviderProps";
import type { Task } from "../../interfaces/tasks/ITask";

export const TasksProvider = ({ children }: ITasksProviderProps) => {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const storedTasks = localStorage.getItem("tasks");

        if (!storedTasks) return [];

        try {
            return JSON.parse(storedTasks) as Task[];
        } catch {
            return [];
        }
    });

    const addTask = (title: string, description: string) => {
        console.log(title, description);
    };

    return (
        <TasksContext.Provider value={{ tasks, addTask }}>
            {children}
        </TasksContext.Provider>
    );
};
