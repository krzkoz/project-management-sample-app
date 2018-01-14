import { Skill } from '../../models/skill.model';
import { TestBed } from '@angular/core/testing';
import { StoreModule, Store, combineReducers } from '@ngrx/store';

import * as fromRoot from '../../../../app/core/store';
import * as fromReducers from '../reducers';
import * as fromActions from '../actions';
import * as fromSelectors from '../selectors/skills.selector';

describe('SkillsReducer selectors', () => {
  let store: Store<fromReducers.ProjectsState>;

  const skills: Skill[] = [
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
    1: skills[0],
    2: skills[1],
    3: skills[2]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          projectsManagement: combineReducers(fromReducers.reducers)
        })
      ]
    });

    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
  });

  describe('getSkillsEntities', () => {
    it('should return skills as entities', () => {
      let result;

      store
        .select(fromSelectors.getSkillsEntities)
        .subscribe(value => (result = value));

      expect(result).toEqual({});

      store.dispatch(new fromActions.LoadSkillsSuccess(skills));

      expect(result).toEqual(entities);
    });
  });

  describe('getAllSkills', () => {
    it('should return Skills as an array', () => {
      let result;

      store
        .select(fromSelectors.getAllSkills)
        .subscribe(value => (result = value));

      expect(result).toEqual([]);

      store.dispatch(new fromActions.LoadSkillsSuccess(skills));

      expect(result).toEqual(skills);
    });
  });

  describe('getSkillsLoaded', () => {
    it('should return the Skills loaded state', () => {
      let result;

      store
        .select(fromSelectors.getSkillsLoaded)
        .subscribe(value => (result = value));

      expect(result).toEqual(false);

      store.dispatch(new fromActions.LoadSkillsSuccess([]));

      expect(result).toEqual(true);
    });
  });

  describe('getSkillsLoading', () => {
    it('should return the Skills loading state', () => {
      let result;

      store
        .select(fromSelectors.getSkillsLoading)
        .subscribe(value => (result = value));

      expect(result).toEqual(false);

      store.dispatch(new fromActions.LoadSkills());

      expect(result).toEqual(true);
    });
  });
});
