import { Action } from '@ngrx/store';
import { Skill } from '../../models/skill.model';

export const LOAD_SKILLS = '[Projects] Load Skills';
export const LOAD_SKILLS_FAIL = '[Projects] Load Skills Fail';
export const LOAD_SKILLS_SUCCESS = '[Projects] Load Skills Success';

export class LoadSkills implements Action {
  readonly type = LOAD_SKILLS;
}

export class LoadSkillsFail implements Action {
  readonly type = LOAD_SKILLS_FAIL;
  constructor(public payload: any) {}
}

export class LoadSkillsSuccess implements Action {
  readonly type = LOAD_SKILLS_SUCCESS;
  constructor(public payload: Skill[]) {}
}

export type SkillsAction = LoadSkills | LoadSkillsFail | LoadSkillsSuccess;
