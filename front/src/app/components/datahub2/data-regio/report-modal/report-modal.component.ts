import { NgFor } from '@angular/common';

import dayjs from 'dayjs';

import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

export interface PageModel {
  title: string;
}

@Component({
    selector: 'app-report-modal',
    templateUrl: './report-modal.component.html',
    styleUrls: ['./report-modal.component.css'],
    standalone: true,
    imports: [MatDialogModule, MatButtonModule, NgFor]
})
export class ReportModalComponent implements OnInit {

  public pages: PageModel[] = [{ title: "Title A" }, { title: "Title B" }, { title: "Title C" }];

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: {}
  ) {}

    ngOnInit(): void {
    }

    public getDateTime(): string {
      return dayjs().format('dddd, MMMM D, YYYY h:mm A');
    }
}
