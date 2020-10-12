import {Component, OnInit} from '@angular/core';
import { ApiserviceService } from "../../apiservice.service";
import {Comments, Post} from "../classes/comments";
import {Posts} from "../classes/posts";


@Component({
  selector: 'app-apitbl',
  templateUrl: './apitbl.component.html',
  styleUrls: ['./apitbl.component.css']
})
export class ApitblComponent implements OnInit {
  //class create kraya che both
  listcommens : Comments[];
  letposts:Post[];
  object:Posts;
  //a rite pan thay
  // api1: any = [];
  //post: any =[];
  title= 'Api Call Angular';
  title2= 'Api Parameter Pass';
  title3= 'Post Api';

  constructor(private api:ApiserviceService) { }

  ngOnInit(): void {
    this.api.apiCall().subscribe((data)=>{
      this.listcommens = data;
      //this.api1 = data;
      // console.warn("Get Api Data",data);
    });
    this.api.apiCallbyParameter().subscribe((data)=>{
      this.letposts = data;
    });

    var apipost = new Posts();
     apipost.body = 'test';
     apipost.title='testtitle';
     apipost.UserId='5';
     apipost.id='1';

     this.api.posts(apipost).subscribe((data)=>{
        this.object = data;
     })
  }

}
