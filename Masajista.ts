import { Persona } from "./Persona";
import { Futbolista } from "./Futbolista";

export class Masajista extends Persona {
    private especialidad: string;

    constructor(nombre: string, apellido: string, especialidad: string) {
        super(nombre, apellido);
        this.especialidad = especialidad;
    }

    public setEspecialidad(especialidad: string): void {
        this.especialidad = especialidad;
    }

    public getEspecialidad(): string {
        return this.especialidad;
    }

    public atenderFutbolista(paciente: Futbolista): void {
        paciente.setEstadoFisico(10);
    }
}