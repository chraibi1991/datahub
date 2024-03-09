import { Component, OnInit } from '@angular/core';
import { RegioService } from 'src/app/service/regioservice/regioservice.component';
import { VorsorgeserviceComponent } from '../vorsorgeservice/vorsorgeservice.component';
import { Chart } from 'chart.js';
import { Map, latLng, tileLayer } from 'leaflet';
import { Storageservice } from 'src/app/service/storageservice-component/storageservice-component.component';
import { DatahubService } from 'src/app/service/datahubservice/datahubservice.component';
import { Router } from '@angular/router';
import L from 'leaflet';

@Component({
  selector: 'app-nachfrageberechnung',
  templateUrl: './nachfrageberechnung.component.html',
  styleUrls: ['./nachfrageberechnung.component.css']
})
export class NachfrageberechnungComponent implements OnInit {
  selectedShape: any;
  changedIndizesF: any = [];
  changedIndizesM: any = [];
  selectedMinYear: number = 0;
  selectedMaxYear: number = 0;
  selectedMinVal: number = 0;
  selectedMaxVal: number  = 0;
  async loadChart(ind: any) {

    this.selectedInd = ind;
    await this.createMetrics();

  }
  spinner: boolean = false;
  map: any;
  selectedLevel: number = 4;
  presLayer!: Object;
  center: any;
  keys!: any[];
  indicators: any = []
  selectedInd: any;
  legendCluster: any;

  async filter($event: Event, type: string, chart: any) {


    //@ts-ignore
    var value = Number($event.target.ariaValueText);
    if (type == 'timeMin') {
      this.selectedMinYear = value
    }
    if (type == 'timeMax') {
      this.selectedMaxYear = value
    }

    if (type == 'valMin') {
      this.selectedMinVal = value
    }
    if (type == 'valMax') {
      this.selectedMaxVal = value
    }

    this.createMetrics();
  }



