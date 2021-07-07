import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TableData} from './models/table.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) {}

  public getTableData(): Observable<TableData> {
    return this.http.get<TableData>('/api/data');
  }
}


