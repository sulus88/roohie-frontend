import { Component, OnInit } from '@angular/core';
import { Exampleinventory } from '../exampleinventory';
import { ExampleinventoryService } from '../exampleinventory.service';

@Component({
  selector: 'app-example-inventory-list',
  templateUrl: './example-inventory-list.component.html',
  styleUrls: ['./example-inventory-list.component.css']
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
