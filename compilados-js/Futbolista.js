"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Futbolista = void 0;
const Persona_1 = require("./Persona");
class Futbolista extends Persona_1.Persona {
    constructor(nombre, apellido, posicion, nroCamiseta, lesionado, club, pais) {
        super(nombre, apellido);
        this.posicion = posicion;
        if (!lesionado) {
            this.estadoFisico = 100;
        }
        this.setNroCamiseta(nroCamiseta);
        this.setLesionado(lesionado);
        this.club = club;
        this.pais = pais;
    }
    getPosicion() {
        return this.posicion;
    }
    setPosicion(posicion) {
        this.posicion = posicion;
    }
    getNroCamiseta() {
        return this.nroCamiseta;
    }
    setNroCamiseta(nro_camiseta) {
        if (nro_camiseta > 0) {
            this.nroCamiseta = nro_camiseta;
        }
    }
    isLesionado() {
        return this.lesionado;
    }
    setLesionado(lesionado) {
        if (lesionado) {
            this.estadoFisico = 0;
        }
        this.lesionado = lesionado;
    }
    setEstadoFisico(estado) {
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
    getEstadoFisico() {
        return this.estadoFisico;
    }
    getClub() {
        return this.club;
    }
    setClub(club) {
        this.club = club;
    }
    getPais() {
        return this.pais;
    }
    setPais(pais) {
        this.pais = pais;
    }
}
exports.Futbolista = Futbolista;
