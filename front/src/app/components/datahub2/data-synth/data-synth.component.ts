import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Chart } from 'chart.js';
import { DatahubService } from 'src/app/service/datahubservice/datahubservice.component';





@Component({
  selector: 'app-data-synth',
  templateUrl: './data-synth.component.html',
  styleUrls: ['./data-synth.component.css']
})
export class DataSynthComponent implements OnInit {
spinner: any = false;
popName: any;
popDesc: any;
  resStats: any = {
    progress: '0%',
  };
  chartRes1Title: any = "Altenquote";
  chartRes2Title: any = "Anteil pot. Erwerbstätige";
  chartRes3Title: any = "Gesamtbevölkerung";
  chartRes4Title: any = "Herzerkrankte";
  chartRes5Title: any = "Jugendquote";
  chartRes5: any;
  chartEnd: any;
  chartDeathEnd: any;
spinner2: any = true; ;
  async startPrognose() {
  this.mode = this.mode + 1;
  var fertilityComp: { fertil_rate: any; from_year: number; }[] = [];
  var deathComp : any = {}
  var migrationF: { start: any; end: any; data: { age_classes: any; sex: string; change: any; }[]; }[] = []
  var migrationM: { start: any; end: any; data: { age_classes: any; sex: string; change: any; }[]; }[] = []


  this.fertility[this.selectedFert].data.forEach((element: { Jahr: number; Fertilitätsrate: any; }) => {
    if(this.startYear <= element.Jahr &&  element.Jahr  <= this.endYear) {
      fertilityComp.push({
        fertil_rate: element.Fertilitätsrate,
        from_year: element.Jahr
      })

    }
    
  });

  //TODO RECOMMENT

  console.warn("death", this.deathRates)

  this.deathRates.forEach((element: any) => {

    var data: { age_class: any; change: any; }[] = []
    element.data.table.forEach((element: { [x: string]: any; Altersklasse: any; }) => {

      var change = element['Sterbewahrscheinlichkeit 2023 in %']  - element['Sterbewahrscheinlichkeit 2033 in %']


      data.push({
        age_class: element.Altersklasse,
        change:    change
      })
      
    });

 

  if(element.sex.startsWith('m')) {
    deathComp['m'] = data;
  } else {
    deathComp['w'] = data;
  }
 

})
  



  this.trendzeitenF.forEach(t => {
    var tempData: { age_classes: any; sex: string; change: any; }[] = []
    t.data.forEach((d: { Alter: any; AverageNew: any; }) => {
      tempData.push(
        {
          age_classes: d.Alter,
          sex:  'f',
          change:  d.AverageNew
        })});
    migrationF.push( 
      {start: t.start,
      end: Number(t.end),
      data: tempData        
    } ); })



  this.trendzeitenM.forEach(t => {
    var tempData: { age_classes: any; sex: string; change: any; }[] = []
    t.data.forEach((d: { Alter: any; AverageNew: any; }) => {
      tempData.push(
        {
          age_classes: d.Alter,
          sex:  'm',
          change:  Number(d.AverageNew)
        })});
    migrationM.push( 
      {start: t.start,
      end: Number(t.end),
      data: tempData        
    } ); })


 this.prognoseObj  = { 
    meta: {
      from_year   : this.startYear,
      toYear      : this.endYear,
      pop_name    : this.popName,
      description : this.popDesc
    },
    fertility: {
      fertility_rates: fertilityComp
    },
    death: deathComp,
    migration: {
      f: migrationF,
      m: migrationM
    }


  }; 

 
  this.spinner = true;
  try{
  var res =  this.datahubService.postPrognose(this.prognoseObj); 
} catch(error) {
  //alert("POst Prognose failed"); 
}



  setTimeout(async () => {

   
   
    this.resStats = await this.datahubService.getPrognoseStats();

    if(this.popName == this.resStats.pop_name) {
    this.chartRes1?.destroy();
    this.chartRes1 = new Chart("canvasRes1", {
      type: 'bar', //this denotes tha type of chart
  
      data: {// values on X-Axis
        labels:  this.resStats.chartJS_data_collection[0].chart.chartData.labels,
        datasets:  this.resStats.chartJS_data_collection[0].chart.chartData.datasets,
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          y: {
            title: {
              display: true,
              text: this.resStats.chartJS_data_collection[0].chart.chartMeta['y-axis']
            },
         
  
          },
          x: {
            title: {
              display: true,
              text: this.resStats.chartJS_data_collection[0].chart.chartMeta['x-axis']
            },
     
        }
      },
 
      },
  
  
    }); 

    this.chartRes2?.destroy();
    this.chartRes2 = new Chart("canvasRes2", {
      type: 'bar', //this denotes tha type of chart
  
      data: {// values on X-Axis
        labels:  this.resStats.chartJS_data_collection[1].chart.chartData.labels,
        datasets:  this.resStats.chartJS_data_collection[1].chart.chartData.datasets,
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          y: {
            title: {
              display: true,
              text: this.resStats.chartJS_data_collection[1].chart.chartMeta['y-axis']
            },
         
  
          },
          x: {
            title: {
              display: true,
              text: this.resStats.chartJS_data_collection[1].chart.chartMeta['x-axis']
            },
     
        }
      },
      },
  
  
    }); 


    this.chartRes3?.destroy();
    this.chartRes3 = new Chart("canvasRes3", {
      type: 'bar', //this denotes tha type of chart
  
      data: {// values on X-Axis
        labels:  this.resStats.chartJS_data_collection[2].chart.chartData.labels,
        datasets:  this.resStats.chartJS_data_collection[2].chart.chartData.datasets,
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          y: {
            title: {
              display: true,
              text: this.resStats.chartJS_data_collection[2].chart.chartMeta['y-axis']
            },
         
  
          },
          x: {
            title: {
              display: true,
              text: this.resStats.chartJS_data_collection[2].chart.chartMeta['x-axis']
            },
     
        }
      },
      },
  
  
    }); 


    this.chartRes4?.destroy();
    this.chartRes4 = new Chart("canvasRes4", {
      type: 'bar', //this denotes tha type of chart
  
      data: {// values on X-Axis
        labels:  this.resStats.chartJS_data_collection[3].chart.chartData.labels,
        datasets:  this.resStats.chartJS_data_collection[3].chart.chartData.datasets,
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          y: {
            title: {
              display: true,
              text: this.resStats.chartJS_data_collection[3].chart.chartMeta['y-axis']
            },
         
  
          },
          x: {
            title: {
              display: true,
              text: this.resStats.chartJS_data_collection[3].chart.chartMeta['x-axis']
            },
     
        }
      },
    
      },
  
  
    }); 

