import { createContext } from "react";
import type { TasksContextValue } from "../../interfaces/tasks/ITasksContextValue";

export const TasksContext = createContext<TasksContextValue | null>(null);
