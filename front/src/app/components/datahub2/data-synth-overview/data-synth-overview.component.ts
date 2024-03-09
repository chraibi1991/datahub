import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-synth-overview',
  templateUrl: './data-synth-overview.component.html',
  styleUrls: ['./data-synth-overview.component.css']
})
export class DataSynthOverviewComponent {
clickTile(mode: number) {

  if(mode == 2) {
  this.router.navigateByUrl("datahub2/data-synth/prognose"); 
  }

  if(mode == 1) {
    this.router.navigateByUrl("datahub2/data-synth/pop"); 
    }
}


constructor(private router: Router){
  
}

}
