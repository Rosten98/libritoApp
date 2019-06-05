import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Platform } from '@ionic/angular';
import { ComposerService } from '../services/composer.service';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  map: GoogleMap;
  btnA = 'btn-a';
  btnB = 'btn-b';

  constructor(private platform: Platform, private composer: ComposerService) { }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
  }

  loadMap() {
    // This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': environment.apiKey,
      'API_KEY_FOR_BROWSER_DEBUG': environment.apiKey
    });

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 20.679107,
           lng: -103.409574
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Centro San Igancio',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat: 20.679107,
        lng: -103.409574
      }
    });
  }

  sendMail( evt ) {
    const value = evt.target.id;

    if ( value === this.btnA ) {
      this.composer.enviarMail('Necesito información', 'Quisiera información sobre...');
    } else if ( value === this.btnB ) { 
      this.composer.enviarMail('Ejercicios Espirituales', 'Quisiera información sobre...');
    }

  }

}
