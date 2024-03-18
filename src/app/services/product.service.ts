import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL: string = 'https://pokeapi.co/api/v2/pokemon/ditto';
  constructor(private httpClient: HttpClient) {}

  getProducts() : Observable<any> {
    return this.httpClient.get(this.API_URL).pipe(res=>res);
  }
}
