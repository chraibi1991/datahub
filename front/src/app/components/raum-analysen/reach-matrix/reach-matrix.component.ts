import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import * as MarkerClusterGroup from 'leaflet.markercluster';

import { latLng, tileLayer } from 'leaflet';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import { DatahubService } from '../../../service/datahubservice/datahubservice.component';
import { RegioService } from '../../../service/regioservice/regioservice.component';
import { RoutingserviceComponent } from '../../../service/routingservice/routingservice.component';
import { Storageservice } from '../../../service/storageservice-component/storageservice-component.component';
import { SimulationService } from 'src/app/service/simulationservice/simulation.service';





@Component({
  selector: 'app-reach-matrix',
  templateUrl: './reach-matrix.component.html',
  styleUrls: ['./reach-matrix.component.css']
})
export class ReachMatrixComponent implements OnInit {
  startMarker!: L.Marker<any>;
  selectedResultOld: any;
  legend: any;
  selectedIndex: any = 0;

  radiusMode = '';

  clickedEinrichtung: any;

  public chart: any;
  isMinute: any = false;
  radius: any = '';
  public layers: any = [];
  selectedObjKey: any;
  selectedObject: any;
  meta: any;
  spinner2 = false;
  toggle: boolean = false;
  typeSelected: any = [];
  markerClusterGroup!: L.MarkerClusterGroup;
  selectedResult: any;
  newRadius = 0;
  oldRadius: any;
  colorMap: any = [] ;
  latlngCenter: L.LatLng = latLng(0,0);
  ///////Ahmed Variables///////
  markerPosition:any;
  urlRoute:any
  geoJsonLayer:any;
  einrichtungId:any;
  shape:any
  myChart:any
  selectedMarker:any
  shareArray: number[] = [];
  adressList:any = [];
  //street:any;
  
  geojsons:any=[]

 

  removeGeoJsonLayer() {
    if (this.geoJsonLayer) {
      this.map.removeLayer(this.geoJsonLayer);
    }
  }

  createChart() {
        const data =  this.storageService.reachResult['Filter'][0]['data']
        const backgroundColors = [];
        const category=[];
        const numberEinrichtungen=this.storageService.reachResult['Filter'][0]['n']
        const nEinrichtung=document.getElementById('nEinrichtung');
        const nEinrichtungOne=document.getElementById('nEinrichtungOne');
        const numberEinrichtungenOne=this.storageService.reachResult['Filter'][1]['Typ']

        if(nEinrichtung)
        {nEinrichtung!.innerHTML=`Einrichtungen im Umkreis: ${numberEinrichtungen}`}
        else if(nEinrichtungOne)
        {nEinrichtungOne!.innerHTML=`${numberEinrichtungenOne} im Umkreis: ${numberEinrichtungen}`}

        for (let i = 0; i < data.length; i++) {
          this.shareArray.push(data[i].share);
          const randomColor = `rgba(${Math.floor(Math.random() * 200) + 55}, ${Math.floor(Math.random() * 200) + 55}, ${Math.floor(Math.random() * 200) + 55}, 0.6)`;
          backgroundColors.push(randomColor);
            category.push(data[i].category)
        }
        console.log(this.shareArray);
        this.myChart = new Chart('myChart', {
          type: 'pie',
          data: {
            labels: category,
            datasets: [
              {
                data: this.shareArray,
                backgroundColor:backgroundColors,
              },
            ],
          },
        });
      
  }


  removeRoute(){
    if (this.geoJsonLayer) {
      this.map.removeLayer(this.geoJsonLayer);
  }
  }

  removeSelectedMarker(){
    if (this.selectedMarker) {
      this.map.removeLayer(this.selectedMarker);
  }
  }

