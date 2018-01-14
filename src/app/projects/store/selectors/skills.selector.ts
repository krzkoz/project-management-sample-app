import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../core/store';
import * as fromFeature from '../reducers';
import * as fromSkills from '../reducers/skills.reducer';

import { Project } from '../../models/project.model';

export const getSkillsState = createSelector(
  fromFeature.getProjectsManagementState,
  (state: fromFeature.ProjectsState) => state.skills
);

export const getSkillsEntities = createSelector(
  getSkillsState,
  fromSkills.getSkillsEntities
);

export const getAllSkills = createSelector(getSkillsEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getSkillsLoaded = createSelector(
  getSkillsState,
  fromSkills.getSkillsLoaded
);
export const getSkillsLoading = createSelector(
  getSkillsState,
  fromSkills.getSkillsLoading
);
