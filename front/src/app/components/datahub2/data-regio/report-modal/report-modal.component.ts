import dayjs from 'dayjs';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

const pdfMake = require('pdfmake/build/pdfmake.js');
import pdfFonts from 'pdfmake/build/vfs_fonts';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-report-modal',
  templateUrl: './report-modal.component.html',
  styleUrls: ['./report-modal.component.css']
})
export class ReportModalComponent implements OnInit {
  // Eigenschaften für den Bericht
  public minMaxStr: string = "";
  public indakatoren: any[] = [];
  // Konstruktor mit Injektion der Dialogdaten
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}
  // Initialisierungsmethode
  ngOnInit(): void {
    if (this.data) {
  // Erstellen der Indikatoren-Objekte aus den übergebenen Daten
      this.data.forEach((d: any) => {
        if(d.chartImg) this.indakatoren.push({...d, pageType: 'chart'});
        if(d.mapImg) this.indakatoren.push({...d, pageType: 'map'});
      });
    }
  }
  // Methode zur Generierung des PDFs
  public generatePDF() {
    const pages = Array.from(document.getElementsByClassName('reporting-page'));
     if (pages) {
      const pagesContent: any = [];
      pages.forEach((p: any, index: number) => {
        
        html2canvas(p, {
          height: 1200,
          width: 1200,
          scale: 3,
          backgroundColor: null,
          logging: false
        }).then((canvas: any) => {
           pagesContent.push({
            image: canvas.toDataURL(),
            width: 810,
            height: 940
          });
           
          if (index === pages.length-1) {
            pdfMake.vfs = pdfFonts.pdfMake.vfs;

            // Prepare pdf structure
            const docDefinition = {
              content: pagesContent,
              pageOrientation: 'landscape',
              pageSize: 'A4'
            };

            pdfMake.createPdf(docDefinition).open();
          }
        });
      });
    }
  }
  // Methode zum Abrufen des Min-Max-Strings
  public getMinMax(indikator: any): string {
    let minMaxStr = indikator.minYear;
    if(indikator.minYear !== indikator.maxYear){
      minMaxStr += ` - ${indikator.maxYear}`
    }
    return minMaxStr;
  }
  // Methode zum Abrufen des aktuellen Datums und der Uhrzeit
  public getDateTime(): string {
    return dayjs().format('dddd, MMMM D, YYYY h:mm A');
  }
}