  renderAllMarkers(){
    if(this.typeSelected.length==0){
      this.storageService.reachResult["Einrichtungen in der Nahe"].forEach((element: any) => {
          var ownIcon = L.icon({
            iconUrl: this.getLogo(element.Typ),
            iconSize: [24, 24],
            shadowSize: [50, 64],
            iconAnchor: [12, 24],
            shadowAnchor: [4, 62],
          });
    
          var latlng = latLng(element.geometry.coordinates[1], element.geometry.coordinates[0]);
          var newMarker = L.marker(latlng, { icon: ownIcon }).bindPopup(
            element.Name + "<br>" +
            element.Distanz + "Meter"
          );
    
          this.markerClusterGroup.addLayer(newMarker);
          this.markers.push(newMarker);
      });
    }
else
{    this.storageService.reachResult["Einrichtungen in der Nahe"].forEach((element: any) => {
      if (this.typeSelected.includes(element.Typ)) {
        var ownIcon = L.icon({
          iconUrl: this.getLogo(element.Typ),
          iconSize: [24, 24],
          shadowSize: [50, 64],
          iconAnchor: [12, 24],
          shadowAnchor: [4, 62],
        });
  
        var latlng = latLng(element.geometry.coordinates[1], element.geometry.coordinates[0]);
        var newMarker = L.marker(latlng, { icon: ownIcon }).bindPopup(
          element.Name + "<br>" +
          element.Distanz + "Meter"
        );
  
        this.markerClusterGroup.addLayer(newMarker);
        this.markers.push(newMarker);
      }
    });}
  }

  rendeSelectedMarker(clickedEinrichtung:any){
    const selectedIcon = L.icon({
      iconUrl: this.getLogo(clickedEinrichtung.Typ),
      iconSize: [24, 24],
      shadowSize: [50, 64],
      iconAnchor: [12, 24],
      shadowAnchor: [4, 62],
  });
  
  const selectedLatLng = L.latLng(
      clickedEinrichtung.geometry.coordinates[1],
      clickedEinrichtung.geometry.coordinates[0]
  );
  
  return this.selectedMarker = L.marker(selectedLatLng, { icon: selectedIcon }).bindPopup(
      clickedEinrichtung.Name + "<br>" +
      clickedEinrichtung.Distanz + "Meter"
  );
  }

  createRoute(data:any){
    const lines = data.map((item:any) => ({
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: item.coordinates
      }
    }));
   
    const featureCollection: GeoJSON.FeatureCollection<GeoJSON.LineString> = {
      type: "FeatureCollection",
      features: lines
    };

