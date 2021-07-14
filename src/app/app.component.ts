import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre:string = 'javier'
  valor:number = 10000;
  obj = {
    nombre: 'javier'
  }


  mostrarNombre =() => {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
    
  } 
}
