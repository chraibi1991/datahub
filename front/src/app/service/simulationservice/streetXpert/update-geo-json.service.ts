import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateGeoJsonService {

  constructor(private http:HttpClient,) { }

  postGeoJson(dataj:any){

    return this.http.post('https://streetxpert.cephlabs.de/run-python',dataj,{ responseType: 'text' })
  }
}
