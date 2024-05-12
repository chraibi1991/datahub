import { Component, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-select-indikatoren-modal',
  templateUrl: './select-indikatoren-modal.component.html',
  styleUrls: ['./select-indikatoren-modal.component.css'],
})

export class SelectIndikatorenModalComponent implements OnInit {
  @Output() confirm: EventEmitter < any[] > = new EventEmitter < any[] > ();

  public allIndikatoren: boolean = false;

  public indikatoren: any[] = [];
  public hasIndikator: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any[]
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.data.forEach(indi => this.indikatoren.push({
        name: indi.Name,
        withChart: false,
        withMap: false,
        checked: false
      }));
    }
  }


  public setAll(all: boolean): void {
    this.allIndikatoren = all;
    this.indikatoren.forEach(i => {
      i.checked = all;
      i.withChart = all
      i.withMap = all;
    });
    this.hasIndikator = all;
  }

  public updateAll(indi: any): void {
    if(!indi.checked) {
      indi.withChart = false;
      indi.withMap = false;
    }
    this.allIndikatoren = this.indikatoren.every(i => i.checked && i.withChart && i.withMap);
    this.hasIndikator = this.indikatoren.filter(i => i.checked && (i.withChart || i.withMap)).length > 0;
  }

  public confirmIndikatoken(): void {
    const selectedIndi = this.indikatoren.filter(i => i.checked);
    const data = selectedIndi.map(i => {
      const indi = this.data.find(d => d.Name === i.name);
      return {...indi, withChart: i.withChart, withMap: i.withMap}
    });
    this.confirm.emit(data);
  }


}
