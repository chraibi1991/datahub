import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UpdatenetworkService {

  constructor(private http:HttpClient,) { }

  postNetwork(){

    return this.http.post('https://streetxpert.cephlabs.de/run-python2',{},{ responseType: 'text' })
  }
}
