import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


export interface Viajes{
  id:number;
  precio:number;
  numPasajeros:number;
  direccion:string;
}

const VIAJES_KEY='my-viajes';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  private _storage : Storage;

  constructor(private storage :Storage) {
    this.init();
  }

  async init(){
    const storage =await this.storage.create();
    this._storage=storage;
  }

  async addDatos(viaje: Viajes):Promise<any>{
    return this.storage.get(VIAJES_KEY).then((viajes: Viajes[])=>{ 
      if(viajes){
        viajes.push(viaje);     
        return this.storage.set(VIAJES_KEY, viajes);
      }
      else
        return this.storage.set(VIAJES_KEY, [viaje]);
    })
  }

  async getDatos():Promise<Viajes[]>{
    return this.storage.get(VIAJES_KEY);
  }


  async updateDatos(viaje: Viajes):Promise<any>{
    return this.storage.get(VIAJES_KEY).then((viajes: Viajes[])=>{
      if(!viajes || viajes.length==0){
        return null;
      }
      let newViaje: Viajes[] = [];
      for (let i of viajes){
        if(viaje.id == i.id){
          newViaje.push(viaje);
        }
        else{
          newViaje.push(i);
        }
      }
      this.storage.set(VIAJES_KEY, newViaje);
     })
  }


  async deleteDatos(id:number):Promise<Viajes>{
    return this.storage.get(VIAJES_KEY).then((viajes : Viajes[])=>{
      if (!viajes || viajes.length == 0){
        return null;
      }
      let toKeep: Viajes[] = []; 
      for (let i of viajes){
        if (i.id !== id){
          toKeep.push(i);
        }
      }
      return this.storage.set(VIAJES_KEY, toKeep);
    });
  }



}
