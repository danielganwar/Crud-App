import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _Http: HttpClient) { }

  addemployee(data: any): Observable<any> {
    return this._Http.post('http://localhost:3000/employees', data);
  }

  getEmployeeList(): Observable<any> {
    return this._Http.get('http://localhost:3000/employees');
  }

  deleteEmployee(id: number):Observable<any> {
    return this._Http.delete(`http://localhost:3000/employees/${id}`);
  }
  updateEmployee(id: number, data: any): Observable<any> {
    return this._Http.put(`http://localhost:3000/employees/${id}`, data);
  }
}
