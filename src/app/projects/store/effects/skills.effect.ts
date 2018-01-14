import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromRoot from '../../../core/store';
import * as skillsActions from '../actions/skills.action';
import * as fromServices from '../../services';

@Injectable()
export class SkillsEffects {
  constructor(
    private actions$: Actions,
    private skillsService: fromServices.SkillsService
  ) {}

  @Effect()
  loadSkills$ = this.actions$.ofType(skillsActions.LOAD_SKILLS).pipe(
    switchMap(() => {
      return this.skillsService
        .getSkills()
        .pipe(
          map(skills => new skillsActions.LoadSkillsSuccess(skills)),
          catchError(error => of(new skillsActions.LoadSkillsFail(error)))
        );
    })
  );
}
