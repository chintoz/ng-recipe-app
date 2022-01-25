import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) name: ElementRef
  @ViewChild('amountInput', {static: true}) amount: ElementRef
  @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>()

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(): void {
    this.ingredientAdded.emit(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value as number))
    this.name.nativeElement.value = ''
    this.amount.nativeElement.value = ''
  }

}
