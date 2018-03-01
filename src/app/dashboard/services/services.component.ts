import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  bloc1 : string = 
  `import {Injectable} from '@angular/core';
      
      @Injectable()
      export class ProjectService{
      }`;
  bloc2 : string = 
  `import {Injectable} from '@angular/core';
      import {Http, Response} from '@angular/http';
      @Injectable()
      export class ProjectService{
        constructor(http: Http){}
      }`
  bloc3 : string = 
  `import {ServiceName} from 'service.app';`;
  bloc4 : string = 
  `@Component({
        ....
      providers: [ServiceName]
      });`
  constructor() { }

  ngOnInit() {
  }

}
