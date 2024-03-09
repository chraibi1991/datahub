import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import metaData from '../../../assets/json/meta_new.json'; 
import { GlobalVariable } from '../../../../global';

@Component({
  selector: 'app-regioservice',
  templateUrl: './regioservice.component.html',
  styleUrls: ['./regioservice.component.css']
})
export class RegioService {
  private baseApiUrl = GlobalVariable.DATAHUB_URL;

  
  async getIndicatorData(objList: any[], indiList: any[]) {
    var url = this.baseApiUrl + '/getDataByIndAndKeyNew'; 

    var body = {"obj_keys": objList,
                "indi_keys": indiList}; 
    var result = await firstValueFrom(this.post(url, body)); 
    return result; 
  }

  constructor( 
    // Angular Modules 
    private http: HttpClient 
    ) { } 
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

    async getShapefilesLandkreisSA() {
      var results = [];
      var url = this.baseApiUrl + '/getShapeFileSALandkreis'; 
      console.log(url);
    
      try{
  
      var result = await firstValueFrom(this.http.get(url)); }
      catch(error) {
        return[]; 
      }
      results.push(result); 
      return results;
    }



    async getMetaData2(){
      return metaData; 
    }


    async getIndicatorMeta() {
      console.log("meta data in service ")

      var nw = JSON.parse(JSON.stringify(metaData))

      
      
      return nw; 

    
    }


  
    async getShapefileByIdAndLevel(place: string, selected: number) {
     /* if(selected == 3) {
        place = "15"; 
      }*/

      console.warn("in service", place, selected)
      var results = [];
      var url = this.baseApiUrl + '/getShapeFileByLevel/' + place + '/' + selected; 
      console.log(url);
    
      try{
  
      var result = await firstValueFrom(this.http.get(url)); }
      catch(error) {
        return[]; 
      }
      results.push(result); 
      return results;
    }

    async  getRegioDataByKey(obj_keys: string[]) {
      var url = this.baseApiUrl + '/getRegioDataByKey/'
      var body = {"Object_Key": obj_keys}; 
      var result = await firstValueFrom(this.post(url, body));    
      return result;
    }

    async getYearlyChangeChartData(body: any){

      var url = this.baseApiUrl + '/getYearlyChange/'
     
      var result = await firstValueFrom(this.post(url, body));    
      return result;
  
     }



     async getCompareChartData(body: any){

      var url = 'https://api2.cephlabs.de/comparison_metrics/calculate_comparison_stats'
     
      var result = await firstValueFrom(this.post(url, body));    
      return result;
  
     }
  

   async getGeneralChartData(body: any){

    var url = this.baseApiUrl + '/getGeneralChartData/'
   
    var result = await firstValueFrom(this.post(url, body));    
    return result;

   }

   async getChangeRateChart(body: any){

    var url = this.baseApiUrl + '/getChangeRateChart/'
   
    var result = await firstValueFrom(this.post(url, body));    
    return result;

   }


    async  getCompGraphData() {
      var url = 'http://api2.cephlabs.de/comparison_metrics/calculate_comparison_stats'
      var body =  {
        "startYear": 2017,
        "endYear": 2019,
        "selectedAdminLevel": 3,
        "selectedLandkreisKey": "15084",
         "Key": "Barmer1"
      }
      var result = await firstValueFrom(this.post(url, body));    
      return result;
    }



    async  getRegioDataByKeyAndInd(obj_keys: string[], wvk: string) {
      var url = this.baseApiUrl + '/getDataByIndAndKeys'
      var body = {"Object_Key": obj_keys, 'indicators' : [ wvk ]} ; 
      var result = await firstValueFrom(this.post(url, body));    
      return result;
    }



  async getDistanceMatrix(starter: any, markers: any = []) : Promise<number[]> {

    var objList = []; 
  
    objList.push([starter.getLatLng().lng,starter.getLatLng().lat]); 
    markers.forEach((element: { geometry: { coordinates: any[]; }; }) => {objList.push([element.geometry.coordinates[0],element.geometry.coordinates[1]]); });

    var url =  'https://ors.bunsencloud.de/ors/v2/matrix/driving-car';     
    var body = {"locations": objList}; 
    var result = await firstValueFrom(this.post(url, body)); 

   //@ts-ignore
    var res = result.durations[0].shift()
    //@ts-ignore
    return result.durations[0];

  }

  

}
