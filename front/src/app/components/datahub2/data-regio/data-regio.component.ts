import { Component, OnDestroy, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { latLng, tileLayer } from 'leaflet';
import { RegioService } from '../../../service/regioservice/regioservice.component';
import { Storageservice } from '../../../service/storageservice-component/storageservice-component.component';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { MatDialog } from '@angular/material/dialog';
import { ReportModalComponent } from './report-modal/report-modal.component';
import { toPng } from 'html-to-image';
import { SelectIndikatorenModalComponent } from './select-indikatoren-modal/select-indikatoren-modal.component';
import { Subscription } from 'rxjs';
import { resolve } from 'path';

@Component({
  selector: 'app-data-regio',
  templateUrl: './data-regio.component.html',
  styleUrls: ['./data-regio.component.css']
})

export class DataRegioComponent implements OnDestroy {
  public loading: boolean = false;
  private subscriptions: Subscription = new Subscription();
  private apiChartData: any;

  async deselectAll(bool: any) {
    this.selectMode = bool;

    this.chartLegend.forEach(element => {
      element.disabled = bool;

    });

    console.log("leg", this.chartLegend)

    switch (this.selectedChartIndex) {
      case 0:
        await this.showGeneralChart();
        break;
      case 1:
        await this.showYearlyChangeChart();
        break;

      case 2:
        await this.showChangeRateChart();
        break;
      case 3:
        await this.showCompareChart();
        break;
      default:
        await this.showGeneralChart();
        break;
    }
  }
  selectMode = false;
  selectedShape: any;
  topicsLoaded: any = false;
  async filterRegion(l: any) {
    l.disabled = !l.disabled;


    switch (this.selectedChartIndex) {
      case 0:
        await this.showGeneralChart();
        break;

      case 1:
        await this.showYearlyChangeChart();
        break;

      case 2:
        await this.showChangeRateChart();
        break;
      case 3:
        await this.showCompareChart();
        break;
      default:
        await this.showGeneralChart();
        break;
    }
  }
  async showCompareChart() {
    var yAxisLabel = this.selectedChartObject.unit;

    await this.getApiChartData();

    //@ts-ignore
    this.setMinMax(this.apiChartData.chart.chartMeta);

    this.chartGeneral?.destroy();


    var chartOptions = {
      responsive: true,
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart"
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }


    var chartDisplay = {
      type: 'bar',
      data: {
        //@ts-ignore
        labels: this.apiChartData.chart.chartData.labels,
        //@ts-ignore
        datasets: this.apiChartData.chart.chartData.datasets
      },

      options: {
        scales: {
          y: {
            title: {
              display: true,
              //this.selectedChartObject.Name 
              //@ts-ignore
              text: "Durchschnitt " + this.apiChartData.chart.chartMeta.minChartYear + " - " + this.apiChartData.chart.chartMeta.maxChartYear
            }
          }
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
    }, 10);

    //@ts-ignore
    this.chartLegend = this.apiChartData.chart.chartMeta.regions;
    //@ts-ignore
    this.addShapelayers(this.apiChartData.shapefiles.data);



    //@ts-ignore
    this.addLegendNew(this.apiChartData, 'Vergleich')

  }

  chartReady: any = false;
  chartLegend: any[] = [];

  closeInfo() {
    //@ts-ignore
    document.getElementById("info").close()
  }
  info: any;
  showInfo(chart: any) {

    this.info = chart.Beschreibung




    //@ts-ignore
    document.getElementById("info").showModal();
  }
  chartRootData: any = [];
  selectedMinYear: any = undefined;
  selectedMaxYear: any = undefined;
  selectedMinVal: any = undefined;
  selectedMaxVal: any = undefined;
  timeHasBeen: boolean = false;
  formatLabel(value: number): string {
    return `${value}`;
  }

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

    switch (this.selectedChartIndex) {
      case 0:
        await this.showGeneralChart();
        break;

      case 1:
        await this.showYearlyChangeChart();
        break;

      case 2:
        await this.showChangeRateChart();
        break;
      case 3:
        await this.showCompareChart();
        break;
      default:
        await this.showGeneralChart();
        break;

    }

    return;


  }
  //search2: any;
  selectedObject: any;
  layers: any = [];
  map: any;
  public selectedLevel!: number;
  spinner: any = false;
  selectedTopic: any = [];
  keys: any[] = [];
  regioMetaData: any = [];
  regioData: any[] = [];
  legend: any;
  legendCluster: any;
  showIndi: any = false;
  showAnal: boolean = true;
  showDetail: boolean = false;
  presLayer: any = [];
  result: ArrayBuffer | undefined;
  selectedIndicators: any = [];
  selectedChart: any;
  selectedChartIndex: any = 0;
  selectedChartTitle = "ABc";

  options = {
    layers: [
      tileLayer('https://m.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...'
      })
    ],
    zoom: 12,
    minZoom: 7,

    center: latLng(51.04962, 12.1369)
  };
  testThemen: any;
  center: L.LatLng = latLng(51.04962, 12.1369);
  chart: any;
  charts: any = [];
  maxYear: any;
  minYear: any;
  minValue: any;
  maxValue: any;
  selectedIndex: any;
  indi: any[] = [];
  chartGeneral: any;
  chartAgg: any;
  chartChange: any;
  chartTime: any;
  selectedChartObject: any;



  createTimeChart() {
    var chartData;
    var timeChart;
    this.timeHasBeen = false;


    //@ts-ignore
    var data = JSON.parse(JSON.stringify(this.chartRootData[2].myData));
    var dataForLabel = JSON.parse(JSON.stringify(this.chartRootData[2].datasets));

    var dataObj: {
      label: any;data: number[];
    } [] = [];

    var maxValue = -10000000;
    var minValue = 10000000;

    var lower = this.selectedMinYear ? this.selectedMinYear : this.chartRootData[2].minTime;
    var upper = this.selectedMaxYear ? this.selectedMaxYear : this.chartRootData[2].maxTime;

    console.warn(lower, upper);

    var lowerData = data.filter((el: {
      x: any;
    }) => el.x == lower);
    var upperData = data.filter((el: {
      x: any;
    }) => el.x == upper);
    if (lowerData.length > 0 && upperData.length > 0) {
      var upperObj = upperData[0];
      var lowerObj = lowerData[0];
      var resultObj = {};
      var values: number[] = [];

      (Object.keys(lowerObj) as(keyof typeof lowerObj)[]).forEach((key, index) => {

        var obj = {};
        if (!(key == 'x') && lowerObj[key] != 0) {
          var label = dataForLabel.filter((el: {
            parsing: {
              yAxisKey: string | number | symbol;
            };
          }) => el.parsing.yAxisKey == key)
          var val = parseFloat(((upperObj[key] - lowerObj[key]) / lowerObj[key]).toFixed(3)) * 100

          if (maxValue < val) {
            maxValue = val;
          }

          if (minValue > val) {
            minValue = val;
          }
          values.push(parseFloat(((upperObj[key] - lowerObj[key]) / lowerObj[key]).toFixed(3)));
          dataObj.push({
            label: label[0].label,
            data: [parseFloat(((upperObj[key] - lowerObj[key]) / lowerObj[key]).toFixed(3)) * 100]
          })

        }

      })

    }

    //@ts-ignore
    console.log("time", lowerData, upperData, resultObj, dataObj);

    var chartDisplay = {
      type: 'bar',
      data: {
        labels: ['Änderungsrate'],
        datasets: dataObj,
      },
      options: {
        responsive: true,
        scales: {
          y: {
            title: {
              display: true,
              text: "Änderungsrate " + lower + " - " + upper
            }
          },
          x: {
            display: false

          }
        }

      }
    }

    this.chartTime?.destroy();


    //@ts-ignore
    this.chartTime = new Chart('canvasTime', chartDisplay);


    this.changeChartType(0);

    setTimeout(() => {
      this.changeChartType(2);
      this.selectedMaxYear = upper;
      var chartData = {
        data: {
          labels: ['D'],
          datasets: dataObj,

        }
      }

      this.updateLayerForTimeChart(chartData, minValue, maxValue, this.selectedChartObject.Name);
    }, 10)



    this.timeHasBeen = true;

    return;

  }
  async setChart(chart: any, index: number) {

    console.warn("rm", this.regioMetaData);


    return;


  }


  filterChart(chartData: any) {
    var data = chartData.myData;

    var selectedMinVal = this.selectedMinVal ? this.selectedMinVal : chartData.min;
    var selectedMaxVal = this.selectedMaxVal ? this.selectedMaxVal : chartData.max;
    var selectedMinYear = this.selectedMinYear ? this.selectedMinYear : chartData.minTime;
    var selectedMaxYear = this.selectedMaxYear ? this.selectedMaxYear : chartData.maxTime;


    console.log("hh", chartData, selectedMinVal, selectedMaxVal, selectedMinYear, selectedMaxYear)
    var newLabels = chartData.labels.filter((l: number) => l >= selectedMinYear && l <= selectedMaxYear);
    var newData: {} [] = [];

    console.log("chart filter", data, selectedMinVal, selectedMaxVal);
    data.forEach((element: any) => {
      var filteredObj = {};
      (Object.keys(element) as(keyof typeof element)[]).forEach((key, index) => {
        var obj = {};
        // console.log(key, element[key], index);
        if (key == 'x') {
          //@ts-ignore
          obj[key] = element[key];
          Object.assign(filteredObj, obj)
        } else {

          console.log(element[key])
          console.log("selectedMIN", selectedMinVal)
          console.log("selectedMax", selectedMaxVal)
          console.log(element[key] >= selectedMinVal && element[key] <= selectedMaxVal)
          if (element[key] >= selectedMinVal && element[key] <= selectedMaxVal) {

            //@ts-ignore
            obj[key] = element[key];
            Object.assign(filteredObj, obj)
          }


        }
      });

      console.warn("filtered obj", filteredObj)
      newData.push(filteredObj);
    });

    //@ts-ignore
    newData = newData.filter(el => newLabels.indexOf(el.x) > -1)



    console.warn("NEW DATA", newData)





    this.updateChart(newData, newLabels, '', '')
  }

  filterChangeChart(chartData: any) {
    var data = chartData.myData;

    var selectedMinVal = this.selectedMinVal ? this.selectedMinVal : chartData.min;
    var selectedMaxVal = this.selectedMaxVal ? this.selectedMaxVal : chartData.max;
    var selectedMinYear = this.selectedMinYear ? this.selectedMinYear : chartData.minTime;
    var selectedMaxYear = this.selectedMaxYear ? this.selectedMaxYear : chartData.maxTime;

    var newLabels = chartData.labels.filter((l: number) => l >= selectedMinYear && l <= selectedMaxYear);
    var newData: {} [] = [];

    console.log("chart filter", data, selectedMinVal, selectedMaxVal);
    data.forEach((element: any) => {
      var filteredObj = {};
      (Object.keys(element) as(keyof typeof element)[]).forEach((key, index) => {
        var obj = {};
        // console.log(key, element[key], index);
        if (key == 'x') {
          //@ts-ignore
          obj[key] = element[key];
          Object.assign(filteredObj, obj)
        } else {

          console.log(element[key])
          console.log("selectedMIN", selectedMinVal)
          console.log("selectedMax", selectedMaxVal)
          console.log(element[key] >= selectedMinVal && element[key] <= selectedMaxVal)
          if (element[key] >= selectedMinVal && element[key] <= selectedMaxVal) {

            //@ts-ignore
            obj[key] = element[key];
            Object.assign(filteredObj, obj)
          }


        }
      });

      console.warn("filtered obj", filteredObj)
      newData.push(filteredObj);
    });

    //@ts-ignore
    newData = newData.filter(el => newLabels.indexOf(el.x) > -1)



    console.warn("NEW DATA", newData)



    return;

    this.chartChange?.destroy();
    setTimeout(() => {

      this.chartChange = new Chart("canvasChange", this.formatChart(chartData, 'bar', "Veränderung zum Vohrjahr in %"));
    }, 400);

  }

  updateChartChange(newData: any, labels: any, chartType: any, canvasId: string) {
    console.log("update", newData, labels);


    this.chartChange?.destroy();


    var chartType = this.chartChange;
    var canvasId = "canvasChange";
    var chartData = chartType.data; //this.getSelectedChartRootData(); 
    chartData.datasets.forEach((d: {
      data: any;
    }) => {
      d.data = newData;

    });

    var chartDisplay = {
      type: 'bar',
      data: {
        labels: labels,
        datasets: chartData.datasets,
      },
      options: {
        responsive: true
      }
    }


    this.chartChange = new Chart(canvasId, chartDisplay);
  }

  updateChart(newData: any, labels: any, chartType: any, canvasId: string) {
    console.log("update", newData, labels);


    this.chartGeneral?.destroy();
    //this.chartAgg?.destroy();
    //this.chartChange?.destroy();
    //this.chartTime?.destroy();

    var chartType = this.chartGeneral;
    var canvasId = "canvasGeneral";
    switch (this.selectedChartIndex) {
      case 0:
        this.chartGeneral?.destroy();
        chartType = this.chartGeneral;
        canvasId = "canvasGeneral";
        break;
      case 1:
        this.chartChange?.destroy();
        chartType = this.chartChange;
        canvasId = "canvasChange";
        break;
      case 2:
        this.chartTime?.destroy();
        chartType = this.chartTime;
        canvasId = "canvasTime";
        break;
      case 3:
        this.chartAgg?.destroy();
        chartType = this.chartAgg;
        canvasId = "canvasAgg";
        break;

    }



    // chartType = this.chartGeneral;

    console.log("CHT", chartType.data);
    var chartData = chartType.data; //this.getSelectedChartRootData(); 
    chartData.datasets.forEach((d: {
      data: any;
    }) => {
      d.data = newData;

    });

    var t = 'line';

    if (this.selectedChartIndex == 1) {
      t = 'bar'
    }


    var chartDisplay = {
      type: t,
      data: {
        labels: labels,
        datasets: chartData.datasets,
      },
      options: {
        responsive: true
      }
    }



    switch (this.selectedChartIndex) {
      case 0:
        this.chartGeneral = new Chart(canvasId, chartDisplay);
        break;
      case 1:

        console.log("Drawing chart", canvasId, chartDisplay)


        this.chartChange = new Chart(canvasId, chartDisplay);

        break;
      case 2:
        this.chartTime = new Chart(canvasId, chartDisplay);
        break;
      case 3:
        canvasId = "canvasAgg";
        console.warn('AGG', chartDisplay)
        this.chartAgg = new Chart(canvasId, chartDisplay);

        break;

    }

  }

  formatChart(chartData: any, type: any, title: any) {
    chartData.datasets.forEach((d: {
      data: any;
    }) => {
      d.data = chartData.myData;
    });
    this.maxYear = chartData.maxTime;
    if (!isNaN(chartData.minTime)) {
      this.minYear = chartData.minTime;
    }

    this.minValue = Math.ceil(chartData.min);
    this.maxValue = Math.floor(chartData.max);




    //test transform datasets
    var testFormat: {
      label: any;data: any[];
    } [] = [];
    var keys: any[] = [];

    console.warn(chartData.datasets);
    try {
      chartData.datasets.forEach((d: any) => {
        keys.push({
          key: d.parsing.yAxisKey,
          label: d.label
        })
      });
    } catch {

    }

    keys.forEach(key => {
        var values: any[] = []
        chartData.myData.forEach((d: {
          [x: string]: any;
        }) => {
          values.push(d[key.key]);

          if (this.selectedChartIndex == 1) {
            values
          }
        });

        testFormat.push({
          label: key.label,
          data: values

        })
      }

    )

    console.warn("chch", chartData)




    var chartDisplay = {
      type: type,
      data: {
        labels: chartData.labels,
        datasets: chartData.datasets //testFormat,


      },
      options: {
        scales: {
          y: {
            title: {
              display: true,
              text: title
            }
          },
        }
      }
    }
    return chartDisplay;
  }






  async changeChart(i: any) {
    this.selectedChartObject = i;
    // this.selectedChartIndex = 0;
    await this.showGeneralChart();
    // await this.showChart();
  }

  async changeChartType(selectedIndex: number) {
    this.selectedChartIndex = selectedIndex;

    this.selectedMinYear = 0;
    this.selectedMaxYear = 4000;
    this.selectedMinVal = -1000000;
    this.selectedMaxVal = 1000000;


    switch (selectedIndex) {
      case 0:
        await this.showGeneralChart();
        break;

      case 1:
        await this.showYearlyChangeChart();
        break;

      case 2:
        await this.showChangeRateChart();
        break;

      case 3:
        await this.showCompareChart();
        break;
    }


    return;




  }


  setMinMax(meta: any) {
    //@ts-ignore
    this.minValue = meta.minChartValue;
    //@ts-ignore
    this.maxValue = meta.maxChartValue;
    //@ts-ignore
    this.minYear = meta.minChartYear;
    //@ts-ignore
    this.maxYear = meta.maxChartYear;

  }

  buildRequestObject() {

    try {

      console.warn("chartlegend", this.chartLegend);
      var disableRegions = this.chartLegend.filter(c => c.disabled == true);
      var disableKeys: any[] = []
      disableRegions.forEach(el => disableKeys.push(el.Object_Key))
      if (!this.selectedMinYear) {
        this.selectedMinYear = 0;
      }

      if (!this.selectedMaxYear) {
        this.selectedMaxYear = 4000;
      }

      if (!this.selectedMinVal) {
        this.selectedMinVal = -1000000;
      }

      if (!this.selectedMaxVal) {
        this.selectedMaxVal = 1000000;
      }

      if (!this.selectedShape) {
        this.selectedShape = this.storageService.getObject().Object_Key
      }



      var selObjKey = this.storageService.getObject().Object_Key;

      if (this.selectedLevel == 3) {
        selObjKey = "15"
      }

      var body = {
        "objectKey": selObjKey,
        "focusedKey": this.selectedShape, //this.storageService.getObject().Object_Key,  //HOW TO?
        "tableKey": this.selectedChartObject.Source + this.selectedChartObject.Tabellen_ID,
        "admin_level": Number(this.selectedLevel),
        "minTime": this.selectedMinYear,
        "maxTime": this.selectedMaxYear,
        "minValue": this.selectedMinVal,
        "maxValue": this.selectedMaxVal,
        "filterKeys": disableKeys

      }



      return body;
    } catch (error) {
      console.warn("req obj failed");
      return [];

    }

  }

  async showYearlyChangeChart() {

    var yAxisLabel = "%";

    await this.getApiChartData();

    //@ts-ignore
    this.setMinMax(this.apiChartData.chart.chartMeta);

    this.chartGeneral?.destroy();
    var chartDisplay = {
      type: 'bar',
      data: {
        //@ts-ignore
        labels: this.apiChartData.chart.chartData.labels,
        //@ts-ignore
        datasets: this.apiChartData.chart.chartData.datasets
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
    }, 10);



    //@ts-ignore
    this.chartLegend = this.apiChartData.chart.chartMeta.regions;
    //@ts-ignore
    this.addShapelayers(this.apiChartData.shapefiles.data);
    //@ts-ignore
    this.addLegendNew(this.apiChartData, 'Jährliche Veränderungsrate ' + this.apiChartData.chart.chartData.labels[this.apiChartData.chart.chartData.labels.length - 1])
  }

  async showGeneralChart() {
    var yAxisLabel = this.selectedChartObject.unit;

    await this.getApiChartData();

    //@ts-ignore
    this.setMinMax(this.apiChartData.chart.chartMeta);

    this.chartGeneral?.destroy();
    var chartDisplay = {
      type: 'line',
      data: {
        //@ts-ignore
        labels: this.apiChartData.chart.chartData.labels,
        //@ts-ignore
        datasets: this.apiChartData.chart.chartData.datasets
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
    }, 10);


    //@ts-ignore
    this.chartLegend = this.apiChartData.chart.chartMeta.regions;
    //@ts-ignore
    this.addShapelayers(this.apiChartData.shapefiles.data);



    //@ts-ignore
    this.addLegendNew(this.apiChartData, 'Allgemein ' + this.apiChartData.chart.chartData.labels[this.apiChartData.chart.chartData.labels.length - 1])
  }


  async showChangeRateChart() {
    
    await this.getApiChartData();

    //@ts-ignore
    var yAxisLabel = this.apiChartData.chart.chartData.labels[0] + "in %";

    //@ts-ignore
    this.setMinMax(this.apiChartData.chart.chartMeta);

    this.chartGeneral?.destroy();
    var chartDisplay = {
      type: 'bar',
      data: {
        //@ts-ignore
        labels: this.apiChartData.chart.chartData.labels,
        //@ts-ignore
        datasets: this.apiChartData.chart.chartData.datasets
      },
      options: {
        scales: {
          y: {
            title: {
              display: true,
              text: yAxisLabel
            }
          },
          x: {

            display: false
          }

          ,

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
    }, 10);



    //@ts-ignore
    this.chartLegend = this.apiChartData.chart.chartMeta.regions;
    //@ts-ignore
    this.addShapelayers(this.apiChartData.shapefiles.data);
    //@ts-ignore
    this.addLegendNew(this.apiChartData, 'Veränderung zwischen ' + this.apiChartData.chart.chartMeta.minChartYear + " - " + this.apiChartData.chart.chartMeta.maxChartYear)
  }
  addLegendNew(d: any, chartType: string) {

    this.addLegendTitle(this.selectedChartObject.Name + ' - ' + chartType);

    if (this.legendCluster instanceof L.Control) {
      this.map.removeControl(this.legendCluster);
    }



    var colorArray = d.shapefiles.meta.colors;
    var breaks = d.shapefiles.meta.breaks;


    //@ts-ignore
    this.legendCluster = L.control({
      position: 'bottomleft'
    });
    //@ts-ignore
    this.legendCluster.onAdd = () => {

      var div = L.DomUtil.create('div', 'info legend');
      var labels = [
        '<div style="background-color: rgba(255, 255, 255, 0.5)  ; padding: 10px; border-radius: 4px;  ">' +
        '<div style="display: flex; flex-direction: row; margin: 4px;">' +
        '<div style="display: flex; flex-direction: row" > <div class="circle" style="background-color:' + colorArray[0] + '; width:40px; height: 20px"></div> ' +
        '<div style="margin-left: 4px; margin-right: 4px;"> <b> [' + breaks[0].toFixed(2) + ' , ' + breaks[1].toFixed(2) + ')  </b> </div> </div>' +
        '<div style="display: flex; flex-direction: row" > <div class="circle" style="background-color:' + colorArray[1] + '; width:40px; height: 20px"></div> ' +
        '<div style="margin-left: 4px; margin-right: 4px;"> <b> [' + breaks[1].toFixed(2) + ' , ' + breaks[2].toFixed(2) + ') </b> </div> </div>' +
        '</div>' +

        '<div style="display: flex; flex-direction: row; margin: 4px;">' +
        '<div style="display: flex; flex-direction: row" > <div class="circle" style="background-color:' + colorArray[2] + '; width:40px; height: 20px"></div> ' +
        '<div style="margin-left: 4px; margin-right: 4px;"> <b> [' + breaks[2].toFixed(2) + ' , ' + breaks[3].toFixed(2) + ') </b> </div> </div>' +
        '<div style="display: flex; flex-direction: row" > <div class="circle" style="background-color:' + colorArray[3] + '; width:40px; height: 20px"></div> ' +
        '<div style="margin-left: 4px; margin-right: 4px;"> <b> [' + breaks[3].toFixed(2) + ' , ' + breaks[4].toFixed(2) + ') </b> </div> </div>' +
        '</div>' +

        '<div style="display: flex; flex-direction: row; margin: 4px;">' +
        '<div style="display: flex; flex-direction: row" > <div class="circle" style="background-color:' + colorArray[4] + '; width:40px; height: 20px"></div> ' +
        '<div style="margin-left: 4px; margin-right: 4px;"> <b> [' + breaks[4].toFixed(2) + ' , ' + breaks[5].toFixed(2) + ') </b> </div> </div>' +
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
      var color = 'black';
      if (this.selectedShape == element.Object_Key) {
        fillOpacity = 1
        weight = 5;
        color = 'red'

      }

      var l = L.geoJSON(element.geometry, {
        style: {
          fillColor: element.color,
          fillOpacity: fillOpacity,
          weight: weight,
          color: color
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
        switch (this.selectedChartIndex) {
          case 0:
            await this.showGeneralChart();
            break;

          case 1:
            await this.showYearlyChangeChart();
            break;

          case 2:
            await this.showChangeRateChart();
            break;
          case 3:
            await this.showCompareChart();
            break;
          default:
            await this.showGeneralChart();
            break;
        }

        // this.storageService.setActiveLabel(element.Object_Nam)
      });
      this.layers.push(l);
      //this.keys = keys;







    });


  }


  async auswahl() {
    var indi: any[] = [];

    //@ts-ignore
    document.getElementById("map-container").style.width = "40%";
    //@ts-ignore
    document.getElementById("chart-container").style.width = "50%";
    setTimeout(() => {
      this.map.invalidateSize();
    }, 400);



    this.chartReady = true;
    //@ts-ignore
    document.getElementById("dialog").close();

    var topics = this.regioMetaData.filter((t: {
      checked: boolean;
    }) => t.checked == true);

    topics.forEach((topic: {
      data: any[];
    }) => {
      var selIndis = topic.data.filter((t: {
        checked: boolean;
      }) => t.checked == true);
      indi = indi.concat(selIndis);
    });

    await this.setIndicator(indi[0]);
  }
  async setIndicator(indicator: any) {
    this.selectedChartObject = indicator;
    await this.showGeneralChart();

    console.warn("indi", indicator)
  }




  updateLayerForTimeChart(chartData: any, minValue: any, maxValue: any, chartTitle: any) {

    console.warn('chartdata', chartData)
    var activeLabel = '';

    var clusterCount = 6;
    var clusterArray: string | any[] = [];
    clusterArray[0] = minValue;


    var colorArray = ['#172421', '#09491A', '#576958', '#10684E', '#D4E5C6', '#ACB2A7', '#BBC6BD', '#FFFAE7']
    clusterArray[clusterCount + 1] = maxValue;
    for (var i = 1; i < clusterCount + 1; i++) {
      clusterArray[i] = minValue + (Math.abs(maxValue - minValue) / clusterCount) * i;
    }
    this.layers = [];
    var keys: any[] = [];
    //todo: add layer
    console.warn("coloring", clusterArray)
    var selYear = this.selectedMaxYear ? this.selectedMaxYear : chartData.data.labels[chartData.data.labels.length - 1];
    this.addLegend(clusterArray, chartTitle, selYear)


    //@ts-ignore
    this.presLayer.forEach(element => {
      console.log(element.Object_Nam)
      var filteredData = chartData.data.datasets.filter((el: {
        label: any;
      }) => el.label == element.Object_Nam);
      var val = 0;
      var color = '';
      var fillOpacity = 0.6;
      var borderColor = color == 'none' ? 'none' : 'black';
      if (filteredData.length > 0) {
        // var key = filteredData[0].parsing.yAxisKey;
        val = filteredData[0].data[0]
      }


      for (var i = 1; i < clusterArray.length; i++) {
        if (clusterArray[i - 1] <= val && val <= clusterArray[i]) {
          color = colorArray[i];
        }
      }

      if (activeLabel == element.Object_Nam) {
        color = 'black';
        fillOpacity = 0.8;
      }

      var l = L.geoJSON(element.geometry, {
        style: {
          fillColor: color,
          fillOpacity: fillOpacity,
          weight: 1.5,
          color: borderColor
        },
        onEachFeature: (f, l) => {
          keys.push(element.Object_Key);
          l.bindPopup("<span class='span2'> " + element.Object_Nam + " </span> <br>" +
            "<span class='span0'> " + val + " </span> <br>");
        }
      });

      l.on('mouseover', () => {
        l.bindPopup("<span class='span2'> " + element.Object_Nam + " </span> <br>" +
          "<span class='span2'> " + val + " </span> <br>").openPopup();
        this.storageService.setActiveLabel(element.Object_Nam)
      });
      this.layers.push(l);
      this.keys = keys;







    });


  }



  updateLayerNew(chartData: any, minValue: any, maxValue: any, chartTitle: any) {


    var activeLabel = '';

    var clusterCount = 6;
    var clusterArray: string | any[] = [];
    clusterArray[0] = minValue;
    var colorArray = ['#172421', '#09491A', '#576958', '#10684E', '#D4E5C6', '#ACB2A7', '#BBC6BD', '#FFFAE7']
    clusterArray[clusterCount + 1] = maxValue;
    for (var i = 1; i < clusterCount + 1; i++) {
      clusterArray[i] = minValue + (Math.abs(maxValue - minValue) / clusterCount) * i;
    }
    this.layers = [];
    var keys: any[] = [];
    //todo: add layer
    console.warn("coloring", clusterArray)
    var selYear = this.selectedMaxYear ? this.selectedMaxYear : chartData.data.labels[chartData.data.labels.length - 1];
    this.addLegend(clusterArray, chartTitle, selYear)


    //@ts-ignore
    this.presLayer.forEach(element => {
      console.log(element.Object_Nam)
      var filteredData = chartData.data.datasets.filter((el: {
        label: any;
      }) => el.label == element.Object_Nam);
      var val = 0;
      var color = '';
      var fillOpacity = 0.6;
      var borderColor = color == 'none' ? 'none' : 'black';
      if (filteredData.length > 0) {
        var key = filteredData[0].parsing.yAxisKey;
        val = filteredData[0].data[filteredData[0].data.length - 1][key];
      }


      for (var i = 1; i < clusterArray.length; i++) {
        if (clusterArray[i - 1] <= val && val <= clusterArray[i]) {
          color = colorArray[i];
        }
      }

      if (activeLabel == element.Object_Nam) {
        color = 'black';
        fillOpacity = 0.8;
      }

      var l = L.geoJSON(element.geometry, {
        style: {
          fillColor: color,
          fillOpacity: fillOpacity,
          weight: 1.5,
          color: borderColor
        },
        onEachFeature: (f, l) => {
          keys.push(element.Object_Key);
          l.bindPopup("<span class='span2'> " + element.Object_Nam + " </span> <br>" +
            "<span class='span0'> " + val + " </span> <br>");
        }
      });

      l.on('mouseover', () => {
        l.bindPopup("<span class='span2'> " + element.Object_Nam + " </span> <br>" +
          "<span class='span2'> " + val + " </span> <br>").openPopup();
        this.storageService.setActiveLabel(element.Object_Nam)
      });
      this.layers.push(l);
      this.keys = keys;







    });


  }

  updateLayer(activeLabel: string, title: any, year: number) {
    var obj = this.storageService.getChart();
    if (obj) {
      var chartData = obj.chartData;
      var activeLabels = obj.activeLabels;
    }

    var maxValue = -10000;
    var minValue = 10000;



    //@ts-ignore
    this.presLayer.forEach(element => {
      var val = chartData.data.datasets.filter((el: {
        label: any;
      }) => el.label == element.Object_Nam);
      if (maxValue < val[0].data[0]) {
        maxValue = val[0].data[0];
      }
      if (minValue > val[0].data[0]) {
        minValue = val[0].data[0];
      }

    });
    var clusterCount = 6;
    var clusterArray: string | any[] = [];
    clusterArray[0] = minValue;
    var colorArray = ['#172421', '#09491A', '#576958', '#10684E', '#D4E5C6', '#ACB2A7', '#BBC6BD', '#FFFAE7']
    clusterArray[clusterCount + 1] = maxValue;
    for (var i = 1; i < clusterCount + 1; i++) {
      clusterArray[i] = minValue + (Math.abs(maxValue - minValue) / clusterCount) * i;
    }

    if (year != 0) {
      this.addLegend(clusterArray, title, year)
    }

    this.layers = [];
    var keys: any[] = [];
    //@ts-ignore
    this.presLayer.forEach((element: any) => {
      var val = chartData.data.datasets.filter((el: {
        label: any;
      }) => el.label == element.Object_Nam);
      var color = 'none'
      if (activeLabels.indexOf(element.Object_Nam) > -1) {
        for (var i = 1; i < clusterArray.length; i++) {
          if (clusterArray[i - 1] <= val[0].data[0] && val[0].data[0] <= clusterArray[i]) {
            color = colorArray[i];
          }
        }
      }
      var fillOpacity = 0.6;
      var borderColor = color == 'none' ? 'none' : 'black';
      if (activeLabel == element.Object_Nam) {
        color = 'black';
        fillOpacity = 0.8;
      }

      var l = L.geoJSON(element.geometry, {
        style: {
          fillColor: color,
          fillOpacity: fillOpacity,
          weight: 1.5,
          color: borderColor
        },
        onEachFeature: (f, l) => {
          keys.push(element.Object_Key);
          l.bindPopup("<span class='span2'> " + element.Object_Nam + " </span> <br>" +
            "<span class='span2'> " + val[0].data[0] + " </span> <br>");
        }
      });

      l.on('mouseover', () => {
        l.bindPopup("<span class='span2'> " + element.Object_Nam + " </span> <br>" +
          "<span class='span2'> " + val[0].data[0] + " </span> <br>").openPopup();
        this.storageService.setActiveLabel(element.Object_Nam)
      });
      this.layers.push(l);
      this.keys = keys;
    })
  }



  async themenauswahl() {
    this.showDetail = true;
    this.showAnal = false;
    this.spinner = true;

    this.topicsLoaded = true;
    await this.setLayer();

    console.warn("keys", this.keys);
    this.regioMetaData = [];
    var regioMeta: any = [];

    var randomElement = this.keys[Math.floor(Math.random() * this.keys.length)];
    var randomElement1 = this.keys[Math.floor(Math.random() * this.keys.length)];
    var randomElement2 = this.keys[Math.floor(Math.random() * this.keys.length)];
    this.keys = [randomElement, randomElement1, randomElement2];

    var regioData = await this.regioService.getRegioDataByKey(this.keys);

    console.warn("regioData", regioData)
    //@ts-ignore
    this.regioData = regioData;

    regioMeta = await this.regioService.getIndicatorMeta();
    console.warn("meta", regioMeta)

    //@ts-ignore
    var indi = regioData.map(function (el: {
      Key: any;
    }) {
      return el.Key;
    });
    const uniqueIndi = [...new Set(indi)];
    this.regioMetaData = regioMeta.data;

    regioMeta.data.forEach((bereich: {
      data: any[];visible: boolean;
    }) => {
      //@ts-ignore
      var filtered = bereich.data.filter(indi => {
        var key = indi.Source + indi.Tabellen_ID;
        return uniqueIndi.indexOf(key) > -1
      });
      //@ts-ignore
      bereich.data = filtered;
      //@ts-ignore
      if (bereich.data.length > 0) {
        //@ts-ignore
        bereich.visible = true;
      } else {


        //@ts-ignore
        bereich.visible = false;
      }
    });
    //@ts-ignore
    this.regioMetaData = regioMeta.data.filter(el => el.visible);

    this.topicsLoaded = false;
    console.warn("rm", this.regioMetaData)
    return;
  }



  close() {
    //@ts-ignore
    document.getElementById("dialog").close();

    this.showDetail = false;
    this.showIndi = false;
    this.showAnal = true;
  }


  onChange(t: any, $event: MatCheckboxChange) {
    //@ts-ignore
    if ($event.checked) {
      var randomColor = Math.floor(Math.random() * 16777215).toString(16);
      t.color = "#" + randomColor;
      t.checked = true;
      t.data.forEach((indi: {
        color: any;
      }) => {
        indi.color = t.color
      });

      if (this.selectedTopic.filter((el: {
          Bereich: any;
        }) => el.Bereich == t.Bereich) == 0) {
        this.selectedTopic.push(t);
      }
    } else {
      t.checked = false;
    }
  }

  showModal(step: any) {

    switch (step) {
      case 0:
        this.showAnal = true;
        this.showIndi = false;
        this.showDetail = false;
        break;
      case 1:
        this.showAnal = false;
        this.showDetail = true;
        this.showIndi = false;
        break;
      case 2:
        this.showAnal = false;
        this.showDetail = true;
        this.showIndi = true;



    }





    if (this.storageService.getObject().Logo_URL == '') {
      alert("Bitte zuerst Landkreis festlegen!")
      this.router.navigateByUrl('/start');

    } else {
      //@ts-ignore
      document.getElementById("dialog").showModal();
    }
  }

  constructor(
      private storageService: Storageservice,
      private regioService: RegioService,
      private router: Router,
      public dialog: MatDialog
    ) {

    console.warn("service", this.storageService.getObject());
    if (this.storageService.getObject().Logo_URL == '') {
      alert("Bitte zuerst Landkreis festlegen!")
      this.router.navigateByUrl('/start');
    } else {

      this.setLayer();
    }


  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }


  addLegendTitle(title: any) {
    if (this.legend instanceof L.Control) {
      this.map.removeControl(this.legend);
    }

    //@ts-ignore
    this.legend = L.control({
      position: 'topright'
    });
    //@ts-ignore
    this.legend.onAdd = () => {

      var div = L.DomUtil.create('div', 'info legend');
      var labels = ['<div style="background-color: rgba(255, 255, 255, 0.5) ; padding: 2px; border-radius: 4px; width: 90%" >  <h1> ' + title + ' </h1> </div>'];



      div.innerHTML = labels.join('<br>');
      return div;
    };
    this.legend.addTo(this.map);

  }

  addLegend(clusterArray: any[], title: any, year: number) {
    this.addLegendTitle(title);


    if (this.legendCluster instanceof L.Control) {
      this.map.removeControl(this.legendCluster);
    }

    var colorArray = ['#172421', '#09491A', '#576958', '#10684E', '#D4E5C6', '#ACB2A7', '#BBC6BD', '#FFFAE7']
    //@ts-ignore
    this.legendCluster = L.control({
      position: 'bottomleft'
    });
    //@ts-ignore
    this.legendCluster.onAdd = () => {

      var div = L.DomUtil.create('div', 'info legend');
      var labels = [
        '<div style="background-color: rgba(255, 255, 255, 0.5)  ; padding: 10px; border-radius: 4px;  ">' +
        '<div style="display: flex; flex-direction: row; margin: 4px;">' +
        '<div style="display: flex; flex-direction: row" > <div class="circle" style="background-color:' + colorArray[0] + '; width:40px; height: 20px"></div> ' +
        '<div style="margin-left: 4px; margin-right: 4px;"> <b> <' + clusterArray[0].toFixed(2) + ' </b> </div> </div>' +
        '<div style="display: flex; flex-direction: row" > <div class="circle" style="background-color:' + colorArray[1] + '; width:40px; height: 20px"></div> ' +
        '<div style="margin-left: 4px; margin-right: 4px;"> <b> <' + clusterArray[1].toFixed(2) + ' </b> </div> </div>' +
        '</div>' +

        '<div style="display: flex; flex-direction: row; margin: 4px;">' +
        '<div style="display: flex; flex-direction: row" > <div class="circle" style="background-color:' + colorArray[2] + '; width:40px; height: 20px"></div> ' +
        '<div style="margin-left: 4px; margin-right: 4px;"> <b> <' + clusterArray[2].toFixed(2) + ' </b> </div> </div>' +
        '<div style="display: flex; flex-direction: row" > <div class="circle" style="background-color:' + colorArray[3] + '; width:40px; height: 20px"></div> ' +
        '<div style="margin-left: 4px; margin-right: 4px;"> <b> <' + clusterArray[3].toFixed(2) + ' </b> </div> </div>' +
        '</div>' +

        '<div style="display: flex; flex-direction: row; margin: 4px;">' +
        '<div style="display: flex; flex-direction: row" > <div class="circle" style="background-color:' + colorArray[4] + '; width:40px; height: 20px"></div> ' +
        '<div style="margin-left: 4px; margin-right: 4px;"> <b> <' + clusterArray[4].toFixed(2) + ' </b> </div> </div>' +
        '<div style="display: flex; flex-direction: row" > <div class="circle" style="background-color:' + colorArray[5] + '; width:40px; height: 20px"></div> ' +
        '<div style="margin-left: 4px; margin-right: 4px;"> <b> <' + clusterArray[5].toFixed(2) + ' </b> </div> </div>' +
        '</div>' +

        '<div style="display: flex; flex-direction: row; margin: 4px;">' +
        '<div style="display: flex; flex-direction: row" > <div class="circle" style="background-color:' + colorArray[6] + '; width:40px; height: 20px"></div> ' +
        '<div style="margin-left: 4px; margin-right: 4px;"> <b> <' + clusterArray[6].toFixed(2) + ' </b> </div> </div>' +
        '<div style="display: flex; flex-direction: row" > <div class="circle" style="background-color:' + colorArray[7] + '; width:40px; height: 20px"></div> ' +
        '<div style="margin-left: 4px; margin-right: 4px;"> <b> >=' + clusterArray[7].toFixed(2) + ' </b> </div> </div>' +
        '</div>  </div>'




      ];


      /*
          
            for (var i = 0; i < clusterArray.length - 1; i++) {
              div.innerHTML +=
                labels.push(
                  '<div style="display: flex; flex-direction: row" > <div class="circle" style="background-color:' + colorArray[i] + '; width:40px; height: 20px"></div> ' +
                  '<div> <b> <' + clusterArray[i].toFixed(2) + ' </b> </div> </div>');}
            div.innerHTML +=
              labels.push(
                '<div style="display: flex; flex-direction: row" > <div class="circle" style="background-color:' + colorArray[7] + '; width:40px; height: 20px"></div> ' +
                '<div> <b>    >= ' + clusterArray[7].toFixed(2) + ' </b> </div> </div>'); */

      div.innerHTML = labels.join('<br>');
      return div;
    };
    this.legendCluster.addTo(this.map);

  }

  onMapReady(map: any) {
    this.map = map;
    this.setLayer();

    this.map.on('zoomend', () => {
      // alert(this.map.getZoom())
    });
  }

  async setLayer() {
    this.spinner = true;
    var keys: any[] = [];
    this.layers = [];


    var bundesland = await this.regioService.getShapefileByIdAndLevel(this.storageService.getObject().Object_Key.substring(0, 2), 1);

    //@ts-ignore
    console.warn("set layer", bundesland[0][0]);
    //@ts-ignore
    var bundeslandLayer = L.geoJSON(bundesland[0][0].geometry, {
      style: {
        fillColor: 'white',
        fillOpacity: 0,
        weight: 4,

        color: 'black'
      },
      onEachFeature: (f, l) => {
        var out: string[] = [];
        //@ts-ignore
        out.push("Name : " + bundesland[0][0].Object_Nam + "<br>");
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
      var l = L.geoJSON(element.geometry, {
        style: {
          fillColor: 'white',
          fillOpacity: 0.2,
          weight: 1.5,

          color: 'black'
        },
        onEachFeature: (f, l) => {
          var out: string[] = [];
          out.push("Name : " + element.Object_Nam + "<br>");
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
  //Die folgende Methode dient dem Abruf von Diagrammdaten über eine API, wobei die Auswahl des zu verwendenden Diagrammtyps als Kriterium dient.

  private async getApiChartData(): Promise<void> {
    const requestBody = this.buildRequestObject();

    switch (this.selectedChartIndex) {
      case 1:
        this.apiChartData = await this.regioService.getYearlyChangeChartData(requestBody);
        break;
      case 2:
        this.apiChartData = await this.regioService.getChangeRateChart(requestBody);
        break;
      case 3:
        this.apiChartData = await this.regioService.getCompareChartData(requestBody);
        break;
      default:
        this.apiChartData = await this.regioService.getGeneralChartData(requestBody);
    }
  }

  // Die Methode 'showReport' öffnet zunächst einen Dialog zur Auswahl von Indikatoren. Anschließend wird die Funktion "ShowPDF" aufgerufen, sofern Indikatoren ausgewählt wurden.

  public showReport(): void {

    // Die Daten der ausgewählten Region abrufen
    const topic = this.regioMetaData.find((r: any) => r.checked);
  
    if(topic) {

      // Ein Modal öffnen, um die gewünschten Indikatoren und deren Optionen (Karte und Diagramm) auszuwählen.  
      const dialogRef = this.dialog.open(SelectIndikatorenModalComponent, {
        width: '1500px',
        height: 'auto',
        data: topic.data
      });

      // Sich auf das Output-Event 'confirm' des Modals abonnieren.
      this.subscriptions.add(dialogRef.componentInstance.confirm.subscribe((indikatoren: any[]) => {
        this.showPDF(indikatoren);
      }));
    }
  }

  // PDF anzeigen
  public async showPDF(indikatoren: any[]): Promise < void > {
    const data: any[] = [];
    const selectedChart = this.selectedChartObject;

    this.loading = true;
  
    // Der Bericht kann für alle ausgewählten Indikatoren abgerufen und angezeigt werden.
    for (var i = 0; i < indikatoren.length; i++) {
    
      data.push(await this.getIndikatorReport(indikatoren[i]));
  
      if (i === indikatoren.length - 1) {
        const ReportDialogRef = this.dialog.open(ReportModalComponent, {
          width: '1500px',
          height: 'auto',
          data: data
        });

        this.subscriptions.add(ReportDialogRef.afterOpened().subscribe(() => {
          this.loading = false;
        }));

        // Nach dem Schließen des Modals besteht die Möglichkeit, ein Ereignis zu abonnieren, um den ursprünglichen Zustand neu zu laden.
        this.subscriptions.add(ReportDialogRef.afterClosed().subscribe(async () => {
          this.loading = true;
          this.selectedChartObject = selectedChart;
          await this.showChart();
          this.loading = false;
        }));
      }
    }
  }

 // Diese Methode zeigt das ausgewählte Diagramm an.

  private async showChart(): Promise<void> {
    switch (this.selectedChartIndex) {
      case 0:
        await this.showGeneralChart();
        break;
      case 1:
        await this.showYearlyChangeChart();
        break;
      case 2:
        await this.showChangeRateChart();
        break;
      case 3:
        await this.showCompareChart();
        break;
      default:
        await this.showGeneralChart();
        break;
    }
  }

  // Diese Methode generiert einen Bericht für einen einzelnen Indikator.
 
  private async getIndikatorReport(indi: any): Promise<any> {
    let mapImg: any = undefined;
    let chartImg: any = undefined;

    if(this.selectedChartObject !== indi) {
      this.selectedChartObject = indi;
      await this.showChart();
    }
// Es wird hier empfohlen, eine Wartezeit von 700 Millisekunden einzuhalten, um eine vollständige und einwandfreie Darstellung des Diagramms bzw. der Karte zu gewährleisten.

    await new Promise((resolve) => {
      setTimeout(resolve, 700);
    });

    
    if(indi.withMap) mapImg = await this.getMapImg();

    if(indi.withChart) chartImg = await this.getChartImg();

    return {
      name: this.selectedChartObject.Name,
      filterName: this.getFilterName(),
      minYear: this.selectedMinYear !== 0 ? this.selectedMinYear : this.minYear,
      maxYear: this.selectedMaxYear !== 4000 ? this.selectedMaxYear : this.maxYear,
      chartLegend: this.getActivateLegend(),
      chartImg: chartImg,
      mapImg: mapImg
    }
  }

  // Diese Methode erstellt ein Screenshot des Diagramms.

  private getChartImg(): Promise < string | undefined > {
    return new Promise((resolve, reject) => {
      const domChart = document.getElementById('chart');
      if (domChart) {
        toPng(domChart)
          .then(function (dataUrl) {
            resolve(dataUrl);
          })
          .catch(function (error) {
            console.error('Error:', error);
            reject();
          });
      }
    });

  }

  // Diese Methode erstellt ein Screenshot der Karte.

  private getMapImg(): Promise < string | undefined > {
    return new Promise((resolve, reject) => {
      const domMap = document.getElementById('map');
      if (domMap) {
        toPng(domMap)
          .then(function (dataUrl) {
            resolve(dataUrl);
          })
          .catch(function (error) {
            console.error('Error:', error);
            reject();
          });
      }
    });

  }
 // Diese Methode gibt den Namen des ausgewählten Filters zurück.

  private getFilterName(): string {
    switch (this.selectedChartIndex) {
      case 1:
        return "Jährliche Veränderungsrate";
      case 2:
        return "Änderungsrate zwischen Zeitpunkten";
      case 3:
        return "Vergleich";
      default:
        return "Allgemein";
    }
  }
  
// Diese Methode gibt die aktive Legende zurück.

  public getActivateLegend(): any[] {
    return this.chartLegend.filter((l: any) => !l.disabled);
  }

   
  }
