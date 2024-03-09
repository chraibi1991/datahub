import { Component, OnDestroy, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
//import {Context} from 'chartjs-plugin-datalabels';
import MapLibreGL from 'maplibre-gl';
import { SimulationService } from 'src/app/service/simulationservice/simulation.service';
//import * as maplibregl from 'maplibre-gl';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css'],
})
export class SimulationComponent implements OnInit, OnDestroy {

  /////////////////////////////////////////////////////////////Variables declaration/////////////////////////////////////////////////
  public nextDay: any = 1;
  public day: any;
  public status: any;
  public personsLayer: any;
  public myRenderer: any;
  private nextDayShown = false;
  public states: any;
  public chart: any;
  public barChart: any;
  public InfectedButNotContagious = 0;
  public Contagious = 0;
  public ShowingSymptoms = 0;
  public SeriouslySick = 0;
  public Critical = 0;
  public Recovered = 0;
  //public totalPopulation: any = 26999;
  public totalPopulation: any = 178846;
  public keinkontakt = this.totalPopulation;
  public map: any;
  public idLayerCounter: any = 1;
  public stopSim = false;
  public chartStatus: any;
  public InfectedButNotContagiousProzent: any = (0).toFixed(2);
  public ContagiousProzent: any = (0).toFixed(2);
  public ShowingSymptomsProzent: any = (0).toFixed(2);
  public SeriouslySickProzent: any = (0).toFixed(2);
  public CriticalProzent: any = (0).toFixed(2);
  public RecoveredProzent: any = (0).toFixed(2);
  public keinkontaktProzent: any = (100).toFixed(2);
  public cases: any;
  public zahlenliste: number[] = [];
  public dayCounter: any = 24;
  public startDay: any = 1;
  public selectedDayCalender: any;
  public home: any = 0;
  public work: any = 0;
  public pt: any = 0;
  public barStatus: any;
  public homeProzent: any = 0;
  public workProzent: any = 0;
  public ptProzent: any = 0;
  public sachsenAnhaltShape: any;
  public rotation: any;
  public burgenlandkreisShape:any
  public test:any

  public education:any=0;
  public leisure :any =0;
  public educationProzent: any = 0;
  public leisureProzent: any = 0;

  public shopping:any=0
  public other:any=0
  public shoppingProzent: any = 0;
  public otherProzent: any = 0;

  constructor(private simulationService: SimulationService) {}
  ////////////////////////////////////////////////////////////////////////Simulation Navigation/////////////////////////////////////////////
  ngOnInit(): void {
    this.createChartsAndCalender();
    this.initMap();
    this.initBurgenlandkreisShape();
    this.initSachsenAnhalt();
    //this.test2();
   }

  ngOnDestroy() {
    this.stopSim = true;
  }

  


// test2(){
//   this.map.on('load', () => {
//     // We use D3 to fetch the JSON here so that we can parse and use it separately
//     // from GL JS's use in the added source. You can use any request method (library
//     // or otherwise) that you want.
//     this.simulationService.gettest().subscribe((test) => {
//       this.test=test
//       console.log(this.test)
//                  // save full coordinate list for later
//                  const coordinates = this.test.features[0].geometry.coordinates;

//                  // start by showing just the first coordinate
//                  this.test.features[0].geometry.coordinates = [coordinates[0]];
     
//                  // add it to the map
//                  this.map.addSource('trace', {type: 'geojson', data:this.test});
//                  this.map.addLayer({
//                      'id': 'trace',
//                      'type': 'line',
//                      'source': 'trace',
//                      'paint': {
//                          'line-color': 'darkgreen',
//                          'line-opacity': 0.75,
//                          'line-width': 5
//                      }
//                  });
     
//                  // setup the viewport
//                  this.map.jumpTo({'center': coordinates[0], 'zoom': 14});
//                  this.map.setPitch(150);
     
//                  // on a regular basis, add more coordinates from the saved list and update the map
//                  let i = 0;
//                  const timer = window.setInterval(() => {
//                      if (i < coordinates.length) {
//                       this.test.features[0].geometry.coordinates.push(
//                              coordinates[i]
//                          );
//                          this.map.getSource('trace').setData(this.test);
//                          this.map.panTo(coordinates[i]);
//                          i++;
//                      } else {
//                          window.clearInterval(timer);
//                      }
//                  }, 50);
//     });
// });
// }

