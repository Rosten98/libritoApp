import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'index', loadChildren: './index/index.module#IndexPageModule' },
  { path: 'favs', loadChildren: './favs/favs.module#FavsPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'reminders', loadChildren: './reminders/reminders.module#RemindersPageModule' },
  { path: 'intenciones', loadChildren: './intenciones/intenciones.module#IntencionesPageModule' },
  { path: 'donations', loadChildren: './donations/donations.module#DonationsPageModule' },
  { path: 'ejercicios', loadChildren: './ejercicios/ejercicios.module#EjerciciosPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
