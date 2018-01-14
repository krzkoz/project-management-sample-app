import { Project } from '../models';
import { getProjectsLoaded } from '../store/reducers/projects.reducer';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot
} from '@angular/router';
import * as fromStore from '../store';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, filter, take, switchMap, catchError, map } from 'rxjs/operators';

@Injectable()
export class ProjectExistsGuard implements CanActivate {
  constructor(private store: Store<fromStore.ProjectsState>) {}
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => {
        const id = parseInt(route.params.id, 10);
        return this.hasProject(id);
      })
    );
  }

  hasProject(id: number): Observable<boolean> {
    return this.store
      .select(fromStore.getProjectsEntities)
      .pipe(
        map((entities: { [key: number]: Project }) => !!entities[id]),
        take(1)
      );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getProjectsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadProjects());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
