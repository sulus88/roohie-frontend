import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { ExampleInventoryListComponent } from './example-inventory-list/example-inventory-list.component';


const routes: Routes = [
 //{ path:'addItem', component : AddItemComponent},
// {path:'viewItems', component : ExampleInventoryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
