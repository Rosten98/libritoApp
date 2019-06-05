import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Oracion } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../components/detail/detail.component';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.page.html',
  styleUrls: ['./favs.page.scss'],
})
export class FavsPage {
  titulo = 'Favoritos';
  favoritas: any;

  constructor(
    private storageService: StorageService,
    private modalCtrl: ModalController
  ) { }

  async ionViewWillEnter() {
    this.favoritas = await this.storageService.cargarOraciones();
  }

  async verOracion( event, oracion ) {
    const modal = await this.modalCtrl.create({
      component: DetailComponent,
      componentProps: { oracion }
    });

    modal.onWillDismiss()
    .then( async () => this.favoritas = await this.storageService.cargarOraciones());

    return await modal.present();
  }

}
