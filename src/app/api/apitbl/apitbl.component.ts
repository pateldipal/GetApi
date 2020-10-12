import {Component, OnInit} from '@angular/core';
import { ApiserviceService } from "../../apiservice.service";

@Component({
  selector: 'app-apitbl',
  templateUrl: './apitbl.component.html',
  styleUrls: ['./apitbl.component.css']
})
export class ApitblComponent implements OnInit {
  api1: any = [];
  title= 'Api Call Angular';
  constructor(private api:ApiserviceService) { }

  ngOnInit(): void {
    this.api.apiCall().subscribe((data)=>{
      debugger;
      this.api1 = data;
      // console.warn("Get Api Data",data);
    })
  }

}
