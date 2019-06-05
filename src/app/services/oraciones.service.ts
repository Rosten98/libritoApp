import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Oracion } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OracionesService {

  constructor(private http: HttpClient) { }

  getOraciones() {
    return this.http.get<Oracion[]>('../assets/oraciones.json').pipe(delay(400));
    // return this.http.get<Oracion[]>('../assets/oraciones.json');
  }
}
