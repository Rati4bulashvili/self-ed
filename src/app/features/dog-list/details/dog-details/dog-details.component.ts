import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dog-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.scss']
})
export class DogDetailsComponent implements OnInit{
  dogs = [//this data would usually come from service
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

  dog$: Observable<any> | undefined;

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.dog$ = this.route.paramMap.pipe(
      tap(val => console.log(val)),
      map(params => this.dogs[Number(params.get('index'))]),
    )
  }
}
