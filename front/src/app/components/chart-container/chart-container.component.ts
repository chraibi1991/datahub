import { Component, Input, NgZone, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { DatahubComponent } from '../datahub/datahub.component';
import { DatahubService } from '../../service/datahubservice/datahubservice.component';
import { Chart } from 'chart.js';
import { DataRegioComponent } from '../datahub2/data-regio/data-regio.component';

@Component({
  selector: 'chart-container',
  templateUrl: './chart-container.component.html',
  styleUrls: ['./chart-container.component.css']
})
export class ChartContainerComponent {

  rootChartObject = {
    chartIndex: 0,
    sourceData: {},
    generalChart: {},
    changeChart: {},
    timeChart: {},
    aggregatedChart: {}
  }
  selectedMinYear: any;
  selectedMaxYear: any;
  selectedMinVal: any;
  selectedMaxVal: any;
  minValue: any;
  maxValue: any;
  maxYear: any;
  minYear: any;

  chart: any;
  selChart: any;
  seatYears(_t34: number) {
    throw new Error('Method not implemented.');
  }
  chartDisplay: any;
  chartTitle: any;
  startThumb: any;
  endThumb: any;
  labels: any;

  filter($event: Event, type: string, chart: any) {
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


    if (this.rootChartObject.chartIndex == 2) {
      this.createTimeChart();
      this.setChart();
    }

    if (this.rootChartObject.chartIndex < 2) {
      this.filterChart();
    } else {
      this.filterOtherChart();
    }
  }



  constructor(private datahub: DatahubService, private zone: NgZone, private dataregio: DataRegioComponent) {}

  changeChart(selectedChart: number) {
    alert( this.rootChartObject);
    this.rootChartObject.chartIndex = selectedChart;
    if (selectedChart == 2) {
      this.createTimeChart();

    }
    this.setChart();

  }

  formatLabel(value: number): string {
    return `${value}`;
  }


  createTimeChart() {

    //@ts-ignore
    var data = JSON.parse(JSON.stringify(this.rootChartObject.sourceData.generalData.myData));
    //@ts-ignore
    var dataForLabel = JSON.parse(JSON.stringify(this.rootChartObject.sourceData.generalData.datasets));
    console.log(data);
    var dataObj: { label: any; data: number[]; }[] = [];

    //@ts-ignore
    var lower = this.selectedMinYear ? this.selectedMinYear : this.rootChartObject.sourceData.generalData.minTime;
    //@ts-ignore
    var upper = this.selectedMaxYear ? this.selectedMaxYear : this.rootChartObject.sourceData.generalData.maxTime;


    var lowerData = data.filter((el: { x: any; }) => el.x == lower);
    var upperData = data.filter((el: { x: any; }) => el.x == upper);
    if (lowerData.length > 0 && upperData.length > 0) {
      var upperObj = upperData[0];
      var lowerObj = lowerData[0];
      var resultObj = {};
      var values: number[] = [];

      (Object.keys(lowerObj) as (keyof typeof lowerObj)[]).forEach((key, index) => {

        var obj = {};
        if (!(key == 'x') && lowerObj[key] != 0) {
          var label = dataForLabel.filter((el: { parsing: { yAxisKey: string | number | symbol; }; }) => el.parsing.yAxisKey == key)
          values.push(parseFloat(((upperObj[key] - lowerObj[key]) / lowerObj[key]).toFixed(3)));
          dataObj.push({
            label: label[0].label,
            data: [parseFloat(((upperObj[key] - lowerObj[key]) / lowerObj[key]).toFixed(3))]
          })

        }

      })

    }

    //@ts-ignore
    console.log("time", lowerData, upperData, resultObj, dataObj);


    //@ts-ignore
    this.rootChartObject.timeChart.labels = ["Änderungsrate zwischen " + lower + " und " + upper];
    //@ts-ignore
    this.rootChartObject.timeChart.datasets = dataObj;
    //@ts-ignore
    this.rootChartObject.timeChart.maxTime = this.rootChartObject.sourceData.generalData.maxTime;
    //@ts-ignore
    this.rootChartObject.timeChart.minTime = this.rootChartObject.sourceData.generalData.minTime;

    //@ts-ignore
    this.rootChartObject.timeChart.min = Math.min(...values);
    //@ts-ignore
    this.rootChartObject.timeChart.max = Math.max(...values);
    return;
  }

  getSelectedChartRootData() {


    console.warn("root chart", this.rootChartObject);
    switch (this.rootChartObject.chartIndex) {
      case 0:
        //@ts-ignore
        return this.rootChartObject.sourceData.generalData
      case 1:
        //@ts-ignore
        return this.rootChartObject.sourceData.changeData;
      case 2:
        //@ts-ignore
        return this.rootChartObject.timeChart;
      case 3:
        //@ts-ignore
        return this.rootChartObject.aggregatedChart;
    }
  }

  filterOtherChart() {

    var chartData = JSON.parse(JSON.stringify(this.getSelectedChartRootData()));
    console.log("othr", chartData)




    var newdata = chartData.datasets.filter((el: { data: number[]; }) => el.data[0] >= this.selectedMinVal);

    console.log("othr", chartData)

    this.updateChart2(newdata, chartData.labels)

    return;

    chartData.datasets.forEach((d: { data: any[]; }) => {
      //d = d.filter((element: number) => element >= this.selectedMinVal &&  element <= this.selectedMaxVal);
    });

    console.log(chartData)


    this.updateChart2(chartData, chartData.labels)
  }

  filterChart() {
    var chartData = this.getSelectedChartRootData();


    var data = chartData.myData;

    var selectedMinVal = this.selectedMinVal ? this.selectedMinVal : chartData.min;
    var selectedMaxVal = this.selectedMaxVal ? this.selectedMaxVal : chartData.max;
    var selectedMinYear = this.selectedMinYear ? this.selectedMinYear : chartData.minTime;
    var selectedMaxYear = this.selectedMaxYear ? this.selectedMaxYear : chartData.maxTime;
    var newLabels = chartData.labels.filter((l: number) => l >= selectedMinYear && l <= selectedMaxYear);
    var newData: {}[] = [];

    console.log("chart filter", data, selectedMinVal, selectedMaxVal);
    data.forEach((element: any) => {
      var filteredObj = {};
      (Object.keys(element) as (keyof typeof element)[]).forEach((key, index) => {
        var obj = {};
        // console.log(key, element[key], index);
        if (key == 'x') {
          //@ts-ignore
          obj[key] = element[key];
          Object.assign(filteredObj, obj)
        }

        if (element[key] >= selectedMinVal && element[key] <= selectedMaxVal) {

          //@ts-ignore
          obj[key] = element[key];
          Object.assign(filteredObj, obj)
        }
      });
      newData.push(filteredObj);
    });

    //@ts-ignore
    newData = newData.filter(el => newLabels.indexOf(el.x) > -1)
    this.updateChart2(newData, newLabels)
  }


  updateChart2(newData: any, labels: any) {
    console.log("update", newData, labels);


    if (this.chartDisplay) {
      this.chartDisplay.destroy();
    }

    console.log(this.chartDisplay.data);
    var chartData = this.chartDisplay.data; //this.getSelectedChartRootData(); 
    chartData.datasets.forEach((d: { data: any; }) => {
      d.data = newData;

    });


    if (this.rootChartObject.chartIndex == 2) {
      var chartDisplay = {
        type: 'bar',
        data: {
          labels: labels,
          datasets: newData,
        },
        options: {
          responsive: true
        }
      }

    } else {



      var chartDisplay = {
        type: 'line',
        data: {
          labels: labels,
          datasets: chartData.datasets,
        },
        options: {
          responsive: true
        }
      }
    }

    this.zone.runOutsideAngular(() => {
      this.chartDisplay = new Chart('canvas0', chartDisplay);
    });

    this.dataregio.updateLayerNew(chartDisplay, this.minValue, this.maxValue, this.chart.chartMeta.Name);



  }

  setChart() {
    console.warn("hello", this.chart);

    if (this.chartDisplay) {
      this.chartDisplay.destroy();
    }
    var chartData = this.getSelectedChartRootData();

    console.log("hello", chartData);

    this.maxYear = chartData.maxTime;
    this.minYear = chartData.minTime;
    this.minValue = chartData.min;
    this.maxValue = chartData.max;


    if (this.rootChartObject.chartIndex != 3 && this.rootChartObject.chartIndex != 2) {
      if (!chartData.datasets) { return; }
      chartData.datasets.forEach((d: { data: any; }) => { d.data = chartData.myData; });

    }

    //test transform datasets
    var testFormat: { label: any; data: any[]; }[] = [];
    var keys: any[] = [];

    console.warn(chartData.datasets);
    try {
      chartData.datasets.forEach((d: any) => { keys.push({ key: d.parsing.yAxisKey, label: d.label }) });
    } catch {

    }

    keys.forEach(key => {
      var values: any[] = []
      chartData.myData.forEach((d: { [x: string]: any; }) => {
        values.push(d[key.key]);
      });

      testFormat.push({
        label: key.label,
        data: values

      })
    }

    )


    console.log("test format ", testFormat)

    //end test

    console.log("test format ", chartData.labels, testFormat)
    var chartDisplay = {
      type: 'bar',
      data: {
        labels: chartData.labels,
        datasets: chartData.datasets//testFormat,
      },
      options: {
        animation: false,
        responsive: true,
        normalized: true
      }
    }


    //@ts-ignore
    this.chartDisplay = new Chart('canvas0', chartDisplay);


    this.dataregio.updateLayerNew(chartDisplay, this.minValue, this.maxValue, this.chart.chartMeta.Name);
  }






  @Input()
  set data(chart: any) {

    // if(chart) {
    this.chart = chart;
    console.warn("init chart", chart);
    this.rootChartObject.chartIndex = 0;
    this.rootChartObject.sourceData = chart;
    this.rootChartObject.aggregatedChart = chart.aggregatedData;
    console.log("init chart", this.rootChartObject.aggregatedChart);
    this.setChart();
    //}
    return;
  }
}
