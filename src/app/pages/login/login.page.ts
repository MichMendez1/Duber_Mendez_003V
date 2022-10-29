import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsuarioService, Usuario } from 'src/app/services/usuario.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formulariosLogin: FormGroup;
  usuarios: Usuario[] = [];

  constructor(
    private menuController: MenuController,
    private alertController: AlertController,
    private router: Router,
    private registroService: UsuarioService,
    private fb: FormBuilder
  ) {
    this.formulariosLogin = this.fb.group({
      'correo':new FormControl("",Validators.required),
      'password':new FormControl("",Validators.required)
    })
  }

  ngOnInit() {}

  mostrarMenu() {
    this.menuController.open('first');
  }

  async Ingresar(){
    var f = this.formulariosLogin.value;
    var a = 0;
    this.registroService.getUsuarios().then(datos=>{
      this.usuarios=datos;
      if(datos.length == 0){
        console.log("entre")
        this.alertMsg()
        return null;
      }

      for (let obj of this.usuarios){
        if(obj.mailUsuario == f.correo && obj.passUsuario == f.password){
          a=1;
          this.Bienvenida(obj.nomUsuario)
          console.log('ingresado');
          localStorage.setItem("ingresado",'true');
          this.router.navigate(['/somos'])
        }
      }
      console.log(a)
      if(a==0){
        this.alertMsg();
      }
    });  
  }

  async Bienvenida(msg){
    const alert =await this.alertController.create({
      header:"Bienvenido",
      message:`Bienvenido ${msg}`,
      buttons:['Aceptar']
    });
    await alert.present();
    return;

  }
  

  async alertMsg(){
    const alert =await this.alertController.create({
      header:"Error..",
      message:'!Los datos ingresados no son correctos',
      buttons:['Aceptar']
    });
    await alert.present();
    return;

  }
}
