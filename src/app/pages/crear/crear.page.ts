import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ViajesService, Viajes } from 'src/app/services/viajes.service';
import { Platform, ToastController, IonList } from '@ionic/angular';


declare var google;

interface Marker {
  position: {
    lat: number;
    lng: number;
  };
  title: string;
}

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {
  markers: Marker[] = [
    {
      position: {
        lat: -33.5112593,
        lng: -70.7524922,
      },
      title: 'Duoc ',
    },
  ];

  datos: Viajes[] = [];
  newDato: Viajes = <Viajes>{};

  map = null;

  constructor(
    private menuController: MenuController,
    private viajeService: ViajesService,
    private plt: Platform,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    //this.loadMap()
  }

  mostrarMenu() {
    this.menuController.open('first');
  }

  addDatos() {
    this.newDato.id = Date.now();
    this.viajeService.addDatos(this.newDato).then((dato) => {
      this.newDato = <Viajes>{};
      this.showToast('Datos Agregados!');
    });
  }

  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }

  loadMap() {
    const mapEle: HTMLElement = document.getElementById('map');
    const myLatLng = { lat: -33.5112593, lng: -70.7524922 };
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12,
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.renderMarkers();
      mapEle.classList.add('show-map');
    });
  }

  renderMarkers() {
    console.log('entre render');
    this.markers.forEach((marker) => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title,
    });
  }

  async getLocation() {
    let geocoder = new google.maps.Geocoder();
    console.log(this.newDato.direccion);
    console.log(this.markers);
    let toast = 0;

    let newMarkers = this.markers;

    geocoder.geocode(
      { address: this.newDato.direccion },
      function (results, status) {
        console.log(status);
        if (status === 'OK') {
          let marker: Marker = {
            position: {
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng(),
            },
            title: 'Destino',
          };

          newMarkers.push(marker);
        } else {
          toast = 1;
        }
      }
    );

    if ((toast = 1)) {
      this.showToast('No se encontro la dirreccion');
    }

    this.markers = newMarkers;

    this.loadMap();
  }

  hola() {
    this.loadMap();
  }
}
