import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { ViajesService, Viajes } from '../../services/viajes.service';


@Component({
  selector: 'app-misviajes',
  templateUrl: './misviajes.page.html',
  styleUrls: ['./misviajes.page.scss'],
})
export class MisviajesPage implements OnInit {
  datos: Viajes[] = [];
  newDato: Viajes = <Viajes>{};

  constructor(
    private menuController: MenuController,
    private viajesService: ViajesService,
    private toastController: ToastController
  ) {this.loadDatos();}
  

  ngOnInit() {
    
  }

  mostrarMenu() {
    this.menuController.open('first');
  }

  loadDatos(){
    this.viajesService.getDatos().then(datos=>{ 
      this.datos = datos;
    })

    console.log(this.datos)
  }

  async showToast(msg){
    const toast = await this.toastController.create({ 
      message : msg,
      duration: 2000
    })
    toast.present();
  }

  updateDatos(dato: Viajes ){
    dato.direccion = `UPDATED: ${dato.direccion}`;
    this.viajesService.updateDatos(dato).then(item=>{
      this.showToast('Elemento actualizado!')
      this.loadDatos();
    });
  } 

  deleteDatos(dato: Viajes){
    this.viajesService.deleteDatos(dato.id).then(item=>{
      this.showToast('Elemento eliminado');
      this.loadDatos();
    });
  }
  
}
