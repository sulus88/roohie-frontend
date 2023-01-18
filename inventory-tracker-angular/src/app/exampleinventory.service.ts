import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exampleinventory } from './exampleinventory';

@Injectable({
  providedIn: 'root'
})
export class ExampleinventoryService {
  addExampleInventory(exampleInventory: Exampleinventory) {
    throw new Error('Method not implemented.');
  }

  private baseURL= "http://localhost:8080/api/inventories";
  constructor(private httpClient:HttpClient) { }

  public getExampleInventoryList() : Observable<Exampleinventory[]>{
    return this.httpClient.get<Exampleinventory[]>(`${this.baseURL}`)
  }

 public save(exampleInventory: Exampleinventory) {
    return this.httpClient.post<Exampleinventory>(this.baseURL,exampleInventory )
  
}
}
