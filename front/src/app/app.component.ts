import { Component } from '@angular/core';
import { Storageservice } from './service/storageservice-component/storageservice-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hongkong';


  constructor(private storageService: Storageservice){
    this.storageService.deleteObject(); 
  }
}
