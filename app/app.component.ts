import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="jumbotron">
        <h1>{{title}}</h1>
      </div>

      <animal-list [childAnimalList]="masterAnimalList"></animal-list>

      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    </div>
  `
})


export class AppComponent {
  title: string = 'Local Zoo';
  masterAnimalList: Animal[] = [
    new Animal('Python', 'Irene', 5, 'Carnivore', 'The Snake Pit', 3, 'Female', 'Laying on warm rocks', 'Being tread on'),
    new Animal('Penguin', 'Harvey', 1, 'Carnivore', 'The Iceberg', 4, 'Male', 'Sliding around', 'Loud crowds')
  ];

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
