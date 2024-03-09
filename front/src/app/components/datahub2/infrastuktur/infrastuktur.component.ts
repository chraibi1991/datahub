
import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import * as L from 'leaflet';
import { ShapeService } from '../../../service/simulationservice/streetXpert/shape.service';
import { Feature } from '../infrastuktur/Model/Feature';
import { UpdatenetworkService } from '../../../service/simulationservice/streetXpert/updatenetwork.service';
import { Geojson } from '../infrastuktur/Model/Geojson';
import { StreetService } from '../../../service/simulationservice/streetXpert/street.service';
import { Properties } from '../infrastuktur/Model/Properties';
//import 'leaflet-arrowheads';
import 'leaflet-polylinedecorator';
import { UpdateGeoJsonService } from '../../../service/simulationservice/streetXpert//update-geo-json.service';
import { SimulationService } from 'src/app/service/simulationservice/simulation.service';




@Component({
  selector: 'app-infrastuktur',
  templateUrl: './infrastuktur.component.html',
  styleUrls: ['./infrastuktur.component.css',
  '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
  //encapsulation: ViewEncapsulation.None
})
export class InfrastukturComponent implements OnInit{

  
  //Variablen Deklarieren
  private map:any;
  public geoJsonFeatureElement = new Feature();
  public geoJsonFeatureCollection = new Geojson();
  public openLayerSidebar = false;
  public openStreetSidebar = false;
  public street: any;
  public multiLineString: any;
  public previousLayer: any;
  public selectedLayer: any;
  public freespeed: any;
  public capacity: any;
  public streetLayer = new Feature();
  public findStreet: any = false;
  public resetLayer: any;
  public properties?: Properties = undefined;
  public streetOptions: any = [];
  public endPoint: any;
  public numberStreetName: any;
  public reversedFeature: any;
  public reversedLayer: any;
  public filterModesEnabled = false;
  public filterFreespeedEnabled = false;
  public filterCapacityEnabled = false;
  public modeOptions: any = [];
  public filteredModes: any;
  public filteredFreespeedMin: number = 0;
  public filteredFreespeedMax: number = 0;
  public filteredCapacityMin: any;
  public filteredCapacityMax: any;
  public isBoxVisible: boolean = false;
  public hoveredLayer: any;
  public decoratorHoveredLayer: any;
  public decoratorReversedLAyer: any;
  public Layer: any;
  public isBoxVisibleStreetFinder: boolean = false;
  streetLayerRed: any;
  isModificationBoxVisible: boolean = false;
  modifiedModes!: string;
  modifiedFreespeed!: number;
  modifiedCapacity!: number;
  filtredRemovedLayers:any[]=[]

  // Dependency Injection
  constructor(
    private geoJsonService: ShapeService,
    private postService: UpdateGeoJsonService,
    private updatenetworkService: UpdatenetworkService,
    private strassService: StreetService,
    private simulationService:SimulationService
  ) {}

  showSpinnerWhole:any= true;
  

 // Initialisierung der Karte
  async ngOnInit(): Promise<void> {
   
    this.initMap();
    await this.initilisation();
    this.getSA();
    this.getBLK(); 


      
  
    
    }

 // Initialisierungsfunktion
  async initilisation() {
    this.geoJsonService.getGeoJson().subscribe((geoJsonFeatureElement) => {
      this.geoJsonFeatureCollection = geoJsonFeatureElement as Geojson;
      this.initGeoJsonLayer();
      this.selectList();
      this.fMSearch();
      this.showSpinnerWhole = false;
    });
  }

  //Funktion für Dropdownsuche
  selectList() {
    this.geoJsonFeatureCollection.features?.forEach((feature: any) => {
      const s = feature.properties?.Street;
      this.streetOptions.push(s);
    });
    this.streetOptions = Array.from(new Set(this.streetOptions));
  }

 // Funktion zu Speicherung der Werte
  saveData() {
    this.geoJsonFeatureElement.properties = this.properties;
    this.postService
      .postGeoJson(this.geoJsonFeatureCollection)
      .subscribe((result) => {
        console.log(result);
      });
  }


// network.xml erstellen im Beckend
  UpdateNetwork() {
    this.updatenetworkService.postNetwork().subscribe((result) => {});
  }

 // Sidebar schließen
  closeNav() {
    this.openLayerSidebar = false;
  }

  //zweite  Sidebar schließen
  closeStreetSidebar() {
    this.openStreetSidebar = false;
  }

  //Werte der Zweiten Siedebar schließen
  saveDataStreet() {
    this.geoJsonFeatureCollection.features?.forEach((feature: any) => {
      const lineStringString = JSON.stringify(feature.geometry?.coordinates);
      const multiLineStringCoordinates = JSON.stringify(
        this.streetLayer.geometry?.coordinates
      );
      if (multiLineStringCoordinates.includes(lineStringString)) {
        feature.properties.freespeed = this.freespeed;
        feature.properties.capacity = this.capacity;
      }
    });
    this.saveData();
  }

  // parameter freespeed speichern
  saveFreespeed() {
    this.geoJsonFeatureCollection.features?.forEach((feature: any) => {
      const lineStringString = JSON.stringify(feature.geometry?.coordinates);
      const multiLineStringCoordinates = JSON.stringify(
        this.streetLayer.geometry?.coordinates
      );
      if (multiLineStringCoordinates.includes(lineStringString)) {
        feature.properties.freespeed = this.freespeed;
      }
    });
    this.saveData();
  }

  //parameter capacity speichern
  saveCapacity() {
    this.geoJsonFeatureCollection.features?.forEach((feature: any) => {
      const lineStringString = JSON.stringify(feature.geometry?.coordinates);
      const multiLineStringCoordinates = JSON.stringify(
        this.streetLayer.geometry?.coordinates
      );
      if (multiLineStringCoordinates.includes(lineStringString)) {
        feature.properties.capacity = this.capacity;
      }
    });
    this.saveData();
  }

 //StreetFinder reseten
  reset() {
    this.findStreet = false;
    this.map.removeLayer(this.resetLayer);
  }

  // Zweiten GeoJSON Layer erstellen
  OnKeyUp() {
    this.findStreet = true;
    this.strassService
    //Service verwenden um multi.json von Beckend in der Karte darzustellen
      .getMultiLineString(this.street)
      .subscribe((multiLineString) => {
        this.multiLineString = multiLineString;
        //gefundener Straßen als Objekte Darstellen
        const filtredStreetLayer = L.geoJSON(this.multiLineString, {
          // gefundene Straßen Stylen
          style: (feature) => ({
            weight: 30,
            opacity: 1,
            color: '#FF0000',
          }),
          // Events für die Straßen implimentieren
          onEachFeature: (feature, layer) => {
            // Ein Click event zu öffnen der Sidebar
            layer.on('click', (e: any) => {
              this.closeNav();
              this.openStreetSidebar = true;
              // Objkte in den Input felder verknüpfen
              this.streetLayer = feature as Feature;
              this.streetLayerRed = layer;
            }),
            // mouseover und mouseout events
              layer.on('mouseover', (e: any) => {
                this.highlightStreet(e);
              }),
              layer.on('mouseout', (e: any) => {
                this.resetFeatureStreet(e);
              });
          },
        });
        // Suchen nach neuen Straßen. Alte Ergebnisse löschen
        if (this.previousLayer) {
          this.map.removeLayer(this.previousLayer);
        }
        //Anzahl der gefundenen Ergebnisse
        this.numberStreetName = filtredStreetLayer.getLayers().length;
        //gefundene Straßen auf der Karte Darstellen
        this.map.addLayer(filtredStreetLayer);
        this.previousLayer = filtredStreetLayer;
        this.resetLayer = filtredStreetLayer;
        // gefundene Straßen als untere schicht platzieren
        filtredStreetLayer.bringToBack();
        this.map.flyTo([51.1448898,11.99000], 9.8, { duration: 1 });

      });
      //name der Straße in der Console ausgeben lassen
    console.log(this.street);
  }

  // zu angecklickten straßen vergrößern
  zoomIn() {
    const lat = this.selectedLayer.feature.geometry?.coordinates[0][1];
    const lng = this.selectedLayer.feature.geometry?.coordinates[0][0];
    console.log(lat);
    this.map.flyTo([lat, lng], 18, { duration: 3 });
  }

  // ganzes Straßennetz beobachten
  zoomOut() {
    this.map.flyTo([51.1448898,11.99000], 10, { duration: 3});
  }

  // löschen der angecklickten Straßen
  delete() {
    //if (confirm("Are you sure you want to remove the selected layer?")) {
    this.map.removeLayer(this.selectedLayer);

    if (this.selectedLayer == this.hoveredLayer) {
      this.decoratorHoveredLayer.removeFrom(this.map);
    } else if (this.selectedLayer == this.reversedLayer) {
      this.decoratorReversedLAyer.removeFrom(this.map);
    }

    this.geoJsonFeatureCollection.features?.splice(
      this.geoJsonFeatureCollection.features?.indexOf(
        this.geoJsonFeatureElement
      ),
      1
    );
    this.closeNav();
    this.saveData();
  }

  //löschen der gesuchten Straßen
  deleteRedLayer() {
    this.Layer.eachLayer((layer: any) => {
      const lineStringString = JSON.stringify(
        layer.feature.geometry?.coordinates
      );
      const multiLineStringCoordinates = JSON.stringify(
        this.streetLayer.geometry?.coordinates
      );

      if (multiLineStringCoordinates.includes(lineStringString)) {
        this.map.removeLayer(this.streetLayerRed);
        this.map.removeLayer(layer);
      }
    });

    this.geoJsonFeatureCollection.features =
      this.geoJsonFeatureCollection.features?.filter((feature: any) => {
        const lineStringString = JSON.stringify(feature.geometry?.coordinates);
        const multiLineStringCoordinates = JSON.stringify(
          this.streetLayer.geometry?.coordinates
        );
        return !multiLineStringCoordinates.includes(lineStringString);
      });
    this.saveData();
    this.closeStreetSidebar();
  }

  putLayerBack() {
    this.selectedLayer.bringToBack();
  }
  putLayerFront() {
    this.selectedLayer.bringToFront();
  }

  //OpenStreetMap Daten verwenden
  private initMap(): void {
    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    this.map = L.map('map', {
      center: [51.1448898,11.99000],
      zoom: 9.8,
    });

    tiles.addTo(this.map);
  }

  // Filter Funktionen
  resetModes() {
    this.map.removeLayer(this.Layer);
    this.initilisation();
  }

  filtredeModesSearch() {

    this.Layer.eachLayer((layer: any) => {
      const modes = layer.feature.properties.modes;
      const freespeedRange = Number(layer.feature.properties.freespeed);
      const capacity = Number(Math.floor(layer.feature.properties.capacity));

      if (
        (this.filterModesEnabled &&
          this.filteredModes !== 'All Modes' &&
          !modes.includes(this.filteredModes)) ||
        (this.filterFreespeedEnabled &&
          (freespeedRange < this.filteredFreespeedMin ||
            freespeedRange > this.filteredFreespeedMax)) ||
        (this.filterCapacityEnabled &&
          (capacity < this.filteredCapacityMin ||
            capacity > this.filteredCapacityMax))
      ) {
        this.map.removeLayer(layer);
        // this.decoratorReversedLAyer.removeFrom(this.map);
        // this.decoratorHoveredLayer.removeFrom(this.map);
      } else {
        //this.map.addLayer(layer);
      }
    });
  }

  filteredFreespeedSearch() {
    this.Layer.eachLayer((layer: any) => {
      const modes = layer.feature.properties.modes;
      const freespeedRange = Number(layer.feature.properties.freespeed);
      const capacity = Number(Math.floor(layer.feature.properties.capacity));

      if (
        (this.filterModesEnabled &&
          this.filteredModes !== 'All Modes' &&
          !modes.includes(this.filteredModes)) ||
        (this.filterFreespeedEnabled &&
          (freespeedRange < this.filteredFreespeedMin ||
            freespeedRange > this.filteredFreespeedMax)) ||
        (this.filterCapacityEnabled &&
          (capacity < this.filteredCapacityMin ||
            capacity > this.filteredCapacityMax))
      ) {
        this.map.removeLayer(layer);
        // this.decoratorReversedLAyer.removeFrom(this.map);
        // this.decoratorHoveredLayer.removeFrom(this.map);
      } else {
        //this.map.addLayer(layer);
      }
    });
  }

  filteredCapacitySearch() {
    this.Layer.eachLayer((layer: any) => {
      const modes = layer.feature.properties.modes;
      const freespeedRange = Number(layer.feature.properties.freespeed);
      const capacity = Number(Math.floor(layer.feature.properties.capacity));

      if (
        (this.filterModesEnabled &&
          this.filteredModes !== 'All Modes' &&
          !modes.includes(this.filteredModes)) ||
        (this.filterFreespeedEnabled &&
          (freespeedRange < this.filteredFreespeedMin ||
            freespeedRange > this.filteredFreespeedMax)) ||
        (this.filterCapacityEnabled &&
          (capacity < this.filteredCapacityMin ||
            capacity > this.filteredCapacityMax))
      ) {
        this.map.removeLayer(layer);
        // this.decoratorReversedLAyer.removeFrom(this.map);
        // this.decoratorHoveredLayer.removeFrom(this.map);
      } else {
        this.map.addLayer(layer);
      }
    });
  }

  fMSearch() {
    this.geoJsonFeatureCollection.features?.forEach((feature: any) => {
      const m = feature.properties?.modes;
      this.modeOptions.push(m);
    });
    this.modeOptions = Array.from(new Set(this.modeOptions));
    this.modeOptions.unshift('All Modes');
    this.filteredModes = 'All Modes';
    //console.log(this.modeOptions)
  }

  setAllModes() {
    this.filteredModes = 'All Modes';
    this.filtredeModesSearch();
  }

  // Funktionnen zu toggeln der filter box
  toggleBox() {
    this.isBoxVisible = !this.isBoxVisible;
    this.isModificationBoxVisible=false
  }

  toggleBoxStreetFinder() {
    this.isBoxVisibleStreetFinder = !this.isBoxVisibleStreetFinder;
  }

  toggleModificationBox() {
    this.isModificationBoxVisible=!this.isModificationBoxVisible
  }

  //Erweiterte Filter Funktionnen
  applyModifications(): void {
    this.Layer.eachLayer((layer: any) => {
      if (this.map.hasLayer(layer)) {
        layer.feature.properties.modes = this.modifiedModes;
        layer.feature.properties.freespeed = this.modifiedFreespeed;
        layer.feature.properties.capacity = this.modifiedCapacity;
      }
    })
    this.saveData()
  }

  applyModifiedModes(){
    this.Layer.eachLayer((layer: any) => {
      if (this.map.hasLayer(layer)) {
        layer.feature.properties.modes = this.modifiedModes;
      }
    })
    this.saveData()
  }

  applyModifiedCapacity(){
    this.Layer.eachLayer((layer: any) => {
      if (this.map.hasLayer(layer)) {
        layer.feature.properties.capacity = this.modifiedCapacity;
      }
    })
    this.saveData()
  }

  applyModifiedFreespeed(){
    this.Layer.eachLayer((layer: any) => {
      if (this.map.hasLayer(layer)) {
        layer.feature.properties.freespeed = this.modifiedFreespeed;
      }
    })
    this.saveData()
  }

  //löschen der gefilterten Ergebnisse
  deleteFiltred(){
    this.Layer.eachLayer((layer: any) => {
      if (this.map.hasLayer(layer)) {
        this.map.removeLayer(layer);
        this.filtredRemovedLayers.push(JSON.stringify(layer.feature))
      }
    })
    this.geoJsonFeatureCollection.features =
      this.geoJsonFeatureCollection.features?.filter((feature) => {
        const removedFeature=JSON.stringify(feature)
        return !this.filtredRemovedLayers.includes(removedFeature)
      });
    this.saveData()
  }

  decoratorLayer: any;

  
 
  // Funktion zu erstellung des Straßennetzwerks
  private initGeoJsonLayer() {
    this.Layer = L.geoJSON(this.geoJsonFeatureCollection as any, {
      pointToLayer: function (feature, latlng) {
        const geojsonMarkerOptions:any = {
          radius: 1,
          fillColor: "#ff7800",
          color: "#000",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8
      };
        return L.circleMarker(latlng, geojsonMarkerOptions)}
      ,
      onEachFeature: (feature, layer) => {
        layer.on('click', (e: any) => {
          //get the Features
          this.geoJsonFeatureElement = feature as Feature;
          this.properties = Object.assign({}, feature.properties as Properties);
          console.log(layer)
          //needed for delete and closing sidebars
          this.selectedLayer = layer;
          this.closeStreetSidebar();
          this.openLayerSidebar = true;
          // creating the reversedlayer and the arrowsheads
          const layerColor = (layer as any).options.color;

          if (layerColor == '#7FFF00' && this.hoveredLayer != layer) {
            this.resetSelectedAndReversedLayer();
            this.hoveredLayer = layer;
            this.hoveredLayer.setStyle({
              color: 'RoyalBlue',
              weight: 3,
            });
            //add an arrow
            this.decoratorHoveredLayer = L.polylineDecorator(
              this.hoveredLayer,
              {
                patterns: [
                  // defines a pattern of 10px-wide dashes, repeated every 20px on the line
                  {
                    offset: '0%',
                    repeat: '0',
                    symbol: L.Symbol.arrowHead({
                      pixelSize: 12,
                      polygon: false,
                      pathOptions: {
                        color: 'RoyalBlue',
                        weight: 3,
                        fillOpacity: 1,
                      },
                      headAngle: 270,
                    }),
                  },
                ],
              }
            ).addTo(this.map);

            this.reversedFeature = this.geoJsonFeatureCollection.features?.find(
              (feature) => {
                const coordinates =
                  this.geoJsonFeatureElement.geometry?.coordinates;
                const reversedCoordinates = feature.geometry?.coordinates
                  .slice()
                  .reverse();

                return (
                  JSON.stringify(coordinates) ===
                  JSON.stringify(reversedCoordinates)
                );
              }
            );
            //console.log(this.reversedFeature);
            //get the layer of the reversed element
            if (this.reversedFeature) {
              this.Layer?.eachLayer((layer: any) => {
                if (layer.feature === this.reversedFeature) {
                  this.reversedLayer = layer;
                  this.decoratorReversedLAyer = L.polylineDecorator(
                    this.reversedLayer,
                    {
                      patterns: [
                        // defines a pattern of 10px-wide dashes, repeated every 20px on the line
                        {
                          offset: '0%',
                          repeat: '0',
                          symbol: L.Symbol.arrowHead({
                            pixelSize: 12,
                            polygon: false,
                            pathOptions: {
                              color: 'DarkBlue',
                              weight: 3,
                              fillOpacity: 2,
                            },
                            headAngle: 270,
                          }),
                        },
                      ],
                    }
                  ).addTo(this.map);
                }
              });
              // style the layers
              this.reversedLayer.setStyle({
                color: 'DarkBlue',
                weight: 3,
              });
              this.hoveredLayer.setStyle({
                color: 'RoyalBlue', // Changing the color to purple
                weight: 3, // Reducing the weight of the line
              });
              this.pushFeatureAside(
                this.hoveredLayer,
                0.0005,
                0.0001,
                this.decoratorHoveredLayer
              );
              this.pushFeatureAside(
                this.reversedLayer,
                -0.0005,
                -0.0001,
                this.decoratorReversedLAyer
              );
            }
          }
        }),
          layer.on('mouseover', (e: any) => {
            this.highlightFeature(e);
          });
        layer.on('mouseout', (e: any) => {
          this.resetFeature(e);
        });
      },
    });
    this.map.addLayer(this.Layer);
    this.Layer.bringToFront();
    this.BLK.bringToFront();
  }

  private resetSelectedAndReversedLayer() {
    // Reset previous hovereded layer
    if (this.hoveredLayer) {
      this.decoratorHoveredLayer.removeFrom(this.map);
      //this.hoveredLayer.deleteArrowheads(); must still comm
      this.hoveredLayer.setStyle({
        color: '#1e90ff',
        weight: 3,
      });
    }
    if (this.reversedFeature) {
      this.pushFeatureAside(
        this.hoveredLayer,
        -0.0005,
        -0.0001,
        this.decoratorHoveredLayer
      );

      // Reset previous reversed layer
      this.decoratorReversedLAyer.removeFrom(this.map);
      //this.reversedLayer.deleteArrowheads();
      this.reversedLayer.setStyle({
        color: '#1e90ff',
        weight: 3,
      });
      this.pushFeatureAside(
        this.reversedLayer,
        0.0005,
        0.0001,
        this.decoratorReversedLAyer
      );
    }
  }

  private highlightFeature(e:any) {
    const layer = e.target;
    if (
      (layer === this.reversedLayer || layer === this.hoveredLayer) &&
      this.reversedLayer
    ) {
      return;
    }
    layer.setStyle({
      color: '#7FFF00',
      weight: 3,
    });
  }

  sachsenAnhaltShape:any
  burgenlandkreisShape:any
  async getSA(){
      this.simulationService.getSachsenAnhaltShape().subscribe((sachsenAnhaltShape) => {
        this.sachsenAnhaltShape = sachsenAnhaltShape;
    
  
    
        L.geoJSON(this.sachsenAnhaltShape, {
          style: {
            color: 'black',
            opacity: 1,
            weight: 8,
            fill:false
          },
        }).addTo(this.map);
      });
  }
BLK:any
  async getBLK(){
      this.simulationService.getBurgenlandkreisShape().subscribe((burgenlandkreisShape) => {
        this.burgenlandkreisShape = burgenlandkreisShape;
    
        this.BLK= L.geoJSON(this.burgenlandkreisShape, {
          style: {
            fill: false, // Stellen Sie sicher, dass die Füllung deaktiviert ist
            color: 'black',
            opacity: 1,
            weight: 6,
          },
        });
    
        this.BLK.addTo(this.map);
        this.BLK.bringToFront(); 
      });
  }

  private pushFeatureAside(l:any, offsetX:any, offsetY:any, decorator:any) {
    const layer = l;
    // Get the original array of LatLngs
    const originalLatLngs = layer.getLatLngs();
    const pushedLatLngs = originalLatLngs.map((latlng:any, index:any) => {
      // Adjust the value to push the feature aside
      const pushedLatLng = new L.LatLng(
        latlng.lat + offsetY,
        latlng.lng + offsetX
      );
      return pushedLatLng;
    });

    layer.setLatLngs(pushedLatLngs); // Update the layer with the pushed LatLngs
    decorator.setPaths(pushedLatLngs); //update the arrows
  }

  private highlightStreet(e:any) {
    const layer = e.target;

    layer.setStyle({
      color: '#7FFF00',
    });
  }
  private resetFeatureStreet(e:any) {
    const layer = e.target;

    layer.setStyle({
      weight: 30,
      opacity: 1,
      color: '#FF0000',
    });
  }

  private resetFeature(e:any): void {
    const layer = e.target;
    if (layer === this.reversedLayer || layer === this.hoveredLayer) {
      return;
    }
    //this.map.removeLayer(this.endPoint);

    layer.setStyle({
      color: '#1e90ff',
    });
  }

  ////////////////////////////////////////not used functions//////////////////////////////////////
  public ep: any;
  public ed: any;

  private addPointselected(lay:any) {
    const coordi = lay.getLatLngs()[0];

    this.ed = L.circleMarker(coordi, {
      color: 'black',
      fillColor: 'purple',
      fillOpacity: 1,
      radius: 5,
    });
    //this.endPoint.addTo(layer._map);
    this.map.addLayer(this.ed);
  }

  private addPointreversed(lay:any) {
    const coordi = lay.getLatLngs()[0];

    this.ep = L.circleMarker(coordi, {
      color: 'black',
      fillColor: 'purple',
      fillOpacity: 1,
      radius: 5,
    });
    //this.endPoint.addTo(layer._map);
    this.map.addLayer(this.ep);
  }

  private addEndPoint(e:any) {
    const layer = e.target;
    if (layer === this.reversedLayer || layer === this.hoveredLayer) {
      return;
    }
    const coordinates = layer.getLatLngs()[0];
    this.endPoint = L.circleMarker(coordinates, {
      color: 'black',
      fillColor: 'purple',
      fillOpacity: 1,
      radius: 5,
    });
    //this.endPoint.addTo(layer._map);
    this.map.addLayer(this.endPoint);
  }




}
