import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { RoutingserviceComponent } from 'src/app/service/routingservice/routingservice.component';

@Component({
  selector: 'app-eigenes-szenario',
  templateUrl: './eigenes-szenario.component.html',
  styleUrls: ['./eigenes-szenario.component.css']
})
export class EigenesSzenarioComponent implements OnInit{

  pop:any
  popOptions:any
  rangeMin:any
  rangeMax:any
  years:any=undefined;
  step:any=1;
  month:any= false;
  monate:any = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] ;
  selectedBackgroundColor: any;
  selectedYearBackgroundColor: any
  selectedMonthBackgroundColor: any
  selectArbeitMask:any;
  selectBildungMask:any
  yesNoMask:any='Nein'
  yesNoEinricht:any='Nein'
  selectArbeitEinricht:any;
  selectBildungEinricht:any;
  inputimpfTag:any=1;
  impfquoteInitial:any;
  yesNoWork:any='Nein'
  yesNoBild:any='Nein'
  yesNoFacility:any='Nein'
  yesNoBildFacility:any='Nein'
  impfquote:any=0.1;
  rate:any=0.1
  chart:any;

  start(){

    if(this.chart){
      this.chart.destroy();
    }

    var data = [];
    var impfQuote=(this.impfquote);

    for (var i = this.inputimpfTag; i <= 360; i++) {
        data.push(impfQuote);
        impfQuote = impfQuote*(1+(this.rate/100))
    }

    var labels= [];

    for (var i = this.inputimpfTag; i <= 360; i++) {
    labels.push(i.toString());
}

    this.chart = new Chart('impfungsDiagramm', {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Impfungen',
                data: data,
                pointBackgroundColor: '#0f684e', 
                pointBorderColor: '#0f684e',
                borderColor: '#0f684e', 
                borderWidth: 1, 
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Tag'
                    },
                    grid: {
                      display: false, 
                  }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Impfquote (%)'
                    },
                    max:100,
                    //grid: {
                    //  display: false, 
                  //}
                }
            },
            plugins: {
              legend: {
                display: false 
            },
            title: {
              display: true,
              text: 'Impfungen', 
              color: '#0f684e' 
          }
          }
        }
    });
  }


  async setPop(pop: string) {
      this.pop=pop;
    this.years = await this.routingservice.getYearPopArray(pop)
      //@ts-ignore
      this.years.sort((a:any, b:any) => parseInt(a) - parseInt(b));
      //@ts-ignore
      this.rangeMin=this.years[0];
      //@ts-ignore
      this.rangeMax=this.years[this.years.length - 1]
      console.log(this.years)
      this.selectedBackgroundColor = pop;
}

selectYear(year: string) {
  this.selectedYearBackgroundColor = year;
}
selectMonth(month: string) {
  this.selectedMonthBackgroundColor = month;
}

maskYesNo(choice:string){
  this.yesNoMask=choice
}

EinrichtYesNo(choice:string){
  this.yesNoEinricht=choice
}

workYesNo(choice:string){
  this.yesNoWork=choice
}
bildYesNo(choice:string){
  this.yesNoBild=choice
}
facilityYesNo(choice:string){
  this.yesNoFacility=choice
}
facilityBildYesNo(choice:string){
  this.yesNoBildFacility=choice
}

clickTile() {
    this.router.navigateByUrl('simulation-section/virusinfektion/covid');
}

clickTile2() {
  this.router.navigateByUrl('simulation-section/virusinfektion/covid/simulation');
}

  async ngOnInit(): Promise<void> {
    this.popOptions= await this.routingservice.getPopulation();
  }

  constructor( public routingservice: RoutingserviceComponent,private router: Router) {}

}