    this.chartRes5?.destroy();
    this.chartRes5 = new Chart("canvasRes5", {
      type: 'bar', //this denotes tha type of chart
  
      data: {// values on X-Axis
        labels:  this.resStats.chartJS_data_collection[4].chart.chartData.labels,
        datasets:  this.resStats.chartJS_data_collection[4].chart.chartData.datasets,
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          y: {
            title: {
              display: true,
              text: this.resStats.chartJS_data_collection[4].chart.chartMeta['y-axis']
            },
         
  
          },
          x: {
            title: {
              display: true,
              text: this.resStats.chartJS_data_collection[4].chart.chartMeta['x-axis']
            },
     
        }
      },
  
      },
  
  
    }); 
  
  

    }

    console.warn("before while")



    var progress =  0;
  //@ts-ignore
  while(this.resStats.progress != '100%' || this.popName != this.resStats.pop_name) {
    console.warn("in while")


   
      console.warn("call"); 
      // method to be executed;
      this.resStats = await this.datahubService.getPrognoseStats();
      console.warn("compare", progress, this.resStats.progress,  progress != this.resStats.progress )
    if(this.popName == this.resStats.pop_name && progress != this.resStats.progress ) {
      this.spinner = false; 
      this.spinner2 = true;


      this.chartRes1.data.labels =  this.resStats.chartJS_data_collection[0].chart.chartData.labels,
      this.chartRes1.data.datasets =  this.resStats.chartJS_data_collection[0].chart.chartData.datasets,
      this.chartRes1.update(); 


      this.chartRes2.data.labels =  this.resStats.chartJS_data_collection[1].chart.chartData.labels,
      this.chartRes2.data.datasets =  this.resStats.chartJS_data_collection[1].chart.chartData.datasets,
      this.chartRes2.update(); 

      this.chartRes3.data.labels =  this.resStats.chartJS_data_collection[2].chart.chartData.labels,
      this.chartRes3.data.datasets =  this.resStats.chartJS_data_collection[2].chart.chartData.datasets,
      this.chartRes3.update(); 

      this.chartRes4.data.labels =  this.resStats.chartJS_data_collection[3].chart.chartData.labels,
      this.chartRes4.data.datasets =  this.resStats.chartJS_data_collection[3].chart.chartData.datasets,
      this.chartRes4.update(); 

      this.chartRes5.data.labels =  this.resStats.chartJS_data_collection[4].chart.chartData.labels,
      this.chartRes5.data.datasets =  this.resStats.chartJS_data_collection[4].chart.chartData.datasets,
      this.chartRes5.update(); 
        
  } 
  progress = this.resStats.progress; 

   
   
 


   
    







  }

  


  this.resStats = await this.datahubService.getPrognoseStats();
    if(this.popName == this.resStats.pop_name && this.resStats.progress == '100%'  ) {
      this.spinner = false; 


      this.chartRes1.data.labels =  this.resStats.chartJS_data_collection[0].chart.chartData.labels,
      this.chartRes1.data.datasets =  this.resStats.chartJS_data_collection[0].chart.chartData.datasets,
      this.chartRes1.update(); 


      this.chartRes2.data.labels =  this.resStats.chartJS_data_collection[1].chart.chartData.labels,
      this.chartRes2.data.datasets =  this.resStats.chartJS_data_collection[1].chart.chartData.datasets,
      this.chartRes2.update(); 

      this.chartRes3.data.labels =  this.resStats.chartJS_data_collection[2].chart.chartData.labels,
      this.chartRes3.data.datasets =  this.resStats.chartJS_data_collection[2].chart.chartData.datasets,
      this.chartRes3.update(); 

      this.chartRes4.data.labels =  this.resStats.chartJS_data_collection[3].chart.chartData.labels,
      this.chartRes4.data.datasets =  this.resStats.chartJS_data_collection[3].chart.chartData.datasets,
      this.chartRes4.update(); 

      this.chartRes5.data.labels =  this.resStats.chartJS_data_collection[4].chart.chartData.labels,
      this.chartRes5.data.datasets =  this.resStats.chartJS_data_collection[4].chart.chartData.datasets,
      this.chartRes5.update(); }



  }, 15000)
  

  this.spinner2 = false; 


}

