import { Skill } from '../../models/skill.model';
import * as fromSkills from './skills.reducer';
import * as fromActions from '../actions/skills.action';

describe('SkillsReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromSkills;
      const action = {} as any;
      const state = fromSkills.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('LOAD_SKILLS action', () => {
    it('should set loading to true', () => {
      const { initialState } = fromSkills;
      const action = new fromActions.LoadSkills();
      const state = fromSkills.reducer(initialState, action);

      expect(state.loading).toEqual(true);
      expect(state.loaded).toEqual(false);
      expect(state.entities).toEqual({});
    });
  });

  describe('LOAD_SKILLS_SUCCESS action', () => {
    it('should populate the Skills array', () => {
      const Skills: Skill[] = [
        {
          id: 1,
          name: 'JavaScript'
        },
        {
          id: 2,
          name: 'HTML 5'
        },
        {
          id: 3,
          name: 'CSS'
        }
      ];
      const entities = {
        1: Skills[0],
        2: Skills[1],
        3: Skills[2]
      };
      const { initialState } = fromSkills;
      const action = new fromActions.LoadSkillsSuccess(Skills);
      const state = fromSkills.reducer(initialState, action);

      expect(state.loaded).toEqual(true);
      expect(state.loading).toEqual(false);
      expect(state.entities).toEqual(entities);
    });
  });

  describe('LOAD_SKILLS_FAIL action', () => {
    it('should return the initial state', () => {
      const { initialState } = fromSkills;
      const action = new fromActions.LoadSkillsFail({});
      const state = fromSkills.reducer(initialState, action);

      expect(state).toEqual(initialState);
    });
    it('should return the previous state', () => {
      const { initialState } = fromSkills;
      const previousState = { ...initialState, loading: true };
      const action = new fromActions.LoadSkillsFail({});
      const state = fromSkills.reducer(previousState, action);
      expect(state).toEqual(initialState);
    });
  });
});

describe('SkillsReducer Selectors', () => {
  describe('getSkillEntities', () => {
    it('should return .entities', () => {
      const entities: { [key: number]: Skill } = {
        1: {
          id: 1,
          name: 'JavaScript'
        },
        2: {
          id: 2,
          name: 'HTML 5'
        },
        3: {
          id: 3,
          name: 'CSS'
        }
      };
      const { initialState } = fromSkills;
      const previousState = { ...initialState, entities };
      const slice = fromSkills.getSkillsEntities(previousState);

      expect(slice).toEqual(entities);
    });
  });

  describe('getSkillsLoading', () => {
    it('should return .loading', () => {
      const { initialState } = fromSkills;
      const previousState = { ...initialState, loading: true };
      const slice = fromSkills.getSkillsLoading(previousState);

      expect(slice).toEqual(true);
    });
  });

  describe('getSkillsLoaded', () => {
    it('should return .loaded', () => {
      const { initialState } = fromSkills;
      const previousState = { ...initialState, loaded: true };
      const slice = fromSkills.getSkillsLoaded(previousState);

      expect(slice).toEqual(true);
    });
  });
});
