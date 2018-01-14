import { Action } from '@ngrx/store';
import { Project } from '../../models/project.model';

export const LOAD_PROJECTS = '[Projects] Load Projects';
export const LOAD_PROJECTS_FAIL = '[Projects] Load Projects Fail';
export const LOAD_PROJECTS_SUCCESS = '[Projects] Load Projects Success';

export class LoadProjects implements Action {
  readonly type = LOAD_PROJECTS;
}

export class LoadProjectsFail implements Action {
  readonly type = LOAD_PROJECTS_FAIL;
  constructor(public payload: any) {}
}

export class LoadProjectsSuccess implements Action {
  readonly type = LOAD_PROJECTS_SUCCESS;
  constructor(public payload: Project[]) {}
}

export const CREATE_PROJECT = '[Projects] Create Project';
export const CREATE_PROJECT_FAIL = '[Projects] Create Project Fail';
export const CREATE_PROJECT_SUCCESS = '[Projects] Create Project Success';

export class CreateProject implements Action {
  readonly type = CREATE_PROJECT;
  constructor(public payload: Project) {}
}

export class CreateProjectFail implements Action {
  readonly type = CREATE_PROJECT_FAIL;
  constructor(public payload: any) {}
}

export class CreateProjectSuccess implements Action {
  readonly type = CREATE_PROJECT_SUCCESS;
  constructor(public payload: Project) {}
}

export const UPDATE_PROJECT = '[Projects] Update Project';
export const UPDATE_PROJECT_FAIL = '[Projects] Update Project Fail';
export const UPDATE_PROJECT_SUCCESS = '[Projects] Update Project Success';

export class UpdateProject implements Action {
  readonly type = UPDATE_PROJECT;
  constructor(public payload: Project) {}
}

export class UpdateProjectFail implements Action {
  readonly type = UPDATE_PROJECT_FAIL;
  constructor(public payload: any) {}
}

export class UpdateProjectSuccess implements Action {
  readonly type = UPDATE_PROJECT_SUCCESS;
  constructor(public payload: Project) {}
}

export const REMOVE_PROJECT = '[Projects] Remove Project';
export const REMOVE_PROJECT_FAIL = '[Projects] Remove Project Fail';
export const REMOVE_PROJECT_SUCCESS = '[Projects] Remove Project Success';

export class RemoveProject implements Action {
  readonly type = REMOVE_PROJECT;
  constructor(public payload: Project) {}
}

export class RemoveProjectFail implements Action {
  readonly type = REMOVE_PROJECT_FAIL;
  constructor(public payload: any) {}
}

export class RemoveProjectSuccess implements Action {
  readonly type = REMOVE_PROJECT_SUCCESS;
  constructor(public payload: Project) {}
}

// action types
export type ProjectsAction =
  | LoadProjects
  | LoadProjectsFail
  | LoadProjectsSuccess
  | CreateProject
  | CreateProjectFail
  | CreateProjectSuccess
  | UpdateProject
  | UpdateProjectFail
  | UpdateProjectSuccess
  | RemoveProject
  | RemoveProjectFail
  | RemoveProjectSuccess;
