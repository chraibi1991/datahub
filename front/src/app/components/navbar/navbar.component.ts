import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storageservice } from '../../service/storageservice-component/storageservice-component.component';
import { DatahubService } from '../../service/datahubservice/datahubservice.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
routeCheck: any;
  auth: boolean = false;
changeLandkreis() {
  this.router.navigateByUrl('/start'); 



}
iconVisible: any = false;

backLogin(){
  this.router.navigateByUrl('');
}

mouseLeave() {
this.iconVisible = false;
}
mouseEnter() {
  this.iconVisible = true;
}
  viewMode = '';
  selectedObject: any;


  click(viewMode: string){

    this.viewMode = viewMode;
    this.router.navigateByUrl(viewMode); 

  }

  constructor(public router: Router, private storageService: Storageservice) {
    setInterval(()=> { this.selectedObject = this.storageService.getObject();   
      //console.log("Route" + this.router.url)// === '/login'

      this.auth = this.storageService.getAuth();

      //console.log(this.auth)

      this.routeCheck = ( this.router.url === '/start'  || this.router.url === '/'  )

    }, 1 * 1000); 

  }

  


}
