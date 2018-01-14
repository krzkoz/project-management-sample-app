import * as fromSkills from './skills.action';

describe('Skills Actions..', () => {
  describe('LoadSkills Actions', () => {
    describe('LoadSkills', () => {
      it('should create an action', () => {
        const action = new fromSkills.LoadSkills();
        expect({ ...action }).toEqual({
          type: fromSkills.LOAD_SKILLS
        });
      });
    });

    describe('LoadSkillsFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = new fromSkills.LoadSkillsFail(payload);

        expect({ ...action }).toEqual({
          type: fromSkills.LOAD_SKILLS_FAIL,
          payload
        });
      });
    });

    describe('LoadSkillsSuccess', () => {
      it('should create an action', () => {
        const payload = [
            {
                "id": 1,
                "name": "JavaScript"
              },
              {
                "id": 2,
                "name": "HTML 5"
              },
              {
                "id": 3,
                "name": "CSS"
              },
              {
                "id": 4,
                "name": "Websockets"
              },
        ];
        const action = new fromSkills.LoadSkillsSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromSkills.LOAD_SKILLS_SUCCESS,
          payload
        });
      });
    });
  });
});
