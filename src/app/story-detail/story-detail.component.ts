import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { StoryLine } from '../story-line.model';
import { Level1Service } from '../level1.service';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.css'],
  providers: [Level1Service]
})
export class StoryDetailComponent implements OnInit {
  storyId: number;
  storyToDisplay: StoryLine;

  constructor( private route: ActivatedRoute, private location: Location, private level1Service: Level1Service) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.storyId = parseInt(urlParameters['id']);
    });
    this.storyToDisplay = this.level1Service.getStoryById(this.storyId);
  }

}
