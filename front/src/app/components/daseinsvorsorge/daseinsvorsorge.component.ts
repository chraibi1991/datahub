import { Component } from '@angular/core';
import { Storageservice } from 'src/app/service/storageservice-component/storageservice-component.component';
import { Router } from '@angular/router';
import { latLng, tileLayer } from 'leaflet';
import { Chart } from 'chart.js';
import { VorsorgeserviceComponent } from './vorsorgeservice/vorsorgeservice.component';
import { DatePipe } from '@angular/common';

import L from 'leaflet';



import 'leaflet-easybutton/src/easy-button';
import { RegioService } from 'src/app/service/regioservice/regioservice.component';
import { DatahubService } from 'src/app/service/datahubservice/datahubservice.component';

@Component({
  selector: 'app-daseinsvorsorge',
  templateUrl: './daseinsvorsorge.component.html',
  styleUrls: ['./daseinsvorsorge.component.css']
})
export class DaseinsvorsorgeComponent {
  generateMode: boolean = false;
  selectedMarkerForOpti: any = '';
  selectMarkerID: any;
  markersAll: any;
setMarker() {

  this.generateMode = true; 
  this.drawMarkers(true);
  //@ts-ignore
  document.getElementById("dialog3").close();

}

  hasBeenModified = false; 

