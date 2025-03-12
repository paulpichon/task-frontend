'use client';
// Use state
import { useState } from "react";
// Portal/modal
import { createPortal } from "react-dom";
// Modal contenido
import ModalContent from "@/app/components/ModalContent";

export default function CrearTarea() {
    // Estado para mostrar/ocultar modal
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {/* Boton para abrir modal y crear una tarea */}
            <button onClick={ () => setShowModal(true)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Crear Tarea
            </button>
            {/* Abir modal */}
            {/* showModal && ...: 
                Si showModal es true, se renderiza el modal. */}
            {/* createPortal(...):
                    createPortal permite renderizar el modal fuera del árbol principal del componente, en document.body. Esto es útil para evitar problemas con estilos o restricciones del overflow:hidden en contenedores padres. */}
            { showModal && createPortal(
                // <ModalContent onClose={ () => setShowModal(false) } />:
                // Muestra el contenido del modal.
                // Pasa la función onClose, que al ejecutarse cambiará showModal a false, cerrando el modal.
                <ModalContent onClose={ () => setShowModal(false) } />,
                document.body
            )}
        </>
    )

}