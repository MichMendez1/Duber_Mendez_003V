import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import {Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';

  constructor(private menuController:MenuController,private alertController: AlertController, private router:Router ) { }

  ngOnInit() {
  }

  ru={
    nombre:"Michael",
    password:"1234"
  }
  


  mostrarMenu(){
    this.menuController.open("first")
  }

  usuario={
    nombre:"",
    password:""
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login Exitoso',
      message:"Bienvenido " + this.usuario.nombre ,
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


  async failAlert() {
    const alert = await this.alertController.create({
      header: 'Problema al logiar',
      message:"Usuario o contraseña incorrecta vuelva a intentarlo",
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
    
  }

  onSubmit(){
    console.log("entre")
    console.log(this.usuario)
    if(this.usuario.nombre.toLowerCase() == this.ru.nombre.toLowerCase() && this.usuario.password.toLowerCase() == this.ru.password.toLowerCase()){
      this.presentAlert()
    }else{
      this.failAlert()
    }
    
  }

}


