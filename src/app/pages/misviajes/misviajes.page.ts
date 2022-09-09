import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Viaje{
  direccion:string;
  precio:string;
  nombre:string;
  espacios:string;
}

@Component({
  selector: 'app-misviajes',
  templateUrl: './misviajes.page.html',
  styleUrls: ['./misviajes.page.scss'],
})
export class MisviajesPage implements OnInit {

  constructor(private menuController:MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open("first")
  }

  viajes:Viaje[]=[
    {
      direccion:"san benito",
      precio:"200",
      nombre:"Eduardo Silva",
      espacios:"1",
    },
    
  ]
}
