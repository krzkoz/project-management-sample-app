import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../core/store';
import * as fromFeature from '../reducers';
import * as fromProjects from '../reducers/projects.reducer';

import { Project } from '../../models/project.model';

export const getProjectsState = createSelector(
  fromFeature.getProjectsManagementState,
  (state: fromFeature.ProjectsState) => state.projects
);

export const getProjectsEntities = createSelector(
  getProjectsState,
  fromProjects.getProjectsEntities
);

export const getSelectedProject = createSelector(
  getProjectsEntities,
  fromRoot.getRouterState,
  (entities, router): Project => {
    return router.state && entities[router.state.params.id];
  }
);

export const getAllProjects = createSelector(getProjectsEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getProjectsLoaded = createSelector(
  getProjectsState,
  fromProjects.getProjectsLoaded
);
export const getProjectsLoading = createSelector(
  getProjectsState,
  fromProjects.getProjectsLoading
);
