import { Component, OnInit } from '@angular/core';
import { Exampleinventory } from '../exampleinventory';
import { ExampleinventoryService } from '../exampleinventory.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  exampleInventory: Exampleinventory;

  constructor(private exampleInvetoryService: ExampleinventoryService) { 
  }
  
  ngOnInit(): void {
    this.addExampleInventory(this.exampleInventory);
  }

private addExampleInventory(exampleInventory: Exampleinventory){
this.exampleInvetoryService.addExampleInventory(exampleInventory);}
}