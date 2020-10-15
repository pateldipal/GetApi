import {Component, OnInit} from '@angular/core';
import { ApiserviceService } from "../../apiservice.service";
import {Comments, Post} from "../classes/comments";
import {Posts} from "../classes/posts";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-apitbl',
  templateUrl: './apitbl.component.html',
  styleUrls: ['./apitbl.component.css']
})
export class ApitblComponent implements OnInit {
  //class create kraya che both
  submitted = false;
  checkoutForm:FormGroup;
  listcommens: Comments[];
  letposts: Post[];
  object: Posts[];
  get: any[];


  //a rite pan thay
  // api1: any = [];
  //post: any =[];

  title = 'Api Call Angular';
  title2 = 'Api Parameter Pass';
  title3 = 'Post Api';
  private id: any;
  data1: any;

  constructor(private api: ApiserviceService,private fb:FormBuilder,private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.api.getAll(this.router.snapshot.params.id);
    this.checkoutForm = this.fb.group({
      userId:new FormControl(''),
        id:new FormControl(''),
      title:new FormControl(''),
      body:new FormControl(''),

    });
    this.api.apiCall().subscribe((data) => {
      this.listcommens = data;
      //this.api1 = data;
      // console.warn("Get Api Data",data);
    });
    this.api.apiCallbyParameter().subscribe((data) => {
      this.letposts = data;
    });

    // var apipost = new Posts();
    // apipost.body = 'test';
    // apipost.title = 'testtitle';
    // apipost.userId = '5';
    // apipost.id = '1';

    // this.api.posts(apipost).subscribe((data) => {
    //   this.object = data;
    // })
  }
  onSubmit(){
    this.submitted = true;
    if (this.checkoutForm.invalid) {
      return;
    }
    this.data1.params(this.checkoutForm.value);
    debugger
   console.log(this.checkoutForm.value);
  }
  deleteGet(id: number) {
    var index = this.listcommens.map(x => {
      console.log(x.id, " id ");
      return x.id;
    }).indexOf(id);
    // console.log(index);
    this.listcommens.splice(index, 1);
    // console.log(this.listcommens);
  }
  getAll(id:number,data:any){
    // console.log(id , 'id');
    // console.log(data);
    this.data1 = data;
    // console.log(this.data1);

  }

  updateAll(id){
      this.api.updateAll(this.router.snapshot.params.data1,this.listcommens).subscribe(data=>{
        console.log(data,"data Update");
      })
  }
}
