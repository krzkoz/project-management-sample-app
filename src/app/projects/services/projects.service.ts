import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/index';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectsService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`/api/projects`).pipe(
      catchError((error: any) => {
        return Observable.throw(error.json());
      })
    );
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`/api/projects`, project).pipe(
      catchError((error: any) => {
        return Observable.throw(error.json());
      })
    );
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`/api/projects/${project.id}`, project).pipe(
      catchError((error: any) => {
        return Observable.throw(error.json());
      })
    );
  }

  removeProject(project: Project): Observable<Project> {
    return this.http
      .delete<any>(`/api/projects/${project.id}`)
      .pipe(
        catchError((error: any) => {
          return Observable.throw(error.json());
        })
      );
  }
}
