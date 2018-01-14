import * as fromProjects from '../actions/projects.action';
import { Project } from '../../models/project.model';

export interface ProjectState {
  entities: { [id: number]: Project };
  loaded: boolean;
  loading: boolean;
}

export const initialState: ProjectState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromProjects.ProjectsAction
): ProjectState {
  switch (action.type) {
    case fromProjects.LOAD_PROJECTS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromProjects.LOAD_PROJECTS_SUCCESS: {
      const projects = action.payload;

      const entities = projects.reduce(
        (accumulatedEntities: { [id: number]: Project }, project: Project) => {
          return {
            ...accumulatedEntities,
            [project.id]: project
          };
        },
        {
          ...state.entities
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }

    case fromProjects.LOAD_PROJECTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case fromProjects.UPDATE_PROJECT_SUCCESS:
    case fromProjects.CREATE_PROJECT_SUCCESS: {
      const project = action.payload;
      const entities = {
        ...state.entities,
        [project.id]: project
      };

      return {
        ...state,
        entities
      };
    }

    case fromProjects.REMOVE_PROJECT_SUCCESS: {
      const project = action.payload;
      const { [project.id]: removed, ...entities } = state.entities;

      return {
        ...state,
        entities
      };
    }
  }

  return state;
}

export const getProjectsEntities = (state: ProjectState) => state.entities;
export const getProjectsLoading = (state: ProjectState) => state.loading;
export const getProjectsLoaded = (state: ProjectState) => state.loaded;
