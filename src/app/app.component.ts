import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes:Componente[]=[
    {
      icon: 'home-outline',name: 'Inicio',redirecTo: '/somos'
    },
    {
      icon: 'car-outline',name: 'Crear viaje',redirecTo: '/crear'
    },
    {
      icon: 'car-outline',name: 'Buscar viaje',redirecTo: '/viajar'
    },
    {
      icon: 'clipboard-outline',name: 'Mis Viajes',redirecTo: '/misviajes'
    }, 
    {
      icon: 'log-out-outline',name: 'Salir',redirecTo: '/inicio'
    },

    

  ]

}
