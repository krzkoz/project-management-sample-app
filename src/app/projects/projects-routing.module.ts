import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsListComponent } from './containers/projects-list/projects-list.component';
import { ProjectItemComponent } from './containers/project-item/project-item.component';
import * as fromGuards from './guards';

const routes: Routes = [
  {
    path: '',
    component: ProjectsListComponent,
    pathMatch: 'full',
    canActivate: [fromGuards.ProjectsGuard]
  },
  {
    path: 'new',
    component: ProjectItemComponent,
    canActivate: [fromGuards.ProjectsGuard, fromGuards.SkillsGuard]
  },
  {
    path: ':id',
    component: ProjectItemComponent,
    canActivate: [fromGuards.ProjectExistsGuard, fromGuards.SkillsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [...fromGuards.guards],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