  //////////////////////////////////////////////////////////////////////////////////////zoom in and out///////////////////////////////////////////////////
  public disableZoom=true;
  public isZooming=true;
  public isZoomingFinished = true; 
  Zoom() {
    if (this.disableZoom) {
      this.goTo(); 
    } else {
      this.Out(); 
    }
    
    this.disableZoom = !this.disableZoom;
  }
  

  goTo() {
    this.map.flyTo({
      center: [12.1500056, 51.0448898],
      zoom: 20,
      pitch: 150,
      bearing: -17.6,
    });
    this.isZoomingFinished = false;
    this.isZooming = false;
    setTimeout(() => {
      this.rotateCamera();
      this.isZooming = true;
      this.isZoomingFinished = true;
    }, 3000);
  }

  Out() {
    cancelAnimationFrame(this.rotation);
    
  this.map.flyTo({
    center: [12.1506056, 50.9490063],
    pitch: 0,
    bearing: 0,
    zoom: 7,
  });
  this.isZooming = false;
    this.isZoomingFinished = false;
  setTimeout(() => {
    this.isZooming = true;
    this.isZoomingFinished = true;
  }, 3000);
  }

  rotateCamera() {
    const rotationSpeed = 0.2;
    this.map.rotateTo((this.map.getBearing() + rotationSpeed) % 360, {
      duration: 0,
    });
    this.rotation = requestAnimationFrame(this.rotateCamera.bind(this));
  }

  zoomBLK() {
    if (this.isZoomingFinished) {
        cancelAnimationFrame(this.rotation);
        this.map.flyTo({
            center: [11.99000, 51.1448898],
            zoom: 9.8,
            pitch: 0,
            bearing: 0,
        });
    }
}






  ///////////////////////////////////////////////////////////initialisation////////////////////////////////////////////////////////////////////////////
  
  //morizonKey:eRJsnpLp5PIaYJVCxumc;
  //AhmedKey:Wy4Sp6OuZmREUvltAVFn;
  initMap() {
    this.map = new MapLibreGL.Map({
      container: 'map',
      style:
        'https://api.maptiler.com/maps/streets/style.json?key=eRJsnpLp5PIaYJVCxumc',
      center: [12.1506056, 51.9490063],
      zoom: 7,
      maxBounds: [
        [
          7.46328899335299,
          50.42654727434322
        ],
        [
          16.038967853182015,
          53.496028621118114
        ],
      ]
      //maxZoom: 20,
      //minZoom: 10,
      //pitch: 150,
      //bearing: -17.6,
      //antialias: true
    });
    //this.rotateCamera();
  }

  initSachsenAnhalt() {
    this.simulationService
      .getSachsenAnhaltShape()
      .subscribe((sachsenAnhaltShape) => {
        this.sachsenAnhaltShape = sachsenAnhaltShape;
        //console.log(this.sachsenAnhaltShape.features);
        this.map.on('load', () => {
          this.map?.addSource(`SA-source1`, {
            type: 'geojson',
            data: this.sachsenAnhaltShape,
          });
          this.map?.addLayer({
            id: `SA-layer1`,
            type: 'line',
            source: `SA-source1`,
            layout: {},
            paint: {
              'line-color': '#1b8113',
              'line-opacity': 1,
              'line-width': 4,
            },
          });
        });
      });
  }

  initBurgenlandkreisShape(){
    this.simulationService
    .getBurgenlandkreisShape()
    .subscribe((burgenlandkreisShape) => {
      this.burgenlandkreisShape = burgenlandkreisShape;
      //console.log(this.burgenlandkreisShape.features);
      this.map.on('load', () => {
        this.map?.addSource(`B-source1`, {
          type: 'geojson',
          data: this.burgenlandkreisShape,
        });
        this.map?.addLayer({
          id: `B-layer1`,
          type: 'line',
          source: `B-source1`,
          layout: {},
          paint: {
            'line-color': 'black',
            'line-opacity': 1,
            'line-width': 2,
          },
        });
      });
    });
  }

