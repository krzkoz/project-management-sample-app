import { throwIfAlreadyLoaded } from './guards/module-import.guard';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationPanelComponent } from './navigation-panel/navigation-panel.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    NavigationPanelComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  exports: [
    NavigationPanelComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
