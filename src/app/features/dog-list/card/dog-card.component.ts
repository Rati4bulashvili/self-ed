import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dog-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class DogCardComponent {
  @Input() dog: any;
  @Input() index!: number;
}
