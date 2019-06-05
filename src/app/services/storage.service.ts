import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Oracion } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  oraciones: Oracion[] = [];

  constructor(
    private storage: Storage,
    private toast: ToastService
    ) { }

  guardarOracion( oracion: Oracion ){
    const existe = this.oraciones.find(or => or.title === oracion.title);
    let mensaje = '';
    let color = '';

    if ( existe ) {
      this.oraciones = this.oraciones.filter(or => or.title !== oracion.title );
      mensaje = '¡ Oración eliminada de favoritos !';
      color = 'danger';
    } else {
      this.oraciones.push( oracion );
      mensaje = '¡ Oración guardada en favoritos !';
      color = 'success';
    }

    this.toast.presentToast( mensaje, color );
    this.storage.set('Oraciones', this.oraciones );
    return !existe;
  }

  async cargarOraciones() {
    const favoritas = await this.storage.get('Oraciones');
    this.oraciones = favoritas || [];
    // console.log('Cargar favs', favoritas);
    return this.oraciones;
  }

  async enFavoritas( title ) {
    await this.cargarOraciones();
    const existe = this.oraciones.find( fav => fav.title === title);
    return (existe) ? true : false;
  }

}
