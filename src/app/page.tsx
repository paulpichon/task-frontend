
import GetTasks from "./components/Tasks";
// Crear tarea
import CrearTarea from "@/lib/CrearTarea";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-black text-2xl font-bold mb-4">Lista de Tareas</h1>
        {/* boton para crear una nueva tarea */}
        <CrearTarea />
        
        <div className="space-y-4">
            
            {/* Tareas */}
            <GetTasks />
        </div>
    </div>
  );
}
