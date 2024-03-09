import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



HttpClient

@Injectable({
  providedIn: 'root'
})
export class ShapeService {

  constructor(private http:HttpClient,) { }

  getGeoJson(){

    return this.http.get('https://streetxpert.cephlabs.de/run-python')
  }

}
