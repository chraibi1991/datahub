import { Component } from '@angular/core';
import { Storageservice } from '../../service/storageservice-component/storageservice-component.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private storageService: Storageservice) {

  }
deleteCookie() {
   
this.storageService.deleteObject(); 
this.storageService.setAuth(true); 
}

ngOnInit() {
  

}


intro:any;
SA:any;
DG:any;
fixSA:any;
mlUni:any;

hideDisplay(){
  this.intro=document.getElementById('intro');
  this.SA=document.getElementById('SA');
  this.DG=document.getElementById('DG');
  this.fixSA=document.getElementById('fixSA');
  this.mlUni=document.getElementById('mlUni');


  this.DG.style.display = "none";
  this.fixSA.style.display = "none";
  this.mlUni.style.display = "none";
  this.SA.style.transition =
    "position 1s ease, top 1s ease, left 1s ease, width 1s ease,height 1s ease, transform 1s ease"; // Hier wurde die Breite (width) hinzugefügt.
    this.SA.style.position = "fixed";
    this.SA.style.top = "1%";
    this.SA.style.right = "1%";
    this.SA.style.width = "50px";
    this.SA.style.height = "60px";
    this.SA.style.transform = "none";
    this.intro.style.transition = "background-color 1s ease"; // Übergang für die Hintergrundfarbe
    this.intro.style.backgroundColor = "transparent"; // Transparente Hintergrundfarbe

      setTimeout(() => {

        this.SA.style.display = "none";
        this.fixSA.style.display = "flex";

      }, 900);

    setTimeout(() => {

      this.intro.style.display = "none";
    }, 1000);
};
}
