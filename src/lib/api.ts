// Funciones con llamadas a APIS
// Interfaces
import { ApiResponse, Tarea } from "@/styles/interfaces";
export async function fetchTasks(): Promise<Tarea[]> {
    try {
        const res = await fetch('http://localhost:5000/api/tasks', {
            cache: "no-store"
        });

        if (!res.ok) {
            throw new Error(`Error al obtener tareas: ${res.statusText}`);
        }

        const data: ApiResponse = await res.json(); // Convertimos el JSON a nuestra interfaz
        return data.tasks; // Extraemos solo el array de tareas
    } catch (error) {
        console.error("Error:", error);
        return [];
    }
}