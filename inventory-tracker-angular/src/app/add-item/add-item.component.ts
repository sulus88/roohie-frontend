import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exampleinventory } from '../exampleinventory';
import { ExampleinventoryService } from '../exampleinventory.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class ExampleInventoryListComponent implements OnInit {
  exampleinventories : Exampleinventory[];

  constructor(private exampleInventoryService:ExampleinventoryService) { }

  ngOnInit() : void {
    this.getExampleInventory();
  //   this.exampleinventories = [{
  //     "id":1,
  //     "exItemName":"milk",
  //     "exCategory":"dairy"
  //   },
  // {
  //   "id":2,
  //   "exItemName":"tea",
  //   "exCategory":"beverages"
  // }]
  }
    private getExampleInventory(){
      this.exampleInventoryService.getExampleInventoryList().subscribe(data =>{
        this.exampleinventories = data;
      })
    }
}

export class AddItemComponent implements OnInit {
  exampleInventory: Exampleinventory;

  constructor(private exampleInvetoryService: ExampleinventoryService) { 
  this.exampleInventory = new Exampleinventory()
  }
  ngOnInit(): void {
    this.exampleInventory : Exampleinventory;
    
  }
 
private addExampleInventory(exampleInventory: Exampleinventory){
this.exampleInvetoryService.addExampleInventory(this.exampleInventory);

 
 
  
 
}
