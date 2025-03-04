
// Interface Tarea
export interface Tarea {
    _id: string;
    nombre: string;
    status: string;
    descripcion: string;
    prioridad: number;
    fecha_creacion: string;
}
// Interface ApiResponse
export interface ApiResponse {
    totalRegistros: number;
    totalRegistrosFiltros: number;
    limite: number;
    desde: number;
    filtros: object;
    tasks: Tarea[];
}