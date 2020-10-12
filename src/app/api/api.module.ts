import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApitblComponent } from './apitbl/apitbl.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [ApitblComponent, AboutComponent],
  exports: [
    ApitblComponent,
    AboutComponent,
    HttpClientModule
  ],
  imports: [
    CommonModule
  ],
})
export class ApiModule { }
