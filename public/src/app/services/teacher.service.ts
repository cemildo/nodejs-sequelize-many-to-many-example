import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class TeacherService {
  private url: string;

  constructor(private http: Http) {
    this.url = 'http://localhost:3000/teachers';
  }

  getAll(): Observable<any> {
    return this.http.get(this.url).map(res => res.json());
  }

  getById(id): Observable<any> {
    return this.http.get(`${this.url}/${id}`).map(res => res.json());
  }

  deleteById(id): Observable<any> {
    return this.http.delete(`${this.url}/${id}`).map(res => res.json());
  }

  update(teacher): Observable<any> {
    return this.http.put(`${this.url}/${teacher.teacherNumber}`, teacher).map(res => res.json());
  }

  add(teacher): Observable<any> {
    return this.http.post(`${this.url}`, teacher).map(res => res.json());
  }

}