    return this.geoJsonLayer = L.geoJSON(featureCollection, {
      style: {
        color: 'blue',
        opacity: 0.7
      }
    })
  }

  removeCluster(){
    if (this.newMarker) {
      this.map.removeLayer(this.newMarker)
    }
    
    this.map.removeLayer(this.markers)
    
    if (this.markerClusterGroup) {
      this.markerClusterGroup.clearLayers();
    }
  }


  resetMap(){
    this.removeSelectedMarker();
    this.map.fitBounds(this.shape.getBounds());
    this.einrichtungId=''
    this.renderAllMarkers();
  }

  routeApi(einrichtung:any){
    this.map.flyTo([einrichtung.geometry.coordinates[1], einrichtung.geometry.coordinates[0]], 15)

    const einrichtungLat = einrichtung.geometry.coordinates[1];
    const einrichtungLng = einrichtung.geometry.coordinates[0];
    const markerLat = this.startMarker.getLatLng().lat;
    const markerLng = this.startMarker.getLatLng().lng;
    const url=(this.storageService.reachResult['resultMeta']['url']);
    const urlParts = new URL(url);
    const mode = urlParts.searchParams.get("mode");

    return this.urlRoute = `https://api.cephlabs.de/erreichbarkeit/get_route_between_points?coordinates1=${markerLng}&coordinates1=${markerLat}&coordinates2=${einrichtungLng}&coordinates2=${einrichtungLat}&mode=${mode}`;

  }

  removeRestIcons(){
    this.map.eachLayer( (layer:any) => {
      if (layer instanceof L.Marker && layer !== this.startMarker && layer !== this.selectedMarker) {
          this.map.removeLayer(layer);
      }
    });
  }

  clickEinrichtung(einrichtung: any) {
    this.map.invalidateSize();
    this.clickedEinrichtung = einrichtung;
    this.removeRoute();

    if(this.storageService.reachResult['resultMeta'].Typ!='Rasteranalyse'){

      if(this.einrichtungId==einrichtung['einrichtungs_id']){
        this.resetMap();
      }

      else{
        fetch(this.routeApi(einrichtung))
        .then(response => response.json())
        .then(data => {
          this.einrichtungId = einrichtung['einrichtungs_id'];
          this.createRoute(data).addTo(this.map);
          this.map.fitBounds(this.geoJsonLayer.getBounds());
        });
  
        this.rendeSelectedMarker(this.clickedEinrichtung).addTo(this.map);
        this.removeRestIcons();
        this.removeCluster();
      }
    }

    else{
      if(this.einrichtungId==einrichtung['geometry']){
          // @ts-ignore
          let bounds = L.latLngBounds();

          this.geojsons.forEach((einrichtung: any) => {
            bounds.extend(einrichtung.getBounds());
          });
        
          this.map.fitBounds(bounds);
          this.einrichtungId=''
      }
      else{
        this.map.flyTo([einrichtung.geometry.coordinates[1], einrichtung.geometry.coordinates[0]], 18)
        this.einrichtungId = einrichtung['geometry'];
        console.log(this.storageService.reachResult)
        console.log(this.storageService.results)
      
      }
      
    }
  }

 
  
 

  updateResult(index: any) {
    this.radius = ''
    this.radiusMode = ''
    this.selectedIndex = index; 
    var currentResult = this.storageService.reachResult
    this.clearMap22();

    if (currentResult.meta[0].Typ == "Rasteranalyse") {
      this.updateLayerRaster();
    } else {
      if(this.legend) {
      this.map.removeControl(this.legend);}
      this.updateLayer(); }
  }

  createNewUrl (oldURL : any) {
 var newstr = oldURL; 
    if (this.radiusMode == 'min') {

      if (oldURL.includes("max_distance=")) {
        //we have a switch
        newstr = newstr.replace("https://api.cephlabs.de/erreichbarkeit/get_umkreis_einrichtungen_distance?", "https://api.cephlabs.de/erreichbarkeit/get_einrichtungen_and_isochrone_from_point_fahrzeit?");
        newstr = newstr.replace("max_distance=" + this.oldRadius, "max_fahrzeit=" + this.radius);
      } else {
        newstr = newstr.replace("max_fahrzeit=" + this.oldRadius, "max_fahrzeit=" + this.radius);
      }

    } else {
      if (oldURL.includes("max_fahrzeit=")) {
        newstr = oldURL.replace("https://api.cephlabs.de/erreichbarkeit/get_einrichtungen_and_isochrone_from_point_fahrzeit?", "https://api.cephlabs.de/erreichbarkeit/get_umkreis_einrichtungen_distance?");
        newstr = newstr.replace("max_fahrzeit=" + this.oldRadius, "max_distance=" + this.radius * 1000);
      } else {

        newstr = oldURL.replace("max_distance=" + this.oldRadius, "max_distance=" + this.radius * 1000);

      }
    }

    return newstr;

  }


  async updateRadius(selectedIndex: any) {
    
    if (this.geoJsonLayer) {
      this.map.removeLayer(this.geoJsonLayer);
    }

    console.log("early " , this.storageService.results[selectedIndex].Distanz) 
    console.log("url", this.storageService.results[selectedIndex].url)
 
    //getOLDURL
    var oldURL     = this.storageService.results[selectedIndex].url
    this.oldRadius = this.storageService.results[selectedIndex].Distanz ? this.storageService.results[selectedIndex].Distanz : this.storageService.results[selectedIndex].Fahrzeit;
    //getNEWURL

    var newURL = this.createNewUrl(oldURL);

    console.warn("URL CHECK ", oldURL == newURL)

    console.log(newURL)

    this.showSpinner()
    this.clearMap22();

 
    try{

    var res = await this.routingService.getReachViaURL(newURL);

  } catch(error) {
  //alert("API Call failed");
    res='empty';
    this.needDialog=true;
    this.closeSpinner();
    this.storageService.reachResult.einrichtungen =[]  
  }

  if(res!='empty'){
    this.storageService.setResult(res, selectedIndex);
    this.updateResult(selectedIndex)
    this.closeSpinner();
  }

    







  }

  needDialog:boolean=false;
  showDiv() {

   

    if(this.radiusMode != '' &&    this.radius != '' ) {
      return true; 
     
    }

  
    
    var result = this.storageService.results[this.selectedIndex]
    
    var bool =  result && result.Typ == 'Umkreissuche'; 
    if(bool) {

    if (result.Distanz) {
      this.radiusMode = 'km'
      this.oldRadius = result.Distanz;
      this.radius = this.oldRadius / 1000;
    } else {
      this.radiusMode = 'min'
      this.oldRadius = result.Fahrzeit;
      this.radius = this.oldRadius;

    }

    }

    return bool; 



  }

  async setResult(result: any) {

    this.typeSelected=[];
    this.radiusMode = ''

    this.selectedResult = result;

    console.warn(result.Typ); 
    console.warn(result.Distanz); 
    console.warn(result.unit); 

    if (result.Distanz) {
      this.radiusMode = 'km'
      this.oldRadius = result.Distanz;
      this.radius = this.oldRadius / 1000;
    } else {
      this.radiusMode = 'min'
      this.oldRadius = result.Fahrzeit;
      this.radius = this.oldRadius;

    }

    this.showSpinner()
    this.clearMap22();
    var res;

    try {
      res = await this.routingService.getReachViaURL(result.url)
      } catch (error) {
      //alert("API Call failed");
      this.closeSpinner();
      res='empty'
      this.needDialog=true;
     }

     if(res!='empty'){
      this.storageService.setResult(res, this.selectedIndex);
      this.updateResult(this.selectedIndex)
      this.closeSpinner();
     }
  }

  selectType(type: any) {
    this.removeGeoJsonLayer();
    var index = this.typeSelected.indexOf(type)
    if (index == -1) {
      this.typeSelected = [];
      this.typeSelected.push(type);

      this.map.eachLayer( (layer:any) => {
        if (layer instanceof L.Marker && layer !== this.startMarker) {
            this.map.removeLayer(layer);
        }
      });
      this.removeCluster();

      this.storageService.reachResult["Einrichtungen in der Nahe"].forEach((element: any) => {
        if (this.typeSelected.includes(element.Typ)) {
          var ownIcon = L.icon({
            iconUrl: this.getLogo(element.Typ),
            iconSize: [24, 24],
            shadowSize: [50, 64],
            iconAnchor: [12, 24],
            shadowAnchor: [4, 62],
          });
    
          var latlng = latLng(element.geometry.coordinates[1], element.geometry.coordinates[0]);
          var newMarker = L.marker(latlng, { icon: ownIcon }).bindPopup(
            element.Name + "<br>" +
            element.Distanz + "Meter"
          );
    
          this.markerClusterGroup.addLayer(newMarker);
          this.markers.push(newMarker);
        }
      });
      
      

      if(this.myChart)
      {  this.myChart.destroy();}
      this.shareArray=[];

    this.storageService.reachResult['Filter'][0]['data'];
   
    const filteredData = this.storageService.reachResult['Filter'].filter((element:any) => element.Typ == type);
    const dataR=filteredData[0]['data']
    const selectedTyp= filteredData[0]['n']
    console.log(type)
    console.log(filteredData)
    console.log(dataR)

    document.getElementById('nEinrichtung')!.innerHTML=`${type} im Umkreis: ${selectedTyp}`
    const backgroundColors = [];
    const category=[];
    for (let i = 0; i < dataR.length; i++) {
      this.shareArray.push(dataR[i].share);
      const randomColor = `rgba(${Math.floor(Math.random() * 200) + 55}, ${Math.floor(Math.random() * 200) + 55}, ${Math.floor(Math.random() * 200) + 55}, 0.6)`;
      backgroundColors.push(randomColor);
        category.push(dataR[i].category)
    }
    console.log(this.shareArray);
    this.myChart = new Chart('myChart', {
      type: 'pie',
      data: {
        labels: category,
        datasets: [
          {
            data: this.shareArray,
            backgroundColor:backgroundColors,
          },
        ],
      },
    });
   
      

    } else {
      this.typeSelected.splice(index, 1);
      this.removeCluster();
      this.storageService.reachResult["Einrichtungen in der Nahe"].forEach((element: any) => {
          var ownIcon = L.icon({
            iconUrl: this.getLogo(element.Typ),
            iconSize: [24, 24],
            shadowSize: [50, 64],
            iconAnchor: [12, 24],
            shadowAnchor: [4, 62],
          });
    
          var latlng = latLng(element.geometry.coordinates[1], element.geometry.coordinates[0]);
          var newMarker = L.marker(latlng, { icon: ownIcon }).bindPopup(
            element.Name + "<br>" +
            element.Distanz + "Meter"
          );
  
          this.markerClusterGroup.addLayer(newMarker);
          this.markers.push(newMarker);
      });

      if(this.myChart)
      {  this.myChart.destroy();}
      this.shareArray=[];

      this.createChart();
    }
  }

  addLegend(clusterMeta: any, title: any) {
 
    if (this.legend instanceof L.Control) { this.map.removeControl(this.legend); }


    //@ts-ignore
    this.legend = L.control({ position: 'bottomright' });
    //@ts-ignore
    this.legend.onAdd = () => {

      var div = L.DomUtil.create('div', 'info legend');
      var labels = [' <h3> ' + title +' </h3>  '];
    
      for (var i = 0; i < clusterMeta.length; i++) {
        div.innerHTML +=
          labels.push(
            '<div style="display: flex; flex-direction: row" > <div class="circle" style="background-color:' + clusterMeta[i].color_map  + '; width:40px; height: 20px"></div> ' +
            '<div style="margin-left: 5px;" > <b> ' + clusterMeta[i].class_map + ' </b> </div> </div>');}

       

      var l = labels.join('<br>');
      div.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.1);padding: 10px;border-radius: 20px;color: green;font-family: Arial, sans-serif;font-size: 14px;box-shadow: 0 0 15px rgba(0, 0, 0, 0.2); border-bottom:1px solid green;border-top:1px solid green;border-right:7px solid green;border-left:7px solid green; display:flex;jutify-content:center; align-items:center; height:30px;"> ' + l + '</div>'
      return div;
    };
    this.legend.addTo(this.map);

  }


  updateLayerRaster() {
    var umkreissuche = this.storageService.reachResult;

    if (this.chart) {
      this.chart.destroy();
    }

    umkreissuche["Point params"].forEach((element: any) => {
      var iconUrl = this.getLogo(element.Typ);
      var ownIcon = L.icon({
        iconUrl: iconUrl,
        iconSize: [24, 24], // size of the icon  
      });
      var latlng = latLng(element.geometry.coordinates[1], element.geometry.coordinates[0]);
      var newMarker = L.marker(latlng, { icon: ownIcon }).bindPopup(
        "<b>" + element.Name + "</b> <br>"
        + element.Typ + " | " + element.Kategorie + "<br>"
        + " Nächste Raster: " + element.closest_raster.splice(0, 4) + "<br>"
        + element.closest_raster.splice(4, 8) + "<br>"
        + element.closest_raster.splice(8, 12) + "<br>"
        + element.closest_raster.splice(12, 16) + "<br>"
        + element.closest_raster.splice(16, 20) + "<br>"
        + element.closest_raster.splice(20, element.closest_raster.length) + "<br>"
        + "Anteil an Bevölkerung: " + element.share_population + "<br>"

      )//.addTo(this.map);

      this.markerClusterGroup.addLayer(newMarker);

      this.markers.push(newMarker);


    })


   // this.map.setView(this.latlngCenter, 7)
    this.markerClusterGroup.addTo(this.map);

    umkreissuche["Raster params"].forEach((raster: any) => {


      var l = L.geoJSON(raster.geometry,
        {
          style: {
            fillColor: raster.color_map,
            fillOpacity: 0.2,

            color: raster.color_map,
            weight: 0.2
          }
        })
      this.geojsons.push(l);
      l.bindPopup("<b> Raster ID: " + raster.raster_id + "</b> <br> Zeit zur nächsten Einrichtung: " + raster.shortest_travel_time)
      this.layers.push(l);

      
    });
    var chart = {
      type: 'bar',
      data: {
        labels: umkreissuche["Plot_params"][0].class_plot,
        datasets: [{
          data: umkreissuche["Plot_params"][0].share_class,
          fill: true

        }]
      },
      options: {
        plugins: {
          legend: {
            display: false,
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

    

    //@ts-expect-error
    this.chart = new Chart('canvas0', chart);
    this.addLegend(umkreissuche.resultMeta.Colors_legend_raster, 'Rasteranalyse Fahrzeit in Minuten ');
  }


  getBoolStatement(){
    var height = 25;

    if(!this.storageService.reachResult) {
     return {'height': '0vh' } 
    }


   if( this.storageService.reachResult.meta[0].Typ !='Rasteranalyse') {
    if(this.storageService.selectedTypes.length > 1) {
      //changed
      height = 48
    } else {
      height =  48
    }

   } else {
    height = 25; 

   }

  

    return {'height': height + 'vh' } //: {'height': storageService.reachResult.meta[0].Typ !='Rasteranalyse' && storageService.selectedTypes.length > 1? '63vh' : '78vh'}}"

  }



  markerIcon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      // specify the path here
      iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png"
    })

  };



  selectMarker(item: any) {
    console.log(this.layers);

    this.layers[2].fire("click");

    this.layers.forEach((element: { _layers: { feature: { properties: { Name: any; }; }; }[]; }) => {
      console.log(element._layers);

      /* if(element._layers[0].feature.properties.Name == item.properties.Name){
         alert("hello"); 
       }*/

    });
    console.log(item);

  }
  markers: any = [];



  /*setMarkerPosition() {
    const newMarker = L.marker([51.04962, 12.1369], this.markerIcon);
    newMarker.addTo(this.map);
  }*/







  map: any;
  newMarker: L.Marker<any> | undefined;
  myIcon = L.icon({
    iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=',
    iconSize: [24, 40], 
    iconAnchor: [12, 40], 
  })


  deleteMarker() {
    if (this.newMarker) {
      this.map.eachLayer((layer:any) => {
        if (layer == this.shape) {
          this.map.removeLayer(layer);
        }
      });
  
      this.newMarker.remove();
      this.newMarker = undefined;
    }
  }


 markerArray: L.Marker[] = [];
 // use thi to draw all


  resetmap() {
    if (this.newMarker) {
    
      //this.markerArray.push(this.newMarker)
      //this.newMarker.setIcon(this.getAddLocationIcon());
      this.map.eachLayer((layer:any) => {
        
        if (layer !== this.newMarker) {
          
          if (layer === this.shape) {
            this.map.removeLayer(layer); 
          } else if (layer instanceof L.Marker) {
            if (this.markerClusterGroup && this.markerClusterGroup.hasLayer(layer)) {
              this.markerClusterGroup.removeLayer(layer); 
            }
          }
        }
      });
      
      this.newMarker.removeFrom(this.map);
      this.newMarker = undefined;
      
    }
  }

  zeichneMarkerAufKarte() {
    const bereitsGerenderteKoordinaten:any = [];
  
    for (const marker of this.markerArray) {
      const latLng = marker.getLatLng();
      console.log(this.markerArray.length);
  
      const koordinatenKey = `${latLng.lat}-${latLng.lng}`;

      if (!bereitsGerenderteKoordinaten.includes(koordinatenKey)) {
        
        L.marker([latLng.lat, latLng.lng], { icon: this.myIcon }).addTo(this.map);
        bereitsGerenderteKoordinaten.push(koordinatenKey);
      }
    }
  }
  
  
  

  
  
  getAddLocationIcon() {
    return L.icon({
      iconUrl: 'assets/loc.svg',
      iconSize: [30, 45], 
      iconAnchor: [15, 41], 
      popupAnchor: [1, -34], 

      shadowSize: [41, 41],
      shadowAnchor: [12, 41] 
    });
  }
  
  

  addMarker() {

    this.map.removeLayer(this.markers)
    this.map.removeLayer(this.layers)
    if (this.markerClusterGroup) {
      this.markerClusterGroup.clearLayers();
    }
    this.layers = [];
    if(this.selectedMarker){
      this.map.removeLayer(this.selectedMarker)
    }
    this.zeichneMarkerAufKarte();
    this.resetmap();
    
    
   
    
    const el = document.createElement('div');


    el.innerHTML = `<button style='padding: 10px; margin: 3%; height: 10%;  letter-spacing: 3px; border: 3px solid grey; border-radius: 15px;background-color: white;' > Standort setzen </button>`;

    el.addEventListener("click", (e) => {
      console.log("bb")
      //@ts-ignore
      console.log(this.newMarker._latlng);
      //@ts-ignore
      this.storageService.setSelectedMarker(this.newMarker?._latlng);
      //@ts-ignore
      this.storageService.setStreetName(this.newMarker?._latlng);
      
      

      // this.routingService.

      this.newMarker?.closePopup();
      this.newMarker?.off('click');
      //@ts-ignore
      this.newMarker?.dragging.disable();


      this.showModal();

    })



    if (this.newMarker == undefined) {
      
      const newMarkerIcon = this.getAddLocationIcon(); 
      this.newMarker = L.marker(latLng(51.04962, 12.1369), { draggable: true, icon: newMarkerIcon  }).addTo(this.map);

      this.map.setView(latLng(51.04962, 12.1369), 10);
      this.newMarker.bindPopup("<b>Setze meinen Standort! </b>").openPopup();

      this.newMarker.on('dragend', (event) => {
        var position = event.target.getLatLng();
        this.markerPosition=position;
        this.map.panTo(new L.LatLng(position.lat, position.lng))
        this.newMarker?.bindPopup(el);
        this.newMarker?.openPopup();

      });
    } else {//@ts-ignore
      this.newMarker.dragging.enable();
    }

  }

  onMapReady(map: any) {
    // Do stuff with map
    this.map = map;
    this.markerClusterGroup = L.markerClusterGroup({
      disableClusteringAtZoom: 13
    }

    );
    this.setLayer()

  }

  options = {
    layers: [
      tileLayer('https://m.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 12,
    minZoom: 9,
    center: latLng(51.04962, 12.1369)
  };


  constructor(private datahubService: DatahubService, private regioService: RegioService, public storageService: Storageservice, private routingService: RoutingserviceComponent,private simulationsService: SimulationService,) {
    // this.selectedObjKey = this.storageService.getObjectName() + " / " + this.storageService.getObjectKey(); 
    this.selectedObject = this.storageService.getObject()
    // this.selectedObjKey = "Analyseebene: " + this.selectedObject.Object_Name + " / " + this.selectedObject.Object_Key;
    this.setLayer();
  }
  async ngOnInit(): Promise<void> {
    this.meta = await this.datahubService.getEinrichtungenMeta();
  }

  clearMap22() {
    if (this.newMarker) {
      this.map.removeLayer(this.newMarker)
    }

    if (this.startMarker) {
      this.map.removeLayer(this.startMarker)
    }
    this.map.removeLayer(this.markers)
    this.map.removeLayer(this.layers)
    if (this.markerClusterGroup) {
      this.markerClusterGroup.clearLayers();
    }
    this.layers = []


  }


  test:any=[]

  updateLayer() {
    
    var umkreissuche = this.storageService.reachResult
    console.log("update layer");
    console.log(umkreissuche)

    if (!umkreissuche["Einrichtungen in der Nahe"]) {
      return;
    }

    var startCoordinates = umkreissuche.meta.starting_point;
    console.log('STARTING', startCoordinates)

    this.startMarker = L.marker([umkreissuche.meta[0].starting_point[1], umkreissuche.meta[0].starting_point[0]], { draggable: false, icon: this.myIcon }).addTo(this.map);
    this.markerArray.push(this.startMarker);

    this.map.eachLayer((layer:any)=> {
      if (layer instanceof L.Marker && layer !== this.startMarker) {
          this.map.removeLayer(layer);
      }
  });

    umkreissuche["Einrichtungen in der Nahe"].forEach((element: any) => {
      var ownIcon = L.icon({
        iconUrl: this.getLogo(element.Typ),
        iconSize: [24, 24], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [12, 24], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow

      });

      var latlng = latLng(element.geometry.coordinates[1], element.geometry.coordinates[0])
      var newMarker = L.marker(latlng, { icon: ownIcon }).bindPopup(
        element.Name + "<br>" +
        element.Distanz + "Meter"
      )//.addTo(this.map);

      this.markerClusterGroup.addLayer(newMarker);
      this.markers.push(newMarker);

    })



    this.markerClusterGroup.addTo(this.map);

    umkreissuche["Distanz_Buffer"].forEach((raster: any) => {
      var l = L.geoJSON(raster.geometry,
        {
          style: {
            fillColor: 'green',
            fillOpacity: 0.2,

            color: "black",
            weight: 0.3
          }
        })
      var umkreisString;
      if (raster.Umkreis) {
        umkreisString = raster.Umkreis + " Meter"
      } else {
        umkreisString = (raster.time / 60) + " Minuten "
      }
     
      l.bindPopup("<b> Umkreis: " + umkreisString + "</b>")
      //const street= this.storageService.getStreetName();
      const street= this.storageService.reachResult['street_name']
      if(street && street!='Straßennamen nicht gefunden'&& street!='empty'){
        console.log('street'+street)
      this.addLegend([], 'Umkreissuche: ' +  umkreisString + '<br> Straße: '+ street)
      } else{
        this.addLegend([], 'Umkreissuche: ' +  umkreisString) 
      }
      
      this.layers.push(l);

      this.map.fitBounds(l.getBounds());

      this.shape=l
      //this.markerClusterGroup.addLayer(l); 
    });

  
    if(this.myChart)
    {  this.myChart.destroy();}
    this.shareArray=[];

      setTimeout(() => {
        this.createChart();
      }, 500);
1  }

  getLogo(sTyp: any) {
    var icon = '';
    this.meta.forEach((bereich: any) => {
      bereich.Typen.forEach((typ: any) => {
        if (typ.Typ == sTyp) {
          icon = typ.Icon;
        }
      })
    });
    return "../../../../assets/icon/" + icon;
  }

  async setLayer() {
    if (!this.selectedObject) {
      return;
    }

    var res = await this.regioService.getShapefileByIdAndLevel(this.selectedObject.Object_Key, 3);
    this.storageService.setCurrentShapes(res[0]);
    console.log(res);

    //@ts-ignore
    res[0].forEach((element: any) => {
      var l = L.geoJSON(element.geometry,
        {
          style: {
            fillColor: 'white',
            fillOpacity: 0,

            color: 'black'
          },
          onEachFeature: (f, l) => {
            var out: string[] = [];

            out.push("Name : " + element.Object_Nam + "<br>"

            );

            l.bindPopup("<span class='span0'> " + element.Object_Nam + " </span> ");
          }
        });
      this.layers.push(l);
      var bounds = l.getBounds()
      var center = bounds.getCenter()
      this.map.setView(center, 9);
    })
  }

  showModal() {
    this.toggle = true;
    console.log(this.storageService.reachResult.einrichtungen)
    
    if (this.geoJsonLayer) {
      this.map.removeLayer(this.geoJsonLayer);
  }

    //@ts-ignore
    document.getElementById("dialog").showModal();


  }


  showSpinner() {
    this.spinner2 = true;

    //@ts-ignore
    document.getElementById("dialog2").showModal();


  }

  closeSpinner() {
    this.spinner2 = false;
    //@ts-ignorest
    document.getElementById("dialog2").close();
  }

}

function pulsateMarker() {
  throw new Error('Function not implemented.');
}

