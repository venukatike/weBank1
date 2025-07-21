import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

      GetAllUser():Observable<any>{
        return this.httpClient.get('https://localhost:7225/api/employee?pageNumber=1&pageSize=10');

      }
}
