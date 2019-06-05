import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

import { Oracion } from '../../interfaces/interfaces';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private storageService: StorageService
    ) { }

  oracion: Oracion;

  latin: boolean;
  idioma: boolean;
  espanol = false;
  instrucciones = false;
  estrella: string = 'star-outline';

  async ngOnInit() {

    this.oracion = this.navParams.get('oracion');
    this.storageService.enFavoritas( this.oracion.title ).then(existe => this.estrella = (existe) ? 'star' : 'star-outline' );

    if ( this.oracion.contenido_lat ) {
      this.idioma = true;
      this.latin = true;
    }

    if ( this.oracion.instrucciones ) {
      this.instrucciones = true;
    }

  }

  regresar() {
    this.modalCtrl.dismiss();
    // this.storageService.cargarOraciones();
  }

  favs() {
    const existe = this.storageService.guardarOracion( this.oracion );
    this.estrella = existe ? 'star' : 'star-outline';
  }

  cambiarIdioma() {
    if ( this.espanol ) {
      this.latin = true;
      this.espanol = false;
    } else {
      this.latin = false;
      this.espanol = true;
    }
  }

}
