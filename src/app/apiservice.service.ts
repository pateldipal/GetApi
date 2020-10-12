import { Injectable } from '@angular/core';
import { HttpClient , HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Posts} from "./api/classes/posts";

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  apiCall():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  apiCallbyParameter(): Observable<any>{
    let paramss = new HttpParams().set('userId',"1");
    return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=1',{params:paramss});
  }

  posts(apipost: Posts): Observable<any>{
      return this.http.post('https://jsonplaceholder.typicode.com/posts',apipost);
  }
}