  createChartsAndCalender() {
    const chartDisplay = document.getElementById('chartDisplay');
    const calender = document.getElementById('calenderContainer');
    const barDisplay = document.getElementById('barDisplay');
    this.createBarChart();
    this.createChart();
    this.drag(chartDisplay);
    this.drag(calender);
    this.drag(barDisplay);
    this.fillList(this.startDay, this.dayCounter);
  }

  drag(chartDisplay: any) {
    let offsetX: any,
      offsetY: any,
      isDragging = false;

    chartDisplay!.addEventListener('mousedown', (e: any) => {
      isDragging = true;
      offsetX = e.clientX - chartDisplay!.getBoundingClientRect().left;
      offsetY = e.clientY - chartDisplay!.getBoundingClientRect().top;
      chartDisplay!.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const newX = e.clientX - offsetX;
      const newY = e.clientY - offsetY;
      chartDisplay!.style.left = newX + 'px';
      chartDisplay!.style.top = newY + 'px';
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
      chartDisplay!.style.cursor = 'grab';
    });
  }
  ///////////////////////////////////////////////////////////Chart/////////////////////////////////////////////////////
  createChart() {
    this.chart = new Chart('myChart', {
      type: 'pie',
      data: {
        //labels: ['InfectedButNotContagious', 'Contagious', 'ShowingSymptoms' , "SeriouslySick" , "Critical" , "Recovered","noContact"],
        datasets: [
          {
            data: [
              this.InfectedButNotContagious,
              this.Contagious,
              this.ShowingSymptoms,
              this.SeriouslySick,
              this.Critical,
              this.Recovered,
              this.keinkontakt,
            ],
            backgroundColor: [
              'rgba(0, 0, 255, 0.6)',
              'rgba(233, 13, 196,0.6)',
              'rgba(250, 144, 6,0.6)',
              'rgba(255, 0, 0,0.6)',
              'rgba(128, 0, 128,0.6)',
              'rgba(0, 128, 0, 0.6)',
              'rgba(49, 46, 48, 0.486)',
            ],
          },
        ],
      },
    });
  }

  updateChartData() {
    if (this.chart) {
      this.chart.data.datasets[0].data = [
        this.InfectedButNotContagious,
        this.Contagious,
        this.ShowingSymptoms,
        this.SeriouslySick,
        this.Critical,
        this.Recovered,
        this.keinkontakt,
      ];
      this.chart.update();
    }
  }

  chartCounter() {
    this.simulationService.getStatus(this.nextDay).subscribe((chartStatus) => {
      this.chartStatus = chartStatus;
      this.InfectedButNotContagious =
        this.chartStatus.day[0]['infectedButNotContagious'];
      this.Contagious = this.chartStatus.day[0]['contagious'];
      this.ShowingSymptoms = this.chartStatus.day[0]['showingSymptoms'];
      this.SeriouslySick = this.chartStatus.day[0]['seriouslySick'];
      this.Critical = this.chartStatus.day[0]['critical'];
      this.Recovered = this.chartStatus.day[0]['recovered'];
      this.keinkontakt = Math.round(
        this.totalPopulation - this.chartStatus.day[0]['contact']
      );

      this.InfectedButNotContagiousProzent = (
        (this.InfectedButNotContagious / this.totalPopulation) *
        100
      ).toFixed(2);
      this.ContagiousProzent = (
        (this.Contagious / this.totalPopulation) *
        100
      ).toFixed(2);
      this.ShowingSymptomsProzent = (
        (this.ShowingSymptoms / this.totalPopulation) *
        100
      ).toFixed(2);
      this.SeriouslySickProzent = (
        (this.SeriouslySick / this.totalPopulation) *
        100
      ).toFixed(2);
      this.CriticalProzent = (
        (this.Critical / this.totalPopulation) *
        100
      ).toFixed(2);
      this.RecoveredProzent = (
        (this.Recovered / this.totalPopulation) *
        100
      ).toFixed(2);
      this.keinkontaktProzent = (
        (this.keinkontakt / this.totalPopulation) *
        100
      ).toFixed(2);
    });
  }

