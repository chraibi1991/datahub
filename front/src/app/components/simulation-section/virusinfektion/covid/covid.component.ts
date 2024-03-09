import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent {
  clickTile(mode: number) {
    if (mode == 1) {
      this.router.navigateByUrl('simulation-section/virusinfektion/covid/simulation');
    }
    if (mode == 2) {
      this.router.navigateByUrl('simulation-section/virusinfektion/covid/simulation');
    }
    if (mode == 3) {
      this.router.navigateByUrl('simulation-section/virusinfektion/covid/simulation');
    }
    if (mode == 4) {
      this.router.navigateByUrl('simulation-section/virusinfektion/covid/eigenes-szenario');
    }
    if (mode == 5) {
      this.router.navigateByUrl('simulation-section/virusinfektion');
    }
  }

  constructor(private router: Router) {}
}
