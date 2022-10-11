import { Futbolista } from "./Futbolista";
import { Entrenador } from "./Entrenador";
import { Masajista } from './Masajista';
import { SeleccionFutbol } from './SeleccionFutbol';

let f1 = new Futbolista("Franco", "Armani", "Arquero", 1, false, "River Plate", "Argentina");
let f2 = new Futbolista("Gonzalo", "Montiel", "Defensor", 4, false, "Sevilla", "España");
let f3 = new Futbolista("Cristian", "Romero", "Defensor", 13, false, "Tottenham", "Inglaterra");
let f4 = new Futbolista("Nicolás", "Otamendi", "Defensor", 19, false, "Benfica", "Portugal");
let f5 = new Futbolista("Nicolás", "Tagliafico", "Defensor", 3, true, "Olympique de Lyon", "Francia")
let f6 = new Futbolista("Enzo", "Fernández", "Mediocampista", 14, false, "Benfica", "Portugal");
let f7 = new Futbolista("Giovani", "Lo Celso", "Mediocampista", 20, false, "Villareal", "España");
let f8 = new Futbolista("Rodrigo", "De Paul", "Mediocampista", 7, false, "Atlético Madrid", "España");
let f9 = new Futbolista("Angel", "Di María", "Delantero", 11, true, "Juventus", "Italia");
let f10 = new Futbolista("Lionel", "Messi", "Delantero", 10, false, "Paris Saint-Germain", "Francia");
let f11 = new Futbolista("Julián", "Alvarez", "Delantero", 9, false, "Manchester City", "Inglaterra");

let f12 = new Futbolista("Emiliano", "Martínez", "Arquero", 23, false, "Aston Villa", "Inglaterra");
let f13 = new Futbolista("Lisandro", "Martínez", "Defensor", 2, false, "Manchester United", "Inglaterra");
let f14 = new Futbolista("Germán", "Pezzella", "Defensor", 6, false, "Real Betis", "España");
let f15 = new Futbolista("Leandro", "Paredes", "Mediocampista", 5, false, "Juventus", "Italia");
let f16 = new Futbolista("Guido", "Rodriguez", "Mediocampista", 18, false, "Real Betis", "España");
let f17 = new Futbolista("Paulo", "Dybala", "Delantero", 21, false, "Roma", "Italia");
let f18 = new Futbolista("Lautaro", "Martínez", "Delantero", 22, false, "Inter", "Italia");

f17.setEstadoFisico(-66);

let futbolistas: Futbolista[] = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f16, f17, f18];
console.table(futbolistas);

let entrenador = new Entrenador("Lionel", "Scaloni", "Argentina");

let m1 = new Masajista("Omar", "Gutierrez", "Masajista");
let m2 = new Masajista("Lucas", "Aquino", "Masajista");

let masajistas: Masajista[] = [m1, m2];

let seleccionArgentina: SeleccionFutbol = new SeleccionFutbol(futbolistas, entrenador, masajistas);

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

let titulares: Futbolista[] = [];

seleccionArgentina.getFubolistas().forEach(jugador => {
    let once: number = 0;
    if (jugador.getEstadoFisico() >= 90 && once < 11) {
        titulares.push(jugador);
        once += 1;
    }
});

seleccionArgentina.getEntrenador().seleccionarEsquema(4, 3, 3);
seleccionArgentina.getEntrenador().seleccionar11Titualers(titulares);
console.log("--------------------TITULARES-----------------------------")
console.table(seleccionArgentina.getEntrenador().getTitulares());