import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RoutingserviceComponent } from '../routingservice/routingservice.component';


@Component({
  selector: 'app-storageservice-component',
  templateUrl: './storageservice-component.component.html',
  styleUrls: ['./storageservice-component.component.css']
})
export class Storageservice {

  chart: any
  chartRef: any
  activeLabel: any
  selLatLng: any
  currentShape: any;
  reachResult: any = {
    "einrichtungen": [],
    "marker": [],
    "radius": 0,
    "resultMeta": [],
    "Filter": [],
    "street_name":'test'
  };

  results: any[] = [];
  resultLength = 3;
  selectedTypes: any = [];
  imagePath: string = '';
///////Ahmed var///////
street:any=undefined;

  async setStreetName(latlng:any){
    
   if(latlng){
    this.street= await this.routingservice.getLocationName(latlng);
  console.log('s' +this.street);
   }
  }

  getStreetName(){
    if(this.street!=undefined)
    {return this.street;}
    
  }


  setCurrentShapes(arg0: Object) {
    this.currentShape = arg0;
  }


  getCurrentShapes() {
    return this.currentShape;
  }



  setResult(arg0: any, selectedIndex: any) {

    this.selectedTypes = [];

    this.reachResult = arg0;
    this.reachResult.einrichtungen = arg0["Einrichtungen in der Nahe"];
   
    if (arg0["Point params"] != undefined) {
      this.reachResult.einrichtungen = arg0["Point params"];
      this.reachResult.plot = arg0["Plot_params"]; }

    if (arg0["Isochrone"] != undefined) {
      this.reachResult["Distanz_Buffer"] = arg0["Isochrone"];
    }

    if (arg0["Meta Einrichtungen"] != undefined) {
      this.reachResult["Filter"] = arg0["Meta Einrichtungen"];
    }
      
    if (arg0["Street Name"] != undefined ) {
      this.reachResult["street_name"] = arg0["Street Name"];
      console.log('t'+this.reachResult["street_name"])
    }

    this.reachResult.resultMeta = arg0.meta[0];



    if (selectedIndex == undefined) { // no update
   console.warn(this.results)
      var filtered = this.results.filter( el => {return el.url == arg0.meta[0].url})

      if(filtered.length == 0) {
  






      this.results.unshift(
        arg0.meta[0]
      ) > this.resultLength ? this.results.pop() : null;}

    } else { //update 

    
      console.log("before", this.results);
      this.results[selectedIndex] = arg0.meta[0]; 
      console.log("after", this.results); 
      
      
    }


    

    this.reachResult.einrichtungen.forEach((element: { Typ: any; }) => {
      if (this.selectedTypes.indexOf(element.Typ) == -1) {
        this.selectedTypes.push(element.Typ);
      }

    });




  }

  setActiveLabel(label: any) {
    this.activeLabel = label;
  }


  async setSelectedMarker(_latlng: any) {
    this.selLatLng = _latlng;

    this.imageSource(_latlng);


  }


  getIMGSource() {
    return this.imagePath;
  }

  async imageSource(latlng: any) {
    if (latlng) {

      var src = await this.routingservice.getPng(latlng.lat, latlng.lng)
      let imageBase64 = src.replace(new RegExp("data:image/png;base64,", "g"), "").trim();
      const img = new Image();
      img.src = `data:image/png;base64,${imageBase64}`;
      this.imagePath = img.src;




    }

  }

  getSelectedMarker() {
    return this.selLatLng;
  }



  getActiveLabel() {
    return this.activeLabel;
  }


  setChart(data: any, chartRef: any) {
    this.chartRef = chartRef;
    this.chart = data;
    console.log(this.chart);
    var maxValue = -10000;
    var minValue = 10000;
    /*
        this.chart.data.datasets.forEach((element: { data: any[]; }) => {
          element.data.forEach(d => {
            if(d > maxValue){
              maxValue = d; 
            }
    
            if(d < minValue){
              minValue = d; 
            }
            
          });
          
        });*/


    //this.chart.options.mvalues.maxValue = maxValue;
    //this.chart.options.mvalues.minValue = minValue;
  }

  getChart() {

    //if(this.chartRef == undefined) {
    //  return undefined;
    // }
    var labels: any[] = [];


    if (this.chartRef) {
      this.chartRef.getSortedVisibleDatasetMetas().forEach((meta: { label: any; }) => {
        labels.push(meta.label);
      });
    }






    return { chartData: this.chart, activeLabels: labels };
  }

  selectedObject: any;
  auth: boolean = false;

  setAuth(arg0: boolean) {
    this.auth = true;
  }

  getAuth() {
    return this.auth;
  }


  setObjectKey(objectKey: string) {
    //  this.cookieService.set('Object_Key', objectKey);
  }


  setObject(obj: any) {

    console.log(obj);



    this.cookieService.set('Object', JSON.stringify(obj));

  }

  setTempObject(obj: any) {


    this.selectedObject = obj;


  }

  getTempObject() {


    return this.selectedObject;


  }




  /*setObjectName(objectName : string){
    this.cookieService.set('Object_Name', objectName);
   
  }

  getObjectKey(){
    return this.cookieService.get('Object_Key');
  }

  getObjectName(){
    return this.cookieService.get('Object_Name');
  }*/


  getObject(): any {

    if (this.cookieService.get('Object') == '') {
      /*var selectedObject: any;
      selectedObject.Logo_URL = "";
      selectedObject.Object_Name = "";
      selectedObject["Bevoelkerung gesamt"] = "";
      selectedObject["Bodenflaeche gesamt qkm"] = "";
      selectedObject["Durchschnittsalter der Bevoelkerung"] = "";
*/

      var sel = {
        "Logo_URL" : "",
       "Object_Name" : "",
      "Bevoelkerung gesamt": "",
      "Bodenflaeche gesamt qkm": "",
      "Durchschnittsalter der Bevoelkerung": ""
      }
      return sel;
    }
    return JSON.parse(this.cookieService.get('Object'));
  }


  deleteObject(): any {
    return; 
    var selectedObject: any = {
      "Logo_URL": "",
      "Object_Name": "",
      "Bevoelkerung gesamt": "",
      "Bodenflaeche gesamt qkm": "",
      "Durchschnittsalter der Bevoelkerung": ""
    };

    this.cookieService.set('Object', JSON.stringify(selectedObject));
    //this.cookieService.deleteAll('Object'); 


    // console.log(this.getObject()); 
  }





  constructor(private cookieService: CookieService, private routingservice: RoutingserviceComponent) { }

}