createResultCharts(chartObj : any, canvasName: any, titleObj: any, index: number) {



    chartObj?.destroy();
    switch(index) {
      case 0:     this.chartRes1?.destroy();
      break;
      case 1:     this.chartRes2?.destroy();
      break;
      case 2:     this.chartRes3?.destroy();
      break;
      case 3:     this.chartRes4?.destroy();
      break;
      case 4:     this.chartRes5?.destroy();
      break;
    }




  
 
  titleObj = this.resStats.chartJS_data_collection[index].chart.chartMeta.title

  

  

//  this.canvas = document.getElementById(canvasName);
  chartObj = new Chart(canvasName, {
    type: 'line', //this denotes tha type of chart

    data: {// values on X-Axis
      labels:  this.resStats.chartJS_data_collection[index].chart.chartData.labels,
      datasets:  this.resStats.chartJS_data_collection[index].chart.chartData.datasets,
    },
    options: {
      aspectRatio: 2.5,
      scales: {
        y: {
          title: {
            display: true,
            text: this.resStats.chartJS_data_collection[index].chart.chartMeta['y-axis']
          },
       

        },
        x: {
          title: {
            display: true,
            text: this.resStats.chartJS_data_collection[index].chart.chartMeta['x-axis']
          },
   
      }
    },
      plugins: {
        legend: {
          display: false
        },
      }
    },


  });

}

  chartMig: any;
  chartRes1: any;
  chartRes2: any;
  chartRes3: any;
  chartRes4: any;

  chartFert: any;
  prognoseObj: any;
chartFertEnd: any;
  chartMigAvg: any;
updateMigration() {
  var i = 0; 
  console.warn("t", this.compMigData)
  this.selectedTrend.data.forEach((element : any) => {
   // console.warn("t2", this.compMigData[this.selectedTrend.gender][i].Average)
    element.Average = this.compMigData[this.selectedTrend.gender][i].Average
    element.AverageNew = this.compMigData[this.selectedTrend.gender][i].Average
    i++; })
    this.selectedTrend.checkedYears=this.YearsValues;
  
this.close();

setTimeout(() => {
  this.createMigChart(); 
}, 1000);
}
  compMigData: any;
clickYears(years: any) {

 

  console.log('l', years)
if(years.checked) {
  years.checked = false;
} else {years.checked = true; }

var activeYears = this.avgAll.YearsObj.filter((el: { checked: boolean; }) => el.checked == false); 

this.compMigData = this.calcAverages(activeYears); 
console.log("h", this.compMigData)

this.createMigAvgChart(); 

}
close() {
//@ts-ignore
document.getElementById("migDialog").close();
}
modifyYears() {

  var d: { y: any; checked: boolean; }[] = [];

  this.selectedTrend.checkedYears


this.avgAll.Years.forEach((element: any) => {


if(this.selectedTrend.checkedYears){
  if (this.selectedTrend.checkedYears.includes(element)) {
    d.push({
      y: element,
      checked: false
    });
  } else {
    d.push({
      y: element,
      checked: true
    });
  }
}
else{
  d.push({
    y: element,
    checked: false
  });
}
  
  
});

this.avgAll.YearsObj = d; 

var compMigData = this.calcAverages([]); 
console.warn("MIG", compMigData); 
//@ts-ignore
document.getElementById("migDialog").showModal();

setTimeout(() => {
  this.createMigAvgChart(); 
}, 100);





}


  selectedTrend: any;

  



  trendzeitenF: any [] = []; 
  trendzeitenM: any [] = []; 

  migrationData: any; 
  avgAll : any = {}; 


  displayedColumns: string[] = ['position', 'name'];
  tableData: any[] = [];


  mode = 0;
  startYear: number = 2023;
  endYear: number = 0;
  chart: any;
  showChart: any = false;
  fertility: any;

  selectedFert = 0;
  canvas: any;
  activePoint: any;
  startY: any ;
  deathRates: any; 
  selectedGender: number = 0;
