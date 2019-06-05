import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastCtrl: ToastController) { }

  async presentToast( message, color ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color,
      buttons: [{
        text: 'Ok',
        role: 'cancel',
      }]
    });
    toast.present();
  }
}
