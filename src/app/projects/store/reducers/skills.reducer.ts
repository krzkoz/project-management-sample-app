import * as fromSkills from '../actions/skills.action';
import { Skill } from '../../models/skill.model';

export interface SkillsState {
  entities: { [id: number]: Skill };
  loaded: boolean;
  loading: boolean;
}

export const initialState: SkillsState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromSkills.SkillsAction
): SkillsState {
  switch (action.type) {
    case fromSkills.LOAD_SKILLS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromSkills.LOAD_SKILLS_SUCCESS: {
      const skills = action.payload;

      const entities = skills.reduce(
        (accumulatedEntities: { [id: number]: Skill }, skill: Skill) => {
          return {
            ...accumulatedEntities,
            [skill.id]: skill
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

    case fromSkills.LOAD_SKILLS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}

export const getSkillsEntities = (state: SkillsState) => state.entities;
export const getSkillsLoading = (state: SkillsState) => state.loading;
export const getSkillsLoaded = (state: SkillsState) => state.loaded;
