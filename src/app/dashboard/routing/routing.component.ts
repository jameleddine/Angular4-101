import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {
  bloc1 : string = 
  `import { RouterModule, Routes } from '@angular/router';`
  bloc2: string = 
  `const appRoutes: Routes = [
          { path: 'crisis-center', component: CrisisListComponent },
          { path: 'hero/:id',      component: HeroDetailComponent },
          {
            path: 'heroes',
            component: HeroListComponent,
            data: { title: 'Heroes List' }
          },
          { path: '',
            redirectTo: '/heroes',
            pathMatch: 'full'
          },
          { path: '**', component: PageNotFoundComponent }
  ];`
  bloc3 : string = 
  `import {NgModule} from '@angular/core';
        import { Routes, RouterModule } from '@angular/router';
        import {HomeComponent} from './home/home.component';  
        
        const routes: Routes = [
            { path: "",  component: HomeComponent },
        ];
        
        @NgModule({
            imports:[
            RouterModule.forRoot(routes, { useHash: true })],
            exports:[RouterModule],
            providers: []
        })
        
        export class AppRoutes {} `;
bloc4 : string = 
`import {AppRoutes} from './app.routes';`
bloc5 : string = 
` imports: [
            ....
            AppRoutes,
          ],`
  constructor() { }

  ngOnInit() {
  }

}
