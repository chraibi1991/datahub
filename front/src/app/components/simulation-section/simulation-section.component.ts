import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simulation-section',
  templateUrl: './simulation-section.component.html',
  styleUrls: ['./simulation-section.component.css'],
})
export class SimulationSectionComponent {
  clickTile(mode: number) {
    if (mode == 1) {
      this.router.navigateByUrl('simulation-section/virusinfektion');
    }
    if (mode == 2) {
      this.router.navigateByUrl('simulation-section/katastrophenschutz');
    }
    if (mode == 3) {
      this.router.navigateByUrl('simulation-section/Energie');
    }
    if (mode == 4) {
      this.router.navigateByUrl('simulation-section/Mobilität');
    }
  }

  constructor(private router: Router) {}
}
