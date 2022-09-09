import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import {Router } from '@angular/router'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  handlerMessage = '';
  roleMessage = '';

  constructor(private menuController:MenuController,private alertController: AlertController, private router:Router) { }

  ngOnInit() {
  }

  usuario={
    nombre:"",
    password:"",
    telefono:"",
    email:"",
  }

  mostrarMenu(){
    this.menuController.open("first")
  }
  

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Registrado con Exito',
      message:"Bienvenido ",
      buttons: [
        {
          text: 'OK',
          role: 'accept',
          
          handler: () => {
            this.handlerMessage = 'OK';
          },
        },
      ],
    });

    await alert.present();
    this.router.navigate(['/somos'])
  }

  onSubmit(){
    this.presentAlert()
  }


}

