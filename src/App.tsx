import { AddTask } from "./components/AddTask";

function App() {
    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-125 space-y-4">
                <h1 className="text-center text-slate-100 text-2xl font-bold">
                    Task Manager React
                </h1>

                <AddTask />
            </div>
        </div>
    );
}

export default App;
