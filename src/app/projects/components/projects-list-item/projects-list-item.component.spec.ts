import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectsListItemComponent } from './projects-list-item.component';
import { StarRatingComponent } from '../../../shared/star-rating/star-rating.component';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectSkillsComponent } from '../project-skills/project-skills.component';

describe('ProjectListItemComponent', () => {
  let component: ProjectsListItemComponent;
  let fixture: ComponentFixture<ProjectsListItemComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, ReactiveFormsModule],
        declarations: [
          ProjectsListItemComponent,
          StarRatingComponent,
          ProjectFormComponent,
          ProjectSkillsComponent
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
