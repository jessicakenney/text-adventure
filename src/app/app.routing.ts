import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LevelOneComponent } from './level-one/level-one.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';

const appRoutes: Routes = [
  {
  path: '',
  component: WelcomeComponent
},
{
  path: 'level-one',
  component: LevelOneComponent
},
{
  path: 'storys/:id',
  component: StoryDetailComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