breaks: any;
  saveTrends: boolean = false;
  selectedMigrationsGender = 'f';
selectedTrendGender: any = 'm';
  selectedTrendIndex: any = 0;
diffGendTrends: any = false;
 



  constructor(private datahubService: DatahubService) {
 

  }

  saveMig(trend: any) {
    trend.isEdited = true; 
   }

  setTrendGender(gender: any) {
    this.selectedMigrationsGender = gender;
    this.createMigChart();

  }

  setTrendzeitraum(trend: any, index: number) {
    console.log(this.trendzeitenF)
    console.log(this.trendzeitenM)

    console.warn('trend', trend);
    console.log(this.selectedTrend);
    this.selectedTrendIndex = index; 
    trend.hasBeenClicked = true; 
    //trend.checkedYears=[];
    //handle previus trend

    if(!this.selectedTrend.isEdited) {
      this.selectedTrend.data.forEach((element : any) => {
        element.AverageNew = element.Average
        element.changed = false; 
        
        console.log(this.selectedTrend)
      });
      //trend.checkedYears=this.YearsValues;
    }

    console.log(this.selectedTrend)
   
    this.selectedTrend = trend;
    
    this.createMigChart()
    }
    calculateMigAvg(mig: any) {
  
      var data =  mig.Wanderungssaldo; 
      const result = Number(data.reduce( ( p: any, c: any ) => p + c, 0 ) / data.length).toFixed(3)
      return result; 
    
    }


    getColorForTrend(trend: any) {

    if(trend.isEdited ) {
      return '#1c8108'
    }
     if(this.selectedTrend == trend)  {
      return '#65ab96';
     }  
     return 'white'; 
      
    }

  calcAverages(filteredYear : any){
    var compMigData: any  = {};
    console.log("filtered" , filteredYear)
    var flatYear: any[] = []

    filteredYear.forEach((element  : any)=> {
      flatYear.push(element.y)

      
    });

    this.migrationData.forEach((element: any) => {
      var data: any[] = []
      var sum: any[] = [];    
        element.data.forEach((d: any) => {
          var el: any; 
       
     
   
          if(filteredYear.length == 0) {
              sum = d.Wanderungssaldo

          } else {
          

          for(var i = 0; i < d.Years.length; i++) {
            if( flatYear.indexOf(d.Years[i]) > - 1){
   
         
              sum.push(d.Wanderungssaldo[i])

        
            } 
          }
        }




  

          data.push({
            Alter: d.Alter,
            Average: Number(sum.reduce( ( p: any, c: any ) => p + c, 0 ) / sum.length).toFixed(0),
            AverageNew: Number(sum.reduce( ( p: any, c: any ) => p + c, 0 ) / sum.length).toFixed(0)
          })
        });

        compMigData[element.Sex] = data;


      
      
    });


    return compMigData;

  }

  saveTrend() {

    this.saveTrends = true; 
    if(!this.diffGendTrends) {

      this.trendzeitenM = [];
      this.trendzeitenF.forEach(f => {
        this.trendzeitenM.push({
          start: f.start,
          end: f.end,
          gender: 'm'
        })
      })

    }
    var compMigData = this.calcAverages([]); 
  
    this.trendzeitenF.forEach( (trend) => {trend.data = JSON.parse(JSON.stringify(compMigData[trend.gender])); })
    this.trendzeitenM.forEach( (trend) => {trend.data = JSON.parse(JSON.stringify(compMigData[trend.gender])); })

    console.log(this.trendzeitenF); 
    console.log(this.trendzeitenM); 


  
    this.selectedTrend = this.trendzeitenF[0]; 

    setTimeout(() => {
      this.createMigChart(); 
    }, 300);

  
    }

  changeDeath(arg0: number) {
    this.selectedGender = arg0; 
   
    this.createDeathChartNew();
    }

  async reset() {

this.fertility = await this.datahubService.getFertility('15804');
this.selectedFert = 0; 
this.createChart();
this.startY = {}; 


  }

  addTrendF(i : number) {
    if(i + 1 < this.trendzeitenF.length) {
      this.trendzeitenF = this.trendzeitenF.slice(0, i + 1); 
      this.addTrendF(this.trendzeitenF.length)
    } else {

  var newStart = Number(this.trendzeitenF[this.trendzeitenF.length - 1].end) + 1;
  if(newStart > Number(this.endYear) ) {
    return;
  }

    this.trendzeitenF.push({
      start : newStart,
      end:  Number(this.endYear),
      gender: 'f'
    }) 
  }
    }


    addTrendM(i : number) {
      if(i + 1 < this.trendzeitenM.length) {
        this.trendzeitenM = this.trendzeitenM.slice(0, i + 1); 
        this.addTrendM(this.trendzeitenM.length)
      } else {
  
    var newStart = Number(this.trendzeitenM[this.trendzeitenM.length - 1].end) + 1;
    if(newStart > Number(this.endYear) ) {
      return;
    }
  
      this.trendzeitenM.push({
        start : newStart,
        end:  Number(this.endYear),
        gender: 'm'
      }) 
    }
      }
