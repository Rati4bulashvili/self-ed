import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogCardComponent } from './card/dog-card.component';

/**
 * benefits of using standalone components
 * less code to write and less files to modify while creating a new component
 * easy for reusability and lazy loadingsrc/app/features/list/list.component.ts
 */

@Component({
  selector: 'app-dog-list',
  standalone: true,
  imports: [CommonModule, DogCardComponent],
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class DogListComponent {
  dogs = [
    { name: 'Bulldog', age: 2, weight: 30 },
    { name: 'corgi', age: 3, weight: 20 },
    { name: 'Labrador', age: 5, weight: 20 },
    { name: 'Pug', age: 7, weight: 10 },
    { name: 'German Shepherd', age: 3, weight: 25 },
    { name: 'Beagle', age: 4, weight: 15 },
    { name: 'Poodle', age: 8, weight: 20 },
    { name: 'Rottweiler', age: 1, weight: 25 },
    { name: 'Chihuahua', age: 2, weight: 10 },
    { name: 'Doberman', age: 4, weight: 30 },
    { name: 'Shih Tzu', age: 3, weight: 15 },
    { name: 'Yorkshire Terrier', age: 7, weight: 10 },
  ]
}
