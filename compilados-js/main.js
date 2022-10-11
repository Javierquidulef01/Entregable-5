"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Futbolista_1 = require("./Futbolista");
const Entrenador_1 = require("./Entrenador");
const Masajista_1 = require("./Masajista");
const SeleccionFutbol_1 = require("./SeleccionFutbol");
let f1 = new Futbolista_1.Futbolista("Franco", "Armani", "Arquero", 1, false, "River Plate", "Argentina");
let f2 = new Futbolista_1.Futbolista("Gonzalo", "Montiel", "Defensor", 4, false, "Sevilla", "España");
let f3 = new Futbolista_1.Futbolista("Cristian", "Romero", "Defensor", 13, false, "Tottenham", "Inglaterra");
let f4 = new Futbolista_1.Futbolista("Nicolás", "Otamendi", "Defensor", 19, false, "Benfica", "Portugal");
let f5 = new Futbolista_1.Futbolista("Nicolás", "Tagliafico", "Defensor", 3, true, "Olympique de Lyon", "Francia");
let f6 = new Futbolista_1.Futbolista("Enzo", "Fernández", "Mediocampista", 14, false, "Benfica", "Portugal");
let f7 = new Futbolista_1.Futbolista("Giovani", "Lo Celso", "Mediocampista", 20, false, "Villareal", "España");
let f8 = new Futbolista_1.Futbolista("Rodrigo", "De Paul", "Mediocampista", 7, false, "Atlético Madrid", "España");
let f9 = new Futbolista_1.Futbolista("Angel", "Di María", "Delantero", 11, true, "Juventus", "Italia");
let f10 = new Futbolista_1.Futbolista("Lionel", "Messi", "Delantero", 10, false, "Paris Saint-Germain", "Francia");
let f11 = new Futbolista_1.Futbolista("Julián", "Alvarez", "Delantero", 9, false, "Manchester City", "Inglaterra");
let f12 = new Futbolista_1.Futbolista("Emiliano", "Martínez", "Arquero", 23, false, "Aston Villa", "Inglaterra");
let f13 = new Futbolista_1.Futbolista("Lisandro", "Martínez", "Defensor", 2, false, "Manchester United", "Inglaterra");
let f14 = new Futbolista_1.Futbolista("Germán", "Pezzella", "Defensor", 6, false, "Real Betis", "España");
let f15 = new Futbolista_1.Futbolista("Leandro", "Paredes", "Mediocampista", 5, false, "Juventus", "Italia");
let f16 = new Futbolista_1.Futbolista("Guido", "Rodriguez", "Mediocampista", 18, false, "Real Betis", "España");
let f17 = new Futbolista_1.Futbolista("Paulo", "Dybala", "Delantero", 21, false, "Roma", "Italia");
let f18 = new Futbolista_1.Futbolista("Lautaro", "Martínez", "Delantero", 22, false, "Inter", "Italia");
f17.setEstadoFisico(-66);
let futbolistas = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f16, f17, f18];
console.table(futbolistas);
let entrenador = new Entrenador_1.Entrenador("Lionel", "Scaloni", "Argentina");
let m1 = new Masajista_1.Masajista("Omar", "Gutierrez", "Masajista");
let m2 = new Masajista_1.Masajista("Lucas", "Aquino", "Masajista");
let masajistas = [m1, m2];
let seleccionArgentina = new SeleccionFutbol_1.SeleccionFutbol(futbolistas, entrenador, masajistas);
seleccionArgentina.getFubolistas().forEach(jugador => {
    seleccionArgentina.getEntrenador().entrenarFutbolista(jugador);
    if (jugador.isLesionado() || jugador.getEstadoFisico() < 50) {
        while (jugador.getEstadoFisico() < 90) {
            seleccionArgentina.getEntrenador().darDescanso(jugador);
            seleccionArgentina.getMasajistas()[0].atenderFutbolista(jugador);
        }
    }
    if ([23, 22, 21, 2, 6, 5, 18].includes(jugador.getNroCamiseta())) {
        jugador.setEstadoFisico(-15);
    }
});
console.table(seleccionArgentina.getFubolistas());
let titulares = [];
seleccionArgentina.getFubolistas().forEach(jugador => {
    let once = 0;
    if (jugador.getEstadoFisico() >= 90 && once < 11) {
        titulares.push(jugador);
        once += 1;
    }
});
seleccionArgentina.getEntrenador().seleccionarEsquema(4, 3, 3);
seleccionArgentina.getEntrenador().seleccionar11Titualers(titulares);
console.log("--------------------TITULARES-----------------------------");
console.table(seleccionArgentina.getEntrenador().getTitulares());