  toggleChart() {
    let chartDisplay = document.getElementById('chartDisplay');
    let pieChartContainer=document.getElementById('pieChartContainer');
    let pieChartDisplay=document.getElementById('pieChartDisplay');
    let legende = document.getElementById('legende');
    let pieChartTitle = document.getElementById('pieChartTitle');
    const icon = document.getElementById('collapseIcon');
    if (icon?.classList.contains('bi-arrows-angle-contract')) {
      icon?.classList.remove('bi-arrows-angle-contract');
      icon?.classList.add('bi-arrows-angle-expand');
      legende!.style.display = 'none';
      pieChartTitle!.style.display = 'none';
      chartDisplay!.style.transition = 'height 1s ease, width 1s ease';
      pieChartContainer!.style.transition = 'height 1s ease, width 1s ease';
      chartDisplay!.style.height = '40px';
      chartDisplay!.style.width = '80px';
      pieChartContainer!.style.height = '40px';
      pieChartContainer!.style.width = '80px';
      chartDisplay!.style.alignItems = 'flex-start';
      pieChartContainer!.style.justifyContent = 'flex-start';
    } else if (icon?.classList.contains('bi-arrows-angle-expand')) {
      icon?.classList.remove('bi-arrows-angle-expand');
      icon?.classList.add('bi-arrows-angle-contract');
      setTimeout(() => {
        legende!.style.display = 'flex';
        pieChartTitle!.style.display = 'flex';
        //pieChartDisplay!.style.alignItems = 'flex-start';
      }, 1000);
      chartDisplay!.style.transition = 'height 1s ease, width 1s ease';
      chartDisplay!.style.height = '310px';
      chartDisplay!.style.width = '550px';
      pieChartContainer!.style.transition = 'height 1s ease, width 1s ease';
      pieChartContainer!.style.height = '250px';
      pieChartContainer!.style.width = '250px';
    }
  }
  ////////////////////////////////////////////////////////////////////////////Bar Chart////////////////////////////////////////////////////////////////



  chartCounterInfections() {
    this.simulationService
      .getInfections(this.nextDay)
      .subscribe((barStatus) => {
        this.barStatus = barStatus;
        this.home = this.barStatus.infection[0]['home'];
        this.work = this.barStatus.infection[0]['work'];
        this.pt = this.barStatus.infection[0]['pt'];
        this.education = this.barStatus.infection[0]['education'];
        this.leisure = this.barStatus.infection[0]['leisure'];
        this.shopping = this.barStatus.infection[0]['shopping'];
        this.other = this.barStatus.infection[0]['other'];

        this.homeProzent = ((this.home / this.totalPopulation) * 100).toFixed(
          2
        );
        this.workProzent = ((this.work / this.totalPopulation) * 100).toFixed(
          2
        );
        this.ptProzent = ((this.pt / this.totalPopulation) * 100).toFixed(2);
        this.educationProzent = ((this.education / this.totalPopulation) * 100).toFixed(
          2
        );
        this.leisureProzent = ((this.leisure / this.totalPopulation) * 100).toFixed(
          2
        );
        this.shoppingProzent = ((this.shopping/ this.totalPopulation) * 100).toFixed(
          2
        );
        this.otherProzent = ((this.other / this.totalPopulation) * 100).toFixed(
          2
        );
        //console.log(this.home);
      });
  }

