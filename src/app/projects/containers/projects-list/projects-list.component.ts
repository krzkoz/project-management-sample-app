import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectsService } from '../../services/projects.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';

@Component({
  selector: 'pm-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  projects$: Observable<Project[]>;
  constructor(private store: Store<fromStore.ProjectsState>) {}

  ngOnInit() {
    this.projects$ = this.store.select(fromStore.getAllProjects);
  }
}