  modifiyMode = false;
  options = {
    layers: [
      tileLayer('https://m.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 12,
    minZoom: 9,
    center: latLng(51.04962, 12.1369)
  };
  chart: any;
  map: any;
  results: any;
  markers: any = [];
  addingMode: boolean = false;
  spinner: any;
  stateChangingButton!: any;
  markerAfterMod: any = [];
  layers: any = [];
  layerControl: L.Control.Layers | undefined ;
  selectedObject: any;
  rasterLayer: L.LayerGroup<any> | undefined;
  markerLayer: L.LayerGroup<any> | undefined;
  markerOutsideLayer: L.LayerGroup<any> | undefined;
  resultsOptimization: any;
  optimizationIndex: number = 0;
  markerOldLayer!: L.LayerGroup<any>;
  generateBool: boolean = false;
  legend: any;
  optiMarkers: any;
selectedOpti: any;

  async ngAfterViewInit() {
    await this.setInitState(); 
  }


  async setInitState(){
    await this.getInitResult();
    this.createChart(undefined);
    this.drawMarkers(false);
    this.hasBeenModified = false; 

  }

  async endOpti() {
    this.generateBool = false;
    this.generateMode = false; 
    this.modifiyMode = false; 
    this.selectMarkerID = '';
    this.selectedMarkerForOpti = ''; 

    this.map.removeControl(this.legend);

    await this.getInitResult();
    this.createChart(undefined);
    this.drawMarkers(false);
    
    }


  async openDialogAndSetMarkers() {
   
    this.optiMarkers = ["Med_Notfall_1","Med_Notfall_2","Med_Notfall_3","Med_Notfall_4","Med_Notfall_5","Med_Notfall_6","Med_Notfall_7","Med_Notfall_8",
    "Med_Notfall_9","Med_Notfall_10","Med_Notfall_11","Med_Notfall_12","Med_Notfall_13","Med_Notfall_14","Med_Notfall_15"]
   /* this.map.eachLayer((layer: { options: { name: string; }; setLatLng: (arg0: any[]) => void; }) => { 
      if (layer && layer instanceof L.Marker) {
        //@ts-ignore
        var content = layer._popup._content;
        var id = content?.substring(content.indexOf("ID: ") + 3, content.indexOf("</b>")).trim()
        this.optiMarkers.push(id); 
      }})

      console.warn("gen",this.optiMarkers); 
      this.optiMarkers = this.optiMarkers.sort(); */




       //@ts-ignore
    document.getElementById("dialog3").showModal();


  } 

  async generate() {
    

   

    this.generateBool = true;

   this.resultsOptimization = await this.vorsorgeService.getNotfallOptimization();

   console.log(this.resultsOptimization); 

  

   this.createChartOpti(); 


    this.drawMarkersOpti(  0 ); 
  setTimeout(() => {
    this.map.flyTo(this.map.getCenter(), this.map.getZoom() + 1)

  }, 800)

   //@ts-ignore
   document.getElementById("dialog3").close();

  

  }

  createChartOpti() {

      if (this.chart) {
        this.chart.destroy();
      }
  
      var mDataset = [];
      for(var i = 0; i < this.resultsOptimization[0]["Plot_params"].length; i++) {

  

        var obj = {
        data: this.resultsOptimization[0]["Plot_params"][i].share_class,
        fill: false,
        label: this.resultsOptimization[0]["Plot_params"][i].type
  
      }


      if(this.resultsOptimization[0]["Plot_params"][i].type == "Status Quo") {
        //@ts-ignore
            obj.backgroundColor = '#32CD32'

      }
        mDataset.push(obj)

      }
      
      var chart = {
        type: 'bar',
        data: {
          labels: this.resultsOptimization[0]["Plot_params"][0].class_plot,
          datasets: mDataset
        },
        options: {
          plugins: {
            legend: {
              display: true,
            }
          },
          scales: {
            y: {
              //beginAtZero: true,
              title: {
                display: true,
                text: "Anteil an Bevölkerung in %",
  
              }
            },
          },
  
        },
      };
      //@ts-ignore
      this.chart = new Chart("canvas0", chart);

  }



  addLegend(title: any) {
 
    if (this.legend instanceof L.Control) { this.map.removeControl(this.legend); }


    //@ts-ignore
    this.legend = L.control({ position: 'bottomright' });
    //@ts-ignore
    this.legend.onAdd = () => {

      var div = L.DomUtil.create('div', 'info legend');
      var labels = ['<div> <b>' + title + '</b> </div> '];
    


      div.innerHTML = labels.join('<br>');
      return div;
    };
    this.legend.addTo(this.map);

  }
  drawMarkersOpti(optiIndex: number) {

    this.optimizationIndex = optiIndex;
   

     var title = this.resultsOptimization[0]["Point params"][optiIndex].type;

    this.clearMarkers();
    this.map.removeControl(this.layerControl);
    this.layerControl = L.control.layers( ).addTo(this.map);
    this.setLayer(); 

  
    this.rasterLayer = L.layerGroup();
    this.markerLayer = L.layerGroup();
    this.markerOldLayer = L.layerGroup();

    var results = this.results["Point params"];
    console.warn("selection", this.selectedMarkerForOpti); 

    console.warn("result opti", this.resultsOptimization[0]["Point params"])

   for(var i = 0; i < this.resultsOptimization[0]["Point params"].length; i++) {
   
    this.markerOldLayer = L.layerGroup();
   



    this.resultsOptimization[0]["Point params"][i].einrichtungen.forEach((element: any) => {

      console.warn("COMP", element.notfall_einrichtungs_id, this.selectMarkerID, element.notfall_einrichtungs_id == this.selectMarkerID )
      if(element.notfall_einrichtungs_id == this.selectMarkerID){
        var iconURL = "../../../../assets/icon/standort.png"; 
      } else {
        iconURL = "../../../../assets/icon/ort.png";
      }

      var ownIcon = L.icon({
        iconUrl: iconURL,
        iconSize: [24, 24], // size of the icon  
      });


     
      var latlng = latLng(element.geometry.coordinates[1], element.geometry.coordinates[0])
      var newMarker = L.marker(latlng, { icon: ownIcon, draggable: false }).bindPopup(
        "<h1>" + title + "</h1> <br>" +
        "<b> ID: " + element.notfall_einrichtungs_id + "</b> <br>" +
        "<b> Adresse: " + element.Adresse + "</b> <br>" +
        "<b> Versorgungsraum: " + element.Versorgungsraum + "</b> <br>" +
        "<b> Notfalltyp: " + element.Notfalltyp + "</b> <br>" +
        "<b> Anteil: " + element.share_population + "% </b> <br> <br>" +
        this.getButtonTag()


      )
  if(i == optiIndex) { 
    this.map.addLayer(this.markerOldLayer); 
  }


      this.markerOldLayer.addLayer(newMarker); 

    });

    this.layerControl?.addOverlay(this.markerOldLayer, this.resultsOptimization[0]["Point params"][i].type);
  }
  
   this.addLegend(this.resultsOptimization[0]["Point params"][optiIndex].type)

   setTimeout(() => {
    this.map.flyTo(this.map.getCenter(), this.map.getZoom() + 1)

  }, 800)
  }

  async getInitResult() {
    this.showSpinner();
    this.results = await this.vorsorgeService.getInitialResultBuffer();

    this.markersAll = await this.datahubservice.getNotfalleinrichtungAll( );
  


    this.closeSpinner();
  
  }


  constructor(private storageService: Storageservice, private router: Router, private vorsorgeService: VorsorgeserviceComponent, private regioService: RegioService, private datahubservice: DatahubService) {
    if (this.storageService.getObject().Logo_URL == '') {
      alert("Bitte zuerst Landkreis festlegen!")
      this.router.navigateByUrl('/start'); 
    } else {
      this.selectedObject =  this.storageService.getObject()
     // this.setLayerInitial(); 
    }
  }



  async setModifyMode() {
    this.showDialog()
    this.modifiyMode = true;
    this.results = await this.vorsorgeService.getInitialResultBuffer();
    this.drawMarkers(true);
     }

  clearMarkers(){
    this.map.eachLayer((layer: { options: { name: string; }; setLatLng: (arg0: any[]) => void; }) => {

      if(layer instanceof L.TileLayer) {
      } else {
        this.map.removeLayer(layer)
      } 
  })
  }

  async endModifyMode() {

    this.hasBeenModified = true;
    let m = new Map()
    this.modifiyMode = false; 
    var counter = 0;
    this.markerAfterMod = []
    this.map.eachLayer((layer: { options: { name: string; }; setLatLng: (arg0: any[]) => void; }) => {
      if (layer && layer instanceof L.Marker) {
        counter++;
        //@ts-ignore
        var content = layer._popup._content;
        var newContent = content.replace( "<button style='border: 2px solid grey; border-radius: 10px;' id='button'> Löschen </button>", '');
        var newContent2 = newContent.replace("<button style='border: 2px solid grey; border-radius: 10px;' id='button2'> Position ändern </button>", ''); 
        layer.setPopupContent(newContent2); 
        var id = content?.substring(content.indexOf("ID: ") + 3, content.indexOf("</b>")).trim()
        var filteredItem = this.results["Point params"].filter((element: { notfall_einrichtungs_id: any; }) => element.notfall_einrichtungs_id == id);

       if(filteredItem.length > 0) {
         //@ts-ignore
        filteredItem[0].geometry.coordinates[0] = layer._latlng.lng
        //@ts-ignore
        filteredItem[0].geometry.coordinates[1] = layer._latlng.lat
       } else {
        //ADD NEW
        this.results["Point params"].push({
        notfall_einrichtungs_id: id ,
        Adresse: '' , 
         Versorgungsraum: '' ,
         Notfalltyp: '',
        Anteil: '',
        geometry: { //@ts-ignore
          coordinates : [ layer._latlng.lng, layer._latlng.lat] 
        }})
       }

        m.set(id, [
          {  //@ts-ignore
            "x": layer._latlng.lng,
            //@ts-ignore
            "y": layer._latlng.lat,
          }])
      }
    });

    for (let [key, value] of m) {
      this.markerAfterMod.push({
        "notfall_einrichtungs_id": key,
        "data": value
      });
    }

    console.log("MARKERS", this.markerAfterMod, this.markerAfterMod.length);

    this.showSpinner()
    try{


    this.results = await this.vorsorgeService.updateMarkerAndGetResult(this.markerAfterMod);
    } catch(error) {
      alert("API Call failed");
      this.closeSpinner(); 
    }

    this.createChart(undefined)
    this.drawMarkers(false);
    this.closeSpinner(); 

    return;
  }

  onMapReady(map: any) {
    this.map = map;
    this.layerControl = L.control.layers( ).addTo(this.map);
  
    this.map.on('click', (e: { latlng: any; }) => {
      if (this.modifiyMode) {
        var popLocation = e.latlng;
        this.addDragMarker(popLocation);
      }});

  }

  setChartNormalScreen() {
    this.modifiyMode = false;
  }

  createChart(title: any) {


    console.warn(this.results)
    if (this.chart) {
      this.chart.destroy();
    }

    var mDataset = [];
    mDataset.push({
      data: this.results["Plot_params"][0].share_class,
      fill: true,
      label: "Initiales Szenario"

    })




    if(this.results["Plot_params"][1]) {
      mDataset.push({
        data: this.results["Plot_params"][1].share_class,
        fill: true,
        label: title ? title :  "Neues Szenario"
  
      })

    }
    var chart = {
      type: 'bar',
      data: {
        labels: this.results["Plot_params"][0].class_plot,
        datasets: mDataset
      },
      options: {
        plugins: {
          legend: {
            display: true,
          }
        },
        scales: {
          y: {
            //beginAtZero: true,
            title: {
              display: true,
              text: "Anteil an Bevölkerung in %",

            }
          },
        },

      },
    };
    //@ts-ignore
    this.chart = new Chart("canvas0", chart);
  }


  addDragMarker(latlng: any) {
    var d = new Date;
    var currentUnixTime = d.getTime();
    var id = "MED#" + currentUnixTime;
 
    var ownIcon = L.icon({
      iconUrl: "../../../../assets/icon/standort.png",
      iconSize: [24, 24], // size of the icon  
    });

    var buttonTag = "<button style='border: 2px solid grey; border-radius: 10px;' id='button'> Löschen </button>" +
      //"<button style='border: 2px solid grey; border-radius: 10px;' id='button2'> Position ändern </button>" +
      "<button style='border: 2px solid grey; border-radius: 10px;' id='button3'> Position ändern </button>" ;
    var newMarker = L.marker(latlng, { draggable: false, icon: ownIcon }).bindPopup(
      "<b> ID: " + id + " </b> <br>" + buttonTag).openPopup();

  

    newMarker.on("popupopen", () => {

     
      (<HTMLInputElement>document.getElementById("button3")).addEventListener('click', () => {
        this.selectMarker(newMarker);
      
      });

      (<HTMLInputElement>document.getElementById("button")).addEventListener('click', () => {
        this.map.removeLayer(newMarker)});

      (<HTMLInputElement>document.getElementById("button2")).addEventListener('click', () => {
        newMarker?.dragging?.enable();

        newMarker.closePopup();});

      newMarker.on("dragend", async () => { 
        newMarker?.setIcon( L.icon({
          iconUrl: "../../../../assets/icon/standort.png",
          iconSize: [24, 24], // size of the icon  
        }))
        newMarker?.dragging?.disable();})
    });
    this.map.addLayer(newMarker);
  }
  selectMarker(marker: any) {
   var content = marker._popup._content;
  

   var id = content?.substring(content.indexOf("Adresse: ") + 8, content.indexOf("</b>", content.indexOf("Adresse: ") )).trim();
   this.selectedMarkerForOpti = id; 

  this.selectMarkerID = content?.substring(content.indexOf("ID: ") + 3, content.indexOf("</b>")).trim();

  //@ts-ignore
   document.getElementById("dialog3").showModal();

  }

  getButtonTag() {
    var buttonTag = "<button style='border: 2px solid grey; border-radius: 10px;' id='button'> Löschen </button>" +
    "<button style='border: 2px solid grey; border-radius: 10px;' id='button2'> Position ändern </button>" ;
    
   
  if (!this.modifiyMode && !this.generateMode) {
    buttonTag = '';
    return ''; 
  }
 

  if(this.generateMode) {
    buttonTag =  "<button style='border: 2px solid grey; border-radius: 10px;' id='button3'> Auswählen </button>";
  }


  return buttonTag; 
  }



  drawMarkers(modifiyMode: boolean) {

    this.clearMarkers();
    this.map.removeControl(this.layerControl);
    this.layerControl = L.control.layers( ).addTo(this.map);
    this.setLayer(); 

    //this.map.removeLayer(this.rasterLayer); 
    this.rasterLayer = L.layerGroup();
    this.markerLayer = L.layerGroup();

    if(!modifiyMode) {


    this.markerOutsideLayer = L.layerGroup();

    this.markersAll.forEach((element: any) => {
      if(element.Object_Key != this.selectedObject.Object_Key) {
  

      var ownIcon = L.icon({
        iconUrl: "../../../../assets/icon/notfall_marker_outside_area.svg",
        iconSize: [24, 24], // size of the icon  
      });


     
      var latlng = latLng(element.geometry.coordinates[1], element.geometry.coordinates[0])
      var newMarker = L.marker(latlng, { icon: ownIcon, draggable: false }).bindPopup(
        "<b> ID: " + element.notfall_einrichtungs_id + "</b> <br>" +
        "<b> Adresse: " + element.Adresse + "</b> <br>" +
        "<b> Versorgungsraum: " + element.Versorgungsraum + "</b> <br>" +
        "<b> Notfalltyp: " + element.Notfalltyp + "</b> <br>" +
        "<b> Anteil: " + element.share_population + "% </b> <br> <br>" 
        


      )//.addTo(this.map);




      this.markerOutsideLayer?.addLayer(newMarker); 

    

    //  this.markers.push(newMarker);
      } 

    })



    this.map.addLayer(this.markerOutsideLayer); 
   //this.map.addLayer(this.rasterLayer); 

   console.warn("OUTSIDE", this.markerOutsideLayer)

   
    this.layerControl?.addOverlay(this.markerOutsideLayer, "Einrichtungen außerhalb");
    }

    console.warn("abc", this.results)

    this.results["Raster params"].forEach((raster: any) => {

        var l = L.geoJSON(raster.geometry,
          {
            style: {
              fillColor: raster.color_map,
              fillOpacity: 0.2,
  
              color: raster.color_map,
              weight: 0.2
            }
          })
        l.bindPopup("<b> Nächste Einrichtung: " + raster.nearest_einrichtung+ "</b> <br>" +
        "<b> Anteil Bevölkerung: " + raster.share_of_population_living_in_raster * 100 + "% </b> <br>" 
       )
  
      
        this.rasterLayer?.addLayer(l); 
      });

   


    var results = this.results["Point params"];

    console.warn("RESULTS", this.results)

    if(this.results["Point params"][1].data) {
      results = this.results["Point params"][1].data; 
    }

    results.forEach((element: any) => {

      var ownIcon = L.icon({
        iconUrl: "../../../../assets/icon/ort.png",
        iconSize: [24, 24], // size of the icon  
      });


     
      var latlng = latLng(element.geometry.coordinates[1], element.geometry.coordinates[0])
      var newMarker = L.marker(latlng, { icon: ownIcon, draggable: false }).bindPopup(
        "<b> ID: " + element.notfall_einrichtungs_id + "</b> <br>" +
        "<b> Adresse: " + element.Adresse + "</b> <br>" +
        "<b> Versorgungsraum: " + element.Versorgungsraum + "</b> <br>" +
        "<b> Notfalltyp: " + element.Notfalltyp + "</b> <br>" +
        "<b> Anteil: " + element.share_population + "% </b> <br> <br>" +
        this.getButtonTag()


      )//.addTo(this.map);

if(modifiyMode) {

     newMarker.on("popupopen",() => {
     

     (<HTMLInputElement>document.getElementById("button3"))?.addEventListener('click', async () => {


       this.selectMarker(newMarker)
   
      });
      
        (<HTMLInputElement>document.getElementById("button")).addEventListener('click', async () => {
          this.map.removeLayer(newMarker);
     
        });

        (<HTMLInputElement>document.getElementById("button2")).addEventListener('click', () => {
          newMarker?.dragging?.enable();

          newMarker.closePopup(); 
         
      
      
      });

  

      newMarker.on("dragend",async () => {
       
        
        newMarker?.setIcon( L.icon({
          iconUrl: "../../../../assets/icon/standort.png",
          iconSize: [24, 24], // size of the icon  
        }))
        newMarker?.dragging?.disable();
     
      })

      }); 
    }

     // this.map.addLayer(newMarker);

      this.markerLayer?.addLayer(newMarker); 

    

      this.markers.push(newMarker);


    })



    this.map.addLayer(this.markerLayer); 
   //this.map.addLayer(this.rasterLayer); 

    this.layerControl?.addOverlay(this.rasterLayer, "Rasterzellen");
    this.layerControl?.addOverlay(this.markerLayer, "Einrichtungen");
   // this.layerControl?.addOverlay(mLayer, "Einrichtungen");

  }


  async setLayer() {

    console.warn(this.selectedObject); 
    if (!this.selectedObject) {
      return;
    }


    var zellenRaster = L.layerGroup();
    var res = await this.regioService.getShapefileByIdAndLevel(this.selectedObject.Object_Key, 3);
    this.storageService.setCurrentShapes(res[0]);

    console.warn(res[0]); 
    

    //@ts-ignore
    res[0].forEach((element: any) => {
      var l = L.geoJSON(element.geometry,
        {
          style: {
            fillColor: 'white',
            fillOpacity: 0,
            weight: 1.5, 
            color: 'black'
          },
          onEachFeature: (f, l) => {
            var out: string[] = [];

            out.push("Name : " + element.Object_Nam + "<br>"

            );

            l.bindPopup("<span class='span0'> " + element.Object_Nam + " </span> ");
          }
        });
      //this.layers.push(l);

       l.on('click', (e: { latlng: any; }) => {
 
  
        if (this.modifiyMode) {
          this.map.closePopup()
          var popLocation = e.latlng;
          this.addDragMarker(popLocation);
        }});
  
    

      zellenRaster.addLayer(l);
      var bounds = l.getBounds()
      var center = bounds.getCenter()
      this.map.setView(center, 9);
    })

 

    this.map.addLayer(zellenRaster);
    this.layerControl?.addOverlay(zellenRaster, "Gemeinden"); 
  }

  showSpinner() {
    this.spinner = true;
    //@ts-ignore
    document.getElementById("dialog2").showModal();}

  closeSpinner() {
    this.spinner = false;
    //@ts-ignore
    document.getElementById("dialog2").close();}


  showDialog() {
    //@ts-ignore
    document.getElementById("dialog").showModal();}

  closeDialog() {
    //@ts-ignore
    document.getElementById("dialog").close();
    this.map.flyTo(this.map.getCenter(), this.map.getZoom() + 1)
 
  
  }

    



}