  createBarChart() {
    const daten = [this.home, this.work, this.pt, this.education];
    const prozentsaetze = [this.homeProzent, this.workProzent, this.ptProzent, this.educationProzent];
    //console.log(prozentsaetze);
    this.barChart = new Chart('myBarChart', {
      type: 'bar',
      data: {
        labels: ['Haushalt', 'Arbeit','Öff. Verkehr','Schulen'],
        datasets: [
          {
            label: 'kum. Infektionen',
            data: daten,
            yAxisID: 'y1',
            backgroundColor: 'rgb(212, 229, 198)',
          },
          {
            label: 'rel. kum. Infektionen',
            data: prozentsaetze,
            yAxisID: 'y2',
            backgroundColor: 'rgba(54, 162, 235, 0.8)',
          },
        ],
      },
      options: {
        scales: {
          y1: {
            type: 'linear',
            position: 'left',
            title: {
              display: true,
              text: 'kum. Infektionen',
            },
            grid: {
              display: false,
            },
          },
          y2: {
            type: 'linear',
            position: 'right',
            title: {
              display: true,
              text: 'rel. kum. Infektionen',
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: 'Infektionshotspots',
            font: {
              size: 16,
            },
          },
        },
      },
    });
  }

  updateBarChartData() {
    if (this.barChart) {
      this.barChart.data.datasets[0].data = [this.home, this.work, this.pt, this.education];
      this.barChart.data.datasets[1].data = [
        this.homeProzent,
        this.workProzent,
        this.ptProzent,
        this.educationProzent,
      ];
      this.barChart.update();
    }
  }

  toggleBarChart() {
    let barDisplay = document.getElementById('barDisplay');
    let barchart = document.getElementById('myBarChart');
    const icon = document.getElementById('collapseIconBar');
    if (icon?.classList.contains('bi-arrows-angle-contract')) {
      icon?.classList.remove('bi-arrows-angle-contract');
      icon?.classList.add('bi-arrows-angle-expand');
      barDisplay!.style.transition = 'height 1s ease, width 1s ease';
      barDisplay!.style.height = '40px';
      barDisplay!.style.width = '80px';
      barchart!.style.display = 'none';
    } else if (icon?.classList.contains('bi-arrows-angle-expand')) {
      icon?.classList.remove('bi-arrows-angle-expand');
      icon?.classList.add('bi-arrows-angle-contract');
      barDisplay!.style.transition = 'height 1s ease, width 1s ease';
      barDisplay!.style.height = '250px';
      barDisplay!.style.width = '550px';
      barchart!.style.display = 'flex';
    }
  }

  /////////////////////////////////////////////////////////////////////Calender////////////////////////////////////////////////////////////////////
  fillList(i: any, dayCounter: any) {
    for (i; i <= dayCounter; i++) {
      this.zahlenliste.push(i);
    }
  }

  nextMonth() {
    this.zahlenliste = [];
    this.dayCounter += 24;
    this.startDay += 24;
    this.fillList(this.startDay, this.dayCounter);
  }

  priviousMonth() {
    this.zahlenliste = [];
    this.dayCounter -= 24;
    this.startDay -= 24;
    this.fillList(this.startDay, this.dayCounter);
  }

  toggleCalender() {
    let calender = document.getElementById('calenderContainer');
    let calenderDay = document.getElementById('calenderDay');
    let calenderNavigation = document.getElementById('calender-navigation');
    const icon = document.getElementById('collapseIconCalender');
    if (icon?.classList.contains('bi-arrows-angle-contract')) {
      icon?.classList.remove('bi-arrows-angle-contract');
      icon?.classList.add('bi-arrows-angle-expand');

      calenderNavigation!.style.display = 'none';
      calenderDay!.style.fontSize = '0';
      calenderDay!.style.transition = 'height 1s ease, width 1s ease';
      calenderDay!.style.height = '40px';
      calenderDay!.style.width = '20px';
      calender!.style.transition = 'height 1s ease, width 1s ease';
      calender!.style.height = '40px';
      calender!.style.width = '80px';
    } else if (icon?.classList.contains('bi-arrows-angle-expand')) {
      icon?.classList.remove('bi-arrows-angle-expand');
      icon?.classList.add('bi-arrows-angle-contract');
      setTimeout(() => {
        calenderNavigation!.style.display = 'flex';
        calenderDay!.style.fontSize = '54px';
      }, 1000);
      calenderDay!.style.transition = 'height 1s ease, width 1s ease';
      calenderDay!.style.height = '180px';
      calenderDay!.style.width = '100px';
      calender!.style.transition = 'height 1s ease, width 1s ease';
      calender!.style.height = '180px';
      calender!.style.width = '450px';
    }
  }
  ////////////////////////////////////////////////////////////////////////create Person points/////////////////////////////////////////
  checkPerson() {
    this.simulationService.getPersonStatus(this.nextDay).subscribe((status) => {
      if (this.ifSimulationNotStopped()) {
        this.chartCounterInfections();
        this.status = status;
        console.log(this.status);
        this.initlayer(this.status, status, 'persons', 'diseaseStatus');
        this.updateChartData();
        this.updatelabels();
        this.updateBarChartData();
        this.moveToNextDay();
      } else {
        this.nextDayShown = false;
      }
    });
  }

  initlayer(
    data: any,
    recievedData: any,
    dataType: string,
    caseToBeMatched: string
  ) {
    data = recievedData;
    this.map?.addSource(`${dataType}-source${this.idLayerCounter}`, {
      type: 'geojson',
      data: data,
    });
    this.map?.addLayer({
      id: `${dataType}-layer${this.idLayerCounter}`,
      type: 'circle',
      source: `${dataType}-source${this.idLayerCounter}`,
      paint: this.personStyle(caseToBeMatched),
    });
  }

  personStyle(caseToBeMatched: string) {
    return {
      'circle-radius':{'base': 1,
      'stops': [
      [7, 2],
      [12, 3],
      [22, 18]
      ]},
      'circle-color': [
        'match',
        ['get', caseToBeMatched],
        'infectedButNotContagious',
        'rgba(0, 0, 255, 1)',
        'contagious',
        'rgba(233, 13, 196,1)',
        'showingSymptoms',
        'rgba(250, 144, 6,1)',
        'seriouslySick',
        'rgba(255, 0, 0,1)',
        'critical',
        'rgba(128, 0, 128,1)',
        'recovered',
        'rgba(0, 128, 0, 1)',
        'skyblue',
      ],
      //'circle-stroke-width': 1,
      // 'circle-stroke-color': 'black',
    };
  }
  /////////////////////////////////////////////////////////////////start and stop the simulation////////////////////////////////////////////////////
  startSimulation() {
    if (!this.nextDayShown) {
      this.showNextDay();
      this.nextDayShown = true;
    }
    this.toggleIcon();
  }

  ifSimulationNotStopped() {
    return !this.stopSim;
  }

  showNextDay() {
    if (this.nextDay <= 360) {
      this.chartCounterInfections();
      this.chartCounter();
      this.checkPerson();
      //console.log(this.nextDay);
      setTimeout(() => {
        if (this.ifSimulationNotStopped()) {
          this.updateProgress(this.nextDay);
          this.nextDay == 360 ? ( this.nextDay=360) : this.nextDay++;
        }
      }, 1000);
    } else {
      this.nextDay = 1;
    }
  }

  toggleIcon() {
    const icon = document.getElementById('playBtn');
    if (icon?.classList.contains('bi-play-fill')) {
      icon?.classList.remove('bi-play-fill');
      icon?.classList.add('bi-pause-fill');
      this.stopSim = false;
    } else if (icon?.classList.contains('bi-pause-fill')) {
      icon?.classList.remove('bi-pause-fill');
      icon?.classList.add('bi-play-fill');
      this.stopSim = true;
    }
  }

  moveToNextDay() {
    if (this.nextDay <= 360) {
      this.idLayerCounter++;
      setTimeout(() => {
        this.showNextDay();
      }, 1000);
    } else {
      //this.resetAfterEndingRenderingPersons();
    }
  }
  //////////////////////////////////////////////////////////////////////select any day using slider//////////////////////////////////////////////////////////////////
  updateProgress(progress: any) {
    const rangeInput = document.getElementById(
      'customRange1'
    ) as HTMLInputElement;
    rangeInput.value = progress;
  }

  async updateNextDay(event: Event): Promise<void> {
    const target = event.target as HTMLInputElement;
    const icon = document.getElementById('playBtn');
    if (icon?.classList.contains('bi-play-fill')) {
      await this.removeAllLayersAndSources();
      this.nextDay = parseInt(target.value);
      this.selectedDayCalender = parseInt(target.value);
      this.updateProgress(this.nextDay);
      this.chartCounter();
      this.chartCounterInfections();
      this.simulationService.getCases(this.nextDay).subscribe((cases) => {
        this.initlayer(this.cases, cases, 'day', 'status');
        this.updatelabels();
        this.updateChartData();
        this.updateBarChartData();
      });
    } else if (icon?.classList.contains('bi-pause-fill')) {
      this.nextDay = parseInt(target.value);
      this.updateProgress(this.nextDay);
      this.startSimulation();
      await this.removeAllLayersAndSources();
      //this.idLayerCounter=0
      this.simulationService.getCases(this.nextDay).subscribe((cases) => {
        this.initlayer(this.cases, cases, 'day', 'status');
      });
      this.startSimulation();
    }
  }

  /////////////////////////////////////////////////////////////////////////////select any day using Calender//////////////////////////////////////////////////
  q:any=0
  w:any=0 
  e:any=0
  r:any=0
  t:any=0 
  z:any=0
  f:any=100

  updatelabels(){
  this.q= this.InfectedButNotContagiousProzent;
  this.w= this.ContagiousProzent 
  this.e= this.ShowingSymptomsProzent
  this.r= this.SeriouslySickProzent
  this.t= this.CriticalProzent
  this.z= this.RecoveredProzent
  this.f= this.keinkontaktProzent
  }

  async applyOnSimulation(searchValue: any) {
    const icon = document.getElementById('playBtn');
    if (icon?.classList.contains('bi-play-fill')) {
      await this.removeAllLayersAndSources();

      this.nextDay = searchValue;
      this.selectedDayCalender = searchValue;
      this.updateProgress(this.nextDay);
      this.chartCounter();
      this.chartCounterInfections();
      this.simulationService.getCases(this.nextDay).subscribe((cases) => {
        this.initlayer(this.cases, cases, 'day', 'status');
        this.updatelabels();
        this.updateChartData();
        this.updateBarChartData();
      });
    } else if (icon?.classList.contains('bi-pause-fill')) {
      this.selectedDayCalender = searchValue;
      await this.removeAllLayersAndSources();
      this.nextDay = searchValue;
      this.updateProgress(this.nextDay);
      this.startSimulation();
      this.chartCounter();
      this.updatelabels()
      this.updateChartData();
      this.idLayerCounter++;
      this.simulationService.getCases(this.nextDay).subscribe((cases) => {
        this.initlayer(this.cases, cases, 'day', 'status');
      });
      this.startSimulation();
    }
  }

  ///////////////////////////////////////////////////////remove all layers and sources////////////////////////////////////////////////////////////////////
  async removeAllLayersAndSources() {
    const style = this.map.getStyle();
    if (!style || !style.layers) {
      return;
    }

    for (let i = 1; i <= this.idLayerCounter; i++) {
      const layerId = `persons-layer${i}`;
      if (this.map?.getLayer(layerId)) {
        this.map?.removeLayer(layerId);
      }

      const sourceName = `persons-source${i}`;
      if (this.map?.getSource(sourceName)) {
        this.map?.removeSource(sourceName);
      }

      const layerIdDay = `day-layer${i}`;
      if (this.map?.getLayer(layerIdDay)) {
        this.map?.removeLayer(layerIdDay);
      }

      const sourceNameDay = `day-source${i}`;
      if (this.map?.getSource(sourceNameDay)) {
        this.map?.removeSource(sourceNameDay);
      }
    }
  }

  //////////////////////////////////////////////////////////////// need a verification  /////////////////////////////////////////////////////

  resetAfterEndingRenderingPersons() {
    const icon = document.getElementById('playBtn');

    icon?.classList.remove('bi-pause-fill');
    icon?.classList.add('bi-play-fill');
    //this.removeAllLayersAndSources();
  }
}
