const estudiante = {
  nombre: "Felipe",
  edad: 21,
  carrera: "Ingeniería de Sistemas",
  semestre: 9,
  descripcion(): string {
    return `${this.nombre} tiene ${this.edad} años, estudia ${this.carrera} y está en el semestre ${this.semestre}.`;
  }
};

console.log(estudiante.descripcion());
