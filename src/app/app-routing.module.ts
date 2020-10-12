import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApitblComponent} from "./api/apitbl/apitbl.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'api', loadChildren: './api/api.module#ApiModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
