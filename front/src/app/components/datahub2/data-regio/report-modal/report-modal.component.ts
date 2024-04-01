import { NgFor, NgIf } from '@angular/common';

import dayjs from 'dayjs';

import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Color, ScaleType, LineChartModule } from '@swimlane/ngx-charts';

const pdfMake = require('pdfmake/build/pdfmake.js');
import pdfFonts from 'pdfmake/build/vfs_fonts';
import html2canvas from 'html2canvas';

interface PageModel {
  title: string;
}

@Component({
  selector: 'app-report-modal',
  templateUrl: './report-modal.component.html',
  styleUrls: ['./report-modal.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, NgFor, LineChartModule, NgIf]
})
export class ReportModalComponent implements OnInit {

  public chart: any = {}; 

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  chartLoading: boolean = true;

  multi: any[] = [];
  yAxisLabel: string = "";
  yScaleMin: number = 0;
  yScaleMax: number = 0;

  docDefinition: any;

  colorScheme: Color = {
    name: "custom",
    selectable: true,
    group: ScaleType.Ordinal,
    domain: []
  };

  ngOnInit(): void {
    if (this.data) {
      this.chart = this.data.chart;
      this.initChat();
    }
  }

  private initChat() {
    this.yAxisLabel = this.chart.unit;
    this.yScaleMax = this.chart.values.max;
    this.yScaleMin = this.chart.values.min;

    this.chart.cities.forEach((city: any) => {
      const series: any[] = city.data.map((d: any) => {
        return {
          "name": d.year,
          "value": d.value
        };
      });

      this.multi.push({
        name: city.name,
        series: series
      });
      this.colorScheme.domain.push(city.color);
    });

    this.chartLoading = false;
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
            width: 800,
            height: 990
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

   
  public getDateTime(): string {
    return dayjs().format('dddd, MMMM D, YYYY h:mm A');
  }
}
