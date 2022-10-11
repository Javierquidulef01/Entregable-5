import { Futbolista } from './Futbolista';
import { Entrenador } from './Entrenador';
import { Masajista } from './Masajista';

export class SeleccionFutbol {
    private entrenador: Entrenador;
    private futbolistas: Futbolista[];
    private masajistas: Masajista[];

    public constructor(futbolistas: Futbolista[], entrenador: Entrenador, masajistas: Masajista[]) {
        this.futbolistas = futbolistas;
        this.entrenador = entrenador;
        this.masajistas = masajistas;
    }

    public setFubolistas(futbolistas: Futbolista[]): void {
        this.futbolistas = futbolistas;
    }

    public getFubolistas(): Futbolista[] {
        return this.futbolistas;
    }

    public setEntrenador(entrenador: Entrenador): void {
        this.entrenador = entrenador;
    }

    public getEntrenador(): Entrenador {
        return this.entrenador;
    }

    public setMasajistas(masajistas: Masajista[]): void {
        this.masajistas = masajistas;
    }

    public getMasajistas(): Masajista[] {
        return this.masajistas;
    }
}