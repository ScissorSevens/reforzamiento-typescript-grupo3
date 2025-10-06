
const estudiante = {
  nombre: "Edward Ramírez",
  edad: 22,
  carrera: "Ingeniería de Sistemas",
  semestre: 9,
 
  descripcion() {
    return `${this.nombre} está en ${this.carrera}, semestre ${this.semestre}.`;
  }
};


const { nombre, carrera } = estudiante;


console.log("Nombre (desestructurado):", nombre);
console.log("Carrera (desestructurada):", carrera);


console.log("Descripción completa:", estudiante.descripcion());
