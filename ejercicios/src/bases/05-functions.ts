function calcularPromedio(numeros: number[]): number {
  let suma = 0;
  for (const num of numeros) {
    suma += num;
  }
  return numeros.length > 0 ? suma / numeros.length : 0;
}

// Probar la función
const notas = [4.2, 3.9, 4.8, 3.5, 5.0];
const resultado = calcularPromedio(notas);

console.log("El promedio calculado es:", resultado);
