import { Persona } from "./Persona";
import { Futbolista } from './Futbolista';

export class Entrenador extends Persona {
    private nacionalidad: string;
    private titulares: Futbolista[];
    private esquema: number[];

    public constructor(nombre: string, apellido: string, nacionalidad: string) {
        super(nombre, apellido);
        this.nacionalidad = nacionalidad;
    }

    public getNacinalidad(): string {
        return this.nacionalidad;
    }
    public setNacionalidad(nacionalidad: string): void {
        this.nacionalidad = nacionalidad;
    }

    public entrenarFutbolista(futbolista: Futbolista): void {
        if (!futbolista.isLesionado()) {
            futbolista.setEstadoFisico(-7);
        } else {
            console.log(`El jugador ${futbolista.getNombre()} ${futbolista.getApellido()} no se puede entrenar porque se encuentra lesionado.\nSe recomienda darle un descanso y enviarlo con el masajista.`);
        }
    }

    public darDescanso(futbolista: Futbolista): void {
        futbolista.setEstadoFisico(7);
    }

    public seleccionarEsquema(defensores: number, mediocampista: number, delanteros: number): void {
        let once: boolean = defensores > 0 && mediocampista > 0 && delanteros > 0 && ((defensores+mediocampista+delanteros) == 10);
        if (once) {
            this.esquema = [defensores, mediocampista, delanteros];
        } else {
            console.log("El equipo debe ser de 11 jugadores: arquero = 1, defensores + mediocampistas + delanteros = 10");
        }
    }

    public getEsquema(): number[] | null{
        if (this.esquema == undefined) {
            console.log("No hay un esquema establecido.")
            return null;
        }
        return this.esquema;
    }
    
    public seleccionar11Titualers(futbolistas: Futbolista[]): boolean {
        if (this.esquema == undefined) {
            console.log("Antes de seleccionar defina el esquema");
            return false;
        }
        if (futbolistas.length != 11) {
            console.log("Los futbolistas que conforman el equipo titular deben ser 11");
            return false;
        }
        console.log("Esquema: " + this.esquema[0] + "-" + this.esquema[1] +  "-" + this.esquema[2]);
        this.titulares = futbolistas;
        return true;
    }

    public getTitulares(): Futbolista[] | null {
        if (this.titulares == undefined) {
            console.log("No hay un equipo titular establecido.")
            return null;
        }
        return this.titulares;
    }
}