// Use server
'use server';
// LLamda a API
import { fetchTasks } from "@/lib/api";

export default async function GetTasks() {
    // Tareas
    const tasks = await fetchTasks();
    // Prioridades
    // ✅ Record<number, string> indica que prioridades es un objeto donde las claves son números y los valores son cadenas.
    // ✅ Esto elimina el error de TypeScript sin afectar el comportamiento del código.
    const prioridades: Record<number, string> = {
        3: 'Baja',
        2: 'Media',
        1: 'Alta',
        0: 'Urgente', //Ajustar el defecto por valor si es necesario
    };
    return (
        <ul className="p-4 border rounded-lg shadow-sm bg-gray-50">
            {tasks.length > 0 ? (
                tasks.map((task) => 
                    <li key={task._id}  className="flex justify-between items-center p-4 mt-4 border rounded-lg shadow-sm bg-gray-50">
                        <h2 className=" text-black text-lg font-semibold">{task.nombre}</h2>
                        <p className="text-gray-600">{task.descripcion}</p>
                        <p className="text-sm text-blue-600">Estado: {task.status}</p>
                        <p className="text-sm text-red-600">
                            Prioridad: { prioridades[ task.prioridad ] || 'DESCONOCIDA' }
                        </p>

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-right">
                            Editar
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-right">
                            Eliminar
                        </button>
                    </li>  
                )
            ) : (
                <p>No hay tareas disponibles.</p>
            )}
        </ul>
    );
}