  async deselectAll(bool: any) {
    this.selectMode = bool;
   
   this.chartLegend.forEach((element: { disabled: any; }) => {
     element.disabled = bool; 
     
   });

   this.createMetrics(); 
  }
  selectedInf: any = undefined;
  selectedPop: any = undefined;
  demandTable: any = [];
  charTitle: any;
  chartGeneral: any;
  startY = {}
  canvas: any;
  datasetIndex: any = 0;
  options = {
    layers: [
      tileLayer('https://m.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 9,
    minZoom: 7,

    center: latLng(51.04962, 12.1369)
  };
  layers: any;
  minValue: any;
  maxValue: any;

  chart: any;
  minYear: any;
  maxYear: any;
  chartLegend: any;
  selectMode = false; 
  selectedChartObject: any;
  async setInfrastructure(inf: any) {
    this.selectedInf = inf;
  }

  async setPop(pop: any) {
    this.selectedPop = pop;

    console.warn("inf", this.selectedInf)

    if(this.selectedInf) {


    this.demandTable = await this.vorsorgeService.getDemandTable(this.selectedInf.Typ)

    console.warn("demandTable", this.demandTable)
    this.indicators = await this.vorsorgeService.getIndicators(this.selectedInf.Typ)
    this.selectedInd = this.indicators[0]
    this.showChartTable()
    }

  }

  formatLabel(value: number): string {
    return `${value}`;
  }

  async reset() {

    this.changedIndizesF = [];
    this.changedIndizesM = []; 
    this.demandTable = await this.vorsorgeService.getDemandTable(this.selectedInf.Typ)
    console.warn("demandTable", this.demandTable)


    this.showChartTable()


  }
  mode = 0;
  infrastructure: any;
  pop: any;

  buildReqBody() {
    var parameters_calculation: any = [];
    var altersklassen = this.demandTable.chartData.labels;

    this.demandTable.chartData.datasets.forEach((d: { data: string | any[]; label: any; }) => {
      var data = [];

      for (var i = 0; i < d.data.length; i++) {
        data.push({
          "Alter": altersklassen[i],
          "Inanspruchnahme_Leistung": d.data[i]
        })

      }
      parameters_calculation.push({
        "Sex": d.label,
        "data": data
      })




    });
    var disableKeys: any[] = []
    if(this.chartLegend) {

    var disableRegions = this.chartLegend.filter((c: { disabled: boolean; }) => c.disabled == true);
   
    disableRegions.forEach((el: { Object_Key: any; }) => disableKeys.push(el.Object_Key))}



    var body = {
      "admin_level": 4,
      "indicator": this.selectedInd.indicator,
      "pop_name": this.selectedPop.pop_name,
      "typ": this.selectedInf.Typ,
      "filterKeys":  disableKeys, 
      "focusedKey": this.selectedShape ? this.selectedShape : this.storageService.getObject().Object_Key,
      "maxTime": this.selectedMaxYear? this.selectedMaxYear: this.maxYear,
      "maxValue": this.selectedMaxVal? this.selectedMaxVal: this.maxValue,
      "minTime": this.selectedMinYear? this.selectedMinYear: this.minYear,
      "minValue": this.selectedMinVal?this.selectedMinVal: this.minValue,
      "objectKey": this.storageService.getObject().Object_Key,
      "parameters_calculation": parameters_calculation

    };

    return body;
  }


  async filterRegion(l: any) {
    l.disabled = !l.disabled; 
    this.createMetrics(); 
  }

  async createMetrics() {


    var body = this.buildReqBody();

    console.warn("BODY", body)

    var metrics = await this.vorsorgeService.getNachfrageMetrics(body);

    console.warn("metrics", metrics)
    //@ts-ignore
    this.minValue = metrics.chart.chartMeta.minChartValue;
    //@ts-ignore
    this.maxValue = metrics.chart.chartMeta.maxChartValue;

    //@ts-ignore
    this.minYear = Number(metrics.chart.chartMeta.minChartYear)
    //@ts-ignore
    this.maxYear = Number(metrics.chart.chartMeta.maxChartYear)
    //@ts-ignore
    this.chartLegend = metrics.chart.chartMeta.regions

  
    //this.selectedShape = 
    //@ts-ignore
    this.charTitle = metrics.chart.chartMeta.title


    this.chartGeneral?.destroy();
    var chartDisplay = {
      type: 'line',
      data: {
        //@ts-ignore
        labels: metrics.chart.chartData.labels,
        //@ts-ignore
        datasets: metrics.chart.chartData.datasets
      },
      options: {
        scales: {
          y: {
            title: {
              display: true,
              //@ts-ignore
              text: metrics.chart.chartMeta.title
            }
          },

        },
        plugins: {
          legend: {
            display: false,
          }
        }
      }
    }



    setTimeout(() => {
      this.chartGeneral = new Chart("canvasGeneral", chartDisplay);
      // this.canvas = document.getElementById("canvasGeneral");

    });

    //@ts-ignore
    this.addShapelayers(metrics.shapefiles.data);



    //@ts-ignore
    this.addLegendNew(metrics, 'Allgemein ' )





  }

  addShapelayers(data: any) {
    data = data.reverse();


    this.layers = []
    data.forEach((element: any) => {
      var fillOpacity = 0.5;
      if (!element.value) {
        fillOpacity = 0.1;
        element.value = "Kein Wert!"
      }
      var weight = 1.5;
      if (this.selectedShape == element.Object_Key) {
        fillOpacity = 1
        weight = 5;
      }

      var l = L.geoJSON(element.geometry,
        {
          style: {
            fillColor: element.color,
            fillOpacity: fillOpacity,
            weight: weight,
            color: 'black'
          },
          onEachFeature: (f, l) => {

            l.bindPopup("<span class='span2'> " + element.Object_Nam + " </span> <br>" +
              "<span class='span0'> " + element.value + " </span> <br>");
          }
        });

      l.on('mouseover', () => {
        l.bindPopup("<span class='span2'> " + element.Object_Nam + " </span> <br>" +
          "<span class='span2'> " + element.value + " </span> <br>").openPopup();
        // this.storageService.setActiveLabel(element.Object_Nam)
      });

      l.on('click', async () => {
        this.selectedShape = element.Object_Key;
        await this.createMetrics();
      });
      this.layers.push(l);
      //this.keys = keys;







    });

  }


  async next() {




    this.mode++;
    if (this.mode == 1) {
      this.charTitle = ''

      await this.createMetrics()
    }




  }

  back() {

    if(this.selectedPop && this.selectedInf && this.mode != 1) {
      this.selectedPop = null;
      this.selectedInf = null; 
    } else {
      this.showChartTable(); 
    this.mode--;}
  }


  constructor(private vorsorgeService: VorsorgeserviceComponent, private storageService: Storageservice, private regioService: RegioService, private datahub: DatahubService, private router: Router) {
    if (this.storageService.getObject().Logo_URL == '') {
      alert("Bitte zuerst Landkreis festlegen!")
      this.router.navigateByUrl('/start');
    } else {

      this.setLayer();
    }




  }

  async setLayer() {
    this.spinner = true;
    var keys: any[] = [];
    this.layers = [];


    var bundesland = await this.regioService.getShapefileByIdAndLevel(this.storageService.getObject().Object_Key.substring(0, 2), 1);


    //@ts-ignore
    var bundeslandLayer = L.geoJSON(bundesland[0][0].geometry,
      {
        style: {
          fillColor: 'white',
          fillOpacity: 0,
          weight: 4,

          color: 'black'
        },
        onEachFeature: (f, l) => {
          var out: string[] = [];
          //@ts-ignore
          out.push("Name : " + bundesland[0][0].Object_Nam + "<br>"
          );
          //@ts-ignore
          keys.push(bundesland[0][0].Object_Key);
          //@ts-ignore
          l.bindPopup("<span class='span2'> " + bundesland[0][0].Object_Nam + " </span> ");
        },
      });


    this.layers.push(bundeslandLayer);

    var bounds = bundeslandLayer.getBounds()
    var center = bounds.getCenter()
    this.map.setView(center, 7);
    var objKey = this.storageService.getObject().Object_Key

    if (this.selectedLevel == 3) {
      objKey = "15"

    }

    var res = await this.regioService.getShapefileByIdAndLevel(objKey, this.selectedLevel);

    this.presLayer = res[0];
    //@ts-ignore
    // res[0].push(bundesland[0][0]); 
    this.keys = [];
    keys = [];
    //@ts-ignore
    res[0].forEach((element: any) => {
      var l = L.geoJSON(element.geometry,
        {
          style: {
            fillColor: 'white',
            fillOpacity: 0.2,
            weight: 1.5,

            color: 'black'
          },
          onEachFeature: (f, l) => {
            var out: string[] = [];
            out.push("Name : " + element.Object_Nam + "<br>"
            );
            keys.push(element.Object_Key);
            l.bindPopup("<span class='span2'> " + element.Object_Nam + " </span> ");
          },
        });

      l.on('mouseover', () => {
        l.bindPopup("<span class='span2'> " + element.Object_Nam + " </span> <br>").openPopup();
        this.storageService.setActiveLabel(element.Object_Nam)
      });
      this.layers.push(l);
      //var bounds2 = l.getBounds(); 

      var bounds = l.getBounds()
      this.center = bounds.getCenter()

      this.keys = keys;
    })
    this.spinner = false;



    setTimeout(() => {
      if (this.selectedLevel != 3) {
        this.map.setView(this.center, 9);
      }
    }, 2000);





  }

  onMapReady(map: any) {
    this.map = map;
    this.setLayer();

    this.map.on('zoomend', () => {
      // alert(this.map.getZoom())
    });
  }

  async showChartTable() {


    var yAxisLabel = this.demandTable.chartDescription['Y-Axis']
    var xAxisLabel = this.demandTable.chartDescription['X-Axis']
    this.charTitle = this.demandTable.chartDescription.Title
    




    this.chartGeneral?.destroy();
    var chartDisplay = {
      type: 'line',
      data: {
        //@ts-ignore
        labels: this.demandTable.chartData.labels,
        //@ts-ignore
        datasets: this.demandTable.chartData.datasets
      },
      options: {
        scales: {
          y: {
            title: {
              display: true,
              text: yAxisLabel
            }
          },

        },
        plugins: {
          legend: {
            display: false,
          }
        }
      }
    }

    setTimeout(() => {
      this.chartGeneral = new Chart("canvasGeneral", chartDisplay);
      this.canvas = document.getElementById("canvasGeneral");
      //@ts-ignore
      this.canvas.addEventListener("pointerdown", (event) => {
        this.downHandler();
      });


      this.canvas.addEventListener('mouseup', (e: any) => {
        var mousPosY = this.getMousePos(this.canvas, e).y;
        var yAxis = this.chartGeneral.scales.y;
        var value = yAxis.getValueForPixel(mousPosY);
        //@ts-ignore
        this.chartGeneral.data.datasets[this.datasetIndex].data[this.startY.index] = Number(value.toFixed(2));

        if (this.datasetIndex == 0) {
          //@ts-ignore
          this.changedIndizesF.push(this.startY.index)
        } else {
          //@ts-ignore
          this.changedIndizesM.push(this.startY.index)
        }


        this.chartGeneral.update();



        this.startY = {};



      }, 0);

    }, 400);


  }
  async ngOnInit(): Promise<void> {
    this.infrastructure = await this.vorsorgeService.getMedInfrastructure();
    this.pop = await this.vorsorgeService.getPopulation();


  }

  addLegendNew(d: any, chartType: string) {

    //this.addLegendTitle(this.selectedChartObject.Name + ' - ' + chartType);

    if (this.legendCluster instanceof L.Control) { this.map.removeControl(this.legendCluster); }



    var colorArray = d.shapefiles.meta.colors;
    var breaks = d.shapefiles.meta.breaks;

    //@ts-ignore
    this.legendCluster = L.control({ position: 'bottomleft' });
    //@ts-ignore
    this.legendCluster.onAdd = () => {

      var div = L.DomUtil.create('div', 'info legend');
      var labels = [
        '<div style="background-color: rgba(255, 255, 255, 0.5)  ; padding: 10px; border-radius: 4px; width:400px;" ">' +
        '<div style="display: flex; flex-direction: row; margin: 4px; width:100px;">' +
        '<div style="display: flex; flex-direction: row" > <div class="circle" style="background-color:' + colorArray[0] + '; width:40px; height: 20px"></div> ' +
        '<div style="margin-left: 4px; margin-right: 4px; width:100px;"> <b> [' + breaks[0].toFixed(2) + " , " + breaks[1].toFixed(2) + ') </b> </div> </div>' +
        '<div style="display: flex; flex-direction: row" > <div class="circle" style="background-color:' + colorArray[1] + '; width:40px; height: 20px"></div> ' +
        '<div style="margin-left: 4px; margin-right: 4px; width:100px;"> <b> [' + breaks[1].toFixed(2)  + " , " + breaks[2].toFixed(2) + ') </b> </div> </div>' +
        '</div>' +

        '<div style="display: flex; flex-direction: row; margin: 4px; width:100px;">' +
        '<div style="display: flex; flex-direction: row" > <div class="circle" style="background-color:' + colorArray[2] + '; width:40px; height: 20px"></div> ' +
        '<div style="margin-left: 4px; margin-right: 4px; width:100px;"> <b> [' + breaks[2].toFixed(2) + " , " + breaks[3].toFixed(2) + ') </b> </div> </div>' +
        '<div style="display: flex; flex-direction: row" > <div class="circle" style="background-color:' + colorArray[3] + '; width:40px; height: 20px"></div> ' +
        '<div style="margin-left: 4px; margin-right: 4px;width:100px;"> <b> [' + breaks[3].toFixed(2) + " , " + breaks[4].toFixed(2) + ') </b> </div> </div>' +
        '</div>' +

        '<div style="display: flex; flex-direction: row; margin: 4px; width:100px;">' +
        '<div style="display: flex; flex-direction: row" > <div class="circle" style="background-color:' + colorArray[4] + '; width:40px; height: 20px"></div> ' +
        '<div style="margin-left: 4px; margin-right: 4px;width:100px;"> <b> [' + breaks[4].toFixed(2) + " , " + breaks[5].toFixed(2) + ') </b> </div> </div>' +
        //'<div style="display: flex; flex-direction: row" > <div class="circle" style="background-color:' + colorArray[5] + '; width:40px; height: 20px"></div> ' +
        //'<div style="margin-left: 4px; margin-right: 4px;"> <b> >' + breaks[5].toFixed(4) + ' </b> </div> </div>' +
        '</div>' +



        ' </div>'




      ];

      div.innerHTML = labels.join('<br>');
      return div;
    };
   this.legendCluster.addTo(this.map);

  }

  getMousePos(canvas: any, evt: any) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  downHandler() {

    const points = this.chartGeneral.getElementsAtEventForMode(event, 'nearest', { intersect: true }, false);

    
    if (points.length > 0) {



      // grab nearest point, start dragging
      var activePoint = points[0]; 
      this.datasetIndex = activePoint.datasetIndex;


      this.startY = {
        val: activePoint.element.$context.raw,
        y: activePoint.element.$context.element.y,
        index: activePoint.index
      }


      this.canvas.onpointermove = this.moveHandler(event, activePoint);
    };

  }


  moveHandler(event: Event | undefined, activePoint: { _chart: { data: any; }; _datasetIndex: any; _index: string | number; } | null) {




    // locate grabbed point in chart data
    if (activePoint != null) {

  

      var chartArea = this.chartGeneral.chartArea;
      var yAxis = this.chartGeneral.scales.y;//["y-axis-0"];



      yAxis.getValueForPixel();



      //@ts-ignore

      return;

    };
  };


}
