import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromProjects from './projects.reducer';
import * as fromSkills from './skills.reducer';

export interface ProjectsState {
  projects: fromProjects.ProjectState;
  skills: fromSkills.SkillsState;
}

export const reducers: ActionReducerMap<ProjectsState> = {
  projects: fromProjects.reducer,
  skills: fromSkills.reducer
};

export const getProjectsManagementState = createFeatureSelector<ProjectsState>(
  'projectsManagement'
);
