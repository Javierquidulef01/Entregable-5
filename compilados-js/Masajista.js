"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Masajista = void 0;
const Persona_1 = require("./Persona");
class Masajista extends Persona_1.Persona {
    constructor(nombre, apellido, especialidad) {
        super(nombre, apellido);
        this.especialidad = especialidad;
    }
    setEspecialidad(especialidad) {
        this.especialidad = especialidad;
    }
    getEspecialidad() {
        return this.especialidad;
    }
    atenderFutbolista(paciente) {
        paciente.setEstadoFisico(10);
    }
}
exports.Masajista = Masajista;