async resetDeath() {

  this.deathRates = await this.datahubService.getDeathRateNew(); 
  
  this.selectedGender = 0; 
  this.createDeathChartNew();
  this.startY = {}; 
  
    }

  async ngOnInit(): Promise<void> {
    this.fertility = await this.datahubService.getFertility('15804');
  }


  createChart() {
    

    if (this.chart) {
      this.chart.destroy();
    }

    var data: any[] = [];
    var years: number[] = [];

    for (var i = this.startYear; i <= this.endYear; i++) {
      years.push(Number(i));
    }

  

    this.fertility[this.selectedFert].data.forEach((element: { Jahr: number; Fertilitätsrate: any; }) => {

      if (years.indexOf(element.Jahr) > -1) {
        data.push(element.Fertilitätsrate)
      }
    });


    console.warn("ferrtrtrtrt", data)


    this.showChart = true;
    this.canvas = document.getElementById("canvasFert");
    this.chart = new Chart("canvasFert", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: years,
        datasets: [
          {
            label: this.fertility[this.selectedFert].Variante,
            data: data,
            backgroundColor: 'blue'
          }
        ]
      },
      options: {
        aspectRatio: 3,
      
        scales: {
          y: {
            title: {
              display: true,
              text: 'Fertitlitätsrate'
            },
            min: 1.5,
            max: 2.05,
           
           

          },
          x: {
            title: {
              display: true,
              text: 'Jahr'
            },
     
        }
      },
        plugins: {
          legend: {
            display: false
          },
 
        }
      },


    });

    console.log("Chart obj", this.chart, years, data)

   //canvas.onpointerdown = this.downHandler();
    //@ts-ignore
    this.canvas.addEventListener("pointerdown", (event) => {
      console.warn("upupu")
      this.downHandler(); 
    });


    this.canvas.addEventListener('mouseup', (e: any) => {
       console.log("mouse move ends at ", e )     

       var mousPosY = this.getMousePos(this.canvas, e).y; 


       console.warn("start" , this.startY)
       console.warn("end y", mousPosY )
       
     

       var yAxis = this.chart.scales.y;
       var value =  yAxis.getValueForPixel(mousPosY); 

       this.chart.data.datasets[0].data[this.startY.index] = value; 
       this.chart.update(); 

      this.fertility[this.selectedFert].data[this.startY.index].Fertilitätsrate = value.toFixed(2); 
      this.fertility[this.selectedFert].data[this.startY.index].changed = true; 

       this.startY = {}; 
      


  }, 0);



  }

  createChartEnd() {
    alert("end")

    if (this.chartEnd) {
      this.chartEnd.destroy();
    }

    var data: any[] = [];
    var years: number[] = [];

    for (var i = this.startYear; i <= this.endYear; i++) {
      years.push(Number(i));
    }

  

    this.fertility[this.selectedFert].data.forEach((element: { Jahr: number; Fertilitätsrate: any; }) => {

      if (years.indexOf(element.Jahr) > -1) {
        data.push(element.Fertilitätsrate)
      }
    });


    console.warn("data", years)


    this.showChart = true;
    //this.canvas = document.getElementById("canvasEnd");
    this.chart = new Chart("canvasEnd", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: years,
        datasets: [
          {
            label: this.fertility[this.selectedFert].Variante,
            data: data,
            backgroundColor: 'blue'
          }
        ]
      },
      options: {
        aspectRatio: 2.5,
      
        scales: {
          y: {
            title: {
              display: true,
              text: 'Fertitlitätsrate'
            },
            min: 1.5,
            max: 2.5,
           
           

          },
          x: {
            title: {
              display: true,
              text: 'Jahr'
            },
     
        }
      },
        plugins: {
          legend: {
            display: false
          },
 
        }
      },


    });






  }


