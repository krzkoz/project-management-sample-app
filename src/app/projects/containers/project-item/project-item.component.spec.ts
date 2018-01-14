import { StoreModule, combineReducers } from '@ngrx/store';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectItemComponent } from './project-item.component';
import { ProjectFormComponent } from '../../components/project-form/project-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectSkillsComponent } from '../../components/project-skills/project-skills.component';

import { reducers } from '../../store';
import { reducers as coreReducers } from '../../../core/store/reducers';

describe('ProjectItemComponent', () => {
  let component: ProjectItemComponent;
  let fixture: ComponentFixture<ProjectItemComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          ReactiveFormsModule,
          StoreModule.forRoot({
            projectsManagement: combineReducers(reducers),
            routerReducer: combineReducers(coreReducers)
          })
        ],
        declarations: [
          ProjectItemComponent,
          ProjectFormComponent,
          ProjectSkillsComponent
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
