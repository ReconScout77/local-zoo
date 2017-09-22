import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <label>Filter by: </label>
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="youngAnimals">Young Animals</option>
      <option value="matureAnimals">Mature Animals</option>
    </select>
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
        <tr *ngFor="let currentAnimal of childAnimalList | maturity: filterByMaturity">
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
  filterByMaturity: string = "allAnimals";

  editButtonClicked(animalToEdit: Animal) {
    this.clickSenderEdit.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByMaturity = optionFromMenu;
  }
}
