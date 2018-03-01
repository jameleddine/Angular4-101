import { Component, OnInit } from '@angular/core';
import { HighlightJsService } from 'angular2-highlight-js';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
})
export class IntroductionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //jQuery('.code').css('background','red');
  }

}
