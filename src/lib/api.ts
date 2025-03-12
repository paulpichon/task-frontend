// Funciones con llamadas a APIS
// Interfaces
import { ApiResponse, Tarea } from "@/styles/interfaces";
export async function fetchTasks(): Promise<Tarea[]> {
    try {
        // peticion a la API
        const res = await fetch('http://localhost:5000/api/tasks', {
            cache: "no-store"
        });
        // si la respuesta no es correcta
        if (!res.ok) {
            // mostramos uns alerta de error
            throw new Error(`Error al obtener tareas: ${res.statusText}`);
        }
        // convertimos la respuesta a JSON en caso de que la respuesta sea exitosa
        const data: ApiResponse = await res.json(); // Convertimos el JSON a nuestra interfaz
        return data.tasks; // Extraemos y retornamos solo el array de tareas
    } catch (error) {
        console.error("Error:", error);
        return [];
    }
}