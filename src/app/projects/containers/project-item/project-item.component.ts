import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from '../../models';
import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/index';
import { ProjectsService } from '../../services/projects.service';
import { SkillsService } from '../../services/skills.service';
import * as fromStore from './../../store';

@Component({
  selector: 'pm-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  project$: Observable<Project>;
  skills$: Observable<Skill[]>;

  constructor(private store: Store<fromStore.ProjectsState>) {}

  ngOnInit() {
    this.project$ = this.store.select(fromStore.getSelectedProject);
    this.skills$ = this.store.select(fromStore.getAllSkills);
  }

  onSelect(event: number[]) {}

  onCreate(event: Project) {
    this.store.dispatch(new fromStore.CreateProject(event));
  }

  onUpdate(event: Project) {
    this.store.dispatch(new fromStore.UpdateProject(event));
  }

  onRemove(event: Project) {
    const remove = window.confirm(
      'Are you sure that you want to remove this project?'
    );
    if (remove) {
      this.store.dispatch(new fromStore.RemoveProject(event));
    }
  }
}
