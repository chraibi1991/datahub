import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  constructor(private http: HttpClient) { }
  
  getPersonStatus(day:any){
    return this.http.get('https://geojsonservice.cephlabs.de/checkPersonStatus2',{ params: { day: day } })
    //return this.http.get('http://localhost:3030/checkPersonStatus2',{ params: { day: day } })
  }

  getInfections(day:any) {
    return this.http.get('https://geojsonservice.cephlabs.de/getInfections',{ params: { day: day } });
    //return this.http.get('http://localhost:3030/getInfections',{ params: { day: day } });
  }

  getStatus(day:any){
    return this.http.get('https://geojsonservice.cephlabs.de/getStatus',{ params: { day: day } })
    //return this.http.get('http://localhost:3030/getStatus',{ params: { day: day } })
  }

  getCases(day:any){
    return this.http.get('https://geojsonservice.cephlabs.de/getCases',{ params: { day: day } })
    //return this.http.get('http://localhost:3030/getCases',{ params: { day: day } })
  }

  getSachsenAnhaltShape(){
    return this.http.get('https://geojsonservice.cephlabs.de/getSachsenAnhaltShape')
  }

  getBurgenlandkreisShape(){
    return this.http.get('https://geojsonservice.cephlabs.de/getBurgenlandkreisShape')
  }

  getAdress(){
    return this.http.get('/assets/street_names_blk.geojson')
  }

  // gettest(){
  //   return this.http.get('assets/test.json')
  // }


}