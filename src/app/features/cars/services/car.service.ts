import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CarModel as Car } from '../models/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/cars';//she says it 
  //should be read from a variable but should be left for now.
  getCars():Observable<Car[]>{
    return this.http.get<Car[]>(this.apiUrl);
  }
}
