import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tileview',
  templateUrl: './tileview.component.html',
  styleUrls: ['./tileview.component.css']
})
export class TileviewComponent {


  click(viewMode: string){


    this.router.navigateByUrl(viewMode); 

  }

  constructor(private router: Router) {

  }


}
