import { Persona } from "./Persona";

export class Futbolista extends Persona {
    private posicion: string;
    private nroCamiseta: number;
    private lesionado: boolean;
    private estadoFisico: number;
    private club: string;
    private pais: string;
    
    constructor (nombre: string, apellido: string, posicion: string, nroCamiseta: number, lesionado: boolean, club: string, pais: string) {
        super(nombre, apellido)
        this.posicion = posicion;
        if (!lesionado) {
            this.estadoFisico = 100;
        } 
        this.setNroCamiseta(nroCamiseta);
        this.setLesionado(lesionado);
        this.club = club;
        this.pais = pais;
    }

    public getPosicion(): string {
        return this.posicion;
    }

    public setPosicion(posicion: string): void {
        this.posicion = posicion;
    }

    public getNroCamiseta(): number {
        return this.nroCamiseta;
    }
    public setNroCamiseta(nro_camiseta: number): void {
        if (nro_camiseta > 0) {
            this.nroCamiseta = nro_camiseta;
        }
    }

    public isLesionado(): boolean {
        return this.lesionado;
    }

    public setLesionado(lesionado: boolean): void {
        if (lesionado) {
            this.estadoFisico = 0;
        } 
        this.lesionado = lesionado;
    }

    public setEstadoFisico(estado: number): void {
        this.estadoFisico += estado;
        if (this.estadoFisico > 100) {
            this.estadoFisico -= (this.estadoFisico - 100);
        }

        if (this.estadoFisico < 0) {
            this.setLesionado(true);
        }

        if (this.estadoFisico > 60) {
            this.lesionado = false;
        }
    }
    public getEstadoFisico(): number {
        return this.estadoFisico;
    }

    public getClub(): string {
        return this.club;
    }

    public setClub(club: string): void {
        this.club = club;
    }

    public getPais(): string {
        return this.pais;
    }
    
    public setPais(pais: string): void {
        this.pais = pais;
    }
}