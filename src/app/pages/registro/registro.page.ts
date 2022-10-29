import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsuarioService, Usuario } from 'src/app/services/usuario.service';
import { ToastController } from '@ionic/angular';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';
  formularioRegistro: FormGroup;
  newUsuario: Usuario = <Usuario>{};

  private siFormControl = new FormControl(false)
  private noFormControl = new FormControl(false)

  constructor(
    private menuController: MenuController,
    private alertController: AlertController,
    private router: Router,
    private fb : FormBuilder,
    private toastController:ToastController,
    private registroServive:UsuarioService
  ) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'telefono': new FormControl("",Validators.required),
      'email': new FormControl("",Validators.required),
      
    })
  }

  ngOnInit( ) { this.verificar()}

  usuario = {
    nombre: '',
    password: '',
    telefono: '',
    email: '',
    conductor: '',
  };

  private existe =false;

  usuarios: Usuario[] = [{nomUsuario:"",passUsuario:"",mailUsuario:"",telUsuario:"",conductor:false}];

  mostrarMenu() {
    this.menuController.open('first');
  }

  async CrearUsuario(){
    this.existe=false;
    var form = this.formularioRegistro.value;
    if(this.formularioRegistro.invalid || this.siFormControl.value==false && this.noFormControl.value==false){
      const alert = await this.alertController.create({
        header:"Datos incompletos",
        message:"Debe completar todos los datos",
        buttons:['Aceptar'],
      })
      await alert.present()
      return
    }

    for(let usu of this.usuarios){
      if(form.email == usu.mailUsuario){
        this.Menssaje()
        return
      }
      else{

        this.newUsuario.nomUsuario=form.nombre,
        this.newUsuario.passUsuario=form.password,
        this.newUsuario.mailUsuario=form.email,
        this.newUsuario.telUsuario=form.telefono
    
        if(this.siFormControl.value==true){
          this.newUsuario.conductor = true
        }else{
          this.newUsuario.conductor = false
        }
        console.log(this.newUsuario)
    
        this.registroServive.registrar(this.newUsuario).then(dato=>{
          this.newUsuario=<Usuario>{};
          this.showToast('!Datos agregados')
        })
        await this.verificar();
    
        this.router.navigate(['/login'])
      }
    }
    

  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message:msg,
      duration:2000
    });
    toast.present();
  }

  async verificar(){
    var form = this.formularioRegistro.value;
    var a = 0;
    this.registroServive.getUsuarios().then(datos=>{
      if(datos !== null){
        this.usuarios=datos;
      }
      for (let obj of this.usuarios){
          a=1;
          this.usuarios.push(obj)
          this.existe = true
          console.log(this.usuarios)
          return true
        
      }
      console.log(a)
      if(a==0){
        this.existe=false
        return false
      }
    });  
  }

  async Menssaje(){
    const alert =await this.alertController.create({
      header:"Error",
      message:`El correo ingresado ya esta registrado,`,
      buttons:['Aceptar']
    });
    await alert.present();
    return;

  }
  

}
