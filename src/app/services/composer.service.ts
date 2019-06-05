import { Injectable } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  constructor( private emailComposer: EmailComposer ) { }

  enviarMail( subject, message ) {
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
      }
     });
    let email = {
      to: 'infomexico@mileschristi.org',
      subject,
      body: message,
    };

    this.emailComposer.open(email);
  }
}
