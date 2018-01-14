import { hot, cold } from 'jasmine-marbles';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { ProjectsService } from '../../services/projects.service';
import * as fromEffects from './projects.effect';
import * as fromActions from '../actions/projects.action';

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

describe('ProjectsEffects', () => {
  let actions$: TestActions;
  let service: ProjectsService;
  let effects: fromEffects.ProjectsEffects;

  const projects = [
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ProjectsService,
        fromEffects.ProjectsEffects,
        { provide: Actions, useFactory: getActions }
      ]
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(ProjectsService);
    effects = TestBed.get(fromEffects.ProjectsEffects);

    spyOn(service, 'getProjects').and.returnValue(of(projects));
    spyOn(service, 'createProject').and.returnValue(of(projects[0]));
    spyOn(service, 'updateProject').and.returnValue(of(projects[0]));
    spyOn(service, 'removeProject').and.returnValue(of(projects[0]));
  });

  describe('loadProjects$', () => {
    it('should return a collection from LoadProjectsSuccess', () => {
      const action = new fromActions.LoadProjects();
      const completion = new fromActions.LoadProjectsSuccess(projects);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.loadProjects$).toBeObservable(expected);
    });
  });

  describe('createProject$', () => {
    it('should work', () => {
      const action = new fromActions.CreateProject(projects[0]);
      const completion = new fromActions.CreateProjectSuccess(projects[0]);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-c', { c: completion });

      expect(effects.createProject$).toBeObservable(expected);
    });
  });

  describe('updateProject$', () => {
    it('should work', () => {
      const action = new fromActions.UpdateProject(projects[0]);
      const completion = new fromActions.UpdateProjectSuccess(projects[0]);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-c', { c: completion });

      expect(effects.updateProject$).toBeObservable(expected);
    });
  });

  describe('removeProject$', () => {
    it('should work', () => {
      const action = new fromActions.RemoveProject(projects[0]);
      const completion = new fromActions.RemoveProjectSuccess(projects[0]);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-c', { c: completion });

      expect(effects.removeProject$).toBeObservable(expected);
    });
  });
});
