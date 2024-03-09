import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-virusinfektion',
  templateUrl: './virusinfektion.component.html',
  styleUrls: ['./virusinfektion.component.css']
})
export class VirusinfektionComponent {
  clickTile(mode: number) {
    if(mode == 1) {
      this.router.navigateByUrl("simulation-section/virusinfektion/covid"); 
      }
    if(mode == 2) {
    this.router.navigateByUrl("simulation-section/virusinfektion/influenza"); 
    }
    if(mode == 3) {
      this.router.navigateByUrl("simulation-section"); 
    }

  }

  constructor(private router: Router){
  }

}
