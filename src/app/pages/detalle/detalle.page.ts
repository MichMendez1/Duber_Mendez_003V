import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Viaje{
  direccion:string;
  precio:string;
  nombre:string;
  espacios:string;
  pasajeros:string[];
}

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  constructor(private menuController:MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open("first")
  }

  viajes:Viaje=
    {
      direccion:"san benito",
      precio:"200",
      nombre:"Eduardo Silva",
      espacios:"1",
      pasajeros:["Juanito Perez","no se quien mas XD"]
    }
    
  

}
