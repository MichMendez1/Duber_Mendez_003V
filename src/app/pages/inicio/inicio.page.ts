import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Usuario{
  Nombre:string;
  Contraseña:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  Usuarios:Usuario[]=[
    {
      Nombre:"Demo",
      Contraseña:"1234"
    }
  ]

  constructor(private menuController:MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open("first")
  }

}
