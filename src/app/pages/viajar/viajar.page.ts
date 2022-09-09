import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Viaje{
  direccion:string;
  precio:string;
  nombre:string;
  espacios:string;
}

@Component({
  selector: 'app-viajar',
  templateUrl: './viajar.page.html',
  styleUrls: ['./viajar.page.scss'],
})
export class ViajarPage implements OnInit {

  constructor(private menuController:MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open("first")
  }

  viajes:Viaje[]=[
    {
      direccion:"san benito",
      precio:"400",
      nombre:"Eduardo Silva",
      espacios:"3",
    },
    {
      direccion:"Las rosas",
      precio:"500",
      nombre:"Alfonso Torres",
      espacios:"1",
    }
  ]

}
