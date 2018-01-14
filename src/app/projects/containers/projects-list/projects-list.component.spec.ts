import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectsListComponent } from './projects-list.component';
import { ProjectsListItemComponent } from '../../components/projects-list-item/projects-list-item.component';
import { StarRatingComponent } from '../../../shared/star-rating/star-rating.component';
import { StoreModule, combineReducers } from '@ngrx/store';
import { reducers } from '../../store';

describe('ProjectsListComponent', () => {
  let component: ProjectsListComponent;
  let fixture: ComponentFixture<ProjectsListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          HttpClientTestingModule,
          StoreModule.forRoot({ 'projectsManagement': combineReducers(reducers) })
        ],
        declarations: [
          ProjectsListComponent,
          ProjectsListItemComponent,
          StarRatingComponent
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
