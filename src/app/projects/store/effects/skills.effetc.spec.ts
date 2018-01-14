import { Actions } from '@ngrx/effects';

import { hot, cold } from 'jasmine-marbles';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SkillsService } from '../../services/skills.service';
import * as fromEffects from './skills.effect';
import * as fromActions from '../actions/skills.action';

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

describe('SkillsEffects', () => {
  let actions$: TestActions;
  let service: SkillsService;
  let effects: fromEffects.SkillsEffects;

  const skills = [
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        SkillsService,
        fromEffects.SkillsEffects,
        { provide: Actions, useFactory: getActions }
      ]
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(SkillsService);
    effects = TestBed.get(fromEffects.SkillsEffects);

    spyOn(service, 'getSkills').and.returnValue(of(skills));
  });

  describe('loadSkills$', () => {
    it('should return a collection from LoadSkillsSuccess', () => {
      const action = new fromActions.LoadSkills();
      const completion = new fromActions.LoadSkillsSuccess(skills);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.loadSkills$).toBeObservable(expected);
    });
  });
});
