import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ViajesService, Viajes } from 'src/app/services/viajes.service';
import { Platform, ToastController, IonList } from '@ionic/angular';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})

export class CrearPage implements OnInit {
  
  datos :Viajes[]=[];
  newDato:Viajes=<Viajes>{};
  
  
  constructor(
    private menuController: MenuController,
    private viajeService: ViajesService,
    private plt: Platform,
    private toastController: ToastController
  ) {
  }

  ngOnInit() {}

  mostrarMenu() {
    this.menuController.open('first');
  }

  addDatos(){
    this.newDato.id=Date.now();
    console.log(this.newDato)
    this.viajeService.addDatos(this.newDato).then(dato => { 
      this.newDato = <Viajes>{};
      this.showToast('Datos Agregados!');
    })
  }

  async showToast(msg){
    const toast = await this.toastController.create({ 
      message : msg,
      duration: 2000
    })
    toast.present();
  }


}
