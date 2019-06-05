import { Component, OnInit } from '@angular/core';
import { OracionesService } from '../services/oraciones.service';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../components/detail/detail.component';
import { Oracion } from '../interfaces/interfaces';


@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  oraciones: Oracion[] = [];
  oracionesBusqueda: Oracion[] = [];
  titulo = 'Oraciones';

  constructor(
    private oracionesService: OracionesService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.oracionesService.getOraciones().subscribe( resp => this.oraciones.push(...resp));
    this.oracionesBusqueda = this.oraciones;
  }
  
  reiniciarDatos(){
    this.oracionesBusqueda = this.oraciones;
  }

  buscarOracion( event ) {
    const value = event.target.value;
    this.reiniciarDatos();
    if ( value !== '' ) {
      this.oracionesBusqueda = this.oracionesBusqueda.filter( (oracion) => {
        return (oracion.nombre.toLowerCase().indexOf(value.toLowerCase()) !== -1);
      });
    } else {
      this.reiniciarDatos();
    }

  }


  async verOracion( event, oracion ) {
    const modal = await this.modalCtrl.create({
      component: DetailComponent,
      componentProps: { oracion }
    });

    return await modal.present();
  }
}
