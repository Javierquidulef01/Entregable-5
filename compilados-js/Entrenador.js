"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entrenador = void 0;
const Persona_1 = require("./Persona");
class Entrenador extends Persona_1.Persona {
    constructor(nombre, apellido, nacionalidad) {
        super(nombre, apellido);
        this.nacionalidad = nacionalidad;
    }
    getNacinalidad() {
        return this.nacionalidad;
    }
    setNacionalidad(nacionalidad) {
        this.nacionalidad = nacionalidad;
    }
    entrenarFutbolista(futbolista) {
        if (!futbolista.isLesionado()) {
            futbolista.setEstadoFisico(-7);
        }
        else {
            console.log(`El jugador ${futbolista.getNombre()} ${futbolista.getApellido()} no se puede entrenar porque se encuentra lesionado.\nSe recomienda darle un descanso y enviarlo con el masajista.`);
        }
    }
    darDescanso(futbolista) {
        futbolista.setEstadoFisico(7);
    }
    seleccionarEsquema(defensores, mediocampista, delanteros) {
        let once = defensores > 0 && mediocampista > 0 && delanteros > 0 && ((defensores + mediocampista + delanteros) == 10);
        if (once) {
            this.esquema = [defensores, mediocampista, delanteros];
        }
        else {
            console.log("El equipo debe ser de 11 jugadores: arquero = 1, defensores + mediocampistas + delanteros = 10");
        }
    }
    getEsquema() {
        if (this.esquema == undefined) {
            console.log("No hay un esquema establecido.");
            return null;
        }
        return this.esquema;
    }
    seleccionar11Titualers(futbolistas) {
        if (this.esquema == undefined) {
            console.log("Antes de seleccionar defina el esquema");
            return false;
        }
        if (futbolistas.length != 11) {
            console.log("Los futbolistas que conforman el equipo titular deben ser 11");
            return false;
        }
        console.log("Esquema: " + this.esquema[0] + "-" + this.esquema[1] + "-" + this.esquema[2]);
        this.titulares = futbolistas;
        return true;
    }
    getTitulares() {
        if (this.titulares == undefined) {
            console.log("No hay un equipo titular establecido.");
            return null;
        }
        return this.titulares;
    }
}
exports.Entrenador = Entrenador;
