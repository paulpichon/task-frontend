type ModalContentProps = {
    onClose: () => void;
};
  
const ModalContent: React.FC<ModalContentProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
                <h2 className="text-xl font-bold text-gray-900 text-center mb-4">Crear tarea</h2>
                <form className="space-y-4">
                    {/* Nombre */}
                    <div>
                        <label className="block text-sm font-medium text-gray-800">Nombre</label>
                        <input 
                            type="text" 
                            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                            placeholder="Nombre de la tarea"
                        />
                    </div>

                    {/* Status */}
                    <div>
                        <label className="block text-sm font-medium text-gray-800">Estatus de tarea</label>
                        <select 
                            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                        >
                            <option value=""> -Selecciona una opción-</option>
                            <option value="pendiente">Pendiente</option>
                            <option value="en-proceso">En proceso</option>
                            <option value="completada">Completada</option>
                        </select>
                    </div>

                    {/* Descripción */}
                    <div>
                        <label className="block text-sm font-medium text-gray-800">Descripción</label>
                        <textarea 
                            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                            placeholder="Introducir descripción de la tarea"
                            rows={3}
                        ></textarea>
                    </div>

                    {/* Prioridad */}
                    <div>
                        <label className="block text-sm font-medium text-gray-800">Prioridad</label>
                        <select 
                            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                        >
                            <option value="0"> -Selecciona una opción-</option>
                            <option value="1">Baja</option>
                            <option value="2">Media</option>
                            <option value="3">Alta</option>
                        </select>
                    </div>

                    {/* Botones */}
                    <div className="flex justify-end space-x-2 mt-4">
                        <button 
                            type="button" 
                            onClick={onClose} 
                            className="px-4 py-2 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400 transition"
                        >
                            Cancelar
                        </button>
                        <button 
                            type="submit" 
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                        >
                            Crear Tarea
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
  
export default ModalContent;