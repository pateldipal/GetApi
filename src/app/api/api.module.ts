import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApitblComponent } from './apitbl/apitbl.component';
import { HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const ApiRoutes: Routes =[
  {path: '', component: ApitblComponent}
]

@NgModule({
  declarations: [ApitblComponent],
  exports: [
    ApitblComponent,
    HttpClientModule
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ApiRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
})
export class ApiModule {
  constructor(){
    console.log('Api Module loaded');
  }
}
