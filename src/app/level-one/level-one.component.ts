import { Component, OnInit } from '@angular/core';
import { StoryLine  } from '../story-line.model';
import { Router } from '@angular/router';
import { Level1Service } from '../level1.service';

@Component({
  selector: 'app-level-one',
  templateUrl: './level-one.component.html',
  styleUrls: ['./level-one.component.css'],
  providers: [ Level1Service ]
})

export class LevelOneComponent implements OnInit {
  storys : StoryLine[];
  constructor (private router: Router, private level1Service: Level1Service) {}

  ngOnInit(){
    this.storys = this.level1Service.getStorys();
  }

goToStoryPage(clickedStory: StoryLine){
  this.router.navigate(['storys', clickedStory.id]);
};

}
