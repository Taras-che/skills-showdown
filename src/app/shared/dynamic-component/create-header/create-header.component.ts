import { Component, ComponentRef, signal, viewChild, ViewContainerRef } from '@angular/core';
import { DynamicHeaderComponent } from '../dynamic-header/dynamic-header.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-create-header',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './create-header.component.html',
  styleUrl: './create-header.component.scss',
})
export class CreateHeaderComponent {
  vcr = viewChild('headerContainer', {read: ViewContainerRef});
  componentRef?: ComponentRef<DynamicHeaderComponent>;
  titleText = signal('');
  isComponentCreated: boolean = false;
  public createForm(): void {
    this.vcr()?.clear();
    this.componentRef = this.vcr()?.createComponent(DynamicHeaderComponent);
    this.componentRef?.setInput('title', this.titleText());
    this.isComponentCreated = true;
    this.componentRef?.instance.deleteHeader.subscribe(() => {
      this.vcr()?.clear();
      this.titleText.set('');
      this.isComponentCreated = false;
    });
  }
}
