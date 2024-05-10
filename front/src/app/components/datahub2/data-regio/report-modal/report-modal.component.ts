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

  public modalData: any;
  public minMaxStr: string = "";

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.modalData = this.data;
      this.minMaxStr = this.getMinMax();
    }
  }

  public generatePDF() {
    const pages = document.getElementsByClassName('reporting-page');

    if (pages) {
      const pagesContent: any = [];
      Array.from(pages).forEach((p: any, index: number) => {
        
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

          if (index === 1) {
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

  public getMinMax(): string {
    let minMaxStr = this.modalData.minYear;
    if(this.modalData.minYear !== this.modalData.maxYear){
      minMaxStr += ` - ${this.modalData.maxYear}`
    }
    return minMaxStr;
  }

  public getDateTime(): string {
    return dayjs().format('dddd, MMMM D, YYYY h:mm A');
  }
}
