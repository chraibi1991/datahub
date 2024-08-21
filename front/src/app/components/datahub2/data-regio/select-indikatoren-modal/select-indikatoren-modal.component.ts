import { Component, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-select-indikatoren-modal',
  templateUrl: './select-indikatoren-modal.component.html',
  styleUrls: ['./select-indikatoren-modal.component.css'],
})

export class SelectIndikatorenModalComponent implements OnInit {
    // Output-Event für die Bestätigung
  @Output() confirm: EventEmitter < any[] > = new EventEmitter < any[] > ();
    // Eigenschaften für die Indikatorenauswahl
  public allIndikatoren: boolean = false;

  public indikatoren: any[] = [];
  public hasIndikator: boolean = false;
   // Konstruktor mit Injektion der Dialogdaten
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any[]
  ) {}
   // Initialisierungsmethode
 
   ngOnInit(): void {
    if (this.data) {
  // Erstellen der Indikatoren-Objekte aus den übergebenen Daten
      this.data.forEach(indi => this.indikatoren.push({
        name: indi.Name,
        withChart: false,
        withMap: false,
        checked: false
      }));
    }
  }

  // Methode zum Setzen aller Indikatoren

  public setAll(all: boolean): void {
    this.allIndikatoren = all;
    this.indikatoren.forEach(i => {
      i.checked = all;
      i.withChart = all
      i.withMap = all;
    });
    this.hasIndikator = all;
  }
  // Methode zum Aktualisieren des Gesamtstatus
  public updateAll(indi: any): void {
    if(!indi.checked) {
      indi.withChart = false;
      indi.withMap = false;
    }
  // Prüfen, ob alle Indikatoren ausgewählt sind
    this.allIndikatoren = this.indikatoren.every(i => i.checked && i.withChart && i.withMap);
  // Prüfen, ob mindestens ein Indikator ausgewählt ist
    this.hasIndikator = this.indikatoren.filter(i => i.checked && (i.withChart || i.withMap)).length > 0;
  }
  // Methode zur Bestätigung der ausgewählten Indikatoren
  public confirmIndikatoken(): void {
    const selectedIndi = this.indikatoren.filter(i => i.checked);
    const data = selectedIndi.map(i => {
      const indi = this.data.find(d => d.Name === i.name);
      return {...indi, withChart: i.withChart, withMap: i.withMap}
    });
  // Emittieren des Bestätigungsereignisses mit den ausgewählten Daten
    this.confirm.emit(data);
  }


}
