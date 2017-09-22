import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <table class="table" id="main-table">
      <thead>
        <tr>
          <th>Species</th>
          <th>Name</th>
          <th>Age</th>
          <th>Diet</th>
          <th>Location</th>
          <th>Caretakers</th>
          <th>Sex</th>
          <th>Likes</th>
          <th>Dislikes</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let currentAnimal of childAnimalList">
          <th>{{currentAnimal.species}}</th>
          <th>{{currentAnimal.name}}</th>
          <th>{{currentAnimal.age}}</th>
          <th>{{currentAnimal.diet}}</th>
          <th>{{currentAnimal.location}}</th>
          <th>{{currentAnimal.caretakers}}</th>
          <th>{{currentAnimal.sex}}</th>
          <th>{{currentAnimal.likes}}</th>
          <th>{{currentAnimal.dislikes}}</th>
          <th><button class="btn btn-info" (click)="editButtonClicked(currentAnimal)">Edit</button></th>
        </tr>
      </tbody>
    </table>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSenderEdit = new EventEmitter();

  editButtonClicked(animalToEdit: Animal) {
  this.clickSenderEdit.emit(animalToEdit);
}
}
