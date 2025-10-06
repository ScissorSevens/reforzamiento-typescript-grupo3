
const calificaciones: number[] = [4.0, 3.8, 4.5, 3.9, 4.2];

const [primera, segunda] = calificaciones;


console.log("Primera calificación:", primera);
console.log("Segunda calificación:", segunda);


const [, , tercera] = calificaciones;
console.log("Tercera calificación:", tercera);


const calificacionesCortas: number[] = [5.0]; 
const [a = 0, b = 0] = calificacionesCortas;
console.log("a (con valor por defecto si hace falta):", a);
console.log("b (con valor por defecto si hace falta):", b);


const [prim, seg, ...resto] = calificaciones;
console.log("Resto de calificaciones:", resto);
