import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exampleinventory } from './exampleinventory';

@Injectable({
  providedIn: 'root'
})
export class ExampleinventoryService {

  private baseURL= "http://localhost:8080/api/inventories";
  constructor(private httpClient:HttpClient) { }

  getExampleInventoryList() : Observable<Exampleinventory[]>{
    return this.httpClient.get<Exampleinventory[]>(`${this.baseURL}`)
  }
}
