import { Component } from '@angular/core';

@Component({
  selector: 'app-my-carousel',
  templateUrl: './my-carousel.component.html',
  styleUrls: ['./my-carousel.component.css']
})
export class MyCarouselComponent {
push(index: number) {

  var oldValCenter = this.content[2];
  var oldVal = this.content[index];
  this.content[2] = oldVal;
  this.content[index] = oldValCenter; 

}

  numberOfSlides = 5; 
  index = 0; 

  content = [
    { title: 'content1' },
    { title: 'content2' },
    { title: 'content3' },
    { title: 'content4'},
    { title: 'content5'},
    { title: 'content6'},
    { title: 'content7'},
    { title: 'content8'}, 
  ];


  shownContent = this.content; 

  constructor(){

    
    /*setInterval(()=> { console.log('change');

    var elementAway = this.shownContent.shift(); 
    //@ts-ignore
    this.shownContent[this.shownContent.length] = elementAway; 
    }, 4 * 1000); */

  }




}
