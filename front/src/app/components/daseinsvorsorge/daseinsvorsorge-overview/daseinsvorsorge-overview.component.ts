import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daseinsvorsorge-overview',
  templateUrl: './daseinsvorsorge-overview.component.html',
  styleUrls: ['./daseinsvorsorge-overview.component.css']
})
export class DaseinsvorsorgeOverviewComponent {
clickTile(mode: number) {


if(mode == 2) {
  this.router.navigateByUrl("daseinsvorsorge/hitzehotspots"); 
  }

  if(mode == 1) {
    this.router.navigateByUrl("prognosen/nachfrageberechnung"); 
    }

    if(mode == 3) {
      this.router.navigateByUrl("daseinsvorsorge/Ärztebewegungen"); 
      }

}

constructor(private router: Router) {
  
}

}
