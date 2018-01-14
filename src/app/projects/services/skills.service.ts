import { catchError } from 'rxjs/operators';
import { Skill } from '../models';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SkillsService {
  constructor(private http: HttpClient) {}

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`/api/skills`).pipe(
      catchError((error: any) => {
        return Observable.throw(error.json());
      })
    );
  }
}
