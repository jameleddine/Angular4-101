import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  bloc1 : string = 
`import { Component } from '@angular/core';
            @Component({template: 'Hello {{ name }}'})
            "class HelloWorldComponent {name: string = 'World!';
            "}`
  code1 = 
  `angular-tour-of-heroes
          src
            app
              app.component.ts
              app.module.ts
            main.ts
            index.html
            styles.css
            systemjs.config.js
            tsconfig.json
          node_modules
          package.json;`
  code2 = 
  `import { NewComponent } from './new.component';`;
  code3 = 
  `declarations: [
          AppComponent,
          NewComponent
        ]`;
  constructor() { }

  ngOnInit() {
  }

}
