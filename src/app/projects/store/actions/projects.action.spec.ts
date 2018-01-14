import * as fromProjects from './projects.action';

describe('Projects Actions...', () => {
  describe('LoadProjects Actions', () => {
    describe('LoadProjects', () => {
      it('should create an action', () => {
        const action = new fromProjects.LoadProjects();

        expect({ ...action }).toEqual({
          type: fromProjects.LOAD_PROJECTS
        });
      });
    });

    describe('LoadProjectsFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = new fromProjects.LoadProjectsFail(payload);

        expect({ ...action }).toEqual({
          type: fromProjects.LOAD_PROJECTS_FAIL,
          payload
        });
      });
    });

    describe('LoadProjectsSuccess', () => {
      it('should create an action', () => {
        const payload = [
          {
            id: 1,
            timeline: {
              isPresent: false,
              startDate: new Date('2015-04-23'),
              endDate: new Date('2017-04-23')
            },
            projectName: 'MegaGird Open Source project',
            projectDescription:
              'the purpose of this project was to create super fast grid that is running on canvas',
            complexity: 7,
            skills: [
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
            ]
          },
          {
            id: 2,
            timeline: {
              isPresent: false,
              startDate: new Date('2016-02-01'),
              endDate: new Date('2017-03-10')
            },
            projectName: 'UI Service Project',
            projectDescription:
              'the purpose of this project was to create efficent API for dashboard UI',
            complexity: 5,
            skills: [
              {
                id: 8,
                name: 'Java'
              },
              {
                id: 12,
                name: 'Spring'
              },
              {
                id: 13,
                name: 'Solace'
              },
              {
                id: 18,
                name: 'jMeter'
              },
              {
                id: 19,
                name: 'SQL'
              }
            ]
          }
        ];
        const action = new fromProjects.LoadProjectsSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromProjects.LOAD_PROJECTS_SUCCESS,
          payload
        });
      });
    });
  });

  describe('CreateProject Actions', () => {
    describe('CreateProject', () => {
      it('should create an action', () => {
        const payload = {
          projectName: 'Test .NET project',
          projectDescription: 'this is some web api written in .net',
          complexity: 5,
          timeline: {
            isPresent: false,
            startDate: new Date('2018-01-01'),
            endDate: new Date('2018-01-08')
          },
          skills: [
            {
              id: 9,
              name: 'C#'
            },
            {
              id: 11,
              name: 'Web Api'
            },
            {
              id: 19,
              name: 'SQL'
            },
            {
              id: 14,
              name: '.NET'
            },
            {
              id: 10,
              name: 'ASP.NET MVC'
            }
          ],
          id: 4
        };
        const action = new fromProjects.CreateProject(payload);

        expect({ ...action }).toEqual({
          type: fromProjects.CREATE_PROJECT,
          payload
        });
      });
    });

    describe('CreateProjectFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Create Error' };
        const action = new fromProjects.CreateProjectFail(payload);

        expect({ ...action }).toEqual({
          type: fromProjects.CREATE_PROJECT_FAIL,
          payload
        });
      });
    });

    describe('CreateProjectSuccess', () => {
      it('should create an action', () => {
        const payload = {
          projectName: 'Test .NET project',
          projectDescription: 'this is some web api written in .net',
          complexity: 5,
          timeline: {
            isPresent: false,
            startDate: new Date('2018-01-01'),
            endDate: new Date('2018-01-08')
          },
          skills: [
            {
              id: 9,
              name: 'C#'
            },
            {
              id: 11,
              name: 'Web Api'
            },
            {
              id: 19,
              name: 'SQL'
            },
            {
              id: 14,
              name: '.NET'
            },
            {
              id: 10,
              name: 'ASP.NET MVC'
            }
          ],
          id: 4
        };
        const action = new fromProjects.CreateProjectSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromProjects.CREATE_PROJECT_SUCCESS,
          payload
        });
      });
    });
  });

  describe('UpdateProject Actions', () => {
    describe('UpdateProject', () => {
      it('should create an action', () => {
        const payload = {
          projectName: 'Test .NET project',
          projectDescription: 'this is some web api written in .net',
          complexity: 5,
          timeline: {
            isPresent: false,
            startDate: new Date('2018-01-01'),
            endDate: new Date('2018-01-08')
          },
          skills: [
            {
              id: 9,
              name: 'C#'
            },
            {
              id: 11,
              name: 'Web Api'
            },
            {
              id: 19,
              name: 'SQL'
            },
            {
              id: 14,
              name: '.NET'
            },
            {
              id: 10,
              name: 'ASP.NET MVC'
            }
          ],
          id: 4
        };
        const action = new fromProjects.UpdateProject(payload);

        expect({ ...action }).toEqual({
          type: fromProjects.UPDATE_PROJECT,
          payload
        });
      });
    });

    describe('UpdateProjectFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Update Error' };
        const action = new fromProjects.UpdateProjectFail(payload);

        expect({ ...action }).toEqual({
          type: fromProjects.UPDATE_PROJECT_FAIL,
          payload
        });
      });
    });

    describe('UpdateProjectSuccess', () => {
      it('should create an action', () => {
        const payload = {
          projectName: 'Test .NET project',
          projectDescription: 'this is some web api written in .net',
          complexity: 5,
          timeline: {
            isPresent: false,
            startDate: new Date('2018-01-01'),
            endDate: new Date('2018-01-08')
          },
          skills: [
            {
              id: 9,
              name: 'C#'
            },
            {
              id: 11,
              name: 'Web Api'
            },
            {
              id: 19,
              name: 'SQL'
            },
            {
              id: 14,
              name: '.NET'
            },
            {
              id: 10,
              name: 'ASP.NET MVC'
            }
          ],
          id: 4
        };
        const action = new fromProjects.UpdateProjectSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromProjects.UPDATE_PROJECT_SUCCESS,
          payload
        });
      });
    });
  });

  describe('RemoveProject Actions', () => {
    describe('RemoveProject', () => {
      it('should create an action', () => {
        const payload = {
          projectName: 'Test .NET project',
          projectDescription: 'this is some web api written in .net',
          complexity: 5,
          timeline: {
            isPresent: false,
            startDate: new Date('2018-01-01'),
            endDate: new Date('2018-01-08')
          },
          skills: [
            {
              id: 9,
              name: 'C#'
            },
            {
              id: 11,
              name: 'Web Api'
            },
            {
              id: 19,
              name: 'SQL'
            },
            {
              id: 14,
              name: '.NET'
            },
            {
              id: 10,
              name: 'ASP.NET MVC'
            }
          ],
          id: 4
        };
        const action = new fromProjects.RemoveProject(payload);

        expect({ ...action }).toEqual({
          type: fromProjects.REMOVE_PROJECT,
          payload
        });
      });
    });

    describe('RemoveProjectFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Remove Error' };
        const action = new fromProjects.RemoveProjectFail(payload);

        expect({ ...action }).toEqual({
          type: fromProjects.REMOVE_PROJECT_FAIL,
          payload
        });
      });
    });

    describe('RemoveProjectSuccess', () => {
      it('should create an action', () => {
        const payload = {
          projectName: 'Test .NET project',
          projectDescription: 'this is some web api written in .net',
          complexity: 5,
          timeline: {
            isPresent: false,
            startDate: new Date('2018-01-01'),
            endDate: new Date('2018-01-08')
          },
          skills: [
            {
              id: 9,
              name: 'C#'
            },
            {
              id: 11,
              name: 'Web Api'
            },
            {
              id: 19,
              name: 'SQL'
            },
            {
              id: 14,
              name: '.NET'
            },
            {
              id: 10,
              name: 'ASP.NET MVC'
            }
          ],
          id: 4
        };
        const action = new fromProjects.RemoveProjectSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromProjects.REMOVE_PROJECT_SUCCESS,
          payload
        });
      });
    });
  });
});
