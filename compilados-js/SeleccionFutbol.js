"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeleccionFutbol = void 0;
class SeleccionFutbol {
    constructor(futbolistas, entrenador, masajistas) {
        this.futbolistas = futbolistas;
        this.entrenador = entrenador;
        this.masajistas = masajistas;
    }
    setFubolistas(futbolistas) {
        this.futbolistas = futbolistas;
    }
    getFubolistas() {
        return this.futbolistas;
    }
    setEntrenador(entrenador) {
        this.entrenador = entrenador;
    }
    getEntrenador() {
        return this.entrenador;
    }
    setMasajistas(masajistas) {
        this.masajistas = masajistas;
    }
    getMasajistas() {
        return this.masajistas;
    }
}
exports.SeleccionFutbol = SeleccionFutbol;
