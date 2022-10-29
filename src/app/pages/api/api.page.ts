import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  personajes = [];

  constructor(private menuController: MenuController, private apiService : ApiService ) { }

  mostrarMenu() {
    this.menuController.open('first');
  }

  ngOnInit() {
    this.apiService.getApi().subscribe(resp=>{
      this.personajes = resp.results
    })
  }

}
