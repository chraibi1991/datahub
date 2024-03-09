import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-raum-analysen',
  templateUrl: './raum-analysen.component.html',
  styleUrls: ['./raum-analysen.component.css']
})


export class RaumAnalysenComponent {


  clickTile(mode: number) {
    if(mode == 1) {
      this.router.navigateByUrl("analysen/notfallinfrastruktur"); 
      }
    if(mode == 2) {
    this.router.navigateByUrl("analysen/reachability"); 
    }
  }

  constructor(private router: Router){

  }





}