YearsValues:any=[]
  createMigAvgChart() {

    if (this.chartMigAvg) {
      this.chartMigAvg.destroy();
    }

    console.warn("MIGCHART", this.avgAll); 
    var removeIndex = 0;

    var femaleValues:any = [] // JSON.parse(JSON.stringify(this.avgAll.f));
    var maleValues :any   =  []// JSON.parse(JSON.stringify(this.avgAll.m));
    var yearsTemp  :any   = [] // JSON.parse(JSON.stringify(this.avgAll.Years));

   if(!this.avgAll.YearsObj) {
    femaleValues = this.avgAll.f
    maleValues = this.avgAll.m;
    yearsTemp = this.avgAll.Years

   } else {
    this.YearsValues=[]
    for(var i = 0; i < this.avgAll.YearsObj.length; i++) {
      if(!this.avgAll.YearsObj[i].checked) {
        femaleValues.push(this.avgAll.f[i]);
        maleValues.push(this.avgAll.m[i]);
        yearsTemp.push(this.avgAll.Years[i]);
        this.YearsValues.push(this.avgAll.Years[i]);
        console.log(this.YearsValues)

      }
    }

  }

 
    this.canvas = document.getElementById("canvas1");
    console.log(this.avgAll)
    console.log(this.migrationData)
    //console.log()
    this.chartMigAvg = new Chart("canvas1", {
      type: 'bar', // Diagrammtyp
    
      data: {
        labels: yearsTemp, // Werte auf der X-Achse
        datasets: []
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          y: {
            title: {
              display: true,
              text: 'Migration'
            },
           
          },
          x: {
            title: {
              display: true,
              text: 'Jahr'
            }
          }
        },
        plugins: {
          legend: {
            display: true
          },
          
        }
      }
    }
    );


    if (this.selectedTrend.gender == 'f' && femaleValues.length > 0) {
      this.chartMigAvg.data.datasets.push({
        label: 'f',
        data: femaleValues,
        backgroundColor: 'blue',

      });
      // const data=[]
      // for (let i = 0; i < femaleValues.length; i++) {
        
      //   data.push(0)
      // }

      // this.chartMigAvg.data.datasets.push({
      //   label: 'test',
      //   data: data,
      //   type: 'line',
      //   borderColor:'black',
        
      // });
    }
    

    if (this.selectedTrend.gender == 'm' && maleValues.length > 0) {
      this.chartMigAvg.data.datasets.push({
        label: 'm',
        data: maleValues,
        backgroundColor: 'red'
      });
    }
    

    this.chartMigAvg.update();
    



  }

  createDeathChartNew() {

    if (this.chartDeathEnd) {
      this.chartDeathEnd.destroy();
    }

    var data: any[] = [];
    var labels: any[] = [];

    this.showChart = true;
    this.canvas = document.getElementById("canvas0");
    this.chartDeathEnd = new Chart("canvas0", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.deathRates[this.selectedGender].data.chart.chartData.labels,
        datasets: this.deathRates[this.selectedGender].data.chart.chartData.datasets
        
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          y: {
            title: {
              display: true,
              text: 'Sterbewahrscheinlichkeit 2023 - 33'
            },
           

          },
          x: {
            title: {
              display: true,
              text: 'Alterskohorte'
            },
         

          }
       
      },
        plugins: {
          legend: {
            display: true
          }
         
        }
      },


    });


   //canvas.onpointerdown = this.downHandler();
    //@ts-ignore
    this.canvas.addEventListener("pointerdown", (event) => {
      console.warn("upupu")
      this.downHandler(); 
    });


    this.canvas.addEventListener('mouseup', (e: any) => {
       console.log("mouse move ends at ", e )     

       var mousPosY = this.getMousePos(this.canvas, e).y; 


       console.warn("start" , this.startY)
       console.warn("end y", mousPosY )
       
     

       var yAxis =  this.chartDeathEnd.scales.y;
       var value =  yAxis.getValueForPixel(mousPosY); 
     console.warn("chart gg", this.chart.data)
     this.chartDeathEnd.data.datasets[2].data[this.startY.index] = value; 
     this.chartDeathEnd.update(); 



        console.log("D",this.selectedGender );
        console.log("D", this.startY.index); 
       
      this.deathRates[this.selectedGender].data.table[this.startY.index]['Sterbewahrscheinlichkeit 2033 in %']= Number(value.toFixed(2)); 
      this.deathRates[this.selectedGender].data.table[this.startY.index].changed = true; 

      

       this.startY = {}; 
      


  }, 0);



  }

  getColor1(d: any) {
    if(!d.changed) {
      return 'black'
    }

   if(Number(d.Average) < Number(d.AverageNew) ) {return  '#65ab96'}  else { return 'red' }
  
  }

  getColor2(res: any) {
    if(!res.changed) {
      return 'black'
    }

   if(Number(res['Sterbewahrscheinlichkeit 2033 in %']) > Number(res['Sterbewahrscheinlichkeit 2023 in %']) ) {return  '#65ab96'}  else { return 'red' }
  
  }


  createMigChart() {

    if (this.chart) {
      this.chart.destroy();
    }

    var data: any[] = [];
    var labels: any[] = [];
    
    console.warn("in chart", this.selectedTrend)


    this.selectedTrend.data.forEach((element: any) => {
     
        labels.push(element.Alter)
  
        data.push(element.AverageNew)
      
    });

    console.warn("chart", labels, data)






    let uniqueLabel = [...new Set(labels)];
  

    this.showChart = true;
    this.canvas = document.getElementById("canvas0");
    this.chart = new Chart("canvas0", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: uniqueLabel,
        datasets: [
          {
            label: "Durchschnittliches Migrationssaldo", 
            data: data,
        
          }
        ]
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          y: {
            title: {
              display: true,
              text: 'Durchschnittliches Migrationssaldo'
            },
      

          },
          x: {
            title: {
              display: true,
              text: 'Alterskohorte'
            },
         

          }
       
      },
        plugins: {
          legend: {
            display: false
          }
         
        }
      },


    });


   //canvas.onpointerdown = this.downHandler();
    //@ts-ignore
    this.canvas.addEventListener("pointerdown", (event) => {
      console.warn("upupu")
      this.downHandler(); 
    });


    this.canvas.addEventListener('mouseup', (e: any) => {
       console.log("mouse move ends at ", e )     

       var mousPosY = this.getMousePos(this.canvas, e).y; 


       console.warn("start" , this.startY)
       console.warn("end y", mousPosY )
       
     

       var yAxis = this.chart.scales.y;
       var value =  yAxis.getValueForPixel(mousPosY); 

       this.chart.data.datasets[0].data[this.startY.index] = value; 
       this.chart.update(); 


       if(this.mode == 2) {

      this.fertility[this.selectedFert].data[this.startY.index].Fertilitätsrate = value.toFixed(2); 
      this.fertility[this.selectedFert].data[this.startY.index].changed = true; } 
      if(this.mode == 3) {

        console.log("D",this.selectedGender );
        console.log("D", this.startY.index); 
       
      this.deathRates[this.selectedGender].data[this.startY.index].Veränderungsrate_zukunft = Number(value.toFixed(2)); 
      this.deathRates[this.selectedGender].data[this.startY.index].changed = true; 

      }

      if(this.mode == 4) {
  
        this.selectedTrend.data[this.startY.index].AverageNew = value.toFixed(0); 
        this.selectedTrend.data[this.startY.index].changed = true;
     
      }

       this.startY = {}; 
      


  }, 0);



  }
