import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {IntroductionComponent} from './dashboard/introduction/introduction.component';
import {CliComponent} from './dashboard/cli/cli.component';
import {ComponentComponent} from './dashboard/component/component.component';
import {RoutingComponent} from './dashboard/routing/routing.component';
import {ServicesComponent} from './dashboard/services/services.component';


const routes: Routes = [
    { path: "",  component: HomeComponent },
    { path: "dashboard",  component: DashboardComponent, children: [
        { path: "introduction",  component: IntroductionComponent },
        { path: "cli",  component: CliComponent },
        { path: "component",  component: ComponentComponent },
        { path: "routing",  component: RoutingComponent },
        { path: "services",  component: ServicesComponent },
      ]},
   
];

@NgModule({
    imports:[
    RouterModule.forRoot(routes, { useHash: true })],
    exports:[RouterModule],
    providers: []
})

export class AppRoutes {} 
