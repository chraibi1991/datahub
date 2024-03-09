import { Component } from '@angular/core';
import { GlobalVariable } from '../../../../../global';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-vorsorgeservice',
  templateUrl: './vorsorgeservice.component.html',
  styleUrls: ['./vorsorgeservice.component.css']
})
export class VorsorgeserviceComponent {
  private vorsorgeURL = GlobalVariable.VORSORGE_URL;


  constructor(private http: HttpClient) {

  }



  
  async getIndicators(typ : any){

    var url = 'https://api3.cephlabs.de/meta_daseinsvorsorge/get_available_indicators?typ=' + typ; 
    var res = await firstValueFrom(this.http.get(url));
    return res; 

  }


  async getDemandTable(typ : any){

    var url = 'https://api3.cephlabs.de/meta_daseinsvorsorge/get_demand_tables?typ=' + typ; 
    var res = await firstValueFrom(this.http.get(url));
    return res; 

  }

 

  async getMedInfrastructure(){

    var url = 'https://api3.cephlabs.de/meta_daseinsvorsorge/get_available_infrastructure';
    var res = await firstValueFrom(this.http.get(url));
    return res; 

  }

  async getPopulation(){

    var url = 'https://api3.cephlabs.de/meta_daseinsvorsorge/get_available_pops';
    var res = await firstValueFrom(this.http.get(url));
    return res; 

  }



  async getNachfrageMetrics(body: any) {
    var url = 'https://api3.cephlabs.de/calculation_daseinsvorsorge/calculate_metrics'

   


  console.warn(body); 
  var result = await firstValueFrom(this.post(url, body)); 
  return result; 
  }

  async updateMarkerAndGetResult(markers: any) {
    var url = this.vorsorgeURL + '/notfall/update_notfall_location'
  
   
    var body = {
      "einrichtungen_position": markers
  };

  console.warn("MY BODY", body); 
  var result = await firstValueFrom(this.post(url, body)); 
  return result; 
  }
  async getNotfallOptimization(){

    var url = this.vorsorgeURL + '/notfall/get_notfall_optimization';
    var res = await firstValueFrom(this.http.get(url));
    return res; 

  }

  async getInitialResult(){
    var url = this.vorsorgeURL + '/notfall/get_notfall_times_current'; 
    var res = await firstValueFrom(this.http.get(url));
    return res; 
  }

  async getInitialResultBuffer(){


    var url = 'https://s1.api.cephlabs.de/notfall/get_notfall_times_current';
    var res = await firstValueFrom(this.http.get(url));
    return res; 
   
  }


 




  public get(url: string, options?: any) { 
    return this.http.get(url, options); 
    } 
    public post(url: string, data: any, options?: any) { 
    return this.http.post(url, data, options); 
    } 
    public put(url: string, data: any, options?: any) { 
    return this.http.put(url, data, options); 
    } 
    public delete(url: string, options?: any) { 
    return this.http.delete(url, options); 
    } 
}
