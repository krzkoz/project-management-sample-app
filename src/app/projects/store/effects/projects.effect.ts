import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromRoot from '../../../core/store';
import * as projectActions from '../actions/projects.action';
import * as fromServices from '../../services';

@Injectable()
export class ProjectsEffects {
  constructor(
    private actions$: Actions,
    private projectsService: fromServices.ProjectsService
  ) {}

  @Effect()
  loadProjects$ = this.actions$.ofType(projectActions.LOAD_PROJECTS).pipe(
    switchMap(() => {
      return this.projectsService
        .getProjects()
        .pipe(
          map(projects => new projectActions.LoadProjectsSuccess(projects)),
          catchError(error => of(new projectActions.LoadProjectsFail(error)))
        );
    })
  );

  @Effect()
  createProject$ = this.actions$.ofType(projectActions.CREATE_PROJECT).pipe(
    map((action: projectActions.CreateProject) => action.payload),
    switchMap(project => {
      return this.projectsService
        .createProject(project)
        .pipe(
          map(
            createdProject =>
              new projectActions.CreateProjectSuccess(createdProject)
          ),
          catchError(error => of(new projectActions.CreateProjectFail(error)))
        );
    })
  );

  @Effect()
  createProjectSuccess$ = this.actions$
    .ofType(projectActions.CREATE_PROJECT_SUCCESS)
    .pipe(
      map((action: projectActions.CreateProjectSuccess) => action.payload),
      map(project => {
        return new fromRoot.Go({
          path: ['/projects', project.id]
        });
      })
    );

  @Effect()
  updateProject$ = this.actions$.ofType(projectActions.UPDATE_PROJECT).pipe(
    map((action: projectActions.UpdateProject) => action.payload),
    switchMap(project => {
      return this.projectsService
        .updateProject(project)
        .pipe(
          map(
            updatedProject =>
              new projectActions.UpdateProjectSuccess(updatedProject)
          ),
          catchError(error => of(new projectActions.UpdateProjectFail(error)))
        );
    })
  );

  @Effect()
  removeProject$ = this.actions$.ofType(projectActions.REMOVE_PROJECT).pipe(
    map((action: projectActions.RemoveProject) => action.payload),
    switchMap(project => {
      return this.projectsService
        .removeProject(project)
        .pipe(
          map(() => new projectActions.RemoveProjectSuccess(project)),
          catchError(error => of(new projectActions.RemoveProjectFail(error)))
        );
    })
  );

  @Effect()
  handleProjectSuccess$ = this.actions$
    .ofType(
      projectActions.UPDATE_PROJECT_SUCCESS,
      projectActions.REMOVE_PROJECT_SUCCESS
    )
    .pipe(
      map(project => {
        return new fromRoot.Go({
          path: ['/projects']
        });
      })
    );
}
