import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StreetService {

  constructor(private http:HttpClient,) { }

  getMultiLineString(street:any){
    return this.http.get('https://streetxpert.cephlabs.de/run-python3?street='+street)
  }
}
