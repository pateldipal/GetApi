import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApitblComponent} from "./api/apitbl/apitbl.component";
import {AboutComponent} from "./api/about/about.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: 'api', component: ApitblComponent},
  { path: 'about', component: AboutComponent },
  { path: 'home', component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
