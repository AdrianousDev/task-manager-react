import { useContext } from "react";
import { TasksContext } from "./TasksContext";

export const useTasks = () => {
    const context = useContext(TasksContext);

    if (!context) {
        throw new Error("useTasks deve ser usado dentro de TasksProvider");
    }

    return context;
};
