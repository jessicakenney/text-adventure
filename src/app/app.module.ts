import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { LevelOneComponent } from './level-one/level-one.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { LevelTwoComponent } from './level-two/level-two.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LevelOneComponent,
    StoryDetailComponent,
    LevelTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
