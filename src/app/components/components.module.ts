import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  entryComponents:[
    DetailComponent
  ],
  declarations: [
    HeaderComponent,
    DetailComponent
  ],
  exports: [
    HeaderComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
