import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
    selector: 'app-report-modal',
    templateUrl: './report-modal.component.html',
    styleUrls: ['./report-modal.component.css'],
    standalone: true,
    imports: [MatDialogModule, MatButtonModule]
})
export class ReportModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: {}
  ) {}

    ngOnInit(): void {
    }
}
