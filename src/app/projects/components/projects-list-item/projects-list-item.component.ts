import { Component, Input, OnInit } from '@angular/core';
import { Project } from './../../models/project.model';

@Component({
  selector: 'pm-projects-list-item',
  templateUrl: './projects-list-item.component.html',
  styleUrls: ['./projects-list-item.component.scss']
})
export class ProjectsListItemComponent implements OnInit {
  @Input() project: Project;
  constructor() {}

  ngOnInit() {}
}
