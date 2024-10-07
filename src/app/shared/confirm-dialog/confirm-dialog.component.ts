import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmDialog } from './confirm-dialog.model';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss',
})
export class ConfirmDialogComponent {
  public title: string;
  public mainText: string | undefined;
  public isDanger: boolean | undefined;
  public isWarning: boolean | undefined;
  public yesButton: string;
  public noButton: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public confirmData: ConfirmDialog,
  ) {
    this.title = this.confirmData.title;
    this.mainText = this.confirmData.mainText;
    this.yesButton = this.confirmData.yesButton;
    this.noButton = this.confirmData.noButton;
    this.isDanger = this.confirmData.isDanger;
    this.isWarning = this.confirmData.isWarning;
  }

  yesDialog() {
    this.dialogRef.close('yes-option');
  }

  noDialog() {
    this.dialogRef.close('no-option');
  }
}
