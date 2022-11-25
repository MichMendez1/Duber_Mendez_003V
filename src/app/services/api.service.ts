import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient ) {}

  

  getApi(){
    let headers =new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json')
    headers = headers.set('Access-Control-Allow-Origin', '*')
    headers = headers.set('Access-Control-Allow-Headers', 'Content-Type')
    headers = headers.set('Access-Control-Allow-Methods', 'GET, POST')
    return (this.httpClient.get<any>("https://rickandmortyapi.com/api/character",{headers:headers}))     
  }


}
