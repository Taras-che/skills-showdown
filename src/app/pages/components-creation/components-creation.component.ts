import { Component } from '@angular/core';
import { CreateHeaderComponent } from '../../shared/dynamic-component/create-header/create-header.component';
@Component({
  selector: 'app-components-creation',
  standalone: true,
  imports: [CreateHeaderComponent],
  templateUrl: './components-creation.component.html',
})
export class ComponentsCreationComponent {
}
