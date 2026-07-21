import { useState } from "react";
import { TasksContext } from "./TasksContext";
import type { ITasksProviderProps } from "../../interfaces/props/ITasksProviderProps";
import type { Task } from "../../interfaces/tasks/ITask";

const initialTasks: Task[] = [
    {
        id: 1,
        title: "Título teste.",
        description: "Descrição teste.",
        completed: false,
    },
    {
        id: 2,
        title: "Título teste 2.",
        description: "Descrição teste 2.",
        completed: false,
    },
];

export const TasksProvider = ({ children }: ITasksProviderProps) => {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const storedTasks = localStorage.getItem("tasks");

        if (!storedTasks) return initialTasks;

        try {
            const parsedTasks: unknown = JSON.parse(storedTasks);

            if (!Array.isArray(parsedTasks)) {
                console.error(
                    "Dados recuperados do LocalStorage não são um array.",
                );
                return [];
            }

            return parsedTasks as Task[];
        } catch (error) {
            console.error(
                "Não foi possível interpretar os dados do localStorage.",
                error,
            );

            return [];
        }
    });

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
