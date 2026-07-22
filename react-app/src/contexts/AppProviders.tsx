import type { AppProvidersProps } from "../interfaces/props/IAppProvidersProps";
import { TasksProvider } from "./tasks/TasksProvider";

export const AppProviders = ({ children }: AppProvidersProps) => {
    return <TasksProvider>{children}</TasksProvider>;
};
