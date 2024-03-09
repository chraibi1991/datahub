import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datahub2',
  templateUrl: './datahub2.component.html',
  styleUrls: ['./datahub2.component.css']
})
export class Datahub2Component {
  mode = 0; //0 = start, 1 = synth population, 2 = regioind


  clickTile(mode: number) {
    this.mode = mode;
    if(mode == 2) {
    this.router.navigateByUrl("/datahub2/data-regio"); 
    }

    if(mode == 1) {
      this.router.navigateByUrl("/datahub2/data-synth"); 
      }

      if(mode == 3) {
        this.router.navigateByUrl("/datahub2/infrastuktur"); 
        }

  }

  constructor(private router: Router){

  }





}
