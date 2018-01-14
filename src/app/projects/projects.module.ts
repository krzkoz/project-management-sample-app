import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProjectsRoutingModule } from './projects-routing.module';
import { components } from './components';
import { containers } from './containers';
import { services } from './services';

import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature('projectsManagement', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [...components, ...containers],
  providers: [...services]
})
export class ProjectsModule {}
