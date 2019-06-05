import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HomePage } from './home/home.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Oraciones',
      url: '/index',
      icon: 'list'
    },
    {
      title: 'Favoritas',
      url: '/favs',
      icon: 'star'
    },
    {
      title: 'Recordatorios',
      url: '/reminders',
      icon: 'notifications-outline'
    },
    {
      title: 'Intenciones de oración',
      url: '/intenciones',
      icon: 'paper-plane'
    },
    {
      title: 'Ejercicios Espituales',
      url: '/ejercicios',
      icon: 'heart'
    },
    {
      title: 'Donaciones',
      url: '/donations',
      icon: 'gift'
    },
    {
      title: 'Acerca de',
      url: '/about',
      icon: 'information-circle-outline'
    },
    {
      title: 'Contacto',
      url: '/contact',
      icon: 'pin'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
