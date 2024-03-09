import { Component } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { GlobalVariable } from '../../../../global';
import { HttpClient } from '@angular/common/http';
import rasterResponse from '../../../assets/json/raster.json';
import umkreisResponse from '../../../assets/json/umkreis.json';


@Component({
  selector: 'app-routingservice',
  templateUrl: './routingservice.component.html',
  styleUrls: ['./routingservice.component.css']
})
export class RoutingserviceComponent {
  private baseApiUrl = GlobalVariable.ROUTING_URL;
  imageToShow: string | ArrayBuffer | null | undefined;


  constructor(private http: HttpClient) {
    
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.imageToShow = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
 }

 getImage(imageUrl: string): Observable<Blob> {
  return this.http.get(imageUrl, { responseType: 'blob' });
}
 getImageFromService() {
  var url = 'https://api.cephlabs.de/erreichbarkeit/png_from_point_chosen?coordinates=12.1179&coordinates=51.0733'
  var isImageLoading = true;
  this.getImage(url).subscribe(data => {
    this.createImageFromBlob(data);
    isImageLoading = false;
  }, error => {
    isImageLoading = false;
    console.log(error);
  });
}

  async getPng(lat : any, lng: any) {
  
    var url = 'https://api.cephlabs.de/erreichbarkeit/png_from_point_chosen?coordinates=' + lng + "&coordinates=" + lat;
    var result = await firstValueFrom(this.http.get(url)); // skip for the moment due to CORS problems 
    
    //@ts-ignore
    return result[0];
  }

  

  async getIsochrone(req : any) {
    var einrichtungString = '';
    req.gesuchter_typ.forEach((einrichtung: string) => {
      einrichtungString = einrichtungString + "&gesuchter_typ=" + einrichtung + "&";       
    });
    console.log('streetR'+req.street_name+"k")
      if(req.street_name){
        var url = this.baseApiUrl + "/erreichbarkeit/get_einrichtungen_and_isochrone_from_point_fahrzeit?coordinates=" + req.position.lng +
        "&coordinates=" + req.position.lat  + "&max_fahrzeit="+ req.radius_time + einrichtungString + "only_burgenlandkreis=" + req.only_burgenlandkreis + "&mode=" + req.mode +"&street_name="+req.street_name;
      }else{
      var url = this.baseApiUrl + "/erreichbarkeit/get_einrichtungen_and_isochrone_from_point_fahrzeit?coordinates=" + req.position.lng +
      "&coordinates=" + req.position.lat  + "&max_fahrzeit="+ req.radius_time + einrichtungString + "only_burgenlandkreis=" + req.only_burgenlandkreis + "&mode=" + req.mode  
      }

    //var url = "https://api.cephlabs.de/get_einrichtungen_and_isochrone_from_point_fahrzeit?coordinates=12.1179&coordinates=51.0733&max_fahrzeit=10&gesuchter_typ=Supermarkt&gesuchter_typ=Kindertagesstaette&only_burgenlandkreis=true"

   //var result = umkreisResponse; 
    var result = await firstValueFrom(this.http.get(url)); // skip for the moment due to CORS problems
    console.log("isochrone")
    console.log(url)

      

    return result;
  }


  
  
  

  async getUmkreissuche(req : any) {
    var einrichtungString = '';
    req.gesuchter_typ.forEach((einrichtung: string) => {
      einrichtungString = einrichtungString + "&gesuchter_typ=" + einrichtung + "&";       
    });

    if(req.street_name){
    var url = this.baseApiUrl + "/erreichbarkeit/get_umkreis_einrichtungen_distance?coordinates=" + req.position.lng +
   "&coordinates=" + req.position.lat  + "&max_distance="+ req.radius_meter + einrichtungString + "only_burgenlandkreis=" + req.only_burgenlandkreis+ "&street_name="+req.street_name; 
    }
    else{
          var url = this.baseApiUrl + "/erreichbarkeit/get_umkreis_einrichtungen_distance?coordinates=" + req.position.lng +
    "&coordinates=" + req.position.lat  + "&max_distance="+ req.radius_meter + einrichtungString + "only_burgenlandkreis=" + req.only_burgenlandkreis; 
    }
    console.log(url); 
   //var result = umkreisResponse; 
    var result = await firstValueFrom(this.http.get(url)); // skip for the moment due to CORS problems

    console.log(result); 

    return result;
  }

  async getReachViaURL(url : any) {
   
    var result = await firstValueFrom(this.http.get(url)); 

 

    return result;
  }


  async getRasterAnalyse(req : any) {
    
    var gemeindeKey = '';
    if(req.gemeinde){
      gemeindeKey = "&gemeinde=" + req.gemeinde ; 
    }
   var url = 'https://api.cephlabs.de/erreichbarkeit/raster_analyse_pop_einrichtungen?pop=' + req.pop +"&year="+ req.year +"&age_from=" + req.age_from +
   "&age_to=" + req.age_to + "&mode=" + req.mode + "&gesuchter_typ=" + req.gesuchter_typ[0] + gemeindeKey + "&only_burgenlandkreis=" + req.only_burgenlandkreis; 
   console.log(url); 
   var result = await firstValueFrom(this.http.get(url)); 
   return result;
  
  }









//// ahmed ////
  async getLocationName(latlng:any){
    if(latlng){
      let url ='https://api.cephlabs.de/erreichbarkeit/get_location_name?coordinates=' + latlng.lng + "&coordinates=" + latlng.lat;

      var result = await firstValueFrom(this.http.get(url)); 
      console.log(result)
      //@ts-ignore
      console.log(result[0])
      //@ts-ignore
      return result[0];
    }
  }

  async getPopulation(){

    var url = 'https://api3.cephlabs.de/meta_daseinsvorsorge/get_available_pops';
    var res = await firstValueFrom(this.http.get(url));
    return res; 
  
  }

  async getYearPopArray(pop:any){
    
    var url  ='https://api3.cephlabs.de/meta_daseinsvorsorge/get_available_years_for_pop?pop_name_selection='+pop;
    var res = await firstValueFrom(this.http.get(url));
    console.log(res)
    return res; 
  }

}
