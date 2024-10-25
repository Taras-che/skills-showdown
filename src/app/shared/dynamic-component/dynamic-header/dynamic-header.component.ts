import { Component, Input, OnInit, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NotificationAlertComponent } from '../../notification-alert/notification-alert.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-dynamic-header',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './dynamic-header.component.html',
  styleUrl: './dynamic-header.component.scss',
})
export class DynamicHeaderComponent implements OnInit {
  @Input() title: string;
  public deleteHeader = output<void>();
  private hintMessage: string =
    'This is not! just ngModel. This is dynamically created Component with 2 way signal data binding! Please check shared/dynamic-component';
  constructor(private readonly snackBar: MatSnackBar) {}
  ngOnInit(): void {
    this.snackBar.openFromComponent(NotificationAlertComponent, {
      data: this.hintMessage,
      duration: 8000,
    });
  }
}
