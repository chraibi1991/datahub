import { Component, Input, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';
import { DataRegioComponent } from '../datahub2/data-regio/data-regio.component';
import { Storageservice } from '../../service/storageservice-component/storageservice-component.component';

@Component({
  selector: 'graph-viewer',
  templateUrl: './graph-viewer.component.html',
  styleUrls: ['./graph-viewer.component.css']
})
export class GraphViewerComponent {
  @Input() data!: any;
  public selChart = 0;
  public chart: any;

  minYear: any = 2014;
  maxYear: any = 2025;
  minValue: any = -100;
  maxValue: any = 100;
  minYear1: any = 2014;
  maxYear1: any = 2025;
  minValue1: any = -100;
  maxValue1: any = 100;
  minYear2: any = 2014;
  maxYear2: any = 2025;
  minValue2: any = -100;
  maxValue2: any = 100;
  minYear3: any = 2014;
  maxYear3: any = 2025;
  minValue3: any = -100;
  maxValue3: any = 100;
  selectedMinYear: number = 2014;
  selectedMaxYear: number = 2025;
  selectedMinVal: number = -10000000;
  selectedMaxVal: number = 100000000;
  generalChartData: any;
  prognoseChartData: any;
  aggChartData: any;
  timePrognoseData: any;
  generalChartDataSRC: any;
  prognoseChartDataSRC: any;
  aggChartDataSRC: any;
  timePrognoseDataSRC: any;
  activeLabel: string = '';
  defaultColors: any[] = []


  constructor(private storageService: Storageservice, private dataregio: DataRegioComponent) {
    setInterval(() => { this.dataregio.updateLayer(this.activeLabel, this.data, this.minYear) }, 1000);
  }


  setChartTest(chart : any) {
  

  }


  transformData(dataObj: any) {
    var maxValueAll = -10000;
    var minValueAll = 10000;
    var xLabels: number[] = [];
    var dataset: { label: string; data: number[]; borderWidth: number; }[] = [];
    console.log("dataobj"); 
    console.log(dataObj);
    xLabels = dataObj.graphData[0].years;
    dataObj.graphData.forEach((d: { years: number[]; data: { regionYearValues: any; }[]; }) => {
      

      var minValue = Math.min(...d.data[0].regionYearValues);
      var maxValue = Math.max(...d.data[0].regionYearValues);
      if (minValueAll > minValue) { minValueAll = minValue };
      if (maxValueAll < maxValue) { maxValueAll = maxValue };

      var dataObj = {
        //@ts-ignore
        label: d.data[0].label,
        data: d.data[0].regionYearValues,
        borderWidth: 1,
      };

      dataset.push(dataObj);

    });


    return {
      labels: xLabels,
      dataset: dataset,
      mValues: {
        minYear: dataObj.graphData[0].years[0],
        maxYear: dataObj.graphData[0].years[dataObj.graphData[0].years.length - 1],
        minValue: minValueAll,
        maxValue: maxValueAll
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.minYear = 2000;
    this.maxYear = 2030;
    this.minValue = -100000;
    this.maxValue = 1000000;
    this.createChart();



    this.selectedMinYear = this.minYear;
    this.selectedMaxYear = this.maxYear;
    this.selectedMinVal = this.minValue;
    this.selectedMaxVal = this.maxValue;
    this.selChart = 0;
    this.changeChart(0)

  
  }

  ngOnInit() {
    this.changeChart(0);
  }

  createPrognoseTimeChart() {
    var maxValueAll = -10000;
    var minValueAll = 10000;


    console.log("graphdata"); 
    console.log(this.data.graphData); 

    var minIndex = this.data.graphData[0].years.indexOf(this.selectedMinYear);
    var maxIndex = this.data.graphData[0].years.indexOf(this.selectedMaxYear) - 1;

    if (minIndex == -1) {
      minIndex = 0;
    }

    if (maxIndex < 0) {
      maxIndex = this.data.graphData[0].years.length - 1;
    }

    console.log("min" + minIndex)
    console.log("max" + maxIndex)

    var xLabels: string[] = [];
    var dataset: { label: string; data: number[]; borderWidth: number; }[] = []
    xLabels = ["Änderungsrate von " + this.data.graphData[0].years[minIndex] + " bis " + this.data.graphData[0].years[maxIndex]];
    this.data.graphData.forEach((d: { years: number[]; data: { regionYearValues: any; }[]; }) => {
     
      var prognoseData: number [] = []
      console.log("prognose");
      console.log(d.data[0]); 
      var change = (d.data[0].regionYearValues[minIndex] / d.data[0].regionYearValues[maxIndex]) - 1;

      if(isNaN(change)) {
        change = 0; 
      }
      prognoseData.push(change * 100)

      var minValue = Math.min(...prognoseData);
      var maxValue = Math.max(...prognoseData);
      if (minValueAll > minValue) { minValueAll = minValue };
      if (maxValueAll < maxValue) { maxValueAll = maxValue };

      var dataObj = {
        //@ts-ignore
        label: d.data[0].label,
        data: prognoseData,
        borderWidth: 1,
      };

      dataset.push(dataObj);

    });


    return {
      labels: xLabels,
      dataset: dataset,
      mValues: {
        minYear: this.data.graphData[0].years[0],
        maxYear: this.data.graphData[0].years[this.data.graphData[0].years.length - 1],
        minValue: minValueAll,
        maxValue: maxValueAll
      }
    }

  }

  createPrognoseChart() {

    var maxValueAll = -10000;
    var minValueAll = 10000;

    var xLabels: number[] = [];
    var dataset: { label: string; data: number[]; borderWidth: number; }[] = []
    this.data.graphData.forEach((d: { years: number[]; data: { regionYearValues: any; }[]; }) => {
      xLabels = d.years;

      var prognoseData : number [] = []
      prognoseData.push(0); 
      for (var i = 0; i < d.data[0].regionYearValues.length - 1; i++) {
        var change = (d.data[0].regionYearValues[i + 1] / d.data[0].regionYearValues[i]) - 1;
        prognoseData.push(change * 100)
      }


      var minValue = Math.min(...prognoseData);
      var maxValue = Math.max(...prognoseData);
      if (minValueAll > minValue) { minValueAll = minValue };
      if (maxValueAll < maxValue) { maxValueAll = maxValue };

      var dataObj = {
        //@ts-ignore
        label: d.data[0].label,
        data: prognoseData,
        borderWidth: 1,
      };

      dataset.push(dataObj);

    });


    return {
      labels: xLabels,
      dataset: dataset,
      mValues: {
        minYear: this.data.graphData[0].years[0],
        maxYear: this.data.graphData[0].years[this.data.graphData[0].years.length - 1],
        minValue: minValueAll,
        maxValue: maxValueAll
      }
    }

  }


  createAggChart() {
    var maxValueAll = -10000;
    var minValueAll = 10000;

    var xLabels = ["Mittelwert"];
    var dataset: { label: string; data: number[]; borderWidth: number; }[] = []
    this.data.graphData.forEach((d: { years: number[]; data: { regionYearValues: any; }[]; }) => {

      var meanData : number [] = [];
      var sum = 0;
      for (var i = 0; i < d.data[0].regionYearValues.length; i++) {
        sum = sum + d.data[0].regionYearValues[i];

      }
      var value = sum / d.data[0].regionYearValues.length;
      meanData.push(value)

      var minValue = Math.min(...meanData);
      var maxValue = Math.max(...meanData);
      if (minValueAll > minValue) { minValueAll = minValue };
      if (maxValueAll < maxValue) { maxValueAll = maxValue };
      var dataObj = {
        //@ts-ignore
        label: d.data[0].label,
        data: meanData,
        borderWidth: 1,
      };

      dataset.push(dataObj);

    });
    var overAllSum = 0;
    dataset.forEach(el => {


      overAllSum = overAllSum + el.data[0]
    })

    var overAllMean = overAllSum / dataset.length;
    dataset.push({
      //@ts-ignore
      label: "gesamt",
      data: [0, overAllMean],
      borderWidth: 1,
    });

    dataset.push({
      //@ts-ignore
      label: "SA",
      data: [0, 0, 60],
      borderWidth: 1,
    });

    return {
      labels: ["Mittelwert", "Overall", "Bundesland"],
      dataset: dataset,
      mValues: {
        minYear: this.data.graphData[0].years[0],
        maxYear: this.data.graphData[0].years[this.data.graphData[0].years.length - 1],
        minValue: minValueAll,
        maxValue: maxValueAll
      }
    }

  }

  changeChart(id: number) {
   

    this.selChart = id;
    var minYear;


    switch (id) {
      case 0:
        this.setChart(this.generalChartData);
        this.minYear = this.generalChartData.options.mvalues.minYear;
        this.maxYear = this.generalChartData.options.mvalues.maxYear;
        this.minValue = this.generalChartData.options.mvalues.minValue.toFixed(2);
        this.maxValue = this.generalChartData.options.mvalues.maxValue.toFixed(2);
        minYear =  this.minYear; 
        break;

      case 1:
        this.setChart(this.prognoseChartData);
        this.minYear1 = this.prognoseChartData.options.mvalues.minYear;
        this.maxYear1 = this.prognoseChartData.options.mvalues.maxYear;
        this.minValue1 = this.prognoseChartData.options.mvalues.minValue.toFixed(2);
        this.maxValue1 = this.prognoseChartData.options.mvalues.maxValue.toFixed(2);
        minYear =  this.minYear1; 
        break;

      case 2:
        this.setChart(this.timePrognoseData);
        this.minYear2 = this.timePrognoseData.options.mvalues.minYear;
        this.maxYear2 = this.timePrognoseData.options.mvalues.maxYear;
        this.minValue2 = this.timePrognoseData.options.mvalues.minValue.toFixed(2);;
        this.maxValue2 = this.timePrognoseData.options.mvalues.maxValue.toFixed(2);;
        minYear =  this.minYear2; 
        break;

      case 3:
        this.setChart(this.aggChartData);

        this.minYear3 = this.aggChartData.options.mvalues.minYear;
        this.maxYear3 = this.aggChartData.options.mvalues.maxYear;
        this.minValue3 = this.aggChartData.options.mvalues.minValue.toFixed(2);
        this.maxValue3 = this.aggChartData.options.mvalues.maxValue.toFixed(2);
        minYear =  this.minYear3; 
        break;

    }

    this.dataregio.updateLayer(this.activeLabel, this.data, minYear);



  }
  test(label: string) {



    for (var i = 0; i < this.chart.config._config.data.datasets.length; i++) {
      if (this.chart.config._config.data.datasets[i].label == label) {
       // this.chart.config._config.data.datasets[i].borderColor = "black";
       // this.chart.config._config.data.datasets[i].backgroundColor = "black";
        this.chart.config._config.data.datasets[i].barThickness = 16;
        this.chart.config._config.data.datasets[i].barPercentage = 0.5;
      } else {
        //this.chart.config._config.data.datasets[i].borderColor = this.defaultColors[i].backgroundColor
        //this.chart.config._config.data.datasets[i].backgroundColor = this.defaultColors[i].borderColor;
      }
    }

    this.chart.update();

  }

  setChart(data: any) {


    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart('canvas0', data);

    this.storageService.setChart(data, this.chart);

    this.minYear = data.options.mvalues.minYear;
    this.maxYear = data.options.mvalues.maxYear;
    this.minValue = data.options.mvalues.minValue.toFixed(2);
    this.maxValue = data.options.mvalues.maxValue.toFixed(2);

  }


  createChart() {
    console.log("Source data"); 
    console.log(this.data); 
    if (this.chart) {
      this.chart.destroy();
    }


   

    this.generalChartDataSRC = this.transformData(this.data);


    this.prognoseChartDataSRC = this.createPrognoseChart();
    this.timePrognoseDataSRC = this.createPrognoseTimeChart();
    this.aggChartDataSRC = this.createAggChart();


    console.log("labels source ");
    console.log(this.generalChartDataSRC.labels)


    this.generalChartData = {
      type: 'bar',
      data: {
        labels: this.generalChartDataSRC.labels,
        datasets: this.generalChartDataSRC.dataset,
      },
      options: {
        onHover: (evt: any, elements: any) => {
          var chart = evt.chart;

          if (elements.length) {
            var datasetIndex = elements[0].datasetIndex;
            this.storageService.setActiveLabel(chart.data.datasets[datasetIndex].label);
            //alert(chart.data.datasets[datasetIndex].label); }
            this.activeLabel = chart.data.datasets[datasetIndex].label
            this.dataregio.updateLayer(this.activeLabel, '', 0);

          }

          else {
            this.storageService.setActiveLabel(undefined);
            this.activeLabel = '';
            this.dataregio.updateLayer('', '', 0)
          }




        },
        plugins: {
          legend: {
            // onClick: alert("3")
          }
        },
        scales: {
          y: {
            //beginAtZero: true,
            title: {
              display: true,
              text: this.data.unit
            }
          },
        },

        mvalues: this.generalChartDataSRC.mValues
      },
    };

    this.timePrognoseData = {
      type: 'bar',
      data: {
        labels: this.timePrognoseDataSRC.labels,
        datasets: this.timePrognoseDataSRC.dataset,
      },
      options: {
        onHover:
          (evt: any, elements: any) => {
            var chart = evt.chart;

            if (elements.length) {
              var datasetIndex = elements[0].datasetIndex;
              this.storageService.setActiveLabel(chart.data.datasets[datasetIndex].label);
              //alert(chart.data.datasets[datasetIndex].label); }
              this.activeLabel = chart.data.datasets[datasetIndex].label
              this.dataregio.updateLayer(this.activeLabel, '',0);

            }

            else {
              this.storageService.setActiveLabel(undefined);
              this.activeLabel = '';
              this.dataregio.updateLayer('', '',0)
            }


          }



        ,
        scales: {
          y: {
            //beginAtZero: true,
            title: {
              display: true,
              text: " Zeitliche Veränderung zum Vorjahr in %"
            }



          },

        },
        mvalues: this.timePrognoseDataSRC.mValues
      },
    };

    this.prognoseChartData =
    {
      type: 'line',
      data: {
        labels: this.prognoseChartDataSRC.labels,
        datasets: this.prognoseChartDataSRC.dataset,
      },
      options: {
        onHover:
          (evt: any, elements: any) => {
            var chart = evt.chart;

            if (elements.length) {
              var datasetIndex = elements[0].datasetIndex;
              this.storageService.setActiveLabel(chart.data.datasets[datasetIndex].label);
              //alert(chart.data.datasets[datasetIndex].label); }
              this.activeLabel = chart.data.datasets[datasetIndex].label
              this.dataregio.updateLayer(this.activeLabel, '', 0);

            }

            else {
              this.storageService.setActiveLabel(undefined);
              this.activeLabel = '';
              this.dataregio.updateLayer('','',0)
            }


          }



        ,
        scales: {
          y: {
            //beginAtZero: true,
            title: {
              display: true,
              text: " Zeitliche Veränderung zum Vorjahr in %"
            }



          },
        },
        mvalues: this.prognoseChartDataSRC.mValues
      },
    };


    this.aggChartData = {
      type: 'bar',
      data: {
        labels: this.aggChartDataSRC.labels,
        datasets: this.aggChartDataSRC.dataset,
      },
      options: {
        onHover:
          (evt: any, elements: any) => {
            var chart = evt.chart;

            if (elements.length) {
              var datasetIndex = elements[0].datasetIndex;
              this.storageService.setActiveLabel(chart.data.datasets[datasetIndex].label);
              //alert(chart.data.datasets[datasetIndex].label); }
              this.activeLabel = chart.data.datasets[datasetIndex].label
              this.dataregio.updateLayer(this.activeLabel, '',0);

            }

            else {
              this.storageService.setActiveLabel(undefined);
              this.activeLabel = '';
              this.dataregio.updateLayer('', '',0)
            }


          }



        ,
        scales: {
          y: {
            //beginAtZero: true,
            title: {
              display: true,
              text: "Änderung in %"
            }



          },
        },
        mvalues: this.aggChartDataSRC.mValues

      },
    }

  }


  filterChartData(dataset: { label: string; data: number[]; borderWidth: number; }[], labels: number[], minYear: number,
    maxYear: number,
    minValue: number,
    maxValue: number,) {

    var lDataset = dataset;
    var mLabel = labels;


    var startIndex = mLabel.indexOf(minYear)
    if (startIndex == -1) {
      startIndex = 0;
    }

    var endIndex = mLabel.indexOf(maxYear)

    if (endIndex == -1) {
      endIndex = mLabel.length - 1;
    }


    mLabel = mLabel.slice(startIndex, endIndex + 1);

    lDataset.forEach(d => {
      d.data = d.data.slice(startIndex, endIndex + 1);

      d.data = d.data.filter((el: number) => (el >= minValue && el <= maxValue));

    })

    return { labels: mLabel, dataset: lDataset };
  }


  formatLabel(value: number): string {
    return `${value}`;
  }

  onHoverFkt() {

  }

  filter($event: any, type: string, chart: any) {

    if (type == 'timeMin') {
      this.selectedMinYear = Number($event.target.ariaValueText)
    }
    if (type == 'timeMax') {
      this.selectedMaxYear = Number($event.target.ariaValueText)
    }

    if (type == 'valMin') {
      this.selectedMinVal = Number($event.target.ariaValueText)
    }
    if (type == 'valMax') {
      this.selectedMaxVal = Number($event.target.ariaValueText)
    }


    switch (this.selChart) {
      case 0:
        var tempObj = JSON.parse(JSON.stringify(this.generalChartDataSRC))
        var data = this.filterChartData(tempObj.dataset, tempObj.labels, this.selectedMinYear, this.selectedMaxYear, this.selectedMinVal, this.selectedMaxVal);

        this.generalChartData.data.datasets = data.dataset;
        this.generalChartData.data.labels = data.labels;

        this.changeChart(0)
        break;

      case 1:
        var tempObj = JSON.parse(JSON.stringify(this.prognoseChartDataSRC))


        console.log("temp OBJ");
        console.log(tempObj);
        var data = this.filterChartData(tempObj.dataset, tempObj.labels, this.selectedMinYear, this.selectedMaxYear, this.selectedMinVal, this.selectedMaxVal);

        this.prognoseChartData.data.datasets = data.dataset;
        this.prognoseChartData.data.labels = data.labels;

        this.changeChart(1)

        break;

      case 2:
    

        var data2 = this.createPrognoseTimeChart();

        //this.minValue2 = data2.mValues.minValue; 
        //this.maxValue2 = data2.mValues.maxValue; 

        console.log("fresh data start"); 
        console.log(data2);
        var tempObj = JSON.parse(JSON.stringify(data2)) 

        tempObj.dataset.forEach((d: { data: any[]; }) => { d.data = d.data.filter((el: number) => (el >= this.selectedMinVal && el <= this.selectedMaxVal)); })


        this.timePrognoseData.data.datasets = tempObj.dataset;
        this.timePrognoseData.data.labels = tempObj.labels;
        this.changeChart(2);



        break;

      case 3:
        var tempObj = JSON.parse(JSON.stringify(this.aggChartDataSRC))
        var data = this.filterChartData(tempObj.dataset, tempObj.labels, this.selectedMinYear, this.selectedMaxYear, this.selectedMinVal, this.selectedMaxVal);

        this.aggChartData.data.datasets = data.dataset;
        this.aggChartData.data.labels = data.labels;

        this.changeChart(3)

        break;

    }



    this.dataregio.updateLayer(this.activeLabel,'',0)



  }





}
