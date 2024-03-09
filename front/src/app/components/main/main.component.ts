import { Component, OnInit } from '@angular/core';

import { latLng, tileLayer } from 'leaflet';

import { RegioService } from '../../service/regioservice/regioservice.component';
import { GeoJsonObject } from 'geojson';
import * as L from 'leaflet';
import { Router } from '@angular/router';
import { Storageservice } from '../../service/storageservice-component/storageservice-component.component';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
selectedObject: any;
test() {
this.storageService.setObject(this.selectedObject);
this.router.navigateByUrl('/tileview'); 
}

  layers: any[] = [];

  clickedLayer: any;
  

 AIR_PORTS = "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson";

  options = {
    layers: [
    ],
    zoom: 8,
    zoomControl: false,
    attributionControl: false, 
    center: latLng( 52 , 11.62916)
  };
  map: any;
selectedObjectName: any;
  sel: any[] = [];

  constructor( private regioservice: RegioService, private storageService: Storageservice, private router: Router) {
   
   }

  async ngOnInit(): Promise<void> {
 /*
    this.selectedObject = {
      "Object_Key": "15084",
      "Object_Name": "Burgenlandkreis",
      "admin_level": 3,
      "Logo_URL": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Wappen_Burgenlandkreis.svg",
      "Bodenflaeche gesamt qkm": 1414,
      "Bevoelkerung gesamt": 177590,
      "Erwerbsquote": 87.48,
      "Durchschnittsalter der Bevoelkerung": 48.84
  }

  this.storageService.setObject(this.selectedObject); */


   // this.cesium.flyTo("cesium");
 setInterval(()=> { this.selectedObject= this.storageService.getTempObject();
  

 
  
  }, 1 * 1000); 

    
  }

  reset() {
    this.map.flyTo(this.options.center); 
    this.map.setView(this.options.center, 8); 
    this.selectedObjectName = undefined; 
    this.addLayersSA(); 
    }


  async addLayersSA(){
    this.map.eachLayer( (layer: any) => {
      console.log(layer); 
      this.map.removeLayer(layer);
      });


    var res = await this.regioservice.getShapefilesLandkreisSA();
    console.log(res[0]);
    if(!res[0]) {
      return; 
    }
    //@ts-ignore
    res[0].forEach((element:  any ) => {   


      var color = "white";
      /*if(element.properties.Object_Name == "Burgenlandkreis") {
        color = "grey"

      }*/
      
    var l = L.geoJSON(element.geometry,
      {
        style: {
          fillColor: color,
          fillOpacity: 0.5,
          color: 'black',
          weight: 1
        },

        

        onEachFeature: (f, l) => {
          //console.log(element.properties); 
          var out : string[] = [];

          out.push("Name : " + element.Object_Nam + "<br>"
          
          );

          

          l.bindPopup("<span class='span0'> " + element.properties.Object_Name + " </span> ");
        } 



      });

  


      l.on('click', () => {
     
       // this.selectedObjectName = element.Object_Nam;
        //this.setSelectedObj(element.Object_Nam, element.Object_Key, this); 

  
        if(this.clickedLayer != undefined) {
        this.clickedLayer.setStyle({
          fillColor: "white",
          fillOpacity: 0.5,
        }) }
      
        this.selectedObjectName = element.properties.Object_Name; 

        console.log("obj");
        console.log(this.selectedObjectName); 

       this.storageService.setTempObject(element.properties); 




          l.setStyle({
            fillColor: "#D4E5C6",
            fillOpacity: 0.5,
        
    
          }) 
        this.clickedLayer = l;  

        
    }) 

      this.layers.push(l); 

  })

  }


  setObject(properties: any) {

    this.selectedObject = properties; 
    console.log(this.selectedObject); 
  }


  async onMapReady(map: any) {
    // Do stuff with map
    this.map = map; 
    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.boxZoom.disable();
    map.keyboard.disable();
    map.dragging.disable();
    this.addLayersSA(); 
    
  }


  setSelectedObj(obj: string, key: string, that: any){
    this.selectedObjectName = obj; 
    this.sel.push(obj); 
    console.log(this.selectedObjectName)
   
   // this.storageService.setObjectKey(key); 
    //this.storageService.setObjectName(obj); 

  }

  
    

}





