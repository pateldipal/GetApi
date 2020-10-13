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
  del;
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
  deleteGet(id:number){
    console.log(id," id ");

    var index = this.listcommens.map(x => {
      console.log(x.userId," userid ");
      return x.id;
    }).indexOf(id);

    console.log(index);
    this.listcommens.splice(index, 1);
    console.log(this.listcommens);

    /*this.listcommens.splice(
      this.listcommens.indexOf(
        this.listcommens.find(function(e) {
          return e.id == 2;

        })), 1);
      */
   // this.listcommens.slice(id, 1);
   // this.api.deleteGet(id).subscribe(res=>{
   //   console.warn(res);
   //  })
  }


}
