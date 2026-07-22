import { useEffect, useState } from "react";
import { TasksContext } from "./TasksContext";
import type { ITasksProviderProps } from "../../interfaces/props/ITasksProviderProps";
import type { Task } from "../../interfaces/tasks/ITask";
import { isTaskArray } from "./taskGuards";

export const TasksProvider = ({ children }: ITasksProviderProps) => {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const storedTasks = localStorage.getItem("tasks");

        if (!storedTasks) return [];

        try {
            const parsedTasks: unknown = JSON.parse(storedTasks);

            if (!isTaskArray(parsedTasks)) {
                console.error(
                    "Os dados recuperados do localStorage possuem formato inválido.",
                );

                return [];
            }

            return parsedTasks;
        } catch (error) {
            console.error(
                "Não foi possível interpretar os dados do localStorage.",
                error,
            );

            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (title: string, description: string): void => {
        if (!title) throw new Error("Título inválido.");

        if (!description) throw new Error("Descrição inválida.");

        const newTask = {
            id: tasks.length + 1,
            title,
            description,
            completed: false,
        };

        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const handleCompletedClick = (id: number): void => {
        setTasks((currentTasks) =>
            currentTasks.map((task) => {
                if (task.id === id) {
                    return { ...task, completed: !task.completed };
                }

                return task;
            }),
        );
    };

    return (
        <TasksContext.Provider value={{ tasks, addTask, handleCompletedClick }}>
            {children}
        </TasksContext.Provider>
    );
};