getMousePos(canvas : any, evt: any) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }



  upHandler() {

    console.warn("move2")
    var activePoint = null;
    this.canvas.onpointermove = null;
  }

  downHandler(){
    var points;

    if(this.mode == 3) {
      points = this.chartDeathEnd.getElementsAtEventForMode(event, 'nearest', { intersect: true }, false);
    } else {
   
    points = this.chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, false);
    }

    console.log("p", points); 
    if (points.length > 0) {



        // grab nearest point, start dragging
        var activePoint = points[0];
       console.warn("start value", activePoint)
      

       this.startY = {
        val: activePoint.element.$context.raw,
        y: activePoint.element.$context.element.y, 
        index: activePoint.index}
       
      
        this.canvas.onpointermove = this.moveHandler(event, activePoint);
    };

  }


  moveHandler(event: Event | undefined, activePoint: { _chart: { data: any; }; _datasetIndex: any; _index: string | number; } | null)
  {

    console.warn('move'); 

   
      // locate grabbed point in chart data
      if (activePoint != null) {
        
        console.log("ap", activePoint); 

        var chartArea = this.chart.chartArea;
        var yAxis = this.chart.scales.y;//["y-axis-0"];

        console.log(yAxis); 
        console.log("CHART" , chartArea.bottom);

        yAxis.getValueForPixel(); 

      
       
        //@ts-ignore
       
        return; 

      };
  };


  showNext(): any {

    if(this.mode == 0) {
      return this.startYear && (this.endYear != 0 )
    }
  

    if(this.mode == 1) {
      return this.startYear && this.endYear
    }

    if(this.mode == 4) {
      return this.saveTrends
    }

    if(this.mode > 4 ) {
      return false; 
    }
    return true;

  }





  async next() {
    this.mode = this.mode + 1;






    if (this.mode == 1) {

      for (var i = this.startYear; i <= this.endYear; i++) {
        var el = { year: i, value: 0 }
        this.tableData.push(el);
      }
    }







    if (this.mode == 2) {

      console.warn(this.fertility, this.startYear, this.endYear);

      setTimeout(() => {
        this.createChart()
      }, 300);
    }


    if(this.mode == 3) {

      this.deathRates = await this.datahubService.getDeathRateNew()
      console.warn('death', this.deathRates); 
      this.createDeathChartNew()

    }


    if(this.mode == 4) {
      this.trendzeitenF.push({
        start: Number(this.startYear),
        end: Number(this.endYear), 
        disabled : false,
        gender: 'f'
      })

      this.trendzeitenM.push({
        start: Number(this.startYear),
        end: Number(this.endYear), 
        disabled : false,
        gender: 'm'
   
      })

    }


    if(this.mode == 4) {
      
      this.selectedMigrationsGender = 'm'; 
      this.migrationData = await this.datahubService.getMigration('15084')
       console.warn("migration",this.migrationData);

       this.compMigData = this.calcAverages([]); 
      

      for(var i = 0; i < this.migrationData.length; i++ ){
      var years = this.migrationData[i].data[0].Years;
      
      var avg = [];

      for(var y = 0; y < years.length; y++ ) {
        var sum = 0; 
        this.migrationData[i].data.forEach((element: { Wanderungssaldo: number[]; }) => {
        console.log(element.Wanderungssaldo[y])
          sum = sum + element.Wanderungssaldo[y]
          
        });

        avg.push(
         sum
        //sum/this.migrationData[i].data.length
        )
      }

      console.warn(avg); 

      this.avgAll[this.migrationData[i].Sex] = avg; 
      this.avgAll['Years'] = years;
      
    }

    console.warn(this.avgAll)
    }


    if(this.mode == 5) {

      var fertilityComp: { fertil_rate: any; from_year: number; }[] = [];
      var deathComp : any = {}
      var migrationF: { start: any; end: any; data: { age_classes: any; sex: string; change: any; }[]; }[] = []
      var migrationM: { start: any; end: any; data: { age_classes: any; sex: string; change: any; }[]; }[] = []


      this.fertility[this.selectedFert].data.forEach((element: { Jahr: number; Fertilitätsrate: any; }) => {
        if(this.startYear <= element.Jahr &&  element.Jahr  <= this.endYear) {
          fertilityComp.push({
            fertil_rate: element.Fertilitätsrate,
            from_year: element.Jahr
          })

        }
        
      });

      
   


      this.trendzeitenF.forEach(t => {
        var tempData: { age_classes: any; sex: string; change: any; }[] = []
        t.data.forEach((d: { Alter: any; AverageNew: any; }) => {
          tempData.push(
            {
              age_classes: d.Alter,
              sex:  'f',
              change:  d.AverageNew
            })});
        migrationF.push( 
          {start: t.start,
          end: Number(t.end),
          data: tempData        
        } ); })



      this.trendzeitenM.forEach(t => {
        var tempData: { age_classes: any; sex: string; change: any; }[] = []
        t.data.forEach((d: { Alter: any; AverageNew: any; }) => {
          tempData.push(
            {
              age_classes: d.Alter,
              sex:  'm',
              change:  Number(d.AverageNew)
            })});
        migrationM.push( 
          {start: t.start,
          end: Number(t.end),
          data: tempData        
        } ); })


     this.prognoseObj  = { 
        meta: {
          from_year   : this.startYear,
          toYear      : this.endYear,
          pop_name    : "test",
          description : "test"
        },
        fertility: {
          fertility_rates: fertilityComp
        },
        death: deathComp,
        migration: {
          f: migrationF,
          m: migrationM
        }


      }; 

 


     
      var t = await this.datahubService.getMigChartPrognose(this.prognoseObj);

      console.log("PROGNOSE", t)


  


     
      


      setTimeout(()=> {
        this.createChart()
        this.createDeathChartNew();
        this.createMigAvgChart(); 

        this.createMigAggChart(t); 
      }, 100)

    


    


   
      //collect all the data
    }




  }
  createMigAggChart(t: Object) {

    if (this.chartMigAvg) {
      this.chartMigAvg.destroy();
    }

    

 
    this.canvas = document.getElementById("canvas1");
    this.chartMigAvg = new Chart("canvas1", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        //@ts-ignore
        labels: t.chart.chartData.labels,
           //@ts-ignore
        datasets:  t.chart.chartData.datasets,
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          y: {
            title: {
              display: true,
                 //@ts-ignore
              text: t.chart.chartMeta['y-axis']
            },
 

          },
          x: {
            title: {
              display: true,
                 //@ts-ignore
              text:  t.chart.chartMeta['x-axis']
            },
     
        }
      },
        plugins: {
          legend: {
            display: true
          },
        }
      },


    });
    
  }



  changeFert(index: number) {
    this.selectedFert = index;
    this.createChart();

  }




  back() {
    if (this.mode > 0) {
      this.mode = this.mode - 1;
    }
  }


}
function createEndCharts() {
/*

 var canvas = document.getElementById("canvasFert");
    var chartFert = new Chart("canvasFert", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: years,
        datasets: [
          {
            label: this.fertility[this.selectedFert].Variante,
            data: data,
            backgroundColor: 'blue'
          }
        ]
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          y: {
            title: {
              display: true,
              text: 'Fertitlitätsrate'
            },
           

          },
          x: {
            title: {
              display: true,
              text: 'Jahr'
            },
     
        }
      },
        plugins: {
          legend: {
            display: false
          },
          //@ts-ignore
          dragData: {
            round: 1,
            showTooltip: true,
            //@ts-ignore
            onDragStart: function (e, datasetIndex, index, value) {
              // console.log(e)
            },
            //@ts-ignore
            onDrag: function (e, datasetIndex, index, value) {
              e.target.style.cursor = 'grabbing'
              // console.log(e, datasetIndex, index, value)
            },
            //@ts-ignore
            onDragEnd: function (e, datasetIndex, index, value) {
              e.target.style.cursor = 'default'
              // console.log(datasetIndex, index, value)
            },
          }
        }
      },


    });

    */

}

