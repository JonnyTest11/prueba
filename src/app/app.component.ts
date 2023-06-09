import { Component } from '@angular/core';
import { Empleados } from "./modelos/empleados";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  empleadosArray: Empleados[] = [
    {id: 1, nombre: "Jonathan", apellido: "Gonzalez", ciudad: "Bogotá"},
    {id: 2, nombre: "Diego", apellido: "Gonzalez", ciudad: "Bogotá"},
    {id: 3, nombre: "Daniel", apellido: "Gonzalez", ciudad: "Bogotá"}
  ]

  seleccioneEmpleado: Empleados = new Empleados();

  abrirEditar(empleado: Empleados){
    this.seleccioneEmpleado = empleado;
  }

  agregarOEditar(){
    if (this.seleccioneEmpleado.id === 0) {
      this.seleccioneEmpleado.id = this.empleadosArray.length + 1;
      this.empleadosArray.push(this.seleccioneEmpleado);
    }
    this.seleccioneEmpleado = new Empleados();
  }
  
  eliminar(){
    if (confirm("¿Esta seguro de eliminarlo?")) {
      this.empleadosArray = this.empleadosArray.filter(x => x != this.seleccioneEmpleado);
      this.seleccioneEmpleado = new Empleados();
    }
  }
}
