import { Component, OnInit } from '@angular/core';
import { ComposerService } from '../services/composer.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-intenciones',
  templateUrl: './intenciones.page.html',
  styleUrls: ['./intenciones.page.scss'],
})
export class IntencionesPage implements OnInit {
  intencion: string = '';

  constructor(private composer: ComposerService, private toast: ToastService) { }

  ngOnInit() {
  }

  guardarIntenciones( evt ){
    this.intencion = evt.detail.value;
  }
  
  enviarIntenciones(){
    if ( this.intencion !== '') {
      console.log(this.intencion);
      this.composer.enviarMail('Intenciones de oración', this.intencion);
    } else {
      this.toast.presentToast( 'Ingresa tus intenciones por favor!', 'warning' );
    }
  }

}
