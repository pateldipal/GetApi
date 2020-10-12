import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApitblComponent } from './apitbl/apitbl.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

const ApiRoutes: Routes =[
  {path: 'getApi', component: ApitblComponent}
]

@NgModule({
  declarations: [ApitblComponent, AboutComponent],
  exports: [
    ApitblComponent,
    AboutComponent,
    HttpClientModule
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ApiRoutes)
  ],
})
export class ApiModule {
  constructor(){
    console.log('Api Module loaded');
  }
}
