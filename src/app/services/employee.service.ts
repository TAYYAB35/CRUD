import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }
  url = 'http://localhost:3000/employee'

  addEmployee(data: any): Observable<any>{
    return this._http.post(this.url, data)
  }
}
