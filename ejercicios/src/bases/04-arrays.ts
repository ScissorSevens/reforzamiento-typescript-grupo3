const calificaciones: number[] = [4.5, 3.8, 4.0, 5.0, 3.5];

let suma = 0;
for (let i = 0; i < calificaciones.length; i++) {
  suma += calificaciones[i];
}

const promedio = suma / calificaciones.length;
console.log("Promedio de calificaciones:", promedio);
