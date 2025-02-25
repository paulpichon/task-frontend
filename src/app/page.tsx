import Tasks from "./components/Tasks";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-black text-2xl font-bold mb-4">Lista de Tareas</h1>
        {/* boton para crear una nueva tarea */}
        <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Crear Tarea</button>
        <div className="space-y-4">
            
            {/* Tareas */}
            <Tasks />
        </div>
    </div>
  );
}
